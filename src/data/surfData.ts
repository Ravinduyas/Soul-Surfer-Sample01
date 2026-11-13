import { SurfPackage, Room, AboutFeatureNode, Activity, DayMoment, Facility, FaqItem } from '../types';

// Photos live in public/images; BASE_URL keeps them working when the site is served from a sub-path
export const photo = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

// Camp details: shown in the header, footer and contact page
export const CAMP = {
  name: 'SOUL SURFER',
  tagline: 'Camp Weligama',
  location: 'Weligama, Sri Lanka',
  addressLines: ['No. 140/13, 3rd Lane, Paranakade', 'Weligama 81700, Sri Lanka'],
  plusCode: 'XCCG+M9P Weligama',
  phone: '+94 76 696 6543',
  whatsapp: 'https://wa.me/94766966543',
  email: 'stay@soulsurfercamp.com',
  hours: 'Reception 07:00–21:00, daily',
  mapsUrl: 'https://maps.app.goo.gl/9zyGn3aWbNUL7ey18',
  mapsEmbed: 'https://www.google.com/maps?q=XCCG%2BM9P+Weligama,+Sri+Lanka&z=16&output=embed',
  instagram: 'https://www.instagram.com/soulsurfercamp/',
  badge: 'NEW CAMP',
};

export const IMAGES = {
  homeHero: photo('hero-faq.jpg'),
  ratesHero: photo('hero-rates.jpg'),
  activitiesHero: photo('hero-activities.jpg'),
  campHero: photo('package-moderate.jpg'),
  contactHero: photo('gallery-2.jpg'),
  blogHero: photo('package-yoga.jpg'),
  surfHosts: photo('3.jpg'),
  rooftop: photo('7.jpg'),
  pool: photo('soulcamp2.jpg'),
  dining: photo('soulcamp3.jpg'),
  reception: photo('soulcamp5.jpg'),
  newRoom: photo('room-3.jpg'),
  boatParty: photo('boat.jpg'),
  ctaBanner: photo('package-full.jpg'),
};

export const PACKAGES: SurfPackage[] = [
  {
    id: 'moderate',
    name: 'Moderate Surf',
    subtitle: 'Perfect for intermediate surfers',
    description: 'Six surf lessons or guided surf sessions across the week, two yoga sessions, and plenty of time left over for the rooftop pool, the town and the bay.',
    surfLessons: '6 lessons per week',
    yoga: '2 sessions per week',
    rates: { dorm: 390, single: 690, double: 490 },
    image: photo('package-moderate.jpg'),
  },
  {
    id: 'surf-yoga',
    name: 'Surf & Yoga',
    subtitle: 'Surf plus daily yoga',
    description: 'Six surf lessons balanced with yoga every single day, at sunrise or sunset on the rooftop deck. The calmer way to spend a week in Weligama.',
    surfLessons: '6 lessons per week',
    yoga: 'Sunrise or sunset, every day',
    rates: { dorm: 450, single: 750, double: 550 },
    image: photo('package-yoga.jpg'),
  },
  {
    id: 'full',
    name: 'Full Surf',
    subtitle: 'Maximum surf progression',
    description: 'Eleven surf lessons in a week, with a second session most afternoons. Built for surfers who want to leave Weligama riding at a new level.',
    surfLessons: '11 lessons per week',
    yoga: '2 sessions per week',
    rates: { dorm: 490, single: 790, double: 590 },
    image: photo('package-full.jpg'),
    highlighted: true,
  },
];

// Included in every package
export const PACKAGE_INCLUDES: string[] = [
  '7 nights accommodation',
  'Breakfast every day',
  'Dinner every day except Sunday',
  'Surf theory classes',
  'Video analysis',
  'Daily social activities',
];

export const ROOMS: Room[] = [
  {
    id: 'dorm',
    name: 'Mixed Dormitory',
    guests: 'Up to 6 guests',
    summary: 'Affordable beds in a friendly shared dorm - perfect for social surfers and groups.',
    features: ['Max 6 beds', 'Ensuite bathroom', 'Air conditioning', 'Lockers'],
    priceNote: 'per bed / week',
    images: ['dorm-1.jpg', 'dorm-2.jpg', 'dorm-3.jpg', 'dorm-4.jpg', 'dorm-5.jpg'].map(photo),
  },
  {
    id: 'single',
    name: 'Private Single Ensuite',
    guests: '1 guest',
    summary: 'Comfortable single rooms with private ensuite bathrooms for solo travellers.',
    features: ['Brand-new room', 'Ensuite with hot water', 'Air conditioning', 'Quiet & private'],
    priceNote: 'per room / week',
    images: ['single-room-1.jpg', 'single-room-2.jpg', 'single-room-3.jpg', 'single-room-4.jpg', 'single-room-5.jpg'].map(photo),
  },
  {
    id: 'double',
    name: 'Private Double / Twin Ensuite',
    guests: '2 guests',
    summary: 'Spacious double or twin rooms with ensuite - ideal for couples or friends.',
    features: ['Double or twin beds', 'Ensuite bathroom', 'Air conditioning', 'Balcony door'],
    priceNote: 'per person / week',
    images: ['double-room-1.jpg', 'double-room-2.jpg', 'double-room-3.jpg', 'double-room-4.jpg', 'double-room-5.jpg'].map(photo),
  },
];

export const ABOUT_NODES: AboutFeatureNode[] = [
  {
    id: 'beach',
    label: '20 SEC TO BEACH',
    title: '20 Seconds to the Beach',
    description: 'An independent boutique retreat in Weligama - a 20-second walk to the sand, 5 to 10 minutes to town.',
  },
  {
    id: 'rooftop',
    label: 'ROOFTOP POOL',
    title: 'Rooftop Pool & Sea-View Dining',
    description: 'An infinity pool overlooking the ocean, and a rooftop restaurant to unwind in between sessions.',
  },
  {
    id: 'rooms',
    label: 'ALL ENSUITE',
    title: 'Boutique Rooms, All Ensuite',
    description: 'Upscale private and twin rooms plus mixed dorms - every one with its own bathroom.',
  },
  {
    id: 'rhythm',
    label: 'OWN RHYTHM',
    title: 'Its Own Rhythm, Proven Roots',
    description: 'A camp of its own with a daily surf schedule to match, run by experienced surf hosts in Weligama.',
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'boat-party',
    title: 'Boat Party',
    eyebrow: 'Legendary nights',
    description: "#BOATPARTY! If you've ever attended our legendary sunset boat party, you'll never forget it. Music, the open bay and the whole camp on deck - it runs every week.",
    image: photo('boat.jpg'),
    gallery: ['acti-1.jpg', 'acti-2.jpg', 'acti-3.jpg', 'boat3.jpg'].map(photo),
    verticalLabel: 'BOAT PARTY',
  },
  {
    id: 'meet-people',
    title: 'Meet New People From All Around The World',
    eyebrow: 'Your new crew',
    description: "We have plenty of activities for you and group events every day. No matter if you're with friends or travelling solo, you are never alone at Soul Surfer Camp.",
    image: photo('acti-5.jpg'),
    gallery: ['friends1.jpg', 'acti-5.jpg', 'people2.jpg'].map(photo),
    verticalLabel: 'NEW PEOPLE',
  },
  {
    id: 'surf-holiday',
    title: 'Have an Unforgettable Surf Holiday',
    eyebrow: 'However you surf',
    description: 'No matter if you have ever surfed before or not. We at Soul Surfer Camp take care of your surfing experience - from complete beginners to advanced surfers.',
    image: photo('act1.jpg'),
    gallery: ['main1.jpg', 'main3.jpg', 'main2.jpg'].map(photo),
    verticalLabel: 'SURF HOLIDAY',
  },
  {
    id: 'friends',
    title: 'Make New Friends For Life',
    eyebrow: 'Beyond the trip',
    description: 'Once you have stayed at Soul Surfer Camp in Weligama, you are always part of the family.',
    image: photo('act3.jpg'),
    gallery: ['info_4.jpg', 'info_5.jpg', 'info_6.jpg'].map(photo),
    verticalLabel: 'FRIENDS FOR LIFE',
  },
];

export const DAILY_RHYTHM: DayMoment[] = [
  { id: 'morning', label: 'Morning', title: 'First light', items: ['Optional sunrise yoga', 'Breakfast on the rooftop', 'Surf lesson'], note: 'Dawn is when the bay is cleanest, so the main lesson runs early.' },
  { id: 'midday', label: 'Midday', title: 'Recharge', items: ['Rooftop lunch', 'Free time to explore'], note: 'Pool, cafés in town, or a nap - the middle of the day is yours.' },
  { id: 'afternoon', label: 'Afternoon', title: 'Back in the water', items: ['Second surf lesson (Full Surf package)', 'Free surf or explore Weligama'], note: 'Full Surf guests head out again; everyone else surfs, rests or explores.' },
  { id: 'sunset', label: 'Sunset', title: 'Golden hour', items: ['Optional sunset yoga', 'Rooftop sunset views'], note: 'The whole camp tends to end up on the rooftop as the sun drops.' },
  { id: 'evening', label: 'Evening', title: 'Together', items: ['Video analysis', 'Social dinner', 'Daily social events'], note: 'Review the day on screen, then dinner and the night’s event.' },
];

export const FACILITIES: Facility[] = [
  { id: 'pool', title: 'Rooftop Pool', caption: 'Infinity pool overlooking the ocean', description: 'Open to every guest all day - most of the camp ends up here between the morning surf and the evening session.', image: photo('soulcamp2.jpg') },
  { id: 'dining', title: 'Sea-View Dining', caption: 'Sea-view rooftop restaurant', description: 'Long timber tables and open sea views. Breakfast every day and dinner six nights a week are served up here.', image: photo('soulcamp3.jpg') },
  { id: 'rooms', title: 'New Rooms', caption: 'Brand new private rooms', description: 'Built for the camp’s opening rather than converted from an older guesthouse - every room is ensuite.', image: photo('room-3.jpg') },
  { id: 'reception', title: 'Reception', caption: 'Reception and lounge', description: 'Lounge seating opening onto a courtyard, with the team on hand from 07:00 to 21:00 every day.', image: photo('soulcamp5.jpg') },
];

// What makes the camp different (The Camp page)
export const CAMP_DIFFERENCES: string[] = [
  'Location: Weligama - own dedicated location',
  'Rooftop infinity pool with panoramic sea view',
  'Rooftop restaurant with sea view',
  'Runs independently - own schedule & sessions',
];

export const GALLERY: { src: string; alt: string }[] = [
  { src: photo('f1.jpg'), alt: 'Aerial view of fishing boats on the sand at Weligama' },
  { src: photo('f2.jpg'), alt: 'Train ride through the green hill country of Sri Lanka' },
  { src: photo('f3.jpg'), alt: 'Guest relaxing with a book at the camp' },
  { src: photo('gallery-1.jpg'), alt: 'Palm-lined beach path at sunset' },
  { src: photo('gallery-2.jpg'), alt: 'Palm trees on a small island off the south coast' },
  { src: photo('gallery-3.jpg'), alt: 'Sunset yoga session on the rooftop' },
];

export const FAQS: FaqItem[] = [
  { question: 'What makes Soul Surfer Camp different from other surf camps in Weligama?', answer: 'Soul Surfer is a boutique surf retreat in Weligama. We combine premium rooms, dedicated surf coaching, a rooftop infinity pool and restaurant, and a quieter, more personal atmosphere - while staying just steps from the beach. Expect smaller groups, experienced coaches, and local knowledge that gets you into the right waves.' },
  { question: 'What surf levels do you cater for?', answer: 'We welcome surfers of all levels, from complete beginners taking their very first lesson to experienced surfers looking to improve their technique or explore Sri Lanka’s best reef breaks. Our experienced coaches place you in the right group based on your ability, ensuring safe, personalised progression. Throughout the week, we also provide video analysis sessions, helping you review your surfing, receive detailed feedback, and progress faster in and out of the water.' },
  { question: 'Do I need my own board?', answer: 'No - you don’t need to bring your own board. We provide a range of boards for all levels (softboards for beginners, performance boards for advanced surfers). If you prefer to travel with your own gear we have secure storage too.' },
  { question: 'Where is Soul Surfer Camp located?', answer: 'Soul Surfer Camp is located in Weligama, Sri Lanka, just a short walk from the beach and some of the country’s best beginner and intermediate surf breaks. Shops, cafés, restaurants, and nightlife are all within easy reach.' },
  { question: 'What’s included in your surf camp packages?', answer: 'Our surf camp packages include accommodation, daily breakfast, surf lessons (depending on your package), surfboard use during lessons, professional coaching, video analysis, and access to our daily social activities. Guests also join our signature community events, including boat parties, live music nights, and pool parties.' },
  { question: 'Why choose a surf camp in Weligama, Sri Lanka?', answer: 'Weligama is one of the best places to learn to surf in Sri Lanka, thanks to its warm water, consistent waves, and sandy-bottom beach break. It’s suitable for complete beginners while also offering nearby reef breaks for intermediate and advanced surfers, making it an ideal destination for surfers of all levels.' },
  { question: 'Can I join if I’m travelling solo?', answer: 'Absolutely! Many of our guests travel solo. Our daily activities, surf lessons, family dinners, and social events make it easy to meet like-minded travellers from around the world.' },
  { question: 'When is the best time to surf in Weligama?', answer: 'The best surfing season on Sri Lanka’s south coast is from October to May, with warm tropical weather and consistent waves. Our experienced instructors will choose the best surf spots each day based on the conditions and your ability.' },
  { question: 'Does Soul Surfer Camp have a pool?', answer: 'Yes. Soul Surfer Camp has a rooftop infinity pool overlooking the ocean, open to all guests throughout the day. It sits beside the rooftop restaurant, so most guests end up there between surf sessions – cooling off, reading, or watching the sunset over Weligama Bay before dinner is served.' },
  { question: 'Are all rooms ensuite?', answer: 'Yes. Every room at Soul Surfer Camp – the mixed dormitory, the private single and the private double or twin – has its own ensuite bathroom with hot water, plus air conditioning. The rooms are brand-new, built for the camp’s opening rather than converted from an older guesthouse.' },
  { question: 'How far is the beach from the camp?', answer: 'About 20 seconds on foot. The camp sits directly behind the beach at Paranakade, on the eastern end of Weligama Bay, so the surf break is in front of the camp. Weligama town, with its cafés, restaurants and surf shops, is a five to ten minute walk along the bay.' },
  { question: 'Is Soul Surfer Camp suitable for solo female travellers?', answer: 'Yes – around half of our guests travel alone, and many are women. Rooms lock, the dormitory is mixed but small, staff are on site through the evening, and the daily social programme means you meet the rest of the group on your first night rather than eating alone.' },
];

export const ACTIVITY_FAQS: FaqItem[] = [
  { question: 'What activities are included at Soul Surfer Camp?', answer: 'Every package includes daily social activities run by the camp team: sunset sessions on the rooftop, shared dinners six nights a week, live music nights and beach games, plus the weekly sunset boat party. Surf theory classes, video analysis and yoga sessions are also part of every package, not paid extras.' },
  { question: 'What can I do in Weligama between surf sessions?', answer: 'Most guests split the middle of the day between the rooftop pool and Weligama town, a short walk along the bay: cafés, smoothie bars, surf shops and a small market. Yoga runs at sunrise or sunset, and the camp can arrange a scooter, a massage or a tuk-tuk to Mirissa beach in minutes.' },
  { question: 'Which day trips run from the camp?', answer: 'Whale watching from Mirissa (December to April), the Dutch fort at Galle, the tea plantations and waterfalls inland around Deniyaya, and a snorkelling trip to Turtle Bay at Hiriketiya are the regular ones. The team books them for you; most leave after the morning surf so you never miss a lesson.' },
];

export const CAMP_FAQS: FaqItem[] = [
  { question: 'Which surf level is it best for?', answer: 'All of them. Complete beginners learn in the sandy whitewater of Weligama Bay, right in front of the camp, in small groups with a coach in the water. Improvers and intermediates are taken by tuk-tuk to the reef and point breaks around Midigama and Ahangama, ten to fifteen minutes away, once they are ready.' },
  { question: 'Is the rooftop infinity pool open to all guests?', answer: 'Yes. Every guest has full use of the rooftop throughout their stay – the infinity pool with its ocean view, the sun loungers, the restaurant where breakfast and dinner are served, and the yoga deck. Most days the whole camp ends up there between the morning surf and the evening session.' },
  { question: 'What social activities are included?', answer: 'Every package includes the daily social programme run by the camp team: sunset sessions on the rooftop, shared dinners six nights a week, live music nights, beach games and the weekly sunset boat trip. Day trips to Mirissa, Galle and the tea country can be arranged on request and usually leave after the morning surf.' },
];

// Booking terms (Rates and Contact pages)
export const BOOKING_TERMS = {
  inquiries: [
    'We’ll get back to you within 24 hours for all inquiries.',
    'Feel free to contact us with any specific requirements for your stay.',
    'A 25% non-refundable deposit is required to confirm your reservation.',
  ],
  cancellation: 'Full refund or free modification up to 21 days before your arrival date. (Not applicable for stays between 20 December and 5 January.)',
};
