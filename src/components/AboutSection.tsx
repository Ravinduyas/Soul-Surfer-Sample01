import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ABOUT_NODES, IMAGES } from '../data/surfData';
import { Waves, ArrowUpRight } from 'lucide-react';

// Where each of the four nodes sits around the circle (top, right, bottom, left)
const NODE_POSITIONS = [
  { button: 'top-0 left-1/2 -translate-x-1/2 -translate-y-2 flex-col', labelFirst: true, label: 'px-3 py-1 tracking-[0.18em]' },
  { button: 'right-0 top-1/2 translate-x-3 -translate-y-1/2 gap-2', labelFirst: false, label: 'max-w-[90px] text-left tracking-[0.16em] leading-tight' },
  { button: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-2 flex-col', labelFirst: false, label: 'px-3 py-1 tracking-[0.18em]' },
  { button: 'left-0 top-1/2 -translate-x-3 -translate-y-1/2 gap-2', labelFirst: true, label: 'max-w-[80px] text-right tracking-[0.16em] leading-tight' },
];

export const AboutSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>(ABOUT_NODES[0].id);
  const activeNode = ABOUT_NODES.find((n) => n.id === activeNodeId) || ABOUT_NODES[0];

  return (
    <section id="why-brave" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: STORY */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              WHY BRAVE
            </h2>

            <div className="space-y-4 font-sans-body text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
              <p className="font-normal text-[#2a362a]">
                Surfing takes a little courage. We're here to make that first paddle out feel easy.
              </p>
              <p>
                Brave started with a few boards, a stretch of sand, and a simple belief: anyone can learn to surf with the right coach and the right waves.
              </p>
              <p>
                Our lessons are small, patient and built around you. We read the ocean every morning, choose the safest spot for your level, and stay right beside you in the water.
              </p>
              <p>
                Between sessions, our beach house is where surfers swap stories, rinse off the salt, and plan tomorrow's waves.
              </p>
            </div>

            <Link
              to="/about"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              Meet the coaches <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* RIGHT COLUMN: CIRCULAR DIAGRAM SHOWCASE */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              {/* FAINT OUTER CIRCLE RING */}
              <div className="absolute inset-4 sm:inset-6 border border-[#3d372e]/20 rounded-full pointer-events-none" />

              {/* CENTER CARD: SURFBOARD PHOTO WITH "BRAVE" */}
              <div className="relative z-10 w-44 sm:w-52 h-64 sm:h-72 rounded-xl overflow-hidden shadow-2xl bg-black border border-white/20 group">
                <img
                  src={IMAGES.boardRack}
                  alt="Surfboards lined up at the Brave beach house"
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center p-4">
                  <span className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-[0.2em] uppercase text-white drop-shadow-md text-center">
                    BRAVE
                  </span>
                </div>
              </div>

              {/* FOUR NODES AROUND THE CIRCLE */}
              {ABOUT_NODES.slice(0, 4).map((node, idx) => {
                const pos = NODE_POSITIONS[idx];
                const isActive = activeNodeId === node.id;
                const dot = (
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all shrink-0 ${
                      isActive
                        ? 'border-[#2a362a] bg-[#2a362a] scale-125'
                        : 'border-[#6b6255] bg-[#f4efe6] group-hover:border-[#2a362a]'
                    }`}
                  />
                );
                const label = (
                  <div
                    className={`${pos.label} text-[0.625rem] sm:text-xs font-serif-cormorant uppercase transition-all duration-300 ${
                      isActive ? 'text-[#2a362a] font-semibold scale-105' : 'text-[#6b6255] hover:text-[#2a362a]'
                    }`}
                  >
                    {node.label}
                  </div>
                );
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`absolute ${pos.button} group focus:outline-none z-20 flex items-center`}
                  >
                    {pos.labelFirst ? <>{label}{dot}</> : <>{dot}{label}</>}
                  </button>
                );
              })}
            </div>

            {/* DYNAMIC NODE DETAIL DISPLAY CARD */}
            <div className="w-full mt-6 bg-[#e9e3d6] rounded-2xl p-5 border border-[#d6cfc0] shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-full bg-[#2a362a] text-[#f4efe6] shrink-0 mt-0.5">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif-cormorant text-lg font-normal tracking-wide text-[#2a362a]">
                      {activeNode.title}
                    </h4>
                    <p className="font-sans-body text-xs font-light text-[#5c5448] leading-relaxed mt-1">
                      {activeNode.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
