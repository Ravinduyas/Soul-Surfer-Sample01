import React from 'react';
import { FACILITIES } from '../data/surfData';

// "A closer look": rooftop pool, dining, rooms and reception
export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            A CLOSER LOOK
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            Rooftop pool & sea-view dining • A brand-new home designed for surfers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((item) => (
            <div
              key={item.id}
              className="bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#1e271e]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] text-[#6b6255] font-medium">
                  {item.caption}
                </span>
                <h3 className="font-serif-cormorant text-2xl font-normal tracking-wide text-[#2a362a] mt-1 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans-body text-xs font-light leading-relaxed text-[#5c5448] flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {['Infinity Pool', 'Rooftop Restaurant', 'Brand New Rooms', 'Ocean Views', 'Boutique Design'].map((tag) => (
            <span key={tag} className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-[#2a362a]/10 text-[#2a362a] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
