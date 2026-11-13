import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Info, ArrowUpRight, Waves, Sun } from 'lucide-react';
import { PACKAGES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

interface PackagesSectionProps {
  // Shows a "full rates" link when used as a preview on the home page
  showPageLink?: boolean;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ showPageLink = false }) => {
  const { openBooking, openPackageDetail } = useModals();
  const [activeIndex, setActiveIndex] = useState(0);

  const activePackage = PACKAGES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PACKAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PACKAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="packages" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            SURF PACKAGES
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            Simple, transparent weekly packages · per person, 7 nights · dorm bed rate shown
          </p>
          </div>
          {showPageLink && (
            <Link
              to="/rates"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              Full rates & rooms <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT LIST OF PACKAGES */}
          <div className="lg:col-span-5 flex flex-col space-y-6 pt-2">
            <div className="flex flex-col space-y-5">
              {PACKAGES.map((pkg, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setActiveIndex(idx)}
                    className="group text-left focus:outline-none transition-all duration-300 w-fit"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-serif-cormorant text-2xl sm:text-3xl md:text-4xl tracking-wide transition-all duration-300 ${
                          isSelected
                            ? 'text-[#2a362a] font-normal translate-x-1'
                            : 'text-[#8a8174] font-light hover:text-[#4a443b]'
                        }`}
                      >
                        {pkg.name}
                      </span>
                      <span className={`font-sans-body text-xs tracking-wider transition-colors ${isSelected ? 'text-[#2a362a]' : 'text-[#a8a090]'}`}>
                        From €{pkg.rates.dorm}
                      </span>
                    </div>
                    {/* Animated Underline */}
                    <div
                      className={`h-[1px] mt-1.5 transition-all duration-300 bg-[#3d372e] ${
                        isSelected ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* QUICK ACTIONS FOR ACTIVE LESSON */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking(activePackage.name)}
                className="px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
              >
                Book {activePackage.name}
              </button>
              <button
                onClick={() => openPackageDetail(activePackage)}
                className="px-5 py-3 rounded-full border border-[#8a8174]/40 hover:border-[#3d372e] text-[#3d372e] text-xs font-light uppercase tracking-[0.18em] transition-colors flex items-center gap-2"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Package Details</span>
              </button>
            </div>
          </div>

          {/* RIGHT SHOWCASE: VERTICAL TEXT + IMAGE + CAPTION + SLIDER */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              {/* VERTICAL ROTATED TEXT LABEL: fixed width and absolutely placed so long names never resize the image */}
              <div className="hidden sm:block relative w-10 shrink-0 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-serif-cormorant text-xl md:text-2xl tracking-[0.22em] uppercase text-[#3d372e] writing-vertical-lr select-none font-light opacity-90">
                  {activePackage.name.toUpperCase()}
                </span>
              </div>

              {/* IMAGE CONTAINER WITH ANIMATION: fixed 4:3 frame */}
              <div className="w-full sm:w-auto sm:flex-1 shrink-0 relative aspect-[16/10] sm:aspect-[4/3] self-start rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5]">
                {/* All photos stay mounted (so they load up front); the active one cross-fades over the rest, so the frame never goes blank */}
                {PACKAGES.map((p, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.img
                      key={p.id}
                      src={p.image}
                      alt={isActive ? p.name : ''}
                      aria-hidden={!isActive}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.04 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className={`absolute inset-0 w-full h-full object-cover object-center ${isActive ? 'z-[1]' : 'z-0'}`}
                    />
                  );
                })}
                {/* Mobile text badge */}
                <div className="sm:hidden absolute z-[2] top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-serif-cormorant tracking-widest uppercase">
                  {activePackage.name}
                </div>
              </div>
            </div>

            {/* CAPTION TEXT BELOW IMAGE */}
            <div className="mt-6 sm:pl-16">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activePackage.id + '-desc'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  // Room for the text and details so the section height doesn't jump between packages
                  className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448] min-h-[7.5em]"
                >
                  {activePackage.description}
                  <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[#2a362a] font-normal">
                    <span className="flex items-center gap-1.5"><Waves className="w-3.5 h-3.5" /> {activePackage.surfLessons}</span>
                    <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5" /> Yoga: {activePackage.yoga}</span>
                  </span>
                </motion.p>
              </AnimatePresence>

              {/* CAROUSEL CONTROLS & PROGRESS BAR */}
              <div className="mt-8 flex items-center justify-between gap-6 pt-4 border-t border-[#d8d1c3]">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full hover:bg-[#e6dfd1] text-[#3d372e] transition-colors focus:outline-none"
                  aria-label="Previous package"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                </button>

                <div className="flex-1 flex items-center gap-2">
                  {PACKAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="flex-1 py-2 focus:outline-none group"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div
                        className={`h-[2px] transition-all duration-300 rounded-full ${
                          idx === activeIndex
                            ? 'bg-[#3d372e] h-[3px]'
                            : 'bg-[#cfc8ba] group-hover:bg-[#a8a090]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full hover:bg-[#e6dfd1] text-[#3d372e] transition-colors focus:outline-none"
                  aria-label="Next package"
                >
                  <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
