import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  'Listings change, we keep hunting',
  'Never restart your search again',
  '24/7 apartment monitoring',
];

export default function AlwaysSearchingSection() {
  return (
    <section className="relative z-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left — subheading + description + pills */}
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

            <div className="flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
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
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex-[1.3] w-full"
          >
            <div
              className="rounded-[32px] md:rounded-[40px] overflow-hidden w-full"
              style={{
                background: 'linear-gradient(145deg, #dbeafe 0%, #e0e7ff 55%, #ede9fe 100%)',
              }}
            >
              <img
                src="/Scene-4-Not-Ready.gif"
                alt="Zeme AI always searching"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
