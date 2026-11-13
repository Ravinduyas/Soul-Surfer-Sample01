import React from 'react';
import { PageHero } from '../components/PageHero';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { ActivityStoriesSection } from '../components/ActivityStoriesSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { ACTIVITY_FAQS, IMAGES } from '../data/surfData';

export const ActivitiesPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Boat parties • Beach days • New friends"
      title="Activities"
      intro="More than just surf. Group events every day, a legendary weekly boat party, and stories you'll tell for years - whether you arrive with friends or on your own."
      image={IMAGES.activitiesHero}
      imageAlt="Friends sharing coconuts on the beach in Weligama"
    />
    <ActivitiesSection />
    <ActivityStoriesSection />
    <FaqSection
      id="good-to-know"
      title="GOOD TO KNOW"
      intro="What's included, what to do between sessions, and the day trips we arrange from camp."
      items={ACTIVITY_FAQS}
    />
    <CtaBanner title="BOOK YOUR SPOT NOW" />
  </>
);
