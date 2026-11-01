import React from 'react';
import { IMAGES, SCHOOL } from '../data/surfData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            OUR STORY
          </h2>
          <div className="space-y-4 font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            <p className="font-normal text-[#2a362a]">
              Brave was founded by surfers who remember exactly how it felt to paddle out for the first time.
            </p>
            <p>
              The ocean can feel big when you're new to it. We named the school Brave because that first step takes courage, and we wanted a place that rewards it with patience, good coaching and genuinely fun waves.
            </p>
            <p>
              {SCHOOL.location} is one of the friendliest places in the world to learn: warm water, a sandy bottom, and gentle waves rolling in all season long. Just around the point, the reefs offer plenty of challenge once you're ready.
            </p>
            <p>
              Today we coach beginners, families and experienced surfers from all over the world, and we still get the same thrill every time someone stands up for the first time.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5] translate-y-6">
            <img src={IMAGES.boardRack} alt="Surfboards at the Brave beach house" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5]">
            <img src={IMAGES.sunsetWalk} alt="Surfer walking the beach at sunset" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
