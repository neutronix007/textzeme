import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';

/* ── Content ─────────────────────────────────────────────────── */
const line1 = 'Zeme AI Never Stops'.split(' ');
const line2 = 'Searching For You.'.split(' ');
const allWords = [...line1, ...line2];
const n = allWords.length;              // 7
const centerIndex = Math.floor(n / 2); // 3 → "Stops"

const features = [
  'Always available',
  'Searches Zillow, StreetEasy and +100 others',
  'Adjusts instantly to new criteria',
];

/* ── Word — CharacterV1-style fan-in ─────────────────────────── */
function Word({
  word,
  index,
  scrollYProgress,
}: {
  word: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const dist = index - centerIndex;

  // Spread: outer words start far off-center, converge to 0
  const x = useTransform(scrollYProgress, [0, 0.55], [dist * 90, 0]);

  // 3-D tilt proportional to spread direction
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [dist * 22, 0]);

  // Fade up from near-invisible
  const opacity = useTransform(scrollYProgress, [0, 0.22], [0.06, 1]);

  return (
    <motion.span
      style={{ x, rotateX, opacity }}
      className="inline-block mr-[0.28em] last:mr-0 text-neutral-900"
    >
      {word}
    </motion.span>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.6'],
  });

  // Subtitle glides in just after words converge
  const subtitleOpacity = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);
  const subtitleY       = useTransform(scrollYProgress, [0.78, 0.95], [12, 0]);

  return (
    <section className="max-w-[1400px] mx-auto px-6">

      {/* ── Tall sticky container ─────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative min-h-[140vh] md:min-h-[160vh] mb-12 md:mb-20"
      >
        {/* perspective wrapper needed for rotateX depth */}
        <div
          className="sticky top-[22vh] text-center px-4"
          style={{ perspective: '600px' }}
        >
          <h2 className="font-serif italic text-[2.6rem] md:text-[3.8rem] lg:text-[4rem] leading-[1.1] tracking-[-0.03em] mb-5">
            <span className="block">
              {line1.map((word, i) => (
                <Word key={i} word={word} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  index={line1.length + i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </span>
          </h2>

          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="text-sm md:text-base text-[#7D7D7D] leading-[1.6] font-medium max-w-[500px] mx-auto"
          >
            Zeme monitors every listing, every source, every minute,{' '}
            <br className="hidden md:block" />
            then surfaces only what's actually worth your time.
          </motion.p>
        </div>
      </div>

      {/* ── Lower section — whileInView once:true ────────────────
           Fires exactly once when the element enters the viewport.
           Never replays, never glitches on fast scroll. */}
      <div className="pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center"
        >
          {/* Left — subheading + description + pills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex-1 flex flex-col gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-serif italic text-[2rem] md:text-[2.4rem] lg:text-[3rem] leading-[1.05] tracking-[-0.02em] text-neutral-900">
                Start Your Search<br />By Texting
              </h3>
              <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[380px]">
                Simply include basic criteria and anything else that might be relevant.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + i * 0.1,
                  }}
                  className="flex items-center gap-3 bg-blue-50 rounded-full px-4 py-2.5 w-fit"
                >
                  <CheckCircle2 className="w-5 h-5 text-zeme-blue shrink-0" />
                  <span className="text-sm font-semibold text-zeme-blue whitespace-nowrap">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — gradient card + GIF */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex-[1.3] w-full"
          >
            <div
              className="rounded-[32px] md:rounded-[40px] overflow-hidden w-full"
              style={{
                background: 'linear-gradient(145deg, #dbeafe 0%, #e0e7ff 55%, #ede9fe 100%)',
              }}
            >
              <img
                src="/Scene-2.gif"
                alt="Zeme AI searching for apartments"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
