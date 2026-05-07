import { useEffect, useRef, useState, type FC } from 'react';
import { motion, useInView } from 'motion/react';

// ── Shared SVG gradient definitions ───────────────────────────────────────
// Rendered as a zero-size hidden SVG so gradient IDs are globally available
// to every SVG on the page via fill="url(#id)".
const SvgDefs: FC = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden>
    <defs>
      {/* Person — winner (blue, top-light → deep) */}
      <linearGradient id="zs-grad-winner" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      {/* Person — loser (light gray → mid gray) */}
      <linearGradient id="zs-grad-loser" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E4E4E7" />
        <stop offset="100%" stopColor="#A1A1AA" />
      </linearGradient>
      {/* Progress bar (left-light-blue → right-zeme-blue) */}
      <linearGradient id="zs-grad-progress" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#0072F5" />
      </linearGradient>
      {/* Radar center dot (mint → deep emerald) */}
      <radialGradient id="zs-grad-radar-dot" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#A7F3D0" />
        <stop offset="100%" stopColor="#059669" />
      </radialGradient>
    </defs>
  </svg>
);

// ── Icons ─────────────────────────────────────────────────────────────────
const ClockIcon: FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const UsersIcon: FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const SignalIcon: FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

// ── Card 1: Countdown ─────────────────────────────────────────────────────
const CountdownViz: FC = () => {
  const [secs, setSecs] = useState(7200);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    let remaining = 7200;
    let flashTimer: ReturnType<typeof setTimeout>;
    let iv: ReturnType<typeof setInterval>;

    const start = () => {
      remaining = 7200;
      const TICK = 80;
      const decrement = (7200 / 9000) * TICK;
      iv = setInterval(() => {
        remaining = Math.max(0, remaining - decrement);
        setSecs(Math.floor(remaining));
        if (remaining <= 0) {
          clearInterval(iv);
          setFlash(true);
          flashTimer = setTimeout(() => {
            setFlash(false);
            start();
          }, 1800);
        }
      }, TICK);
    };

    start();
    return () => { clearInterval(iv); clearTimeout(flashTimer); };
  }, []);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  const progress = secs / 7200; // 1 → 0

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Digits — gradient text, flips red on flash */}
      <p
        className={`font-mono text-[2.6rem] font-bold tracking-[0.06em] transition-colors duration-150 ${
          flash
            ? 'text-red-500'
            : 'bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent'
        }`}
      >
        {pad(h)}:{pad(m)}:{pad(s)}
      </p>

      {/* Progress bar */}
      <div className="w-40 h-[3px] bg-neutral-100 rounded-full overflow-hidden">
        {flash ? (
          <div className="h-full w-full bg-red-400 rounded-full" />
        ) : (
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress * 100}%`,
              background: 'linear-gradient(to right, #93C5FD, #0072F5)',
              transition: 'width 75ms linear',
            }}
          />
        )}
      </div>

      {/* Gone pill */}
      <div className="h-5 flex items-center justify-center">
        {flash && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-[0.22em] uppercase text-red-500"
          >
            Apartment Gone
          </motion.span>
        )}
      </div>
    </div>
  );
};

// ── Card 2: People ────────────────────────────────────────────────────────
const PeopleViz: FC = () => (
  <div className="flex items-end gap-[7px] justify-center">
    {Array.from({ length: 10 }, (_, i) => {
      const isWinner = i === 0;
      return (
        <div key={i} className="relative flex items-center justify-center">
          <svg
            width="18"
            height="26"
            viewBox="0 0 20 28"
            fill={isWinner ? 'url(#zs-grad-winner)' : 'url(#zs-grad-loser)'}
            style={isWinner ? { filter: 'drop-shadow(0 0 6px rgba(0,114,245,0.45))' } : undefined}
          >
            <circle cx="10" cy="7" r="5.5" />
            <path d="M1 27c0-5 4-9 9-9s9 4 9 9" />
          </svg>
          {isWinner && (
            <motion.div
              className="absolute inset-[-4px] rounded-full"
              style={{ border: '1.5px solid rgba(0,114,245,0.35)' }}
              animate={{ scale: [0.7, 2.4], opacity: [0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
        </div>
      );
    })}
  </div>
);

// Ring colour stops: emerald → teal → cyan → sky — shifts as rings expand
const RING_COLORS = ['#34D399', '#2DD4BF', '#22D3EE', '#60A5FA'];

// ── Card 3: Radar ─────────────────────────────────────────────────────────
const RadarViz: FC = () => (
  <div className="relative flex items-center justify-center" style={{ width: 110, height: 110 }}>
    {RING_COLORS.map((color, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 18,
          height: 18,
          border: `1.5px solid ${color}`,
          opacity: 0,
        }}
        animate={{ scale: [0.4, 5.5], opacity: [0.75, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          delay: i * 0.7,
          ease: 'easeOut',
        }}
      />
    ))}
    {/* Centre dot — SVG radial gradient fill */}
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="relative z-10"
      style={{ filter: 'drop-shadow(0 0 7px rgba(52,211,153,0.55))' }}
    >
      <circle cx="8" cy="8" r="8" fill="url(#zs-grad-radar-dot)" />
    </svg>
  </div>
);

// ── Card definitions ──────────────────────────────────────────────────────
type CardDef = {
  stat: string;
  label: string;
  copy: string;
  Viz: FC;
  Icon: FC;
};

const CARDS: CardDef[] = [
  {
    stat: '2 hrs',
    label: "That's all it takes",
    copy: "The best NYC apartments are gone in under 2 hours. Most renters find out about them after they're already taken.",
    Viz: CountdownViz,
    Icon: ClockIcon,
  },
  {
    stat: '6%',
    label: 'The renters who win',
    copy: "Only 6% of renters land their ideal apartment on the first search. Zeme puts you in that group by making sure you're always first.",
    Viz: PeopleViz,
    Icon: UsersIcon,
  },
  {
    stat: '24/7',
    label: 'Zeme never clocks out',
    copy: "While you're sleeping, working, or living your life — Zeme is scanning every source, every minute. You'll never miss a listing again.",
    Viz: RadarViz,
    Icon: SignalIcon,
  },
];

// ── Section ───────────────────────────────────────────────────────────────
export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-zeme-gray/50 py-20 md:py-28 px-6">
      <SvgDefs />
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif italic text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] leading-[0.92] tracking-[-0.03em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-4">
            The NYC rental market doesn't wait.<br className="hidden sm:block" />{' '}
            Neither does Zeme.
          </h2>
          <p className="text-neutral-500 text-sm md:text-base leading-[1.65] max-w-[480px]">
            Every day thousands of great apartments are listed and gone before most renters even open
            their phones. Here's the reality — and why Zeme exists.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.stat}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 + i * 0.1 }}
              className="lightsweep-card relative rounded-[22px] border border-neutral-200/70 bg-white p-5 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Top edge shimmer */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent pointer-events-none rounded-t-[22px]" />

              {/* Stat + label */}
              <div>
                <p className="font-sans text-[2.6rem] font-bold leading-[1] tracking-tight bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent">
                  {card.stat}
                </p>
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mt-1.5">
                  {card.label}
                </p>
              </div>

              {/* Animated visual */}
              <div className="flex items-center justify-center flex-1 py-3 min-h-[120px]">
                <card.Viz />
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-100" />

              {/* Icon + copy */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-zeme-gray border border-neutral-200/60 flex items-center justify-center text-neutral-400 shrink-0 mt-0.5">
                  <card.Icon />
                </div>
                <p className="text-neutral-500 text-[13px] leading-[1.7]">{card.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
