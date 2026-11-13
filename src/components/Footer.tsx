import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { CAMP } from '../data/surfData';

const EXPLORE = [
  { label: 'Home', to: '/' },
  { label: 'Surf Packages & Rates', to: '/rates' },
  { label: 'Rooms', to: '/rates#rooms' },
  { label: 'Activities', to: '/activities' },
  { label: 'Inside the Camp', to: '/camp' },
  { label: 'Gallery', to: '/camp#gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact & FAQ', to: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f4efe6] text-[#3d372e] rounded-[2.5rem] p-8 sm:p-12 md:p-16 my-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* TOP ROW: BRAND, NAVIGATION & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* BRAND COL */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-baseline gap-2 focus:outline-none">
              <span className="font-serif-cormorant text-4xl sm:text-5xl font-light tracking-[0.12em] text-[#2a362a]">
                SOUL SURFER
              </span>
              <span className="font-serif-cormorant text-sm sm:text-base font-light tracking-[0.3em] text-[#2a362a]/80 uppercase">
                Camp
              </span>
            </Link>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#5c5448] leading-relaxed max-w-md">
              A boutique surf camp in Weligama where stylish comfort meets authentic surf culture. Learn to surf, improve your skills, or simply unwind with ocean views, daily social events and a rooftop pool 20 seconds from the beach.
            </p>
          </div>

          {/* QUICK LINKS COL */}
          <div className="md:col-span-3 space-y-3 font-sans-body text-xs">
            <h4 className="font-serif-cormorant text-lg font-light tracking-[0.2em] text-[#2a362a] uppercase mb-4">
              Explore
            </h4>
            <div className="flex flex-col space-y-2">
              {EXPLORE.map((item) => (
                <Link key={item.to} to={item.to} className="text-[#5c5448] hover:text-[#2a362a] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT COL */}
          <div className="md:col-span-4 space-y-3 font-sans-body text-xs">
            <h4 className="font-serif-cormorant text-lg font-light tracking-[0.2em] text-[#2a362a] uppercase mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-[#5c5448] font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2a362a] shrink-0 mt-0.5" />
                <a href={CAMP.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-[#2a362a] transition-colors">
                  {CAMP.addressLines.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2a362a] shrink-0" />
                <a href={CAMP.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#2a362a] transition-colors">
                  {CAMP.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2a362a] shrink-0" />
                <a href={`mailto:${CAMP.email}`} className="hover:text-[#2a362a] transition-colors">
                  {CAMP.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2a362a] shrink-0" />
                <span>{CAMP.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 border-t border-[#dcd4c4] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b6255] font-sans-body font-light gap-4">
          <p>© 2026 Soul Surfer Camp · the newest member of The Surfer family</p>
          <div className="flex items-center space-x-6">
            <Link to="/contact#booking-terms" className="hover:text-[#2a362a] transition-colors">Booking Terms</Link>
            <span>•</span>
            <a href={CAMP.instagram} target="_blank" rel="noreferrer" className="hover:text-[#2a362a] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
