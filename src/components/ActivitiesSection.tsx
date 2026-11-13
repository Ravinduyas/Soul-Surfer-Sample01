import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ACTIVITIES, IMAGES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

interface ActivitiesSectionProps {
  // Shows a "see all activities" link when used as a preview on the home page
  showPageLink?: boolean;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ showPageLink = false }) => {
  const { openBooking } = useModals();
  const [selectedId, setSelectedId] = useState<string>(ACTIVITIES[0].id);
  const activeActivity = ACTIVITIES.find((c) => c.id === selectedId) || ACTIVITIES[0];

  return (
    <section id="activities" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            ACTIVITIES
          </h2>
          {showPageLink && (
            <Link
              to="/activities"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              View all activities <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT LARGE TALL FEATURE IMAGE */}
          <div className="lg:col-span-5 relative group min-h-[420px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-[#1e271e]">
            <img
              src={IMAGES.boatParty}
              alt="Soul Surfer Camp sunset boat party"
              className="w-full h-full object-cover object-center filter brightness-[0.88] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.25em] text-emerald-300 font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Featured Experience
              </span>
              <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-wide uppercase leading-tight mb-3">
                THE SUNSET BOAT PARTY
              </h3>
              <p className="font-sans-body text-xs sm:text-sm font-light text-white/80 line-clamp-3 mb-6">
                If you've ever attended our legendary boat party, you'll never forget it. Every week the whole camp heads out on the bay for music, sunset and the best night of the trip.
              </p>
              <button
                onClick={() => openBooking()}
                className="w-fit px-6 py-3 rounded-full bg-white text-[#2a362a] font-sans-body text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#f4efe6] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Book Your Spot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: TITLE, DESCRIPTION, AND 4 VERTICAL CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.18em] uppercase text-[#3d372e]">
                MORE THAN SURF
              </h3>
              <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448] max-w-2xl">
                Boat parties, beach days, new friendships, and stories you'll tell for years. Daily social activities are part of every package - not paid extras.
              </p>
            </div>

            {/* HIGHLIGHTED CAMP DETAILS */}
            <div className="bg-[#e9e2d4] p-5 rounded-2xl border border-[#dcd4c4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.25em] text-[#6b6255] font-semibold">
                  {activeActivity.eyebrow}
                </span>
                <p className="font-serif-cormorant text-lg font-normal text-[#2a362a] pt-1">
                  {activeActivity.title}
                </p>
                <p className="font-sans-body text-xs text-[#5c5448] font-light leading-relaxed max-w-lg">
                  {activeActivity.description}
                </p>
              </div>

              <Link
                to={`/activities#${activeActivity.id}`}
                className="px-5 py-2.5 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#1e271e] transition-colors shrink-0"
              >
                Explore
              </Link>
            </div>

            {/* 4 VERTICAL CARDS WITH ROTATED TEXT */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {ACTIVITIES.map((activity) => {
                const isSelected = activity.id === selectedId;
                return (
                  <button
                    key={activity.id}
                    onClick={() => setSelectedId(activity.id)}
                    className={`group relative h-72 sm:h-80 rounded-2xl overflow-hidden focus:outline-none transition-all duration-500 text-left border-2 ${
                      isSelected
                        ? 'border-[#2a362a] ring-2 ring-[#2a362a]/20 shadow-xl scale-[1.02]'
                        : 'border-transparent opacity-85 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                    {isSelected && (
                      <div className="absolute top-3 left-3 bg-[#2a362a] text-white text-[0.5625rem] font-sans-body uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
                        Active
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end">
                      <span className="font-serif-cormorant text-base sm:text-lg lg:text-xl font-light tracking-[0.18em] uppercase text-white drop-shadow-md writing-vertical-lr select-none group-hover:text-amber-200 transition-colors">
                        {activity.verticalLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
