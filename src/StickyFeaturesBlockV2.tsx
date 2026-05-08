/**
 * StickyFeaturesBlockV2
 *
 * Same structure and copy as StickyFeaturesBlock, but uses the new
 * "texting section" GIFs. The three sub-sections are inlined here so
 * the original TextingSection / UnderstandsSection / AlwaysSearchingSection
 * files (used by Layout 1) are not touched.
 */

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// ── Shared pill list ────────────────────────────────────────────────────────

function PillList({ items, slideFrom }: { items: string[]; slideFrom: 'left' | 'right' }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: slideFrom === 'left' ? -14 : 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
          className="flex items-center gap-3 bg-blue-50 rounded-full px-4 py-2.5 w-fit"
        >
          <CheckCircle2 className="w-5 h-5 text-zeme-blue shrink-0" />
          <span className="text-sm font-semibold text-zeme-blue whitespace-nowrap">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Shared gradient GIF card ────────────────────────────────────────────────

function GifCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="flex-[1.3] w-full"
    >
      <div
        className="rounded-[32px] md:rounded-[40px] overflow-hidden w-full"
        style={{ background: 'linear-gradient(145deg, #dbeafe 0%, #e0e7ff 55%, #ede9fe 100%)' }}
      >
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </motion.div>
  );
}

// ── Section 1: Start Your Search By Texting ────────────────────────────────

function TextingSectionV2() {
  const features = [
    'Always available',
    'Searches Zillow, StreetEasy and +100 others',
    'Adjusts instantly to new criteria',
  ];

  return (
    <section className="relative z-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            <PillList items={features} slideFrom="left" />
          </motion.div>

          {/* Right — new GIF 1 */}
          <GifCard
            src="/texting%20section%201.gif"
            alt="Zeme AI texting search"
          />
        </div>
      </div>
    </section>
  );
}

// ── Section 2: Understands Your Life ───────────────────────────────────────

function UnderstandsSectionV2() {
  const features = [
    'Every listing analyzed for YOU',
    'Searches your commute for every listing',
    'Considers your whole lifestyle',
  ];

  return (
    <section className="relative z-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left — new GIF 2 */}
          <GifCard
            src="/texting%20section%202.gif"
            alt="Zeme AI understanding your lifestyle"
          />

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-serif italic text-[2rem] md:text-[2.4rem] lg:text-[3rem] leading-[1.05] tracking-[-0.02em] text-neutral-900">
                Understands<br />Your Life
              </h3>
              <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[380px]">
                Knows your priorities. Commute times, pets, dining, nightlife, and more.
              </p>
            </div>
            <PillList items={features} slideFrom="right" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ── Section 3: Always Searching ────────────────────────────────────────────

function AlwaysSearchingSectionV2() {
  const features = [
    'Listings change, we keep hunting',
    'Never restart your search again',
    '24/7 apartment monitoring',
  ];

  return (
    <section className="relative z-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-serif italic text-[2rem] md:text-[2.4rem] lg:text-[3rem] leading-[1.05] tracking-[-0.02em] text-neutral-900">
                Always Searching Everywhere,<br />Even While You're Sleeping
              </h3>
              <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[380px]">
                You do literally anything else.{' '}
                <span className="text-zeme-blue font-semibold">Zeme continues searching.</span>
              </p>
            </div>
            <PillList items={features} slideFrom="left" />
          </motion.div>

          {/* Right — new GIF 3 */}
          <GifCard
            src="/texting%20section%203.gif"
            alt="Zeme AI always searching"
          />
        </div>
      </div>
    </section>
  );
}

// ── Block ───────────────────────────────────────────────────────────────────

export default function StickyFeaturesBlockV2() {
  return (
    <div>
      {/* Section heading */}
      <div className="bg-white text-center py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-[3.4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-5"
          >
            Zeme AI Never Stops<br />Searching For You.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-sm md:text-base text-[#7D7D7D] leading-[1.6] font-medium max-w-[480px] mx-auto"
          >
            Zeme monitors every listing, every source, every minute —{' '}
            <br className="hidden md:block" />
            then surfaces only what's worth your time.
          </motion.p>
        </div>
      </div>

      <TextingSectionV2 />
      <UnderstandsSectionV2 />
      <AlwaysSearchingSectionV2 />
    </div>
  );
}
