import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
}

// Shorter photo banner used at the top of the inner pages
export const PageHero: React.FC<PageHeroProps> = ({ title, eyebrow, intro, image, imageAlt }) => {
  return (
    <section className="relative w-full min-h-[46vh] sm:min-h-[52vh] flex flex-col justify-end overflow-hidden rounded-[2.5rem] bg-[#1e271e] text-white my-2 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b231b]/90 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14 pt-24 max-w-3xl space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="block text-[0.625rem] sm:text-xs font-sans-body uppercase tracking-[0.3em] text-white/70"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-cormorant text-5xl sm:text-6xl md:text-7xl font-light tracking-[0.14em] uppercase text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans-body text-sm sm:text-base font-light leading-relaxed text-white/85 max-w-xl"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
};
