import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2 } from 'lucide-react';

interface CallbackModalProps {
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    convenientTime: 'As soon as possible',
    topic: 'Surf Lessons'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-md rounded-3xl bg-[#f4efe6] text-[#3d372e] p-6 sm:p-8 shadow-2xl border border-[#dcd4c4]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#e6dfd1] text-[#3d372e] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-4">
            <div className="p-3.5 rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-cormorant text-2xl font-light tracking-wide text-[#2a362a]">
              Callback Requested
            </h3>
            <p className="font-sans-body text-xs font-light text-[#5c5448] leading-relaxed">
              We will call <span className="font-semibold text-[#2a362a]">{formData.phone}</span> ({formData.convenientTime}).
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#2a362a] text-white text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2a362a] mb-1">
              <PhoneCall className="w-4 h-4 text-emerald-700" />
              <span>Talk to a Coach</span>
            </div>
            <h3 className="font-serif-cormorant text-3xl font-light tracking-[0.14em] uppercase text-[#2a362a] mb-6">
              ORDER A CALL
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans-body text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sam Rivera"
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

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  Best Time to Call
                </label>
                <select
                  value={formData.convenientTime}
                  onChange={(e) => setFormData({ ...formData, convenientTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                >
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1 text-[#3d372e]">
                  What's It About?
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                >
                  <option value="Surf Lessons">Surf Lessons</option>
                  <option value="Lesson Packages">Lesson Packages & Prices</option>
                  <option value="Private Coaching">Private Coaching</option>
                  <option value="Surf Camps">Surf Camps & Trips</option>
                  <option value="Group Booking">Group or Family Booking</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md"
                >
                  Request Callback
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
