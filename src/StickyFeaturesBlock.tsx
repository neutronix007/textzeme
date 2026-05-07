import { motion } from 'motion/react';
import TextingSection from './TextingSection';
import UnderstandsSection from './UnderstandsSection';
import AlwaysSearchingSection from './AlwaysSearchingSection';

export default function StickyFeaturesBlock() {
  return (
    <div>
      {/* Heading — fades in on scroll */}
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

      {/* Feature sections */}
      <TextingSection />
      <UnderstandsSection />
      <AlwaysSearchingSection />
    </div>
  );
}
