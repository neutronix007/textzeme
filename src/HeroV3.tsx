import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LOTTIE_URL = '/Layout 1.json';

export default function HeroV3() {
  return (
    <div className="bg-white">

      {/* ── Text + buttons ─────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center pt-4 pb-8 md:pb-10"
        >
          <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-5">
            Your Personal AI Searches<br />Every Apartment 24/7
          </h1>

          <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[460px] mx-auto mb-8">
            The moment a matching NYC apartment hits the market, Zeme texts you. No more manual
            refreshing, no more missing the ideal listing.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button className="lightsweep w-full sm:w-auto bg-zeme-blue text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                alt="iMessage"
                className="w-5 h-5 shrink-0"
              />
              <span>Text Zeme AI</span>
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition-all">
              <span className="text-[#7D7D7D] group-hover:text-neutral-900 transition-colors border-b-2 border-[#7D7D7D]/40 group-hover:border-neutral-900 pb-[4px]">
                Search Manually
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Full-bleed blue section ─────────────────────────────────────
          Rounded top corners. Phone anchored bottom-0 + translateY(8%)
          — same confirmed approach as Layout 1. Overflow hidden clips
          the whitespace at the top of the 1148×1148 Lottie square.      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        className="relative overflow-hidden"
        style={{
          background: '#F0F7FF',
          minHeight: 'clamp(500px, 72dvh, 880px)',
          borderRadius: '48px 48px 0 0',
        }}
      >
        {/* Cloud left — tablet+ only */}
        <motion.img
          src="/cloud%201.png"
          alt=""
          aria-hidden
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
          className="absolute hidden md:block pointer-events-none select-none"
          style={{
            left: 0,
            top: '8%',
            width: 'clamp(220px, 26vw, 420px)',
            zIndex: 10,
          }}
        />

        {/* Cloud right — tablet+ only */}
        <motion.img
          src="/cloud%202.png"
          alt=""
          aria-hidden
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
          className="absolute hidden md:block pointer-events-none select-none"
          style={{
            right: 0,
            top: '8%',
            width: 'clamp(220px, 26vw, 420px)',
            zIndex: 10,
          }}
        />

        {/* Phone — absolute bottom-0 + translateY(8%).
            The Lottie canvas is 1148×1148 square; the phone occupies the
            centre. Making the container large means the phone itself is large.
            translateY(8%) clips the below-phone whitespace out of the bottom
            while overflow:hidden on the parent clips top whitespace.
            Horizontal padding prevents the phone touching screen edges on
            small devices; removed on xl so maxWidth alone governs the size. */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center px-6 sm:px-10 md:px-16 xl:px-0"
          style={{ transform: 'translateY(8%)', zIndex: 20 }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 'clamp(340px, 68vw, 920px)',
              aspectRatio: '1 / 1',
            }}
          >
            <DotLottieReact
              src={LOTTIE_URL}
              autoplay
              loop
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Bottom fade — blends phone into white page background */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: 'clamp(80px, 14%, 160px)',
            background: 'linear-gradient(to bottom, transparent, white)',
            zIndex: 30,
          }}
        />
      </motion.div>

    </div>
  );
}
