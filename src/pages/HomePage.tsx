import React from 'react';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { LessonsSection } from '../components/LessonsSection';
import { AboutSection } from '../components/AboutSection';
import { CampsSection } from '../components/CampsSection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <StatsStrip />
    <LessonsSection showPageLink />
    <AboutSection />
    <CampsSection showPageLink />
    <CtaBanner />
  </>
);
