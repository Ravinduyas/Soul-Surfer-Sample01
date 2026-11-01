import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CAMPS, CAMP_INCLUDES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

export const CampIncludesSection: React.FC = () => {
  const { openBooking } = useModals();
  const surfCamp = CAMPS[0];

  return (
    <section id="included" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            WHAT'S INCLUDED
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            Everything you need for a full week of surfing in our {surfCamp.title}. Just bring swimwear and sunscreen.
          </p>
          <div className="flex items-baseline gap-2 pt-2">
            <span className="font-serif-cormorant text-5xl font-light text-[#2a362a]">{surfCamp.price}</span>
            <span className="font-sans-body text-xs text-[#6b6255]">per person, shared room</span>
          </div>
          <button
            onClick={() => openBooking(surfCamp.title)}
            className="px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
          >
            Book the Surf Camp
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CAMP_INCLUDES.map((item) => (
            <div key={item} className="bg-[#e9e2d4] border border-[#dcd4c4] rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span className="font-sans-body text-xs sm:text-sm text-[#3d372e]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
