import React from 'react';
import { COACHES } from '../data/surfData';

const initials = (name: string) =>
  name.split(' ').map((part) => part[0]).join('').slice(0, 2);

export const CoachesSection: React.FC = () => {
  return (
    <section id="coaches" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            OUR COACHES
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            ISA-certified instructors and trained lifeguards, every one of them
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 rounded-full bg-[#2a362a] text-[#f4efe6] flex items-center justify-center font-serif-cormorant text-2xl tracking-wider mb-5 group-hover:scale-105 transition-transform">
                {initials(coach.name)}
              </div>
              <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] text-[#6b6255] font-medium">
                {coach.role}
              </span>
              <h3 className="font-serif-cormorant text-2xl font-normal tracking-wide text-[#2a362a] mt-1 mb-3">
                {coach.name}
              </h3>
              <p className="font-sans-body text-xs font-light leading-relaxed text-[#5c5448] flex-1">
                {coach.bio}
              </p>
              <div className="pt-4 mt-4 border-t border-[#d6cfc0] text-xs font-sans-body text-[#2a362a]">
                <span className="font-semibold">{coach.years} years</span>
                <span className="text-[#6b6255] font-light"> coaching</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
