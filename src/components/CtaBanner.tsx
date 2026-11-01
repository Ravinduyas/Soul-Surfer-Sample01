import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { useModals } from '../context/ModalContext';
import { IMAGES, LESSONS } from '../data/surfData';

interface CtaBannerProps {
  title?: string;
  text?: string;
}

// Dark photo banner that closes a page with a booking prompt
export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = 'BE BRAVE. PADDLE OUT.',
  text = 'Your first wave is closer than you think. Book a lesson and we will handle the board, the spot and the confidence.',
}) => {
  const { openBooking, openCallback } = useModals();

  return (
    <section className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#1e271e] text-white my-6 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.barrel}
          alt="Surfer inside a breaking wave"
          className="w-full h-full object-cover object-center filter brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-16 sm:py-20 max-w-2xl space-y-6">
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.14em] uppercase leading-tight drop-shadow-lg">
          {title}
        </h2>
        <p className="font-sans-body text-sm sm:text-base font-light leading-relaxed text-white/85">
          {text}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => openBooking(LESSONS[0].name)}
            className="group inline-flex items-center gap-3 bg-white text-[#2a362a] hover:bg-[#f5efe6] font-sans-body text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <span>BOOK A LESSON</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={openCallback}
            className="px-6 py-4 rounded-full border border-white/60 hover:border-white text-white text-xs tracking-[0.2em] font-light uppercase transition-all duration-300 hover:bg-white hover:text-[#2a362a]"
          >
            ORDER A CALL
          </button>
        </div>
      </div>
    </section>
  );
};
