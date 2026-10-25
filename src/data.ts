import { Amenity, ExperiencePackage, PriceRate, PropertyPhoto } from './types';

export const CONTACT_INFO = {
  phone: '+91 9989336222',
  phoneDisplay: '+91 9989336222',
  phoneSecondary: '+91 88866 55432',
  email: 'greenarchfarmsandevents@gmail.com',
  address: '1-4/2, Shamshabad Mandal, Chinna Golconda, Hyderabad, Telangana 501218',
  plusCode: '696Q+62 Chinna Golconda, Telangana',
  signSpecs: {
    sheet: 'Acrylic Sheet 10mm Thick',
    led: 'LED Strip Light Warm White (3000K)',
    mounting: 'SS 304 Grade Standoffs',
    dimensions: '6 ft (72 inch) x 3 ft (36 inch)'
  }
};

export const AMENITIES: Amenity[] = [
  {
    id: '5-acre-farmhouse',
    name: '5-Acre Farmhouse',
    description: 'A wide-spread private farm destination with green spaces, activity zones and peaceful corners.',
    category: 'Estate',
    icon: 'Trees',
    imageUrl: '/media/images/farm-photo-36.jpg'
  },
  {
    id: '500-seat-banquet',
    name: '500-Seat AC Banquet Hall',
    description: 'A spacious air-conditioned hall for birthdays, anniversaries, sangeet, haldi, corporate meets and events.',
    category: 'Events',
    icon: 'Home',
    imageUrl: '/media/images/farm-photo-06.jpg'
  },
  {
    id: 'lawn-permanent-stage',
    name: 'Lawn + Permanent Stage',
    description: 'A ready outdoor setting for celebrations, dining, entertainment and large gatherings.',
    category: 'Events',
    icon: 'Sparkles',
    imageUrl: '/media/images/farm-photo-25.jpg'
  },
  {
    id: '9-bhk-rooms',
    name: '9 BHK AC Rooms',
    description: 'Comfortable air-conditioned rooms for families, groups and overnight stays.',
    category: 'Stay',
    icon: 'Home',
    imageUrl: '/media/images/farm-photo-14.jpg'
  },
  {
    id: 'massive-swimming-pool',
    name: 'Massive Swimming Pool',
    description: 'A large pool for daytime fun, relaxation and memorable poolside celebrations.',
    category: 'Leisure',
    icon: 'Waves',
    imageUrl: '/media/images/farm-photo-01.jpg'
  },
  {
    id: 'rain-dance',
    name: 'Rain Dance Floor',
    description: 'Exhilarating rain dance setup with overhead high-pressure sprinklers, music integration, and party lighting.',
    category: 'Entertainment',
    icon: 'CloudRain',
    imageUrl: '/rain-dance.jpg'
  },
  {
    id: 'cricket-box',
    name: 'Cricket Box Arena',
    description: 'Enclosed professional-grade turf cricket box with boundary netting and match gear for thrilling games.',
    category: 'Sports',
    icon: 'Trophy',
    imageUrl: '/media/images/farm-photo-11.jpg'
  },
  {
    id: 'sports-adventure',
    name: 'Sports & Adventure',
    description: 'Cricket box, basketball box, mini dirt bikes with track and a tree bridge for a unique view.',
    category: 'Activities',
    icon: 'Target',
    imageUrl: '/media/images/farm-photo-46.jpg'
  },
  {
    id: 'kids-play-area',
    name: 'Kids Play Area',
    description: 'A dedicated outdoor play zone for children and family-friendly fun.',
    category: 'Family',
    icon: 'Gamepad2',
    imageUrl: '/media/images/farm-photo-38.jpg'
  },
  {
    id: 'bonfire-area',
    name: 'Bonfire Area',
    description: 'A relaxed setting for evening gatherings, music, conversations and unforgettable nights.',
    category: 'Leisure',
    icon: 'Flame',
    imageUrl: '/media/images/farm-photo-02.jpg'
  }
];

export const EXPERIENCE_PACKAGES: ExperiencePackage[] = [
  {
    id: 'farmhouse-12h',
    title: 'FARMHOUSE ONLY — 12 HOURS',
    description: 'Private farmhouse access for a 12-hour experience, ideal for day outings, family gatherings and celebrations.'
  },
  {
    id: 'farmhouse-24h',
    title: 'FARMHOUSE ONLY — 24 HOURS',
    description: 'A full 24-hour private stay with the farmhouse and its facilities, perfect for overnight get-togethers.'
  },
  {
    id: 'banquet-only',
    title: 'BANQUET HALL ONLY',
    description: 'Book the AC banquet hall without taking the farmhouse — ideal for corporate meets, parties and events.'
  },
  {
    id: 'combination-experience',
    title: 'COMBINATION EXPERIENCE',
    description: 'Combine the farmhouse, rooms, lawn, stage, pool and banquet hall for a complete private event experience.'
  }
];

export const COMFORT_SERVICES = [
  'Water, Wi-Fi & power backup',
  'Room service',
  'Laundry service',
  'In-house projector',
  '24-hour on-call support',
  'Cleanliness & hygiene',
  'In-house chef on request',
  'Family-friendly & pet-friendly',
  'Couple-friendly environment',
  'Safety & security focused'
];

export const PRICE_RATES: PriceRate[] = [
  {
    stayType: 'overnight',
    name: 'Overnight Villa Escape',
    tagline: 'Ideal for family getaways and intimate groups',
    weekdayRate: 22000,
    weekendRate: 28000,
    description: 'Full, exclusive access to the 9-BHK luxury villa, private pool, outdoor games, and kitchen facilities. Perfect for overnight relaxation.',
    capacity: 'Up to 16 guests (Max 25 with extra bedding)',
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Refundable Security Deposit: ₹10,000 required at check-in',
      'Additional guests after 16: ₹1,000 per person per night',
      'Loud music permitted outdoors till 10:00 PM (as per local regulations)'
    ]
  },
  {
    stayType: 'day_outing',
    name: 'Day Outing & Picnic',
    tagline: 'Perfect for daytime birthdays, picnics, and reunions',
    weekdayRate: 15000,
    weekendRate: 20000,
    description: '8-hour daytime booking. Includes full access to outdoor lawns, cricket nets, swimming pool, recreational deck, and lounge areas.',
    capacity: 'Up to 20 guests (Charges apply for larger groups)',
    rules: [
      'Timings: 10:00 AM - 6:00 PM',
      'Refundable Security Deposit: ₹5,000',
      'Access to 1 changing room & washrooms included',
      'Kitchen facilities available for heating or light prep'
    ]
  },
  {
    stayType: 'event_package',
    name: 'Premium Event Venue Package',
    tagline: 'For grand weddings, pre-wedding events, and gatherings',
    weekdayRate: 65000,
    weekendRate: 75000,
    description: 'Exclusive rental of our majestic lawns and the 500-seat banquet hall. Designed to host elegant celebrations.',
    capacity: 'Up to 500 event guests | Overnight stay for 16 guests',
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Includes high-capacity generator backup for event power',
      'Outside vendors for catering, decor, and DJ are fully permitted',
      'LGBTQ+ weddings and unions proudly hosted with personalized service'
    ]
  }
];

export const PROPERTY_PHOTOS: PropertyPhoto[] = [
  {
    id: 'p1',
    url: '/farmhouse-exterior.jpg',
    alt: 'Greenarch Farms Villa - Private farmstay villa surrounded by tropical greenery and bamboo',
    category: 'villa'
  },
  {
    id: 'p2',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZXC2bRRrI6y7GcF_edQ9v7cn2AR1Ne3BKocT9HE4MXHjN45L_cAC6CZoPxoQO4oTFK4xvyqkQSKVBcfB32i-hlx80A6VDn7WkLhx3YUBjtVMNSpyFtWqCIuJiutOsqihdzgNrsCbehUBH=w1536-h1024-k-no',
    alt: 'Greenarch Farms Luxury Pool - Swimming pool with spacious sun deck and surrounding greenery',
    category: 'pool'
  },
  {
    id: 'p3',
    url: '/lawn-stage.jpg',
    alt: 'Greenarch Farms Lawn Setup - Scenic outdoor lawn and elevated wooden tree bridge deck',
    category: 'lawns'
  },
  {
    id: 'p4',
    url: '/bedroom-suite.jpg',
    alt: 'Greenarch Farms Luxury Bedroom Suite - Air-conditioned master bedroom with designer wallpaper and ensuite wardrobe',
    category: 'interiors'
  },
  {
    id: 'p5',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlz5fu14iEOWUrAp5thD-Pj9nBvjcAkvpANRLYvMcuA_Q54_Ee0jN9VWDX6GB4HR2A7Kf0Bma9OmF8-ZGTJtsVRf6Mub1y9yNQyFuArIlEhpFtRHDJplZME_zJdW029qcRCKgbiTkDN4X_L=w1400-h1600-k-no',
    alt: 'Greenarch Farms Outdoor Grounds - Scenic trees and open celebration lawn',
    category: 'lawns'
  },
  {
    id: 'p6',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlOLatPLr2GAAc_YsVr7q7VAOXOI5-LtNQPndG3WqMi87539D1z0f3nnrlaYAY8Of2tn8JsRgU8_CYE9yQ5If9NMtSalizxm4NEYLEq0qXwBYhxUzbEvZrgBfNVVDwq2sVQR_4G_WbdctmO=w1600-h1200-k-no',
    alt: 'Greenarch Farms Villa Hall - Spacious living and recreation space',
    category: 'interiors'
  },
  {
    id: 'p7',
    url: '/rain-dance.jpg',
    alt: 'Greenarch Farms Rain Dance - Overhead sprinkler dance floor with music and celebration vibes',
    category: 'raindance'
  },
  {
    id: 'p8',
    url: '/cricket-box.jpg',
    alt: 'Greenarch Farms Cricket Box Arena - Enclosed turf pitch with boundary netting and match gear',
    category: 'cricket'
  },
  {
    id: 'p9',
    url: '/sports-adventure.jpg',
    alt: 'Greenarch Farms Sports & Basketball Box - Outdoor basketball court with pro glass backboard and hoop',
    category: 'activities'
  },
  {
    id: 'p10',
    url: '/bonfire-area.jpg',
    alt: 'Greenarch Farms Bonfire Area - Cozy evening campfire lounge with string lights under twilight sky',
    category: 'leisure'
  },
  {
    id: 'p11',
    url: '/kids-play.jpg',
    alt: 'Greenarch Farms Kids Play Area - Outdoor play zone with swings, slide tower, and lush palm trees',
    category: 'family'
  }
];

export const FAQS = [
  {
    question: 'Where exactly is the farmstay located and how far is it from Hyderabad city?',
    answer: 'Greenarch Farms & Events is located in Chinna Golconda, Shamshabad Mandal, Hyderabad (Pin: 501218). It is extremely accessible, situated just a 15-minute drive from the Rajiv Gandhi International Airport (RGIA) and about 35-45 minutes from core city hubs like Gachibowli, Jubilee Hills, and Secunderabad via the Outer Ring Road (ORR). Our Plus Code is 696Q+62 Chinna Golconda, which pins directly onto Google Maps.'
  },
  {
    question: 'What is your food and catering policy? Can we bring our own chefs?',
    answer: 'Yes, absolutely! We support maximum flexibility. You can: 1) Cook your own meals in our fully stocked kitchen, 2) Hire and bring your own catering team (who can utilize the outdoor staging area), 3) Order from local premium restaurants via Swiggy/Zomato which deliver directly to the property, or 4) Request our caretaker to arrange a local home-style private chef (charges extra, based on group size and menu).'
  },
  {
    question: 'Is the property LGBTQ+ friendly?',
    answer: 'Yes, Greenarch Farms & Events is a proudly LGBTQ+ owned and friendly establishment. We actively foster a completely safe, welcoming, non-judgmental, and private environment. We have hosted several queer-friendly gatherings, celebrations, and ceremonies, and our staff is fully sensitized to respect everyone\'s identity and privacy.'
  },
  {
    question: 'Are pets allowed at the farmstay?',
    answer: 'We are 100% pet-friendly! Your furry family members are welcome to run around and enjoy our vast enclosed lawns. We only request that pets are kept supervised, are toilet-trained, and are kept off the beds and pool area to ensure hygiene for subsequent guests.'
  },
  {
    question: 'What is the booking security deposit and cancellation policy?',
    answer: 'We collect a security deposit (₹10,000 for overnight, ₹5,000 for day stays) via UPI/Bank transfer before or at the time of check-in. This is fully refundable within 3 hours of check-out after inspecting the property for damages. For cancellations: 100% refund if cancelled at least 14 days before the check-in date; 50% refund if cancelled 7 to 13 days prior; and no refund within 7 days of the booking.'
  },
  {
    question: 'Do you provide sound systems and decoration for events?',
    answer: 'We provide high-quality ambient speaker systems for standard overnight/day guests. For larger parties or lawn weddings, outside professional sound vendors and decorators are allowed. We can also provide a curated list of trusted local vendors who are highly familiar with our layout to make your event planning completely hassle-free.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Anjali Sharma',
    role: 'Family Getaway',
    text: 'Green Arch Farms was the perfect escape for my parents\' 30th anniversary. The pool was absolutely pristine, the caretakers were incredibly helpful and cooked amazing breakfast, and the bedrooms are extremely spacious and comfortable. The highlight was having our morning tea in the sprawling orchards!',
    rating: 5
  },
  {
    name: 'Vikram & Rohan',
    role: 'Couple Weekend Outing',
    text: 'As an LGBTQ+ couple, finding safe, truly welcoming places in nature can sometimes feel stressful. Green Arch Farms went above and beyond. Not only was the property fully private and breathtaking, but the entire staff made us feel completely at home and respected. Highly, highly recommend!',
    rating: 5
  },
  {
    name: 'Priyanka Reddy',
    role: 'Event Host (Pre-wedding Mehendi)',
    text: 'We hosted a 120-person sundowner event here and it was magical! The fairy lights setup in the lawns looked like a fairytale, and the heavy-duty power generator kept everything running flawlessly. Our guests loved the sports options like table tennis and cricket nets. Will definitely book again!',
    rating: 5
  }
];
