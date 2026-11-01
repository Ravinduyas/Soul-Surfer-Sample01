import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/surfData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            FAQ
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-3 leading-relaxed">
            The questions we hear most before a first lesson. Anything else, just ask.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-[#d8d1c3] border-y border-[#d8d1c3]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif-cormorant text-xl sm:text-2xl tracking-wide transition-colors ${isOpen ? 'text-[#2a362a]' : 'text-[#4a443b] group-hover:text-[#2a362a]'}`}>
                    {faq.question}
                  </span>
                  <span className="p-1.5 rounded-full border border-[#8a8174]/40 text-[#2a362a] shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448] pb-5 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
