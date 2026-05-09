import { motion } from 'motion/react';
import { CalendarDays, Home, MessagesSquare, FileText } from 'lucide-react';

// ── Data ─────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    Icon: Home,
    heading: 'List for\nfree',
    body: 'Create and publish listings in minutes.',
    img: '/agents-assets/Listings-for-free.svg',
    alt: 'Listing preview',
    // Left padding only — SVG bleeds past the right edge (clipped by card overflow-hidden)
    svgPadding: 'pl-6',
    imgClass: 'w-[135%] h-auto block',
  },
  {
    Icon: MessagesSquare,
    heading: 'Message\nrenters',
    body: 'Boost to targeted renters straight to their phones',
    img: '/agents-assets/Messages.svg',
    alt: 'Messages preview',
    // Equal horizontal padding — SVG sits flush at the bottom
    svgPadding: 'px-6',
    imgClass: 'w-full h-auto block',
  },
  {
    Icon: FileText,
    heading: 'Run full\napplications',
    body: 'Collect everything you need with custom requirements.',
    img: '/agents-assets/Paystubs-employment.svg',
    alt: 'Applications preview',
    // No padding — full bleed edge-to-edge
    svgPadding: null,
    imgClass: 'w-full h-auto block',
  },
];

// File names with spaces need %20 encoding in src attributes
const LOGOS = [
  { src: '/agents-assets/logos/Serhant.svg',                    alt: 'Serhant' },
  { src: '/agents-assets/logos/Redfin.svg',                     alt: 'Redfin' },
  { src: '/agents-assets/logos/RealNY.svg',                     alt: 'RealNY' },
  { src: '/agents-assets/logos/City%20Connections.svg',         alt: 'City Connections' },
  { src: '/agents-assets/logos/Modern%20Spaces.svg',            alt: 'Modern Spaces' },
  { src: '/agents-assets/logos/Pinpointe.svg',                  alt: 'Pinpointe' },
  { src: '/agents-assets/logos/R2k.svg',                        alt: 'Realty 2000' },
  { src: '/agents-assets/logos/Concrete%20Jungle.svg',          alt: 'Concrete Jungle' },
  { src: '/agents-assets/logos/Tribro.svg',                     alt: 'Tribro' },
  { src: '/agents-assets/logos/City%20Wide.svg',                alt: 'City Wide' },
  { src: '/agents-assets/logos/Signature%20Properties.svg',     alt: 'Signature Properties' },
];

// Tripled for bulletproof seamless infinite loop — extra copy prevents
// any reset flash on mobile renderers (keyframe animates to -33.333%)
const tripledLogos = [...LOGOS, ...LOGOS, ...LOGOS];

// ── Cloud pair ────────────────────────────────────────────────────────────────
// Same positioning and sizing as Layout 3's blue box (z-index 0 so cards sit above)

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
        style={{ left: 0, top: '10%', width: 'clamp(200px, 24vw, 360px)', zIndex: 0 }}
      />
      <motion.img
        src="/cloud%202.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="absolute hidden md:block pointer-events-none select-none"
        style={{ right: 0, top: '10%', width: 'clamp(200px, 24vw, 360px)', zIndex: 0 }}
      />
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AgentsPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[1400px] mx-auto px-6 text-center pt-4 pb-12"
      >
        <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-5">
          The easiest way to list,<br />reach, and screen.
        </h1>

        <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[480px] mx-auto mb-8">
          List for free. Connect with renters by text instantly.
          <br className="hidden md:block" />
          Run full applications with your own requirements
        </p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="lightsweep-always inline-flex items-center gap-2.5 bg-zeme-blue text-white px-8 py-4 rounded-full font-semibold hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md shadow-zeme-blue/20"
        >
          <CalendarDays className="w-5 h-5 shrink-0" />
          <span>Book a Call</span>
        </motion.button>
      </motion.div>

      {/* ── Blue panel + feature cards ───────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative overflow-hidden rounded-[32px] md:rounded-[48px] p-[18px] md:p-6"
          style={{ background: '#F0F7FF' }}
        >
          <CloudPair />

          {/* Cards grid — z-index above clouds */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4" style={{ zIndex: 10 }}>
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden flex flex-col"
              >
                {/* Text section */}
                <div className="px-6 pt-[23px] pb-[14px] shrink-0">
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-[14px]">
                    <card.Icon className="w-5 h-5 text-zeme-blue" />
                  </div>

                  {/* Heading */}
                  <h3 className="font-serif italic text-[1.75rem] md:text-[2rem] leading-[1.0] tracking-[-0.02em] text-neutral-900 mb-2 whitespace-pre-line">
                    {card.heading}
                  </h3>

                  {/* Body — matches hero body text size */}
                  <p className="text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium">
                    {card.body}
                  </p>
                </div>

                {/* SVG preview — fixed mt-3 gap, capped height to keep blue box compact.
                    Card 1: left-padded only, SVG bleeds right.
                    Card 2: equal horizontal padding, flush bottom.
                    Card 3: full-bleed edge-to-edge. */}
                <div className="mt-[14px] overflow-hidden max-h-[167px]">
                  {card.svgPadding ? (
                    <div className={card.svgPadding}>
                      <img
                        src={card.img}
                        alt={card.alt}
                        className={card.imgClass}
                        draggable={false}
                      />
                    </div>
                  ) : (
                    <img
                      src={card.img}
                      alt={card.alt}
                      className={card.imgClass}
                      draggable={false}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom fade — blends blue panel into white page background */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: 'clamp(60px, 14%, 120px)',
              background: 'linear-gradient(to bottom, transparent, white)',
              zIndex: 30,
            }}
          />
        </motion.div>
      </div>

      {/* ── Logo strip ───────────────────────────────────────────────────── */}
      <div className="pb-16 text-center">
        <p className="text-sm text-[#7D7D7D] font-medium mb-1">Current Customers</p>
        <p className="text-base font-semibold text-neutral-900 mb-8">
          1,000+ brokerages &amp; MLS
        </p>

        {/* Marquee — same mask + animate-marquee as HeroV2 carousel */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {tripledLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-11 w-auto object-contain"
                  draggable={false}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
