import React from 'react';
import { PageHero } from '../components/PageHero';
import { LessonsSection } from '../components/LessonsSection';
import { PricingSection } from '../components/PricingSection';
import { ScheduleSection } from '../components/ScheduleSection';
import { IMAGES } from '../data/surfData';

export const LessonsPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Learn • Progress • Repeat"
      title="Surf Lessons"
      intro="Small groups, certified coaches and the right wave for your level. Choose a lesson, pick a package, and find a session on the weekly timetable."
      image={IMAGES.lessonsHero}
      imageAlt="Clear wave breaking close to shore"
    />
    <LessonsSection />
    <PricingSection />
    <ScheduleSection />
  </>
);
