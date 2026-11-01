import React, { useState } from 'react';
import { X, CheckCircle2, Waves } from 'lucide-react';
import { LESSONS, CAMPS, PACKAGES } from '../data/surfData';

interface BookingModalProps {
  onClose: () => void;
  preselectedItem?: string;
}

const BOOKABLE = [
  ...LESSONS.map((l) => l.name),
  ...PACKAGES.map((p) => p.name),
  ...CAMPS.map((c) => c.title),
];

export const BookingModal: React.FC<BookingModalProps> = ({
  onClose,
  preselectedItem = LESSONS[0].name
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    item: preselectedItem,
    experienceLevel: 'Never surfed',
    preferredDate: '',
    comments: ''
  });

  // Timetable sessions and other one-off picks are added to the list so they stay selected
  const options = BOOKABLE.includes(preselectedItem) ? BOOKABLE : [preselectedItem, ...BOOKABLE];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#f4efe6] text-[#3d372e] p-6 sm:p-8 shadow-2xl border border-[#dcd4c4] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#e6dfd1] text-[#3d372e] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="font-serif-cormorant text-3xl font-light tracking-wide text-[#2a362a]">
              Booking Request Sent
            </h3>
            <p className="font-sans-body text-xs sm:text-sm font-light text-[#5c5448] leading-relaxed max-w-sm">
              Thanks, <span className="font-semibold text-[#2a362a]">{formData.fullName}</span>. We've received your request for <span className="font-semibold text-[#2a362a]">{formData.item}</span>. A coach will confirm your spot and the best tide time by phone or email shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-full bg-[#2a362a] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2a362a] mb-1">
              <Waves className="w-4 h-4 text-amber-700" />
              <span>Surf with Brave</span>
            </div>
            <h3 className="font-serif-cormorant text-3xl font-light tracking-[0.14em] uppercase text-[#2a362a] mb-6">
              BOOK A LESSON
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans-body text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  Lesson, Package or Camp
                </label>
                <select
                  value={formData.item}
                  onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                >
                  {options.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                    Surf Experience
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                  >
                    <option value="Never surfed">Never surfed</option>
                    <option value="Standing in whitewash">Standing in whitewash</option>
                    <option value="Catching green waves">Catching green waves</option>
                    <option value="Experienced surfer">Experienced surfer</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  Anything We Should Know? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Group size, swimming confidence, injuries, or goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a] resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-lg"
                >
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
