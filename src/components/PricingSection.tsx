import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PACKAGES } from '../data/surfData';
import { useModals } from '../context/ModalContext';

export const PricingSection: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <section id="prices" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            PRICES
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            Board, leash and rash vest are included in every lesson
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-[#2a362a] text-[#f4efe6] shadow-2xl md:-translate-y-2'
                  : 'bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 hover:shadow-lg'
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute top-6 right-6 text-[0.5625rem] font-sans-body uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#f4efe6] text-[#2a362a] font-semibold">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className={`font-serif-cormorant text-2xl font-normal tracking-wide uppercase ${pkg.highlighted ? 'text-[#f4efe6]' : 'text-[#2a362a]'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="font-serif-cormorant text-5xl font-light">{pkg.price}</span>
                  <span className={`font-sans-body text-xs ${pkg.highlighted ? 'text-[#f4efe6]/70' : 'text-[#6b6255]'}`}>{pkg.unit}</span>
                </div>
                <p className={`font-sans-body text-xs font-light leading-relaxed mt-4 ${pkg.highlighted ? 'text-[#f4efe6]/80' : 'text-[#5c5448]'}`}>
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs font-sans-body">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlighted ? 'text-emerald-300' : 'text-emerald-700'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => openBooking(pkg.name)}
                className={`mt-8 w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-colors shadow-md ${
                  pkg.highlighted
                    ? 'bg-[#f4efe6] text-[#2a362a] hover:bg-white'
                    : 'bg-[#2a362a] text-[#f4efe6] hover:bg-[#1e271e]'
                }`}
              >
                Book {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
