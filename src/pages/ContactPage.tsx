import React from 'react';
import { PageHero } from '../components/PageHero';
import { ContactsSection } from '../components/ContactsSection';
import { FaqSection } from '../components/FaqSection';
import { IMAGES } from '../data/surfData';

export const ContactPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Say hello"
      title="Contact"
      intro="Not sure which lesson suits you, or planning a trip? Get in touch and a coach will help you choose."
      image={IMAGES.contactHero}
      imageAlt="Aerial view of a wave rolling onto the beach"
    />
    <ContactsSection />
    <FaqSection />
  </>
);
