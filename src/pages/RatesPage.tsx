import React from 'react';
import { PageHero } from '../components/PageHero';
import { PricingSection } from '../components/PricingSection';
import { RatesTableSection } from '../components/RatesTableSection';
import { RoomsSection } from '../components/RoomsSection';
import { BookingTermsSection } from '../components/BookingTermsSection';
import { CtaBanner } from '../components/CtaBanner';
import { IMAGES } from '../data/surfData';

export const RatesPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Surf packages • Rooms • Weekly rates"
      title="Rates"
      intro="Simple, transparent weekly packages to suit your surf goals - 7 nights in a brand-new ensuite room, breakfast and dinner, coaching, video analysis and daily social activities."
      image={IMAGES.ratesHero}
      imageAlt="Surfers on the beach at Weligama"
    />
    <PricingSection />
    <RatesTableSection />
    <RoomsSection />
    <BookingTermsSection />
    <CtaBanner title="YOUR SURF WEEK STARTS HERE" />
  </>
);
