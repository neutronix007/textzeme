import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// ─── Marquee strip ────────────────────────────────────────────────────────────
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Zeme AI Search</span>
    <span className="text-zeme-blue/50">✦</span>
    <span>Every Listing Found</span>
    <span className="text-zeme-blue/40">✦</span>
    <span>Real-time Texting</span>
    <span className="text-zeme-blue/50">✦</span>
    <span>Zero Hidden Fees</span>
    <span className="text-zeme-blue/40">✦</span>
    <span>Absolute Privacy</span>
    <span className="text-zeme-blue/50">✦</span>
  </div>
);

const NAV_LINKS = [
  'About Us',
  'Contact Us',
  'Terms of Service',
  'Privacy Policy',
  'Trust Center',
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { amount: 0.05, once: false });

  return (
    /*
      Curtain-reveal: wrapper sits in normal flow (h-screen).
      clip-path clips the fixed footer inside to the wrapper's bounds,
      creating the scroll-up reveal effect.
    */
    <div
      ref={wrapperRef}
      className="relative h-screen w-full"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <footer className="fixed bottom-0 left-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-neutral-900">

        {/* Subtle grid texture */}
        <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

        {/* Zeme-blue aurora glow — no purple bleed */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 h-[55vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(0,114,245,0.10) 0%, rgba(0,90,210,0.05) 50%, transparent 70%)',
          }}
        />

        {/* Giant background "ZEME" */}
        <motion.div
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            WebkitTextStroke: '1px rgba(0,0,0,0.04)',
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.07) 0%, transparent 65%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          className="absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none text-[26vw] leading-[0.75] font-black tracking-[-0.05em] text-transparent"
        >
          ZEME
        </motion.div>

        {/* ── Tilted marquee strip ─────────────────────────────────── */}
        <div className="absolute top-10 left-0 w-full overflow-hidden border-y border-neutral-100 bg-white/80 backdrop-blur-md py-4 z-10 -rotate-[1.5deg] scale-[1.08]">
          <div className="flex w-max animate-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-neutral-400">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        {/* ── Centre content ────────────────────────────────────────── */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-20 w-full max-w-5xl mx-auto"
        >
          <h2 className="font-serif italic text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-10 text-center">
            Find Your Home
          </h2>

          <div className="flex flex-col items-center gap-5 w-full">
            {/* Single CTA — matches hero button exactly */}
            <button className="lightsweep bg-zeme-blue text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                alt="iMessage"
                className="w-5 h-5 shrink-0"
              />
              <span>Text Zeme AI</span>
            </button>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-1">
              {NAV_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/70 transition-colors px-5 py-2.5 rounded-full text-neutral-500 hover:text-neutral-900 font-medium text-xs md:text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative z-20 w-full pb-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0"
        >
          {/* Copyright — centered on mobile, left-aligned on desktop */}
          <p className="text-neutral-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-center md:text-left">
            © 2026 Zeme AI. All rights reserved.
          </p>

          {/* Centre — built with love pill, hidden on mobile */}
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/70 transition-colors px-5 py-2.5 rounded-full flex items-center gap-2">
              <span className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Built with
              </span>
              <motion.span
                animate={{ scale: [1, 1.3, 1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500 inline-block leading-none text-sm"
              >
                ❤
              </motion.span>
              <span className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                for Real Estate
              </span>
            </div>
          </div>

          {/* Right — back to top arrow, hidden on mobile */}
          <div className="hidden md:flex justify-end">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200/70 hover:bg-neutral-200 transition-colors flex items-center justify-center text-neutral-500 hover:text-neutral-900 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </motion.div>

      </footer>
    </div>
  );
}
