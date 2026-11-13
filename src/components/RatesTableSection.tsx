import React from 'react';
import { PACKAGES, ROOMS } from '../data/surfData';
import { useModals } from '../context/ModalContext';

const perNight = (weekly: number) => (weekly / 7).toFixed(2);

// Weekly rates for every package and room type
export const RatesTableSection: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <section id="rates-table" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            WEEKLY RATES
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            Price per week, with the per-night equivalent underneath
          </p>
        </div>

        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full min-w-[40rem] font-sans-body text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="py-4 pr-4 text-[0.625rem] uppercase tracking-[0.2em] text-[#6b6255] font-semibold border-b border-[#d8d1c3]">
                  Room
                </th>
                {PACKAGES.map((pkg) => (
                  <th
                    key={pkg.id}
                    className={`py-4 px-4 border-b border-[#d8d1c3] ${pkg.highlighted ? 'bg-[#2a362a] text-[#f4efe6] rounded-t-2xl' : ''}`}
                  >
                    <span className="font-serif-cormorant text-xl sm:text-2xl font-normal tracking-wide uppercase">{pkg.name}</span>
                    <span className={`block text-[0.6875rem] font-light mt-1 ${pkg.highlighted ? 'text-[#f4efe6]/70' : 'text-[#6b6255]'}`}>
                      {pkg.surfLessons} · yoga {pkg.yoga.toLowerCase()}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROOMS.map((room, rowIdx) => (
                <tr key={room.id}>
                  <td className="py-5 pr-4 border-b border-[#d8d1c3] align-top">
                    <span className="font-serif-cormorant text-xl text-[#2a362a]">{room.name}</span>
                    <span className="block text-[0.6875rem] text-[#6b6255] font-light mt-0.5">{room.priceNote}</span>
                  </td>
                  {PACKAGES.map((pkg) => {
                    const lastRow = rowIdx === ROOMS.length - 1;
                    return (
                      <td
                        key={pkg.id}
                        className={`py-5 px-4 border-b align-top ${
                          pkg.highlighted
                            ? `bg-[#2a362a] text-[#f4efe6] border-[#3a4a3a] ${lastRow ? 'rounded-b-2xl' : ''}`
                            : 'border-[#d8d1c3]'
                        }`}
                      >
                        <span className="font-serif-cormorant text-3xl font-light">€{pkg.rates[room.id]}</span>
                        <span className={`block text-[0.6875rem] font-light ${pkg.highlighted ? 'text-[#f4efe6]/70' : 'text-[#6b6255]'}`}>
                          €{perNight(pkg.rates[room.id])} / night
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-sans-body text-xs font-light text-[#6b6255] max-w-xl">
            All packages include 7 nights accommodation, breakfast every day, dinner every day except Sunday, surf theory classes, video analysis and daily social activities.
          </p>
          <button
            onClick={() => openBooking()}
            className="w-fit px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md shrink-0"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};
