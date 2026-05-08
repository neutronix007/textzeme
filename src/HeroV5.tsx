import { useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LOTTIE_URL = '/Layout 1.json';

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    () => typeof window !== 'undefined' ? window.innerWidth >= 1280 : false
  );
  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

// Reusable cloud pair — hidden on mobile, visible md+
// Same positioning and sizing as Layout 3's blue box clouds.
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
        style={{ left: 0, top: '10%', width: 'clamp(200px, 24vw, 380px)', zIndex: 10 }}
      />
      <motion.img
        src="/cloud%202.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="absolute hidden md:block pointer-events-none select-none"
        style={{ right: 0, top: '10%', width: 'clamp(200px, 24vw, 380px)', zIndex: 10 }}
      />
    </>
  );
}

export default function HeroV5() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative z-20 bg-white">

      {/* ── MOBILE + TABLET ─────────────────────────────────────────────── */}
      {!isDesktop && (
        <div style={{ minHeight: '100dvh' }}>
          <div className="max-w-[1400px] w-full mx-auto px-6">

            {/* Gray box with clouds */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative bg-zeme-gray/50 rounded-[32px] overflow-hidden border border-neutral-100 mt-4 mb-5"
              style={{ height: 'calc(100dvh - 460px)', minHeight: '220px', maxHeight: '700px' }}
            >
              <CloudPair />

              {/* Phone */}
              <div
                className="absolute bottom-0 left-0 right-0 flex justify-center px-8"
                style={{ transform: 'translateY(8%)', zIndex: 20 }}
              >
                <div className="w-full max-w-[500px] md:max-w-[640px]" style={{ aspectRatio: '1 / 1' }}>
                  <DotLottieReact
                    src={LOTTIE_URL}
                    autoplay
                    loop
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>

              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 w-full h-14 md:h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, white)', zIndex: 30 }}
              />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mb-3"
            >
              <h1 className="font-serif italic text-[3.4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.9] text-center tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent">
                Your Personal AI Searches Every Apartment 24/7
              </h1>
            </motion.div>

            {/* Body — tablet only */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
              className="hidden md:block mb-4 text-center"
            >
              <p className="text-base text-[#7D7D7D] leading-[1.4] tracking-tight font-medium max-w-[480px] mx-auto">
                The moment a matching NYC apartment hits the market, Zeme texts you.
                No more manual refreshing, no more missing the ideal listing.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col gap-3 mb-8 max-w-[560px] mx-auto w-full"
            >
              <button className="lightsweep bg-zeme-blue text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20 w-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                  alt="iMessage"
                  className="w-5 h-5 shrink-0"
                />
                <span className="text-base">Text Zeme AI</span>
              </button>
              <button className="group px-6 py-4 rounded-full font-semibold active:scale-[0.97] transition-all text-base w-full text-center">
                <span className="text-[#7D7D7D] group-hover:text-neutral-900 transition-colors border-b-2 border-[#7D7D7D]/40 group-hover:border-neutral-900 pb-[4px]">
                  Search Manually
                </span>
              </button>
            </motion.div>

          </div>
        </div>
      )}

      {/* ── DESKTOP (xl+) ───────────────────────────────────────────────── */}
      {isDesktop && (
        <main className="max-w-[1400px] mx-auto px-6">

          {/* Heading left + description/buttons right */}
          <div className="flex flex-row items-center justify-between gap-16 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-[2] min-w-[860px]"
            >
              <h1 className="font-serif italic text-[5.5rem] xl:text-[6.2rem] leading-[0.88] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent">
                Your Personal AI Searches <br /> Every Apartment 24/7
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="flex-1 max-w-[480px] flex flex-col items-end gap-5 text-right"
            >
              <p className="text-base text-[#7D7D7D] leading-[1.4] tracking-tight font-medium max-w-[400px]">
                The moment a matching NYC apartment hits the market, Zeme texts you.
                No more manual refreshing, no more missing the ideal listing.
              </p>
              <div className="flex flex-row items-center gap-3">
                <button className="lightsweep bg-zeme-blue text-white px-6 py-4 rounded-full font-semibold flex items-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                    alt="iMessage"
                    className="w-5 h-5 shrink-0"
                  />
                  <span>Text Zeme AI</span>
                </button>
                <button className="group px-6 py-4 rounded-full font-semibold active:scale-[0.97] transition-all">
                  <span className="text-[#7D7D7D] group-hover:text-neutral-900 transition-colors border-b-2 border-[#7D7D7D]/40 group-hover:border-neutral-900 pb-[4px]">
                    Search Manually
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Gray box with clouds + phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full bg-zeme-gray/50 rounded-[48px] overflow-hidden border border-neutral-100 mb-6"
            style={{ height: '65dvh', minHeight: '500px' }}
          >
            <CloudPair />

            {/* Phone */}
            <div
              className="absolute bottom-0 left-0 right-0 flex justify-center px-8"
              style={{ transform: 'translateY(8%)', zIndex: 20 }}
            >
              <div className="w-full max-w-[900px]" style={{ aspectRatio: '1 / 1' }}>
                <DotLottieReact
                  src={LOTTIE_URL}
                  autoplay
                  loop
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 w-full h-28 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, white)', zIndex: 30 }}
            />
          </motion.div>

        </main>
      )}

    </section>
  );
}
