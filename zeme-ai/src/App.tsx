/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { CinematicFooter } from "@/src/components/ui/motion-footer";

const ScrollRevealText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        
        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

const MessageBubble = ({ 
  children, 
  variant = 'ai', 
  delay = 0 
}: { 
  children: React.ReactNode, 
  variant?: 'user' | 'ai',
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
    viewport={{ once: true }}
    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
      variant === 'user' 
        ? 'bg-blue-600 text-white rounded-br-none ml-auto' 
        : 'bg-neutral-100 text-neutral-800 rounded-bl-none'
    }`}
  >
    {children}
  </motion.div>
);

const FeatureTag = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-3 bg-blue-50/50 text-blue-600 px-4 py-3 rounded-full w-fit group hover:bg-blue-100 transition-colors"
  >
    <CheckCircle2 className="w-5 h-5 text-blue-500" />
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Heading Reveal (0.0 -> 0.4)
  const headingText = "Zeme AI Never Stops Searching For You.";
  const words = headingText.split(" ");
  
  // Section 1 Layer Transforms
  const s1Opacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const s1Scale = useTransform(scrollYProgress, [0.45, 0.55], [1, 0.95]);
  const s1Y = useTransform(scrollYProgress, [0.45, 0.55], [0, -50]);

  // Section 2 Layer Transforms (Starts revealing at 0.55)
  const s2Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const s2Y = useTransform(scrollYProgress, [0.55, 0.7], [100, 0]);
  const s2Scale = useTransform(scrollYProgress, [0.55, 0.65], [0.98, 1]);

  return (
    <div ref={containerRef} className="relative bg-white font-sans">
      {/* Scroll track - controls the speed of the transitions */}
      <div className="h-[400vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Section 1 Layer */}
          <motion.div 
            style={{ opacity: s1Opacity, scale: s1Scale, y: s1Y }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif italic tracking-tight text-neutral-900 mb-8 leading-[1.05]">
                {words.map((word, i) => {
                  const start = (i / words.length) * 0.35;
                  const end = ((i + 1) / words.length) * 0.35;
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const wordOpacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);
                  
                  return (
                    <motion.span
                      key={i}
                      style={{ opacity: wordOpacity }}
                      className="inline-block mr-[0.2em]"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>
              
              <motion.p 
                style={{ 
                  opacity: useTransform(scrollYProgress, [0.35, 0.45], [0, 1]),
                  y: useTransform(scrollYProgress, [0.35, 0.45], [20, 0])
                }}
                className="text-lg sm:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
              >
                Zeme monitors every listing, every source, every minute,
                then surfaces only what's actually worth your time.
              </motion.p>
            </div>
          </motion.div>

          {/* Section 2 Layer */}
          <motion.div 
            style={{ opacity: s2Opacity, y: s2Y, scale: s2Scale }}
            className="absolute inset-0 flex items-center justify-center px-6 z-20 pointer-events-none group-data-[active=true]:pointer-events-auto"
          >
            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text Side */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-5xl sm:text-6xl font-serif italic tracking-tight leading-[1.1]">
                    Start Your Search<br /><span className="text-blue-600">By Texting</span>
                  </h2>
                  <p className="text-neutral-500 text-lg sm:text-xl max-w-md leading-relaxed">
                    Simply include basic criteria and anything else that might be relevant.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <FeatureTag text="Always available" delay={0.1} />
                  <FeatureTag text="Searches Zillow, StreetEasy and +100 others" delay={0.2} />
                  <FeatureTag text="Adjusts instantly to new criteria" delay={0.3} />
                </div>
              </div>

              {/* Box Side */}
              <div className="relative group pointer-events-auto">
                <PhoneMockup />
                {/* Visual Flair */}
                <div className="absolute -inset-10 bg-blue-50/40 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </div>
          </motion.div>

          {/* Background Ambient Element */}
          <motion.div 
            style={{ 
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]),
              opacity: useTransform(scrollYProgress, [0, 0.6], [0.2, 0.5]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 15])
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/20 rounded-full blur-[140px] -z-0"
          />
        </div>
      </div>
      
      {/* Final section to show standard scroll is back */}
      <div className="h-screen bg-neutral-50 flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-400 font-serif italic text-2xl">Scroll down to reveal everything</p>
        <div className="w-[1px] h-32 bg-gradient-to-b from-neutral-200 to-transparent" />
      </div>

      <CinematicFooter />
    </div>
  );
}

const PhoneMockup = () => (
  <div className="relative group">
    <div className="relative aspect-[4/5] bg-blue-50/50 rounded-[48px] overflow-hidden border border-neutral-100 p-8 flex flex-col gap-6 shadow-inner">
      {/* Phone "Bezels" */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-neutral-900 rounded-full opacity-5" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-1 h-48 bg-neutral-900 rounded-full opacity-5" />

      <MessageBubble variant="user" delay={0.5}>
        Hey!!! Can you help me find a 1BR under $3,000 in or near Astoria, pet friendly (I have a small dog)
      </MessageBubble>

      <MessageBubble variant="ai" delay={1.2}>
        On it! Scanning every platform now. I'll text you with options shortly.
      </MessageBubble>

      <MessageBubble variant="ai" delay={2.0}>
        Found a great option in Astoria right under $2,900 that allow small dogs. See below, want to tour?
      </MessageBubble>

      {/* Listing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 max-w-[95%] mx-auto mt-2"
      >
        <div className="h-44 overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600" 
            alt="Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm">
            Just In
          </div>
        </div>
        <div className="p-6 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-neutral-900">$2,846</p>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-neutral-50 px-2 py-1 rounded-md">1BR / 1BA</span>
          </div>
          <p className="text-sm font-medium text-neutral-400">27-17 21st Street #11C</p>
          <p className="text-sm text-neutral-400">Astoria, NY</p>
        </div>
      </motion.div>
    </div>
  </div>
);
