import React from 'react';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { AboutSection } from '../components/AboutSection';
import { PackagesSection } from '../components/PackagesSection';
import { RoomsSection } from '../components/RoomsSection';
import { DailyRhythmSection } from '../components/DailyRhythmSection';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { BlogPreviewSection } from '../components/BlogPreviewSection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <StatsStrip />
    <AboutSection />
    <PackagesSection showPageLink />
    <RoomsSection showPageLink />
    <DailyRhythmSection />
    <ActivitiesSection showPageLink />
    <BlogPreviewSection />
    <CtaBanner />
  </>
);
