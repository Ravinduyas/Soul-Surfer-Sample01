export interface Lesson {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  level: 'Easy' | 'Moderate' | 'Challenging' | 'Tailored';
  price: string;
  image: string;
  coach: string;
}

export interface AboutFeatureNode {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface CampItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'camp' | 'session' | 'trip' | 'retreat';
  date: string;
  location: string;
  description: string;
  image: string;
  price?: string;
  verticalLabel: string;
}

export interface ScheduleSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  title: string;
  coach: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  spot: 'Main Beach' | 'Point Break' | 'Reef Break';
  capacity: number;
  enrolled: number;
}

export interface PricePackage {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  years: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
