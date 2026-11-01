import React from 'react';
import { PageHero } from '../components/PageHero';
import { StorySection } from '../components/StorySection';
import { CoachesSection } from '../components/CoachesSection';
import { CtaBanner } from '../components/CtaBanner';
import { IMAGES } from '../data/surfData';

export const AboutPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Who we are"
      title="About Brave"
      intro="A small surf school with a simple idea: the right coach and the right waves turn nervous first-timers into confident surfers."
      image={IMAGES.aboutHero}
      imageAlt="Surfer sitting on a board at sunrise"
    />
    <StorySection />
    <CoachesSection />
    <CtaBanner title="COME SURF WITH US" />
  </>
);
