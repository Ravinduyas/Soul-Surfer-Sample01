import React from 'react';
import { CAMP_DIFFERENCES, IMAGES } from '../data/surfData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            LIFE AT SOUL SURFER
          </h2>
          <div className="space-y-4 font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            <p className="font-normal text-[#2a362a]">
              A brand-new camp built by experienced surf hosts, designed from the ground up for the dedicated surfer.
            </p>
            <p>
              Soul Surfer Camp is an independent boutique surf retreat in Weligama, located just a 20-second walk from the beach and only 5 to 10 minutes' walk from the town centre.
            </p>
            <p>
              Designed for comfort, style, and easy island living, the camp offers upscale private rooms, twin rooms, and mixed dormitory rooms - all with ensuite bathrooms. It has its own location, its own daily schedule of surf sessions and activities, and runs entirely independently, with its own social vibe built around the rooftop and the bay.
            </p>
            <p>
              Between sessions, relax at the rooftop restaurant with sea view or in the rooftop infinity pool overlooking the ocean. Soul Surfer is for travellers who want a more boutique, comfortable surf camp experience in Weligama - great vibes, beautiful views, and easy access to the beach and town.
            </p>
          </div>

          {/* WHAT MAKES IT DIFFERENT */}
          <ol className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAMP_DIFFERENCES.map((item, idx) => (
              <li key={item} className="bg-[#e9e2d4] border border-[#dcd4c4] rounded-2xl p-4 flex items-start gap-3">
                <span className="font-serif-cormorant text-2xl font-light text-[#2a362a]/50 leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-sans-body text-xs text-[#3d372e]">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5] translate-y-6">
            <img src={IMAGES.surfHosts} alt="Surf lesson at Soul Surfer Camp" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#e8e2d5]">
            <img src={IMAGES.rooftop} alt="Rooftop infinity pool and dining terrace at Soul Surfer Camp" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
