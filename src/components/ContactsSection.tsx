import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SCHOOL } from '../data/surfData';

export const ContactsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const details = [
    { icon: MapPin, heading: 'Beach House', body: <>{SCHOOL.address}</> },
    { icon: Phone, heading: 'Phone & WhatsApp', body: <>{SCHOOL.phone}</> },
    { icon: Mail, heading: 'Email', body: <>{SCHOOL.email}</> },
    { icon: Clock, heading: 'Opening Hours', body: <>{SCHOOL.hoursWeek}<br />{SCHOOL.hoursWeekend}</> },
  ];

  return (
    <section id="contacts" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e] mb-10 sm:mb-14">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: SCHOOL INFORMATION */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3 className="font-serif-cormorant text-3xl font-light tracking-wide text-[#2a362a] uppercase mb-4">
                FIND US ON THE BEACH
              </h3>
              <p className="font-sans-body text-xs sm:text-sm font-light text-[#5c5448] leading-relaxed">
                Questions about lessons, camps, or whether today's waves suit you? Drop by the beach house, message us on WhatsApp, or send a note below.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {details.map(({ icon: Icon, heading, body }) => (
                <div key={heading} className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#2a362a] text-[#f4efe6] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans-body text-xs font-semibold text-[#2a362a] uppercase tracking-wider">
                      {heading}
                    </h4>
                    <p className="font-sans-body text-xs text-[#5c5448] font-light mt-1">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="lg:col-span-7 bg-[#e9e2d4] border border-[#dcd4c4] p-8 sm:p-10 rounded-3xl shadow-md">
            <h3 className="font-serif-cormorant text-2xl font-light tracking-wide text-[#2a362a] uppercase mb-6">
              SEND US A MESSAGE
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-700 animate-bounce" />
                <h4 className="font-serif-cormorant text-3xl text-[#2a362a]">Message Received</h4>
                <p className="font-sans-body text-xs text-[#5c5448] max-w-md">
                  Thanks for reaching out to Brave. One of our coaches will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.6875rem] font-semibold text-[#3d372e] uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#f4efe6] border border-[#d2c9b8] text-xs text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6875rem] font-semibold text-[#3d372e] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f4efe6] border border-[#d2c9b8] text-xs text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold text-[#3d372e] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#f4efe6] border border-[#d2c9b8] text-xs text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                  />
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold text-[#3d372e] uppercase tracking-wider mb-1.5">
                    How Can We Help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your surf level, travel dates, or any question..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f4efe6] border border-[#d2c9b8] text-xs text-[#2a362a] focus:outline-none focus:border-[#2a362a] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
