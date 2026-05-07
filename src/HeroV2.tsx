import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LOTTIE_URL = '/1xx Final-Scene-Cut-at-map (2).json';

const apartments = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    price: '$2,250/m',
    address: '21-21 33rd Avenue #3R',
    area: 'Astoria, NY, 11106',
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
    price: '$3,100/m',
    address: '420 West 42nd Street #15A',
    area: 'Midtown, NY, 10036',
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
    price: '$2,800/m',
    address: '155 East 34th Street #8B',
    area: 'Murray Hill, NY, 10016',
  },
  {
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80',
    price: '$4,500/m',
    address: '200 Riverside Blvd #22F',
    area: 'Upper West Side, NY, 10069',
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
    price: '$1,950/m',
    address: '38-10 31st Street #2A',
    area: 'Long Island City, NY, 11101',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
    price: '$3,750/m',
    address: '88 Morningside Drive #5C',
    area: 'Morningside Heights, NY, 10027',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
    price: '$5,200/m',
    address: '15 Hudson Yards #42A',
    area: 'Hudson Yards, NY, 10001',
  },
  {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
    price: '$2,400/m',
    address: '44-10 Purves Street #1B',
    area: 'Long Island City, NY, 11101',
  },
];

// Duplicate for seamless infinite loop
const doubled = [...apartments, ...apartments];

export default function HeroV2() {
  return (
    <div>
      <main className="max-w-[1400px] mx-auto px-6">
        {/* Hero Text — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center pt-2 pb-6 md:pb-10"
        >
          <h1 className="font-serif italic text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-[-0.035em] bg-gradient-to-b from-[#2b2b2b] to-[#888888] bg-clip-text text-transparent">
            Your Personal AI Searches<br />Every Apartment 24/7
          </h1>
          <p className="hidden md:block mt-5 text-sm md:text-base text-[#7D7D7D] leading-[1.5] font-medium max-w-[460px] mx-auto">
            The moment a matching NYC apartment hits the market, Zeme texts you. No more manual refreshing, no more missing the ideal listing. Zeme does it for you—automatically, 24/7.
          </p>
        </motion.div>

        {/* Lottie — Centered, floating, fades into white at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center mb-6 md:mb-8"
        >
          <DotLottieReact
            src={LOTTIE_URL}
            autoplay
            loop
            style={{ width: '100%', maxWidth: '620px', height: 'auto' }}
          />
          {/* Bottom fade into white */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
          />
        </motion.div>

        {/* Buttons — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 md:mb-20"
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
      </main>

      {/* Card Carousel — Full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative overflow-hidden mb-20"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          className="flex animate-marquee py-3"
          style={{ width: 'max-content' }}
        >
          {doubled.map((apt, i) => (
            <div
              key={i}
              className="liquid-glass-strong rounded-[20px] shrink-0"
              style={{ width: '230px', marginRight: '16px' }}
            >
              <img
                src={apt.image}
                alt={apt.address}
                className="w-full h-[180px] object-cover rounded-t-[20px]"
              />
              <div className="p-4">
                <p className="font-bold text-[15px] text-neutral-900">{apt.price}</p>
                <p className="text-xs text-neutral-600 mt-0.5 leading-snug">{apt.address}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{apt.area}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
