import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WEEKLY_SCHEDULE } from '../data/surfData';
import { useModals } from '../context/ModalContext';
import { Clock, User, MapPin, Users } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export const ScheduleSection: React.FC = () => {
  const { openBooking } = useModals();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const filteredSlots = WEEKLY_SCHEDULE.filter((s) => s.day === selectedDay);

  return (
    <section id="timetable" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              TIMETABLE
            </h2>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
              Weekly surf schedule • Times follow the tide and may shift slightly
            </p>
          </div>

          {/* DAY TABS SELECTOR */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {DAYS.map((day) => {
              const isSelected = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-full text-xs font-sans-body tracking-wider uppercase transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#2a362a] text-[#f4efe6] font-semibold shadow-md'
                      : 'text-[#6b6255] hover:bg-[#e6dfd1] hover:text-[#2a362a]'
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>

        {/* SESSION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredSlots.map((slot) => {
              const isFull = slot.enrolled >= slot.capacity;
              return (
                <motion.div
                  key={slot.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group"
                >
                  <div>
                    {/* SPOT & LEVEL BADGES */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#2a362a]/10 text-[#2a362a] font-medium">
                        {slot.level}
                      </span>
                      <span className="text-[0.6875rem] font-sans-body text-[#6b6255] flex items-center gap-1 font-light">
                        <MapPin className="w-3 h-3 text-[#2a362a]" /> {slot.spot}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-sans-body font-semibold text-[#2a362a] mb-2">
                      <Clock className="w-4 h-4 text-[#2a362a]" />
                      <span>{slot.time}</span>
                    </div>

                    <h3 className="font-serif-cormorant text-2xl font-normal tracking-wide text-[#2a362a] group-hover:text-emerald-900 transition-colors mb-3">
                      {slot.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-sans-body text-[#5c5448] font-light mb-4">
                      <User className="w-3.5 h-3.5 text-[#6b6255]" />
                      <span>{slot.coach}</span>
                    </div>
                  </div>

                  {/* BOTTOM CAPACITY & BOOK BUTTON */}
                  <div className="pt-4 border-t border-[#d6cfc0] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#6b6255] font-light">
                      <Users className="w-3.5 h-3.5" />
                      <span>{slot.enrolled}/{slot.capacity} spots</span>
                    </div>

                    <button
                      onClick={() => openBooking(`Session: ${slot.title} (${slot.day} ${slot.time})`)}
                      disabled={isFull}
                      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                        isFull
                          ? 'bg-[#c2bbb0] text-white cursor-not-allowed'
                          : 'bg-[#2a362a] text-[#f4efe6] hover:bg-[#1e271e] shadow-sm hover:shadow'
                      }`}
                    >
                      {isFull ? 'Full' : 'Reserve'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
