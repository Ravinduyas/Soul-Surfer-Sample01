// A weekly surf & stay package (Moderate Surf, Surf & Yoga, Full Surf)
export interface SurfPackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  surfLessons: string;
  yoga: string;
  // Price per person for 7 nights, by room type id
  rates: Record<RoomId, number>;
  image: string;
  highlighted?: boolean;
}

export type RoomId = 'dorm' | 'single' | 'double';

export interface Room {
  id: RoomId;
  name: string;
  guests: string;
  summary: string;
  features: string[];
  priceNote: string;
  images: string[];
}

export interface AboutFeatureNode {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  gallery: string[];
  verticalLabel: string;
}

export interface DayMoment {
  id: string;
  label: string;
  title: string;
  items: string[];
  note: string;
}

export interface Facility {
  id: string;
  title: string;
  caption: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type BlogBlock =
  | { type: 'p' | 'heading' | 'quote'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  blocks: BlogBlock[];
}
