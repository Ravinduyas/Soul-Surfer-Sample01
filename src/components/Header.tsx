import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useModals } from '../context/ModalContext';

export const NAV_ITEMS = [
  { label: 'HOME', to: '/' },
  { label: 'LESSONS', to: '/lessons' },
  { label: 'SURF CAMPS', to: '/camps' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
];

export const Header: React.FC = () => {
  const { openCallback } = useModals();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full pt-3 pb-1 sm:pt-4 sm:pb-2 px-4 sm:px-8 lg:px-10 xl:px-12 text-[#2a362a]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link to="/" className="flex items-baseline gap-2 group focus:outline-none shrink-0 whitespace-nowrap">
          <span className="font-serif-cormorant text-4xl lg:text-[2.5rem] xl:text-5xl font-light tracking-[0.12em] text-[#2a362a] group-hover:opacity-90 transition-opacity">
            BRAVE
          </span>
          <span className="hidden sm:inline lg:hidden xl:inline font-serif-cormorant text-sm sm:text-base font-light tracking-[0.3em] text-[#2a362a]/80 uppercase group-hover:opacity-90 transition-opacity">
            Surf School
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap text-xs xl:text-sm font-light tracking-[0.2em] xl:tracking-[0.25em] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#2a362a]/80 after:transition-all ${
                  isActive
                    ? 'text-[#2a362a] after:w-full'
                    : 'text-[#2a362a]/70 hover:text-[#2a362a] after:w-0 hover:after:w-full'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ORDER A CALL BUTTON */}
        <button
          onClick={openCallback}
          className="hidden lg:block shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full border border-[#2a362a]/60 hover:border-[#2a362a] text-[#2a362a] text-xs tracking-[0.2em] font-light uppercase transition-all duration-300 hover:bg-[#2a362a] hover:text-[#f4efe6] shadow-sm hover:shadow-md"
        >
          ORDER A CALL
        </button>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full border border-[#2a362a]/40 text-[#2a362a] hover:bg-[#2a362a]/10 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#f4efe6]/95 backdrop-blur-md border-b border-[#2a362a]/10 py-6 px-6 shadow-2xl rounded-3xl flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.25em] py-2 border-b border-[#2a362a]/10 ${
                  isActive ? 'text-[#2a362a] font-normal' : 'text-[#2a362a]/75 font-light hover:text-[#2a362a]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCallback();
              }}
              className="w-full py-3 rounded-full border border-[#2a362a] text-[#2a362a] text-xs tracking-[0.2em] font-light uppercase hover:bg-[#2a362a] hover:text-[#f4efe6] transition-all"
            >
              ORDER A CALL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
