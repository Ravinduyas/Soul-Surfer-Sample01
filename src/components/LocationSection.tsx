import React from 'react';
import { MapPin, Mail, Navigation } from 'lucide-react';
import { CAMP } from '../data/surfData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            FIND US
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            Soul Surfer's own corner of Weligama: a quiet street address at Paranakade, on the eastern end of Weligama Bay - minutes from the town and with the surf break right in front of the camp.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#2a362a] text-[#f4efe6] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans-body text-xs font-semibold text-[#2a362a] uppercase tracking-wider">Address</h4>
                <p className="font-sans-body text-xs text-[#5c5448] font-light mt-1">
                  {CAMP.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                  <span className="block text-[#6b6255]">{CAMP.plusCode}</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#2a362a] text-[#f4efe6] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans-body text-xs font-semibold text-[#2a362a] uppercase tracking-wider">Email</h4>
                <a href={`mailto:${CAMP.email}`} className="block font-sans-body text-xs text-[#5c5448] font-light mt-1 hover:text-[#2a362a]">
                  {CAMP.email}
                </a>
              </div>
            </div>
          </div>

          <a
            href={CAMP.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-fit inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
          >
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </div>

        <div className="lg:col-span-7 relative min-h-[22rem] rounded-3xl overflow-hidden shadow-lg bg-[#e8e2d5] border border-[#dcd4c4]">
          <iframe
            title="Map showing Soul Surfer Camp in Weligama"
            src={CAMP.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0 grayscale-[30%]"
          />
        </div>
      </div>
    </section>
  );
};
