import React from 'react';
import { X, Waves, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { SurfPackage } from '../types';
import { PACKAGE_INCLUDES, ROOMS } from '../data/surfData';

interface PackageDetailModalProps {
  pkg: SurfPackage;
  onClose: () => void;
  onBook: (pkg: SurfPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ pkg, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#f4efe6] text-[#3d372e] overflow-hidden shadow-2xl border border-[#dcd4c4] max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO IMAGE BANNER */}
        <div className="relative h-56 sm:h-64 w-full bg-[#1e271e] shrink-0">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover filter brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4efe6] via-black/20 to-transparent flex items-end p-6">
            <div>
              <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#2a362a] text-white font-medium shadow-md">
                7 nights · per person
              </span>
              <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-[0.14em] uppercase text-[#2a362a] mt-2">
                {pkg.name}
              </h2>
            </div>
          </div>
        </div>

        {/* CONTENT BODY */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans-body">
          <p className="font-serif-cormorant text-xl text-[#2a362a] italic border-l-2 border-[#2a362a] pl-4">
            "{pkg.subtitle}"
          </p>

          <p className="text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">{pkg.description}</p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#e9e2d4] p-4 rounded-2xl border border-[#dcd4c4] text-center">
            <div>
              <Waves className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Surf</span>
              <span className="text-xs font-semibold text-[#2a362a]">{pkg.surfLessons}</span>
            </div>
            <div>
              <Sun className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Yoga</span>
              <span className="text-xs font-semibold text-[#2a362a]">{pkg.yoga}</span>
            </div>
            <div>
              <Moon className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Stay</span>
              <span className="text-xs font-semibold text-[#2a362a]">7 nights</span>
            </div>
          </div>

          {/* PRICE BY ROOM */}
          <div>
            <h4 className="font-serif-cormorant text-xl text-[#2a362a] uppercase tracking-wider mb-3">Weekly Rate by Room</h4>
            <div className="divide-y divide-[#d8d1c3] border-y border-[#d8d1c3]">
              {ROOMS.map((room) => (
                <div key={room.id} className="flex items-center justify-between gap-4 py-3">
                  <div>
                    <span className="text-xs font-semibold text-[#2a362a]">{room.name}</span>
                    <span className="block text-[0.6875rem] text-[#6b6255] font-light">{room.priceNote}</span>
                  </div>
                  <span className="font-serif-cormorant text-2xl text-[#2a362a]">€{pkg.rates[room.id]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INCLUDED */}
          <div>
            <h4 className="font-serif-cormorant text-xl text-[#2a362a] uppercase tracking-wider mb-3">Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PACKAGE_INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-[#4a443b]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4 flex items-center justify-end gap-4 border-t border-[#d8d1c3]">
            <button onClick={onClose} className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider text-[#6b6255] hover:text-[#2a362a]">
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(pkg);
              }}
              className="px-8 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-all shadow-md"
            >
              Book Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
