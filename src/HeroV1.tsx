import { lazy, Suspense } from 'react';
import HeroSection from './HeroSection';

// Below-fold sections are code-split so the initial JS bundle stays small.
// Each gets its own Suspense with a min-height fallback to prevent layout
// shift while the chunk downloads.
const StatsSection        = lazy(() => import('./StatsSection'));
const StickyFeaturesBlock = lazy(() => import('./StickyFeaturesBlock'));

export default function HeroV1() {
  return (
    <>
      {/* HeroSection is above the fold — always eager */}
      <HeroSection />

      <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <StickyFeaturesBlock />
      </Suspense>
    </>
  );
}
