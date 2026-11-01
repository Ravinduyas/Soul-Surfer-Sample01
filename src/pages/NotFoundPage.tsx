import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <section className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl text-center">
    <h1 className="font-serif-cormorant text-5xl sm:text-6xl font-light tracking-[0.16em] uppercase text-[#2a362a]">
      Wiped Out
    </h1>
    <p className="font-sans-body text-xs sm:text-sm font-light text-[#5c5448] mt-4">
      We couldn't find that page. Let's paddle back to shore.
    </p>
    <Link
      to="/"
      className="inline-block mt-8 px-6 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
    >
      Back to Home
    </Link>
  </section>
);
