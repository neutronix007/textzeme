import { motion } from 'motion/react';
import { CalendarDays, Home, MessagesSquare, FileText, CircleDollarSign, ShieldCheck } from 'lucide-react';

// ── Data ─────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    Icon: Home,
    heading: 'List for\nfree',
    body: 'Create and publish\nlistings in minutes.',
    img: '/agents-assets/Listings-for-free.svg',
    alt: 'Listing preview',
    svgPadding: 'pl-6',
    imgClass: 'w-[135%] h-auto block',
  },
  {
    Icon: MessagesSquare,
    heading: 'Reach the\nright renters',
    body: 'Connect with the ideal\nrenters for your property.',
    img: '/agents-assets/Messages.svg',
    alt: 'Messages preview',
    svgPadding: 'px-6',
    imgClass: 'w-full h-auto block',
  },
  {
    Icon: FileText,
    heading: 'Run full\napplications',
    body: 'Collect everything you need\nwith custom requirements.',
    img: '/agents-assets/Paystubs-employment.svg',
    alt: 'Applications preview',
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

// Tripled for bulletproof seamless infinite loop
const tripledLogos = [...LOGOS, ...LOGOS, ...LOGOS];

// ── Cloud pair ────────────────────────────────────────────────────────────────

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
        className="max-w-[1400px] mx-auto px-6 text-center pt-4 pb-8"
      >
        {/* Heading */}
        <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent mb-5">
          The easiest way to list,<br />reach, and screen.
        </h1>

        {/* Body — max-width grows with font size so each sentence fits on one line at md/lg.
            <br> is hidden on mobile (text flows freely) and visible md+ to enforce 2 lines. */}
        <p className="text-base md:text-[1.375rem] lg:text-[1.75rem] text-[#7D7D7D] leading-[1.5] font-medium max-w-[420px] md:max-w-[700px] lg:max-w-[900px] mx-auto mb-6">
          List for free. Connect with renters by text instantly.<br className="hidden md:block" />
          Run full applications with your own requirements
        </p>

        {/* CTA — rectangle with rounded corners, width matches subtitle block */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="lightsweep-always flex items-center justify-center gap-3 bg-zeme-blue text-white w-full max-w-[480px] mx-auto py-4 md:py-5 rounded-2xl font-semibold text-base md:text-[1.125rem] lg:text-[1.375rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-zeme-blue/20 mb-4"
        >
          <CalendarDays className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
          <span>Book a Call</span>
        </motion.button>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center justify-center gap-5 md:gap-8 mb-8"
        >
          <span className="flex items-center gap-1.5 text-[#C9C9C9] text-sm lg:text-[1.31rem] font-medium">
            <CircleDollarSign className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 text-[#C9C9C9]" />
            $100 free credits
          </span>
          <span className="flex items-center gap-1.5 text-[#C9C9C9] text-sm lg:text-[1.31rem] font-medium">
            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 text-[#C9C9C9]" />
            SOC2 Compliant
          </span>
        </motion.div>

        {/* Current Customers label with gradient divider lines */}
        <div className="flex items-center gap-4 mb-5 max-w-[640px] mx-auto">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #ffffff, #e2e2e2)' }} />
          <p className="text-sm lg:text-[1.31rem] text-[#7D7D7D] font-medium whitespace-nowrap">Current Customers</p>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #e2e2e2, #ffffff)' }} />
        </div>

        {/* Logo marquee */}
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
                className="flex items-center justify-center px-5 shrink-0"
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
      </motion.div>

      {/* ── Blue panel + feature cards ───────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative overflow-hidden rounded-[32px] md:rounded-[48px] p-5 md:p-[26px]"
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
                <div className="px-6 pt-[25px] pb-4 shrink-0">
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <card.Icon className="w-5 h-5 text-zeme-blue" />
                  </div>

                  {/* Heading — proportional: card heading/hero = 40/128 = 0.3125 */}
                  <h3 className="font-serif italic text-[1.75rem] md:text-[2rem] lg:text-[2.2rem] leading-[1.0] tracking-[-0.02em] text-neutral-900 mb-2 whitespace-pre-line">
                    {card.heading}
                  </h3>

                  {/* Body — proportional: card body/hero = 24/128 = 0.1875 */}
                  <p className="text-sm md:text-base lg:text-[1.31rem] text-[#7D7D7D] leading-[1.5] font-medium whitespace-pre-line">
                    {card.body}
                  </p>
                </div>

                {/* SVG preview */}
                <div className="mt-4 overflow-hidden max-h-[184px]">
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

          {/* Bottom fade */}
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

    </div>
  );
}
