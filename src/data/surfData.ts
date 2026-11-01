import { Lesson, AboutFeatureNode, CampItem, ScheduleSlot, PricePackage, Coach, FaqItem } from '../types';

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// School details: shown in the header, footer and contact page
export const SCHOOL = {
  name: 'BRAVE',
  tagline: 'Surf School',
  location: 'Weligama Bay, Sri Lanka',
  address: 'Main Beach Road, Weligama 81700, Sri Lanka',
  phone: '+94 77 000 0000',
  email: 'hello@bravesurf.school',
  hoursWeek: 'Mon - Fri: 06:00 AM - 06:30 PM',
  hoursWeekend: 'Sat - Sun: 06:00 AM - 07:00 PM',
  established: 'EST. 2026',
};

export const IMAGES = {
  homeHero: img('1455729552865-3658a5d39692', 2400),
  aboutHero: img('1509914398892-963f53e6e2f1', 2400),
  lessonsHero: img('1500375592092-40eb2168fd21', 2400),
  campsHero: img('1513569143478-b38b2c0ef97f', 2400),
  contactHero: img('1505142468610-359e7d316be0', 2400),
  boardRack: img('1537519646099-335112f03225', 800),
  featuredCamp: img('1468413253725-0d5181091126'),
  barrel: img('1459745930869-b3d0d72c3cbb', 2000),
  sunsetWalk: img('1415931633537-351070d20b81', 1000),
};

export const LESSONS: Lesson[] = [
  {
    id: 'beginner',
    name: 'Beginner lesson',
    subtitle: 'Your First Wave, Safely Caught',
    description: 'Start on the sand with ocean safety and pop-up drills, then head into the whitewash with a coach at your side. Most first-timers stand up in their very first session.',
    benefits: ['Ocean safety & rip awareness', 'Pop-up technique on the sand', 'Riding whitewash waves', 'Soft-top board & rash vest included'],
    duration: '2 hours',
    level: 'Easy',
    price: '$35',
    image: img('1531722569936-825d3dd91b15'),
    coach: 'Nimal Silva'
  },
  {
    id: 'intermediate',
    name: 'Intermediate coaching',
    subtitle: 'From Whitewash to Green Waves',
    description: 'Learn to paddle out through the break, read sets, and take off on unbroken waves. We focus on positioning, timing and your first real trims along the face.',
    benefits: ['Duck dives & turtle rolls', 'Reading sets and peaks', 'Angled take-offs', 'Lineup etiquette'],
    duration: '2 hours',
    level: 'Moderate',
    price: '$45',
    image: img('1530870110042-98b2cb110834'),
    coach: 'Maya Torres'
  },
  {
    id: 'advanced',
    name: 'Advanced performance',
    subtitle: 'Sharpen Turns, Speed & Style',
    description: 'Targeted coaching on the reef and point breaks, backed by video analysis after every session. Refine bottom turns, cutbacks and rail work with a clear plan to progress.',
    benefits: ['Filmed sessions & video review', 'Bottom turns & cutbacks', 'Speed generation', 'Board choice advice'],
    duration: '2.5 hours',
    level: 'Challenging',
    price: '$55',
    image: img('1502680390469-be75c86b636f'),
    coach: 'Dilan Fernando'
  },
  {
    id: 'private',
    name: 'Private coaching',
    subtitle: 'One Coach, One Surfer, Full Focus',
    description: 'A session built entirely around you: your level, your goals, your pace. Ideal for nervous beginners, couples, or surfers chasing one specific breakthrough.',
    benefits: ['Fully tailored session plan', 'Flexible timing with the tide', 'Fastest progression', 'Board & gear included'],
    duration: '1.5 hours',
    level: 'Tailored',
    price: '$70',
    image: img('1502933691298-84fc14542831'),
    coach: 'Lena Brandt'
  }
];

export const ABOUT_NODES: AboutFeatureNode[] = [
  {
    id: 'coaches',
    label: 'CERTIFIED COACHES',
    title: 'Qualified, Local Surf Coaches',
    description: 'Every coach holds an ISA surf instructor certificate and lifeguard training, and has surfed these breaks for years.'
  },
  {
    id: 'safety',
    label: 'SAFETY FIRST',
    title: 'Small Groups, Close Eyes',
    description: 'A maximum of six surfers per coach, soft-top boards for beginners, and spots chosen each day for the conditions.'
  },
  {
    id: 'progress',
    label: 'REAL PROGRESS',
    title: 'A Clear Path for Every Level',
    description: 'From your first pop-up to your first barrel, our lessons build on each other so you always know what comes next.'
  },
  {
    id: 'house',
    label: 'BEACH HOUSE',
    title: 'Steps from the Sand',
    description: 'Board storage, outdoor showers, a shaded deck and fresh coconuts waiting for you after every session.'
  }
];

export const CAMPS: CampItem[] = [
  {
    id: 'surf-camp',
    title: '7-Day Surf Camp',
    subtitle: 'Surf, Eat, Sleep, Repeat',
    type: 'camp',
    date: 'Every Saturday, Nov - Apr',
    location: 'Brave Beach House',
    description: 'A full week of daily lessons, video analysis, shared meals and sunsets with surfers from around the world.',
    image: img('1520116468816-95b69f847357', 800),
    price: '$590',
    verticalLabel: 'SURF CAMP'
  },
  {
    id: 'sunrise',
    title: 'Sunrise Session',
    subtitle: 'First Light, Empty Lineup',
    type: 'session',
    date: 'Every Tue & Thu 06:00 AM',
    location: 'Main Beach',
    description: 'Paddle out at dawn when the wind is calm and the water is glassy, then share breakfast on the deck.',
    image: img('1415931633537-351070d20b81', 800),
    price: '$40',
    verticalLabel: 'SUNRISE SURF'
  },
  {
    id: 'boat-trip',
    title: 'Boat Surf Trip',
    subtitle: 'Reach the Uncrowded Reefs',
    type: 'trip',
    date: 'Dec 6, 2026',
    location: 'Southern Reef Breaks',
    description: 'A day on the boat chasing quiet reef breaks along the coast, with a guide, lunch on board and plenty of waves.',
    image: img('1526761122248-c31c93f8b2b9', 800),
    price: '$120',
    verticalLabel: 'BOAT TRIP'
  },
  {
    id: 'surf-yoga',
    title: 'Surf & Yoga Week',
    subtitle: 'Balance On and Off the Board',
    type: 'retreat',
    date: 'Jan 10 - Jan 17, 2027',
    location: 'Brave Beach House',
    description: 'Morning surf coaching paired with sunset yoga for mobility, breath control and recovery between sessions.',
    image: img('1506953823976-52e1fdc0149a', 800),
    price: '$790',
    verticalLabel: 'SURF & YOGA'
  }
];

export const CAMP_INCLUDES: string[] = [
  '7 nights at the Brave Beach House',
  '10 surf lessons with certified coaches',
  'Daily breakfast and 4 group dinners',
  'Unlimited board & rash vest rental',
  'Two filmed sessions with video review',
  'Airport pickup on request'
];

export const WEEKLY_SCHEDULE: ScheduleSlot[] = [
  { id: '1', day: 'Monday', time: '06:30 - 08:30 AM', title: 'Morning Beginner Lesson', coach: 'Nimal Silva', level: 'Beginner', spot: 'Main Beach', capacity: 8, enrolled: 6 },
  { id: '2', day: 'Monday', time: '09:00 - 11:00 AM', title: 'Green Wave Coaching', coach: 'Maya Torres', level: 'Intermediate', spot: 'Point Break', capacity: 6, enrolled: 4 },
  { id: '3', day: 'Monday', time: '04:00 - 06:00 PM', title: 'Sunset Beginner Lesson', coach: 'Nimal Silva', level: 'Beginner', spot: 'Main Beach', capacity: 8, enrolled: 7 },
  { id: '4', day: 'Tuesday', time: '06:00 - 08:00 AM', title: 'Sunrise Session', coach: 'Maya Torres', level: 'All Levels', spot: 'Main Beach', capacity: 8, enrolled: 5 },
  { id: '5', day: 'Tuesday', time: '07:00 - 09:30 AM', title: 'Reef Performance Clinic', coach: 'Dilan Fernando', level: 'Advanced', spot: 'Reef Break', capacity: 5, enrolled: 4 },
  { id: '6', day: 'Wednesday', time: '06:30 - 08:30 AM', title: 'Morning Beginner Lesson', coach: 'Nimal Silva', level: 'Beginner', spot: 'Main Beach', capacity: 8, enrolled: 3 },
  { id: '7', day: 'Wednesday', time: '03:30 - 05:30 PM', title: 'Take-off & Trim Workshop', coach: 'Maya Torres', level: 'Intermediate', spot: 'Point Break', capacity: 6, enrolled: 6 },
  { id: '8', day: 'Thursday', time: '06:00 - 08:00 AM', title: 'Sunrise Session', coach: 'Lena Brandt', level: 'All Levels', spot: 'Main Beach', capacity: 8, enrolled: 6 },
  { id: '9', day: 'Thursday', time: '09:00 - 11:30 AM', title: 'Video Analysis Session', coach: 'Dilan Fernando', level: 'Advanced', spot: 'Reef Break', capacity: 5, enrolled: 2 },
  { id: '10', day: 'Friday', time: '06:30 - 08:30 AM', title: 'Morning Beginner Lesson', coach: 'Lena Brandt', level: 'Beginner', spot: 'Main Beach', capacity: 8, enrolled: 5 },
  { id: '11', day: 'Friday', time: '04:00 - 06:00 PM', title: 'Green Wave Coaching', coach: 'Maya Torres', level: 'Intermediate', spot: 'Point Break', capacity: 6, enrolled: 3 },
  { id: '12', day: 'Saturday', time: '07:00 - 09:00 AM', title: 'Weekend Family Lesson', coach: 'Nimal Silva', level: 'All Levels', spot: 'Main Beach', capacity: 10, enrolled: 8 },
  { id: '13', day: 'Saturday', time: '09:30 - 12:00 PM', title: 'Reef Performance Clinic', coach: 'Dilan Fernando', level: 'Advanced', spot: 'Reef Break', capacity: 5, enrolled: 5 },
  { id: '14', day: 'Sunday', time: '07:00 - 09:00 AM', title: 'Sunday Fun Session', coach: 'Lena Brandt', level: 'All Levels', spot: 'Main Beach', capacity: 10, enrolled: 4 }
];

export const PACKAGES: PricePackage[] = [
  {
    id: 'single',
    name: 'Single Lesson',
    price: '$35',
    unit: 'per lesson',
    description: 'Try surfing for the first time or drop in for one session.',
    features: ['2-hour group lesson', 'Soft-top board & rash vest', 'Beach photos of your session']
  },
  {
    id: 'five-pack',
    name: '5-Lesson Pack',
    price: '$160',
    unit: 'use within 2 weeks',
    description: 'The fastest way to go from standing up to riding green waves.',
    features: ['Five 2-hour lessons', 'Board rental between lessons', 'One filmed session with review', 'Progress plan from your coach'],
    highlighted: true
  },
  {
    id: 'week',
    name: 'Unlimited Week',
    price: '$280',
    unit: '7 days',
    description: 'Surf as much as your arms allow, at any level on the timetable.',
    features: ['Unlimited group lessons', 'Unlimited board rental', 'Two filmed sessions', 'Sunrise session included']
  }
];

export const COACHES: Coach[] = [
  { id: 'nimal', name: 'Nimal Silva', role: 'Head Coach', bio: 'Grew up on this bay and has taught thousands of first-timers to stand up. Calm in the water and endlessly patient.', years: 12 },
  { id: 'maya', name: 'Maya Torres', role: 'Intermediate Coach', bio: 'A former competitive longboarder who loves helping surfers catch their first unbroken waves.', years: 8 },
  { id: 'dilan', name: 'Dilan Fernando', role: 'Performance Coach', bio: 'Runs our reef clinics and video sessions. Known for breaking down turns into simple, fixable steps.', years: 10 },
  { id: 'lena', name: 'Lena Brandt', role: 'Private & Yoga Coach', bio: 'Combines surf coaching with yoga for mobility and breath, and leads our Surf & Yoga weeks.', years: 6 }
];

export const FAQS: FaqItem[] = [
  { question: 'Do I need any experience?', answer: 'No. Our beginner lessons start on the sand and assume you have never touched a surfboard. You only need to be comfortable in the water.' },
  { question: 'Do I have to be a strong swimmer?', answer: 'You should be able to swim and feel relaxed in waist-deep water. Beginners stay in shallow whitewash with a coach close by at all times.' },
  { question: 'What should I bring?', answer: 'Swimwear, reef-safe sunscreen, a towel and a water bottle. We provide the board, leash and rash vest.' },
  { question: 'When is the best season?', answer: 'The south coast season runs from November to April, with consistent waves and offshore mornings. Lessons are tide-dependent, so times may shift slightly.' },
  { question: 'What if the conditions are bad?', answer: 'Safety comes first. If the ocean is too big or messy, we move your lesson to a better spot or reschedule it free of charge.' }
];
