import React from 'react';
import { PageHero } from '../components/PageHero';
import { StorySection } from '../components/StorySection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { GallerySection } from '../components/GallerySection';
import { LocationSection } from '../components/LocationSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { CAMP_FAQS, IMAGES } from '../data/surfData';

export const CampPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="New camp • Brand-new ensuite rooms"
      title="The Camp"
      intro="20 seconds to the beach, every room ensuite, an infinity rooftop pool and an ocean-view restaurant. An independent retreat in Weligama designed for the dedicated surfer."
      image={IMAGES.campHero}
      imageAlt="Surfers walking to the break with boards under their arms"
    />
    <StorySection />
    <FacilitiesSection />
    <GallerySection />
    <LocationSection />
    <FaqSection
      id="camp-faq"
      title="GOOD TO KNOW"
      intro="Quick answers about the camp itself. See the contact page for the full FAQ."
      items={CAMP_FAQS}
    />
    <CtaBanner />
  </>
);
