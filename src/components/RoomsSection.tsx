import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight, Users } from 'lucide-react';
import { ROOMS, PACKAGES } from '../data/surfData';
import { Room } from '../types';

interface RoomsSectionProps {
  // Shows a "full rates" link when used as a preview on the home page
  showPageLink?: boolean;
}

const RoomCard: React.FC<{ room: Room; index: number }> = ({ room, index }) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const step = (dir: number) => setPhotoIdx((i) => (i + dir + room.images.length) % room.images.length);
  const fromPrice = Math.min(...PACKAGES.map((p) => p.rates[room.id]));

  return (
    <div className="bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg">
      {/* PHOTO SLIDER */}
      <div className="relative aspect-[4/3] bg-[#1e271e] group">
        {/* Photos stay stacked and cross-fade, so switching never shows an empty frame */}
        {room.images.map((src, idx) => {
          const isActive = idx === photoIdx;
          return (
            <motion.img
              key={src}
              src={src}
              alt={isActive ? `${room.name} at Soul Surfer Camp - photo ${idx + 1}` : ''}
              aria-hidden={!isActive}
              loading={idx === 0 ? 'eager' : 'lazy'}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 w-full h-full object-cover ${isActive ? 'z-[1]' : 'z-0'}`}
            />
          );
        })}
        <div className="absolute z-[2] top-4 left-4 flex items-center gap-2">
          <span className="bg-[#2a362a] text-white text-[0.5625rem] font-sans-body uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
            {String(index + 1).padStart(2, '0')} · New
          </span>
        </div>
        <div className="absolute z-[2] bottom-4 right-4 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[0.625rem] font-sans-body tracking-wider">
          {photoIdx + 1} / {room.images.length}
        </div>
        <button
          onClick={() => step(-1)}
          className="absolute z-[2] left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#2a362a] hover:bg-white transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => step(1)}
          className="absolute z-[2] right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#2a362a] hover:bg-white transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
          aria-label="Next photo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* DETAILS */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] text-[#6b6255] font-medium flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" /> {room.guests}
        </span>
        <h3 className="font-serif-cormorant text-2xl font-normal tracking-wide text-[#2a362a] mt-1 mb-3">{room.name}</h3>
        <p className="font-sans-body text-xs font-light leading-relaxed text-[#5c5448]">{room.summary}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2 flex-1">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[0.6875rem] font-sans-body text-[#3d372e]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4 mt-5 border-t border-[#d6cfc0] text-xs font-sans-body text-[#2a362a]">
          <span className="text-[#6b6255] font-light">From </span>
          <span className="font-semibold">€{fromPrice}</span>
          <span className="text-[#6b6255] font-light"> {room.priceNote}, incl. surf package</span>
        </div>
      </div>
    </div>
  );
};

export const RoomsSection: React.FC<RoomsSectionProps> = ({ showPageLink = false }) => {
  return (
    <section id="rooms" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              ROOMS
            </h2>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2 max-w-2xl leading-relaxed">
              Brand-new and all ensuite. Choose the room that fits your style - social dorms or quiet private rooms - and rest well between surf sessions.
            </p>
          </div>
          {showPageLink && (
            <Link
              to="/rates#rooms"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors shrink-0"
            >
              Rates by room <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS.map((room, idx) => (
            <RoomCard key={room.id} room={room} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
