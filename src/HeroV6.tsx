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

export default function HeroV6() {
  const isDesktop = useIsDesktop();

  // Box fills most of the viewport above the fold.
  // Content below (heading + buttons) is accounted for in the mobile calc.
  const boxStyle = isDesktop
    ? { height: '65dvh', minHeight: '500px' }
    : { height: 'max(260px, calc(100dvh - 400px))' };

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ── Blue box — fully rounded, sits at the very top ─────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="relative overflow-hidden rounded-[32px] md:rounded-[48px] mt-4"
          style={{ background: '#F0F7FF', ...boxStyle }}
        >
          {/* Phone */}
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center px-8"
            style={{ transform: 'translateY(8%)', zIndex: 20 }}
          >
            <div
              className="w-full max-w-[500px] md:max-w-[700px] xl:max-w-[900px]"
              style={{ aspectRatio: '1 / 1' }}
            >
              <DotLottieReact
                src={LOTTIE_URL}
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* Bottom fade — blends phone whitespace into white page */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: 'clamp(40px, 10%, 100px)',
              background: 'linear-gradient(to bottom, transparent, white)',
              zIndex: 30,
            }}
          />
        </motion.div>

        {/* ── Heading + buttons below the box ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          className="text-center pt-8 pb-14"
        >
          <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-8">
            Your Personal AI Searches<br />Every Apartment 24/7
          </h1>

          {/*
          <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[460px] mx-auto mb-8">
            The moment a matching NYC apartment hits the market, Zeme texts you.
            No more manual refreshing, no more missing the ideal listing.
          </p>
          */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
          </div>
        </motion.div>

      </div>
    </div>
  );
}
