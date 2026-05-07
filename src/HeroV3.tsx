import { useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LOTTIE_URL = '/Layout 1.json';

// Same hook as HeroSection — reads viewport synchronously so the right
// box height is used on first render with no jumpcut.
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

export default function HeroV3() {
  const isDesktop = useIsDesktop();

  // Box height mirrors Layout 1's logic:
  //   Mobile/tablet: viewport height minus the content above (heading +
  //     description + buttons ≈ 510px) so the phone always fills the box.
  //     CSS max() ensures a sensible floor on very short screens.
  //   Desktop: fixed 65dvh with a 500px floor — identical to Layout 1.
  const boxStyle = isDesktop
    ? { height: '65dvh', minHeight: '500px' }
    : { height: 'max(280px, calc(100dvh - 510px))' };

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ── Text + buttons ─────────────────────────────────────────── */}
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
            The moment a matching NYC apartment hits the market, Zeme texts you.
            No more manual refreshing, no more missing the ideal listing.
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

        {/* ── Blue box — same max-width as the rest of the page ────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative overflow-hidden rounded-t-[32px] md:rounded-t-[48px]"
          style={{ background: '#F0F7FF', ...boxStyle }}
        >
          {/* Cloud left — tablet+ only */}
          <motion.img
            src="/cloud%201.png"
            alt=""
            aria-hidden
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
            className="absolute hidden md:block pointer-events-none select-none"
            style={{
              left: 0,
              top: '10%',
              width: 'clamp(200px, 24vw, 380px)',
              zIndex: 10,
            }}
          />

          {/* Cloud right — tablet+ only */}
          <motion.img
            src="/cloud%202.png"
            alt=""
            aria-hidden
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
            className="absolute hidden md:block pointer-events-none select-none"
            style={{
              right: 0,
              top: '10%',
              width: 'clamp(200px, 24vw, 380px)',
              zIndex: 10,
            }}
          />

          {/* Phone — absolute bottom-0 + translateY(8%).
              The phone container is sized so it always matches or slightly
              exceeds the box height: overflow:hidden clips the top Lottie
              whitespace while translateY(8%) clips the bottom whitespace,
              leaving the phone filling ~80-90% of the box at all sizes.
              maxWidth steps up at each breakpoint for good proportions. */}
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

          {/* Bottom fade — blends phone into white page background */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: 'clamp(60px, 12%, 130px)',
              background: 'linear-gradient(to bottom, transparent, white)',
              zIndex: 30,
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}
