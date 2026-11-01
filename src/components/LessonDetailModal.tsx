import React from 'react';
import { X, Clock, Gauge, User, CheckCircle2, Tag } from 'lucide-react';
import { Lesson } from '../types';

interface LessonDetailModalProps {
  lesson: Lesson;
  onClose: () => void;
  onBook: (lesson: Lesson) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({ lesson, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#f4efe6] text-[#3d372e] overflow-hidden shadow-2xl border border-[#dcd4c4] max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO IMAGE BANNER */}
        <div className="relative h-56 sm:h-64 w-full bg-[#1e271e] shrink-0">
          <img
            src={lesson.image}
            alt={lesson.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4efe6] via-black/20 to-transparent flex items-end p-6">
            <div>
              <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#2a362a] text-white font-medium shadow-md">
                {lesson.level === 'Tailored' ? 'Tailored to You' : `${lesson.level} Level`}
              </span>
              <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-[0.14em] uppercase text-[#2a362a] mt-2">
                {lesson.name}
              </h2>
            </div>
          </div>
        </div>

        {/* CONTENT BODY */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans-body">
          <p className="font-serif-cormorant text-xl text-[#2a362a] italic border-l-2 border-[#2a362a] pl-4">
            "{lesson.subtitle}"
          </p>

          <p className="text-xs sm:text-sm font-light leading-relaxed text-[#5c5448]">
            {lesson.description}
          </p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#e9e2d4] p-4 rounded-2xl border border-[#dcd4c4] text-center">
            <div>
              <Clock className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Duration</span>
              <span className="text-xs font-semibold text-[#2a362a]">{lesson.duration}</span>
            </div>
            <div>
              <Gauge className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Level</span>
              <span className="text-xs font-semibold text-[#2a362a]">{lesson.level}</span>
            </div>
            <div>
              <User className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Coach</span>
              <span className="text-xs font-semibold text-[#2a362a]">{lesson.coach}</span>
            </div>
            <div>
              <Tag className="w-4 h-4 mx-auto text-[#2a362a] mb-1" />
              <span className="text-[0.625rem] uppercase text-[#6b6255] font-semibold tracking-wider block">Price</span>
              <span className="text-xs font-semibold text-[#2a362a]">{lesson.price}</span>
            </div>
          </div>

          {/* WHAT YOU'LL LEARN */}
          <div>
            <h4 className="font-serif-cormorant text-xl text-[#2a362a] uppercase tracking-wider mb-3">
              What You'll Learn
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {lesson.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 text-xs text-[#4a443b]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4 flex items-center justify-end gap-4 border-t border-[#d8d1c3]">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider text-[#6b6255] hover:text-[#2a362a]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(lesson);
              }}
              className="px-8 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-all shadow-md"
            >
              Book Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
