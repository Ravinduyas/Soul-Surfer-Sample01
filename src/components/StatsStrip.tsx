import React from 'react';

const STATS = [
  { value: '20 sec', label: 'Walk to the beach' },
  { value: 'ISA', label: 'Certified surf instructors' },
  { value: 'From €390', label: '7 nights, surf & stay' },
  { value: 'All levels', label: 'Beginner to advanced' },
];

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] px-8 sm:px-12 md:px-16 py-10 my-6 shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-[#d8d1c3]">
        {STATS.map((stat) => (
          <div key={stat.label} className="lg:px-6 first:lg:pl-0 text-center lg:text-left">
            <div className="font-serif-cormorant text-4xl sm:text-5xl font-light tracking-wide text-[#2a362a]">
              {stat.value}
            </div>
            <div className="font-sans-body text-[0.625rem] sm:text-xs uppercase tracking-[0.2em] text-[#6b6255] mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
