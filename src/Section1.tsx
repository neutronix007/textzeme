import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';

const features = [
  'Always available',
  'Searches Zillow, StreetEasy and +100 others',
  'Adjusts instantly to new criteria',
];

const line1 = 'Zeme AI Never Stops'.split(' ');
const line2 = 'Searching For You.'.split(' ');
const allWords = [...line1, ...line2];
const n = allWords.length;

/* ── Single animated word ───────────────────────────────────── */
function Word({
  word,
  progress,
  i,
}: {
  word: string;
  progress: MotionValue<number>;
  i: number;
}) {
  const opacity = useTransform(progress, [i / n, (i + 1) / n], [0, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] last:mr-0 text-neutral-900"
    >
      {word}
    </motion.span>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Section1() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0', 'end 0.6'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 50,
    restDelta: 0.001,
  });

  const subtitleOpacity = useTransform(smoothProgress, [0.78, 0.95], [0, 1]);
  const subtitleY       = useTransform(smoothProgress, [0.78, 0.95], [12, 0]);

  return (
    <section className="max-w-[1400px] mx-auto px-6">

      {/* ── Tall sticky container ─────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative min-h-[260vh] md:min-h-[300vh] mb-12 md:mb-20"
      >
        <div className="sticky top-[50vh] -translate-y-1/2 text-center px-4">
          <h2 className="font-serif italic text-[2.6rem] md:text-[3.8rem] lg:text-[4rem] leading-[1.1] tracking-[-0.03em] mb-5">
            <span className="block">
              {line1.map((word, i) => (
                <Word key={i} word={word} progress={smoothProgress} i={i} />
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  progress={smoothProgress}
                  i={line1.length + i}
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

      {/* ── Lower section ──────────────────────────────────────── */}
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
