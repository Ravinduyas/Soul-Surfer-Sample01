import React from 'react';
import { PageHero } from '../components/PageHero';
import { CampsSection } from '../components/CampsSection';
import { CampIncludesSection } from '../components/CampIncludesSection';
import { CtaBanner } from '../components/CtaBanner';
import { IMAGES } from '../data/surfData';

export const CampsPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Surf weeks • Dawn sessions • Boat trips"
      title="Surf Camps"
      intro="Make it more than a lesson. Stay with us for a week of waves, join a sunrise paddle, or head out by boat to the quiet reefs."
      image={IMAGES.campsHero}
      imageAlt="Surfer on a wave at sunset"
    />
    <CampsSection />
    <CampIncludesSection />
    <CtaBanner
      title="YOUR SURF WEEK STARTS HERE"
      text="Camps start every Saturday through the season. Spots are limited so every surfer gets proper coaching."
    />
  </>
);
