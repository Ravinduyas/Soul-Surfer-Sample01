import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL } from '../data/surfData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f4efe6] text-[#3d372e] rounded-[2.5rem] p-8 sm:p-12 md:p-16 my-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* TOP ROW: BRAND & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* BRAND COL */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-baseline gap-2 focus:outline-none">
              <span className="font-serif-cormorant text-4xl sm:text-5xl font-light tracking-[0.12em] text-[#2a362a]">
                BRAVE
              </span>
              <span className="font-serif-cormorant text-sm sm:text-base font-light tracking-[0.3em] text-[#2a362a]/80 uppercase">
                Surf School
              </span>
            </Link>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#5c5448] leading-relaxed max-w-md">
              Surf lessons, camps and coaching on {SCHOOL.location}. Small groups, certified coaches, and a beach house steps from the waves.
            </p>
          </div>

          {/* QUICK LINKS COL */}
          <div className="md:col-span-3 space-y-3 font-sans-body text-xs">
            <h4 className="font-serif-cormorant text-lg font-light tracking-[0.2em] text-[#2a362a] uppercase mb-4">
              Explore
            </h4>
            <div className="flex flex-col space-y-2">
              <Link to="/lessons" className="text-[#5c5448] hover:text-[#2a362a] transition-colors">Surf Lessons & Prices</Link>
              <Link to="/lessons#timetable" className="text-[#5c5448] hover:text-[#2a362a] transition-colors">Weekly Timetable</Link>
              <Link to="/camps" className="text-[#5c5448] hover:text-[#2a362a] transition-colors">Surf Camps & Trips</Link>
              <Link to="/about" className="text-[#5c5448] hover:text-[#2a362a] transition-colors">About Brave</Link>
              <Link to="/contact" className="text-[#5c5448] hover:text-[#2a362a] transition-colors">Contact & FAQ</Link>
            </div>
          </div>

          {/* NEWSLETTER COL */}
          <div className="md:col-span-4 space-y-3 font-sans-body text-xs">
            <h4 className="font-serif-cormorant text-lg font-light tracking-[0.2em] text-[#2a362a] uppercase mb-4">
              Swell Report
            </h4>
            <p className="text-[#5c5448] font-light leading-relaxed">
              Subscribe for season updates, camp dates and the occasional heads-up when a good swell is on the way.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full bg-white border border-[#dcd4c4] text-[#2a362a] placeholder:text-[#6b6255]/60 text-xs focus:outline-none focus:border-[#2a362a]/60"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-wider hover:bg-[#3a4a3a] transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 border-t border-[#dcd4c4] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b6255] font-sans-body font-light gap-4">
          <p>© 2026 BRAVE Surf School. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#2a362a] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#2a362a] transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-[#2a362a] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
