import React from 'react';
import { PageHero } from '../components/PageHero';
import { ContactsSection } from '../components/ContactsSection';
import { BookingTermsSection } from '../components/BookingTermsSection';
import { LocationSection } from '../components/LocationSection';
import { FaqSection } from '../components/FaqSection';
import { IMAGES } from '../data/surfData';

export const ContactPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Get in touch"
      title="Contact"
      intro="Questions about packages, rooms or the best time to come? Send us a message or WhatsApp us - we answer every inquiry within 24 hours."
      image={IMAGES.contactHero}
      imageAlt="Wide view of Weligama Bay"
    />
    <ContactsSection />
    <BookingTermsSection />
    <FaqSection />
    <LocationSection />
  </>
);
