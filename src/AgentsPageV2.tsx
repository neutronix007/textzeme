import { motion, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { CalendarDots, House, ChatCircleDots, Files, CurrencyCircleDollar, ShieldCheck } from '@phosphor-icons/react';

// ── Data ─────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    Icon: House,
    heading: 'List for\nfree',
    body: 'Create and publish\nlistings in minutes.',
    img: '/agents-assets/Listings-for-free.svg',
    alt: 'Listing preview',
    svgPadding: 'pl-6',
    imgClass: 'w-[135%] h-auto block',
  },
  {
    Icon: ChatCircleDots,
    heading: 'Reach the\nright renters',
    body: 'Connect with the ideal\nrenters for your property.',
    img: '/agents-assets/Messages.svg',
    alt: 'Messages preview',
    svgPadding: 'px-6',
    imgClass: 'w-full h-auto block',
  },
  {
    Icon: Files,
    heading: 'Run full\napplications',
    body: 'Collect everything you need\nwith custom requirements.',
    img: '/agents-assets/Paystubs-employment.svg',
    alt: 'Applications preview',
    svgPadding: null,
    imgClass: 'w-full h-auto block',
  },
];

const LOGOS = [
  { src: '/agents-assets/logos/Serhant.svg',                    alt: 'Serhant' },
  { src: '/agents-assets/logos/Redfin.svg',                     alt: 'Redfin' },
  { src: '/agents-assets/logos/RealNY.svg',                     alt: 'RealNY' },
  { src: '/agents-assets/logos/City%20Connections.svg',         alt: 'City Connections' },
  { src: '/agents-assets/logos/Modern%20Spaces.svg',            alt: 'Modern Spaces' },
  { src: '/agents-assets/logos/Pinpointe.svg',                  alt: 'Pinpointe' },
  { src: '/agents-assets/logos/R2k.svg',                        alt: 'Realty 2000' },
  { src: '/agents-assets/logos/Concrete%20Jungle.svg',          alt: 'Concrete Jungle' },
  { src: '/agents-assets/logos/Tribro.svg',                     alt: 'Tribro' },
  { src: '/agents-assets/logos/City%20Wide.svg',                alt: 'City Wide' },
  { src: '/agents-assets/logos/Signature%20Properties.svg',     alt: 'Signature Properties' },
];

// Desktop: single tripled strip
const tripledLogos = [...LOGOS, ...LOGOS, ...LOGOS];

// Mobile: three rows with their own logo sets and directions
// Each row is tripled so the seamless loop always has enough content
const MOBILE_ROWS = [
  {
    logos: [LOGOS[0], LOGOS[1], LOGOS[2], LOGOS[3]],   // Serhant · Redfin · RealNY · City Connections
    direction: 'left' as const,
    speed: 20,
  },
  {
    logos: [LOGOS[4], LOGOS[5], LOGOS[6]],              // Modern Spaces · Pinpointe · Realty 2000
    direction: 'right' as const,
    speed: 16,
  },
  {
    logos: [LOGOS[7], LOGOS[8], LOGOS[9], LOGOS[10]],  // Concrete Jungle · Tribro · City Wide · Signature
    direction: 'left' as const,
    speed: 24,
  },
];

// ── Shared mask style ─────────────────────────────────────────────────────────

const maskStyle = {
  maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
} as React.CSSProperties;

// ── Cloud pair ────────────────────────────────────────────────────────────────

function CloudPair() {
  return (
    <>
      <motion.img
        src="/cloud%201.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="absolute hidden md:block pointer-events-none select-none"
        style={{ left: 0, top: '10%', width: 'clamp(200px, 24vw, 360px)', zIndex: 0 }}
      />
      <motion.img
        src="/cloud%202.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="absolute hidden md:block pointer-events-none select-none"
        style={{ right: 0, top: '10%', width: 'clamp(200px, 24vw, 360px)', zIndex: 0 }}
      />
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AgentsPageV2() {
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[1400px] mx-auto px-6 text-center pt-4 pb-8"
      >
        {/* Heading */}
        <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-5">
          The easiest way to list,<br />reach, and screen.
        </h1>

        {/* Body */}
        <p className="text-sm md:text-base lg:text-[1.31rem] text-[#7D7D7D] leading-[1.5] font-medium max-w-[420px] md:max-w-[520px] lg:max-w-[640px] mx-auto mb-6">
          List for free.<br className="md:hidden" /> Connect with renters by text instantly.<br className="hidden md:block" />
          Run full applications with your own requirements
        </p>

        {/* CTA */}
        <motion.button
          ref={ctaRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="lightsweep-always flex items-center justify-center gap-3 bg-zeme-blue text-white w-full max-w-[300px] md:max-w-[480px] mx-auto py-3 md:py-5 rounded-lg md:rounded-2xl font-semibold text-sm md:text-[1.125rem] lg:text-[1.375rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-zeme-blue/20 mb-4"
        >
          <CalendarDots weight="bold" className="w-[22px] h-[22px] md:w-[35px] md:h-[35px] shrink-0" />
          <span>Book a Call</span>
        </motion.button>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center justify-center gap-5 md:gap-8 mb-20 md:mb-8"
        >
          <span className="flex items-center gap-1.5 text-[#C9C9C9] text-sm lg:text-[1.31rem] font-medium">
            <CurrencyCircleDollar weight="bold" className="w-7 h-7 shrink-0 text-[#C9C9C9]" />
            $100 free credits
          </span>
          <span className="flex items-center gap-1.5 text-[#C9C9C9] text-sm lg:text-[1.31rem] font-medium">
            <ShieldCheck weight="bold" className="w-7 h-7 shrink-0 text-[#C9C9C9]" />
            SOC2 Compliant
          </span>
        </motion.div>

        {/* Current Customers divider */}
        <div className="flex items-center gap-4 mb-5 max-w-[640px] mx-auto">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #ffffff, #e2e2e2)' }} />
          <p className="text-sm lg:text-[1.31rem] text-[#7D7D7D] font-medium whitespace-nowrap">Current Customers</p>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #e2e2e2, #ffffff)' }} />
        </div>

        {/* ── Desktop marquee (single row) — hidden on mobile ── */}
        <div className="hidden md:block relative overflow-hidden" style={maskStyle}>
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {tripledLogos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-5 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[63px] w-auto object-contain"
                  draggable={false}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile logo rows (3 directional marquees) — hidden on md+ ── */}
        <div className="md:hidden flex flex-col gap-3">
          {MOBILE_ROWS.map((row, rowIndex) => {
            const tripled = [...row.logos, ...row.logos, ...row.logos];
            const animClass = row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-right';
            return (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, x: row.direction === 'left' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 + rowIndex * 0.12 }}
                className="relative overflow-hidden"
                style={maskStyle}
              >
                <div
                  className={`flex ${animClass}`}
                  style={{ width: 'max-content', animationDuration: `${row.speed}s` }}
                >
                  {tripled.map((logo, i) => (
                    <div key={i} className="flex items-center justify-center px-4 shrink-0">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-[63px] w-auto object-contain"
                        draggable={false}
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Blue panel + feature cards — hidden on mobile ────────────────── */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative overflow-hidden rounded-[32px] md:rounded-[48px] p-5 md:p-[26px]"
          style={{ background: '#F0F7FF' }}
        >
          <CloudPair />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4" style={{ zIndex: 10 }}>
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden flex flex-col"
              >
                <div className="px-6 pt-[25px] pb-4 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <card.Icon weight="bold" className="w-[35px] h-[35px] text-zeme-blue" />
                  </div>
                  <h3 className="font-serif italic text-[1.75rem] md:text-[2rem] lg:text-[2.2rem] leading-[1.0] tracking-[-0.02em] text-neutral-900 mb-2 whitespace-pre-line">
                    {card.heading}
                  </h3>
                  <p className="text-sm md:text-base lg:text-[1.31rem] text-[#7D7D7D] leading-[1.5] font-medium whitespace-pre-line">
                    {card.body}
                  </p>
                </div>

                <div className="mt-4 overflow-hidden max-h-[184px]">
                  {card.svgPadding ? (
                    <div className={card.svgPadding}>
                      <img src={card.img} alt={card.alt} className={card.imgClass} draggable={false} />
                    </div>
                  ) : (
                    <img src={card.img} alt={card.alt} className={card.imgClass} draggable={false} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: 'clamp(60px, 14%, 120px)',
              background: 'linear-gradient(to bottom, transparent, white)',
              zIndex: 30,
            }}
          />
        </motion.div>
      </div>

      {/* ── Sticky mobile CTA ────────────────────────────────────────────── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <button className="lightsweep-always flex items-center justify-center gap-2.5 bg-zeme-blue text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-zeme-blue/30 active:scale-[0.97] transition-transform whitespace-nowrap">
              <CalendarDots weight="bold" className="w-[26px] h-[26px] shrink-0" />
              <span>Book a Call</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
