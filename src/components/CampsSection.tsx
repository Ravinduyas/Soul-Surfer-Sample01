import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { CAMPS, IMAGES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

interface CampsSectionProps {
  // Shows a "see all camps" link when used as a preview on the home page
  showPageLink?: boolean;
}

export const CampsSection: React.FC<CampsSectionProps> = ({ showPageLink = false }) => {
  const { openBooking } = useModals();
  const [selectedCampId, setSelectedCampId] = useState<string>(CAMPS[0].id);
  const activeCamp = CAMPS.find((c) => c.id === selectedCampId) || CAMPS[0];

  return (
    <section id="camps" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            SURF CAMPS
          </h2>
          {showPageLink && (
            <Link
              to="/camps"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              All camps & trips <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT LARGE TALL FEATURE IMAGE */}
          <div className="lg:col-span-5 relative group min-h-[420px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-[#1e271e]">
            <img
              src={IMAGES.featuredCamp}
              alt="Palm-lined tropical beach near the Brave beach house"
              className="w-full h-full object-cover object-center filter brightness-[0.88] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.25em] text-emerald-300 font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Featured Experience
              </span>
              <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-wide uppercase leading-tight mb-3">
                THE BRAVE SURF WEEK
              </h3>
              <p className="font-sans-body text-xs sm:text-sm font-light text-white/80 line-clamp-3 mb-6">
                Seven days of coaching, warm water and good company. Wake up steps from the beach, surf twice a day, and leave a far more confident surfer.
              </p>
              <button
                onClick={() => openBooking(CAMPS[0].title)}
                className="w-fit px-6 py-3 rounded-full bg-white text-[#2a362a] font-sans-body text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#f4efe6] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Reserve a Spot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: TITLE, DESCRIPTION, AND 4 VERTICAL CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.18em] uppercase text-[#3d372e]">
                CAMPS & TRIPS
              </h3>
              <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448] max-w-2xl">
                Go beyond a single lesson. Join a full surf week, catch glassy dawn waves, or head out by boat to the quiet reefs along the coast.
              </p>
            </div>

            {/* HIGHLIGHTED CAMP DETAILS */}
            <div className="bg-[#e9e2d4] p-5 rounded-2xl border border-[#dcd4c4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-sans-body text-[#4a443b]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#2a362a]" /> {activeCamp.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#2a362a]" /> {activeCamp.location}
                  </span>
                </div>
                <p className="font-serif-cormorant text-lg font-normal text-[#2a362a] pt-1">
                  {activeCamp.title} — <span className="font-sans-body text-xs text-[#6b6255] font-light">{activeCamp.subtitle}</span>
                </p>
                <p className="font-sans-body text-xs text-[#5c5448] font-light leading-relaxed max-w-lg">
                  {activeCamp.description}
                </p>
              </div>

              <button
                onClick={() => openBooking(activeCamp.title)}
                className="px-5 py-2.5 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#1e271e] transition-colors shrink-0"
              >
                Book {activeCamp.price || 'Now'}
              </button>
            </div>

            {/* 4 VERTICAL CARDS WITH ROTATED TEXT */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {CAMPS.map((camp) => {
                const isSelected = camp.id === selectedCampId;
                return (
                  <button
                    key={camp.id}
                    onClick={() => setSelectedCampId(camp.id)}
                    className={`group relative h-72 sm:h-80 rounded-2xl overflow-hidden focus:outline-none transition-all duration-500 text-left border-2 ${
                      isSelected
                        ? 'border-[#2a362a] ring-2 ring-[#2a362a]/20 shadow-xl scale-[1.02]'
                        : 'border-transparent opacity-85 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <img
                      src={camp.image}
                      alt={camp.title}
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
                        {camp.verticalLabel}
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
