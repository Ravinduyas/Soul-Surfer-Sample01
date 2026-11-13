import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { DAILY_RHYTHM, IMAGES } from '../data/surfData';

// A typical day at camp, from first light to the last story of the night
export const DailyRhythmSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(DAILY_RHYTHM[0].id);
  const activeIndex = DAILY_RHYTHM.findIndex((m) => m.id === selectedId);
  const active = DAILY_RHYTHM[activeIndex];

  return (
    <section id="daily-life" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              DAILY CAMP LIFE
            </h2>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
              A typical day at camp • Days flex with the swell and the season
            </p>
          </div>

          {/* TIME-OF-DAY TABS */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {DAILY_RHYTHM.map((moment) => {
              const isSelected = moment.id === selectedId;
              return (
                <button
                  key={moment.id}
                  onClick={() => setSelectedId(moment.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans-body tracking-wider uppercase transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#2a362a] text-[#f4efe6] font-semibold shadow-md'
                      : 'text-[#6b6255] hover:bg-[#e6dfd1] hover:text-[#2a362a]'
                  }`}
                >
                  {moment.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ACTIVE MOMENT CARD */}
          <div className="lg:col-span-7 bg-[#e9e2d4] border border-[#dcd4c4] rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif-cormorant text-6xl font-light text-[#2a362a]/30">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.25em] text-[#6b6255] font-semibold">
                      {active.label}
                    </span>
                    <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-wide text-[#2a362a]">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {active.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-sans-body text-[#3d372e]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448] max-w-lg">
                  {active.note}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              to="/rates"
              className="mt-8 w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              See surf packages <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* PHOTO */}
          <div className="lg:col-span-5 relative min-h-[18rem] rounded-3xl overflow-hidden shadow-lg bg-[#1e271e]">
            <img
              src={IMAGES.rooftop}
              alt="Rooftop infinity pool and dining terrace at Soul Surfer Camp, Weligama"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
