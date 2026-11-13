import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { BOOKING_TERMS } from '../data/surfData';
import { useModals } from '../context/ModalContext';

// Booking inquiries + cancellation policy
export const BookingTermsSection: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <section id="booking-terms" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            BOOKING
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            Let us know any specific requests or requirements - we aim to answer all messages within 24 hours.
          </p>
          <button
            onClick={() => openBooking()}
            className="px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
          >
            Send a Booking Request
          </button>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {BOOKING_TERMS.inquiries.map((item, idx) => (
            <div key={item} className="bg-[#e9e2d4] border border-[#dcd4c4] rounded-2xl p-5 flex items-start gap-4">
              <span className="font-serif-cormorant text-2xl font-light text-[#2a362a]/50 leading-none mt-0.5">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="font-sans-body text-xs sm:text-sm text-[#3d372e] flex-1">{item}</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            </div>
          ))}

          <div className="bg-[#2a362a] text-[#f4efe6] rounded-2xl p-6 flex items-start gap-4">
            <div className="p-2 rounded-full bg-[#f4efe6] text-[#2a362a] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-cormorant text-xl font-normal tracking-wide uppercase">Cancellation Policy</h3>
              <p className="font-sans-body text-xs font-light leading-relaxed text-[#f4efe6]/80 mt-1">
                {BOOKING_TERMS.cancellation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
