import React from 'react';
import { Instagram } from 'lucide-react';
import { CAMP, GALLERY } from '../data/surfData';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              JOIN THE TRIBE
            </h2>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
              Waves, rooftop sunsets and camp life in Weligama
            </p>
          </div>
          <a
            href={CAMP.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" /> Follow us on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl bg-[#e8e2d5] shadow-md group aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
