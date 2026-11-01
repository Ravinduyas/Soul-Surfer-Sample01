import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useModals } from '../context/ModalContext';
import { IMAGES, SCHOOL, LESSONS } from '../data/surfData';

// Space left under the hero so its rounded bottom edge stays visible
const BOTTOM_GAP_PX = 16;

export const Hero: React.FC = () => {
  const { openBooking } = useModals();
  const heroRef = useRef<HTMLElement>(null);
  const [offsetTop, setOffsetTop] = useState<number | null>(null);

  // Measure how far down the page the hero starts (header + padding) so it can fill the rest of the screen
  useLayoutEffect(() => {
    const measure = () => {
      if (heroRef.current) {
        setOffsetTop(heroRef.current.getBoundingClientRect().top + window.scrollY);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section
      ref={heroRef}
      // svh = height with the mobile browser bar showing, so the hero doesn't jump while scrolling
      style={{ height: offsetTop === null ? '85svh' : `calc(100svh - ${offsetTop + BOTTOM_GAP_PX}px)` }}
      className="relative w-full min-h-[30rem] flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#1e271e] text-white my-2 shadow-2xl"
    >
      {/* BACKGROUND IMAGE WITH MOODY ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.homeHero}
          alt="Surfer riding a green wave"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.78] contrast-[1.05]"
        />
        {/* Soft vignette gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b231b]/90 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      {/* HERO TITLE */}
      <div className="relative z-10 pt-16 sm:pt-24 px-6 sm:px-12 lg:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-cormorant text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-[0.2em] uppercase text-white drop-shadow-lg select-none"
        >
          BRAVE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif-cormorant text-lg sm:text-2xl font-light tracking-[0.5em] uppercase text-white/85 -mt-1 sm:-mt-3"
        >
          Surf School
        </motion.p>
      </div>

      {/* BOTTOM CONTENT AREA */}
      <div className="relative z-10 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-12 lg:px-16 flex flex-col items-start space-y-6 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-sans-body text-sm sm:text-base font-light leading-relaxed text-white/90 drop-shadow-md"
        >
          Paddle out with certified coaches on the warm, steady waves of {SCHOOL.location}. First lesson or fiftieth, we'll get you riding further than you thought you could.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="pt-2"
        >
          <button
            onClick={() => openBooking(LESSONS[0].name)}
            className="group relative inline-flex items-center gap-3 bg-white text-[#2a362a] hover:bg-[#f5efe6] font-sans-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none"
          >
            <span>BOOK A LESSON</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#2a362a]" />
          </button>
        </motion.div>
      </div>

      {/* SUBTLE DECORATIVE ELEMENT */}
      <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-2 text-white/40 text-[0.625rem] tracking-[0.3em] uppercase font-light pointer-events-none">
        <span>{SCHOOL.established}</span>
        <span>•</span>
        <span>{SCHOOL.location}</span>
      </div>
    </section>
  );
};
