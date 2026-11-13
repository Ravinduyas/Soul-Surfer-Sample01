import React from 'react';
import { ACTIVITIES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

// One block per activity, alternating text and photo sides
export const ActivityStoriesSection: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <>
      {ACTIVITIES.map((activity, idx) => {
        const flip = idx % 2 === 1;
        const [main, ...rest] = activity.gallery;
        return (
          <section
            key={activity.id}
            id={activity.id}
            className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className={`lg:col-span-5 flex flex-col space-y-5 ${flip ? 'lg:order-2' : ''}`}>
                <span className="text-[0.625rem] sm:text-xs font-sans-body uppercase tracking-[0.3em] text-[#6b6255]">
                  {activity.eyebrow}
                </span>
                <h2 className="font-serif-cormorant text-4xl sm:text-5xl font-light tracking-[0.12em] uppercase text-[#3d372e] leading-tight">
                  {activity.title}
                </h2>
                <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
                  {activity.description}
                </p>
                {idx === 0 && (
                  <button
                    onClick={() => openBooking()}
                    className="w-fit px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
                  >
                    Book Your Spot Now
                  </button>
                )}
              </div>

              <div className={`lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 ${flip ? 'lg:order-1' : ''}`}>
                <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5]">
                  <img src={main} alt={activity.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                {rest.slice(0, 2).map((src) => (
                  <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#e8e2d5]">
                    <img src={src} alt={activity.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
