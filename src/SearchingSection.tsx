import { motion } from 'motion/react';

export default function SearchingSection() {
  return (
    <section className="relative z-10 bg-white pt-6 pb-20 md:pt-8 md:pb-28">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="font-serif italic text-[3.4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-6">
          Zeme AI Never Stops<br />Searching For You.
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-sm md:text-base text-[#7D7D7D] leading-[1.6] font-medium max-w-[500px] mx-auto"
        >
          Zeme monitors every listing, every source, every minute,{' '}
          <br className="hidden md:block" />
          then surfaces only what's actually worth your time.
        </motion.p>
      </div>
    </section>
  );
}
