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

export default function HeroV4() {
  const isDesktop = useIsDesktop();

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ── MOBILE + TABLET ─────────────────────────────────────────── */}
        {!isDesktop && (
          <div style={{ minHeight: '100dvh' }}>

            {/* Phone — anchored to bottom of box, same pattern as Layout 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative overflow-hidden mt-4 mb-5"
              style={{ height: 'calc(100dvh - 460px)', minHeight: '220px', maxHeight: '700px' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 flex justify-center px-8"
                style={{ transform: 'translateY(8%)' }}
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
                className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="font-serif italic text-[3.4rem] md:text-[5rem] leading-[0.9] text-center tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-6"
            >
              Your Personal AI Searches Every Apartment 24/7
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col gap-3 mb-10 max-w-[560px] mx-auto w-full"
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
        )}

        {/* ── DESKTOP (xl+) ───────────────────────────────────────────── */}
        {isDesktop && (
          <div className="flex items-center gap-8 xl:gap-16 min-h-[88dvh] py-8">

            {/* Left: heading + buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-1 flex flex-col justify-center"
            >
              <h1 className="font-serif italic text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] leading-[0.88] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-8">
                Your Personal<br />
                AI Searches<br />
                Every<br />
                Apartment<br />
                24/7
              </h1>

              <div className="flex flex-col items-start gap-3">
                <button className="lightsweep bg-zeme-blue text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                    alt="iMessage"
                    className="w-5 h-5 shrink-0"
                  />
                  <span>Text Zeme AI</span>
                </button>
                <button className="group px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-all">
                  <span className="text-[#7D7D7D] group-hover:text-neutral-900 transition-colors border-b-2 border-[#7D7D7D]/40 group-hover:border-neutral-900 pb-[4px]">
                    Search Manually
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right: floating phone on white */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="flex-1 flex justify-center items-center relative"
            >
              {/* Phone container — sized to fill the right column.
                  translateY(8%) clips the bottom whitespace of the Lottie
                  while the parent overflow:hidden clips it from view.   */}
              <div className="relative w-full overflow-hidden" style={{ maxWidth: '620px', aspectRatio: '1 / 1' }}>
                <div
                  style={{ position: 'absolute', inset: 0, transform: 'translateY(-4%)' }}
                >
                  <DotLottieReact
                    src={LOTTIE_URL}
                    autoplay
                    loop
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                {/* Bottom fade blends phone into white page */}
                <div
                  className="absolute bottom-0 left-0 w-full pointer-events-none"
                  style={{
                    height: '18%',
                    background: 'linear-gradient(to bottom, transparent, white)',
                    zIndex: 10,
                  }}
                />
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </div>
  );
}
