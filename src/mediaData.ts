export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbUrl: string;
  category: 'pool' | 'rooms' | 'lawns' | 'deck' | 'play';
  title: string;
  alt: string;
  duration?: number;
  aspect: 'landscape' | 'portrait' | 'square';
}

export const FARM_PHOTOS: MediaItem[] = [
  {
    id: 'photo-01',
    type: 'image',
    url: '/media/images/farm-photo-01.jpg',
    thumbUrl: '/media/images/farm-photo-01.jpg',
    category: 'pool',
    title: "Illuminated Swimming Pool at Night",
    alt: "Crystal swimming pool with perimeter warm golden LED lighting under the night sky",
    aspect: 'landscape'
  },
  {
    id: 'photo-02',
    type: 'image',
    url: '/media/images/farm-photo-02.jpg',
    thumbUrl: '/media/images/farm-photo-02.jpg',
    category: 'lawns',
    title: "Architectural Gazebo Dome Lounge",
    alt: "Circular outdoor gazebo lounge with illuminated paving and stone seating",
    aspect: 'portrait'
  },
  {
    id: 'photo-03',
    type: 'image',
    url: '/media/images/farm-photo-03.jpg',
    thumbUrl: '/media/images/farm-photo-03.jpg',
    category: 'rooms',
    title: "Air-Conditioned Master Bedroom Suite",
    alt: "Contemporary AC bedroom with double bed, wardrobe, and modern lighting",
    aspect: 'portrait'
  },
  {
    id: 'photo-04',
    type: 'image',
    url: '/media/images/farm-photo-04.jpg',
    thumbUrl: '/media/images/farm-photo-04.jpg',
    category: 'lawns',
    title: "Illuminated Garden Pergola & Tree Pathway",
    alt: "Night garden walkway lit with warm fairy lights and green plant borders",
    aspect: 'portrait'
  },
  {
    id: 'photo-05',
    type: 'image',
    url: '/media/images/farm-photo-05.jpg',
    thumbUrl: '/media/images/farm-photo-05.jpg',
    category: 'pool',
    title: "Palm Tree Walkway to Swimming Pool",
    alt: "Warm illuminated stone pathway flanked by towering palm trees leading to pool deck",
    aspect: 'portrait'
  },
  {
    id: 'photo-06',
    type: 'image',
    url: '/media/images/farm-photo-06.jpg',
    thumbUrl: '/media/images/farm-photo-06.jpg',
    category: 'rooms',
    title: "Grand Living Room & Reception Hall",
    alt: "Spacious living room with plush sofas, vibrant accent wall, and coffee table",
    aspect: 'landscape'
  },
  {
    id: 'photo-07',
    type: 'image',
    url: '/media/images/farm-photo-07.jpg',
    thumbUrl: '/media/images/farm-photo-07.jpg',
    category: 'rooms',
    title: "Living Hall Group Seating Lounge",
    alt: "Comfortable indoor gathering hall with multiple seating couches for families",
    aspect: 'landscape'
  },
  {
    id: 'photo-08',
    type: 'image',
    url: '/media/images/farm-photo-08.jpg',
    thumbUrl: '/media/images/farm-photo-08.jpg',
    category: 'rooms',
    title: "Airy Living Hall with Natural Light",
    alt: "Wide-angle view of the resort villa central living hall with tiled flooring",
    aspect: 'landscape'
  },
  {
    id: 'photo-09',
    type: 'image',
    url: '/media/images/farm-photo-09.jpg',
    thumbUrl: '/media/images/farm-photo-09.jpg',
    category: 'lawns',
    title: "Night Pergola with Garden Steps",
    alt: "Outdoor pergola garden steps bathed in atmospheric warm nighttime lighting",
    aspect: 'portrait'
  },
  {
    id: 'photo-10',
    type: 'image',
    url: '/media/images/farm-photo-10.jpg',
    thumbUrl: '/media/images/farm-photo-10.jpg',
    category: 'pool',
    title: "Twilight Palm Walkway to Pool",
    alt: "Golden ground lights illuminating the palm tree avenue to the pool area",
    aspect: 'portrait'
  },
  {
    id: 'photo-11',
    type: 'image',
    url: '/media/images/farm-photo-11.jpg',
    thumbUrl: '/media/images/farm-photo-11.jpg',
    category: 'play',
    title: "Enclosed Cricket Box Arena",
    alt: "Professional enclosed turf cricket box with perimeter netting and high floodlights",
    aspect: 'portrait'
  },
  {
    id: 'photo-12',
    type: 'image',
    url: '/media/images/farm-photo-12.jpg',
    thumbUrl: '/media/images/farm-photo-12.jpg',
    category: 'rooms',
    title: "Designer Master Suite with Tree Mural",
    alt: "Artistic headboard wall mural with comfortable double bed and false ceiling",
    aspect: 'landscape'
  },
  {
    id: 'photo-13',
    type: 'image',
    url: '/media/images/farm-photo-13.jpg',
    thumbUrl: '/media/images/farm-photo-13.jpg',
    category: 'rooms',
    title: "Spacious Family Suite with Twin Queen Beds",
    alt: "Family accommodation suite featuring two queen beds, AC, and ambient lighting",
    aspect: 'portrait'
  },
  {
    id: 'photo-14',
    type: 'image',
    url: '/media/images/farm-photo-14.jpg',
    thumbUrl: '/media/images/farm-photo-14.jpg',
    category: 'rooms',
    title: "Luxury AC Bedroom with Lounge Sofa",
    alt: "Executive bedroom with plush sofa seating, designer wallpaper, and wardrobe",
    aspect: 'landscape'
  },
  {
    id: 'photo-15',
    type: 'image',
    url: '/media/images/farm-photo-15.jpg',
    thumbUrl: '/media/images/farm-photo-15.jpg',
    category: 'rooms',
    title: "Modern AC Bedroom with Wooden Headboard",
    alt: "Comfortable guest suite with wooden bed frame and contemporary styling",
    aspect: 'landscape'
  },
  {
    id: 'photo-16',
    type: 'image',
    url: '/media/images/farm-photo-16.jpg',
    thumbUrl: '/media/images/farm-photo-16.jpg',
    category: 'rooms',
    title: "Cozy AC Bedroom with Garden Window",
    alt: "Bright bedroom suite with scenic window looking out onto the estate gardens",
    aspect: 'portrait'
  },
  {
    id: 'photo-17',
    type: 'image',
    url: '/media/images/farm-photo-17.jpg',
    thumbUrl: '/media/images/farm-photo-17.jpg',
    category: 'lawns',
    title: "Lush Tropical Daytime Garden & Palms",
    alt: "Daytime views of the expansive green gardens with tall palm trees and benches",
    aspect: 'portrait'
  },
  {
    id: 'photo-18',
    type: 'image',
    url: '/media/images/farm-photo-18.jpg',
    thumbUrl: '/media/images/farm-photo-18.jpg',
    category: 'lawns',
    title: "Manicured Celebration Lawns & Trees",
    alt: "Sprawling manicured lawn surrounded by dense green forest trees",
    aspect: 'portrait'
  },
  {
    id: 'photo-19',
    type: 'image',
    url: '/media/images/farm-photo-19.jpg',
    thumbUrl: '/media/images/farm-photo-19.jpg',
    category: 'rooms',
    title: "Deluxe Twin Bedroom Suite with Sofa",
    alt: "Premium guest suite with two spacious beds and relaxing sofa seating",
    aspect: 'landscape'
  },
  {
    id: 'photo-20',
    type: 'image',
    url: '/media/images/farm-photo-20.jpg',
    thumbUrl: '/media/images/farm-photo-20.jpg',
    category: 'pool',
    title: "Tropical Palm View of Glowing Pool",
    alt: "Lush palm fronds framing the radiant glowing swimming pool at twilight",
    aspect: 'portrait'
  },
  {
    id: 'photo-21',
    type: 'image',
    url: '/media/images/farm-photo-21.jpg',
    thumbUrl: '/media/images/farm-photo-21.jpg',
    category: 'deck',
    title: "Elevated Treehouse Wooden Walkway",
    alt: "Elevated wooden deck bridge with railings and fairy lights through tree canopy",
    aspect: 'portrait'
  },
  {
    id: 'photo-22',
    type: 'image',
    url: '/media/images/farm-photo-22.jpg',
    thumbUrl: '/media/images/farm-photo-22.jpg',
    category: 'deck',
    title: "Covered Rooftop Wooden Dining Deck",
    alt: "Rustic wooden dining deck with tables and chairs for group outdoor meals",
    aspect: 'portrait'
  },
  {
    id: 'photo-23',
    type: 'image',
    url: '/media/images/farm-photo-23.jpg',
    thumbUrl: '/media/images/farm-photo-23.jpg',
    category: 'deck',
    title: "Open-Air Elevated Night Lounge Deck",
    alt: "High vantage point outdoor wooden terrace under the starry night sky",
    aspect: 'portrait'
  },
  {
    id: 'photo-24',
    type: 'image',
    url: '/media/images/farm-photo-24.jpg',
    thumbUrl: '/media/images/farm-photo-24.jpg',
    category: 'deck',
    title: "Covered Gazebo Terrace with Garden View",
    alt: "Shaded open deck terrace with dining setup and panoramic tree views",
    aspect: 'portrait'
  },
  {
    id: 'photo-25',
    type: 'image',
    url: '/media/images/farm-photo-25.jpg',
    thumbUrl: '/media/images/farm-photo-25.jpg',
    category: 'lawns',
    title: "Grand Trellis Walkway with Wrapped Lights",
    alt: "Long garden walkway lined with columns wrapped in twinkling fairy lights",
    aspect: 'portrait'
  },
  {
    id: 'photo-26',
    type: 'image',
    url: '/media/images/farm-photo-26.jpg',
    thumbUrl: '/media/images/farm-photo-26.jpg',
    category: 'deck',
    title: "Elevated Wooden Deck Evening Dining",
    alt: "Cozy wooden deck dining area with warm overhead lanterns and breeze",
    aspect: 'portrait'
  },
  {
    id: 'photo-27',
    type: 'image',
    url: '/media/images/farm-photo-27.jpg',
    thumbUrl: '/media/images/farm-photo-27.jpg',
    category: 'lawns',
    title: "Illuminated Garden Pergola Corridor",
    alt: "Enchanted night walkway with column lighting and tropical landscaping",
    aspect: 'portrait'
  },
  {
    id: 'photo-28',
    type: 'image',
    url: '/media/images/farm-photo-28.jpg',
    thumbUrl: '/media/images/farm-photo-28.jpg',
    category: 'lawns',
    title: "Paved Garden Courtyard with Deck Stairs",
    alt: "Stone paved central courtyard with illuminated steps leading up to deck",
    aspect: 'portrait'
  },
  {
    id: 'photo-29',
    type: 'image',
    url: '/media/images/farm-photo-29.jpg',
    thumbUrl: '/media/images/farm-photo-29.jpg',
    category: 'lawns',
    title: "Courtyard Garden with Ambient Night Glow",
    alt: "Peaceful garden courtyard under tree canopy with soft golden lighting",
    aspect: 'portrait'
  },
  {
    id: 'photo-30',
    type: 'image',
    url: '/media/images/farm-photo-30.jpg',
    thumbUrl: '/media/images/farm-photo-30.jpg',
    category: 'lawns',
    title: "Trellis Column Garden Walkway",
    alt: "Illuminated structural columns along the lush garden walkway",
    aspect: 'portrait'
  },
  {
    id: 'photo-31',
    type: 'image',
    url: '/media/images/farm-photo-31.jpg',
    thumbUrl: '/media/images/farm-photo-31.jpg',
    category: 'rooms',
    title: "Cove-Lit Luxury Master Bedroom",
    alt: "Master bedroom with modern ceiling cove lighting and plush double mattress",
    aspect: 'portrait'
  },
  {
    id: 'photo-32',
    type: 'image',
    url: '/media/images/farm-photo-32.jpg',
    thumbUrl: '/media/images/farm-photo-32.jpg',
    category: 'lawns',
    title: "Villa Front Lawn & Stone Paver Pathway",
    alt: "Scenic view of villa exterior, manicured grass, and stepping stone path",
    aspect: 'portrait'
  },
  {
    id: 'photo-33',
    type: 'image',
    url: '/media/images/farm-photo-33.jpg',
    thumbUrl: '/media/images/farm-photo-33.jpg',
    category: 'rooms',
    title: "Minimalist Elegant Bedroom Suite",
    alt: "Clean air-conditioned bedroom with marble flooring and ensuite access",
    aspect: 'portrait'
  },
  {
    id: 'photo-34',
    type: 'image',
    url: '/media/images/farm-photo-34.jpg',
    thumbUrl: '/media/images/farm-photo-34.jpg',
    category: 'lawns',
    title: "Stone Patio with Outdoor Round Table",
    alt: "Outdoor stone-tiled sitting patio surrounded by plants and greenery",
    aspect: 'portrait'
  },
  {
    id: 'photo-35',
    type: 'image',
    url: '/media/images/farm-photo-35.jpg',
    thumbUrl: '/media/images/farm-photo-35.jpg',
    category: 'lawns',
    title: "Curved Stepping Stone Lawn Walkway",
    alt: "Granite stepping stones winding through pristine green grass lawns",
    aspect: 'portrait'
  },
  {
    id: 'photo-36',
    type: 'image',
    url: '/media/images/farm-photo-36.jpg',
    thumbUrl: '/media/images/farm-photo-36.jpg',
    category: 'lawns',
    title: "5-Acre Farmstay Villa Exterior & Grounds",
    alt: "Daytime view of the private farmstay villa and peaceful surrounding grounds",
    aspect: 'portrait'
  },
  {
    id: 'photo-37',
    type: 'image',
    url: '/media/images/farm-photo-37.jpg',
    thumbUrl: '/media/images/farm-photo-37.jpg',
    category: 'play',
    title: "Kids Outdoor Playground with Swings",
    alt: "Vibrant children's play area with dual swings and jungle gym frame",
    aspect: 'portrait'
  },
  {
    id: 'photo-38',
    type: 'image',
    url: '/media/images/farm-photo-38.jpg',
    thumbUrl: '/media/images/farm-photo-38.jpg',
    category: 'play',
    title: "Kids Adventure Play Zone & Slide Tower",
    alt: "Dedicated play park featuring slide tower, climbing stairs, and swings",
    aspect: 'landscape'
  },
  {
    id: 'photo-39',
    type: 'image',
    url: '/media/images/farm-photo-39.jpg',
    thumbUrl: '/media/images/farm-photo-39.jpg',
    category: 'play',
    title: "Playground Activity Swings & Palm Trees",
    alt: "Children's recreational swings under tall swaying coconut palm trees",
    aspect: 'landscape'
  },
  {
    id: 'photo-40',
    type: 'image',
    url: '/media/images/farm-photo-40.jpg',
    thumbUrl: '/media/images/farm-photo-40.jpg',
    category: 'deck',
    title: "Elevated Wooden Deck Terrace View",
    alt: "High-angle wooden deck terrace overlooking lush green forest landscape",
    aspect: 'portrait'
  },
  {
    id: 'photo-41',
    type: 'image',
    url: '/media/images/farm-photo-41.jpg',
    thumbUrl: '/media/images/farm-photo-41.jpg',
    category: 'lawns',
    title: "Carved Wooden Garden Shade Bench",
    alt: "Handcrafted wooden bench placed under cooling shade trees in the lawn",
    aspect: 'portrait'
  },
  {
    id: 'photo-42',
    type: 'image',
    url: '/media/images/farm-photo-42.jpg',
    thumbUrl: '/media/images/farm-photo-42.jpg',
    category: 'deck',
    title: "Shaded Pergola Patio with Dining Tables",
    alt: "Covered patio lounge with group tables for outdoor tea and discussions",
    aspect: 'portrait'
  },
  {
    id: 'photo-43',
    type: 'image',
    url: '/media/images/farm-photo-43.jpg',
    thumbUrl: '/media/images/farm-photo-43.jpg',
    category: 'lawns',
    title: "Rustic Garden Bench in Nature Setting",
    alt: "Quiet relaxation bench nestled among flowering shrubs and trees",
    aspect: 'portrait'
  },
  {
    id: 'photo-44',
    type: 'image',
    url: '/media/images/farm-photo-44.jpg',
    thumbUrl: '/media/images/farm-photo-44.jpg',
    category: 'pool',
    title: "Golden Palm Corridor to Pool",
    alt: "Breathtaking night corridor of palm trees with warm golden floodlighting",
    aspect: 'portrait'
  },
  {
    id: 'photo-45',
    type: 'image',
    url: '/media/images/farm-photo-45.jpg',
    thumbUrl: '/media/images/farm-photo-45.jpg',
    category: 'pool',
    title: "Symmetrical Palm Pathway to Pool Deck",
    alt: "Night walkway leading straight to the glowing waters of the pool",
    aspect: 'portrait'
  },
  {
    id: 'photo-46',
    type: 'image',
    url: '/media/images/farm-photo-46.jpg',
    thumbUrl: '/media/images/farm-photo-46.jpg',
    category: 'deck',
    title: "Suspended Wooden Tree Bridge Walkway",
    alt: "Unique tree bridge walk high above the ground connecting viewing decks",
    aspect: 'portrait'
  },
  {
    id: 'photo-47',
    type: 'image',
    url: '/media/images/farm-photo-47.jpg',
    thumbUrl: '/media/images/farm-photo-47.jpg',
    category: 'rooms',
    title: "Designer Bedroom Suite with Tree Wall Art",
    alt: "Comfortable air-conditioned bedroom suite with artistic wall backdrop",
    aspect: 'portrait'
  },
  {
    id: 'photo-48',
    type: 'image',
    url: '/media/images/farm-photo-48.jpg',
    thumbUrl: '/media/images/farm-photo-48.jpg',
    category: 'pool',
    title: "Massive Swimming Pool Panoramic Night View",
    alt: "Wide panoramic view of the massive pool glowing with golden ambient light",
    aspect: 'landscape'
  },
  {
    id: 'photo-49',
    type: 'image',
    url: '/media/images/farm-photo-49.jpg',
    thumbUrl: '/media/images/farm-photo-49.jpg',
    category: 'rooms',
    title: "Deluxe Bedroom with Geometric Bedspread",
    alt: "Modern AC bedroom with plush pillows, wardrobe, and bedside switches",
    aspect: 'landscape'
  },
  {
    id: 'photo-50',
    type: 'image',
    url: '/media/images/farm-photo-50.jpg',
    thumbUrl: '/media/images/farm-photo-50.jpg',
    category: 'rooms',
    title: "Twin Double Suite for Group Stays",
    alt: "Spacious room with dual double beds, ideal for family and friend gatherings",
    aspect: 'portrait'
  },
  {
    id: 'photo-51',
    type: 'image',
    url: '/media/images/farm-photo-51.jpg',
    thumbUrl: '/media/images/farm-photo-51.jpg',
    category: 'rooms',
    title: "Grand Living Room & Entertainment Lounge",
    alt: "Vibrant living room with colorful seating, coffee table, and ceiling lights",
    aspect: 'landscape'
  },
  {
    id: 'photo-52',
    type: 'image',
    url: '/media/images/farm-photo-52.jpg',
    thumbUrl: '/media/images/farm-photo-52.jpg',
    category: 'rooms',
    title: "Executive Suite with Bedroom & Sofa Lounge",
    alt: "Airy master suite combining deep sleep area and private sofa lounge",
    aspect: 'landscape'
  },
  {
    id: 'photo-53',
    type: 'image',
    url: '/media/images/farm-photo-53.jpg',
    thumbUrl: '/media/images/farm-photo-53.jpg',
    category: 'rooms',
    title: "Modern Ensuite Bedroom with Wardrobe",
    alt: "Guest bedroom featuring full-length wardrobe, AC, and private bath",
    aspect: 'portrait'
  },
  {
    id: 'photo-54',
    type: 'image',
    url: '/media/images/farm-photo-54.jpg',
    thumbUrl: '/media/images/farm-photo-54.jpg',
    category: 'rooms',
    title: "Comfortable Guest Suite with Crisp Linen",
    alt: "Welcoming bedroom with hotel-quality bedding and ambient wall sconces",
    aspect: 'portrait'
  },
  {
    id: 'photo-55',
    type: 'image',
    url: '/media/images/farm-photo-55.jpg',
    thumbUrl: '/media/images/farm-photo-55.jpg',
    category: 'rooms',
    title: "Family Deluxe Suite Panoramic View",
    alt: "Expansive group bedroom suite with seating couch and multiple beds",
    aspect: 'landscape'
  },
];

export const FARM_VIDEOS: MediaItem[] = [
  {
    id: 'vid-01',
    type: 'video',
    url: '/media/videos/farm-video-01.mp4',
    thumbUrl: '/media/videos/farm-video-01-thumb.jpg',
    category: 'rooms',
    title: "Family Suite Walkthrough Tour",
    alt: "Video walkthrough showing the spacious bedroom suite with twin double beds and wallpaper",
    duration: 11.0,
    aspect: 'portrait'
  },
  {
    id: 'vid-02',
    type: 'video',
    url: '/media/videos/farm-video-02.mp4',
    thumbUrl: '/media/videos/farm-video-02-thumb.jpg',
    category: 'rooms',
    title: "Bedroom Scenic Garden Outlook",
    alt: "Video tour capturing the bedroom window overlooking the lush tropical garden grounds",
    duration: 6.1,
    aspect: 'portrait'
  },
  {
    id: 'vid-03',
    type: 'video',
    url: '/media/videos/farm-video-03.mp4',
    thumbUrl: '/media/videos/farm-video-03-thumb.jpg',
    category: 'lawns',
    title: "Bamboo Garden Pathway Night Tour",
    alt: "Evening video walk through the illuminated bamboo grove and stepping stone path",
    duration: 14.2,
    aspect: 'portrait'
  },
  {
    id: 'vid-04',
    type: 'video',
    url: '/media/videos/farm-video-04.mp4',
    thumbUrl: '/media/videos/farm-video-04-thumb.jpg',
    category: 'deck',
    title: "Staircase to Courtyard Walkthrough",
    alt: "Video descending the rustic wooden staircase from the elevated deck to courtyard",
    duration: 14.4,
    aspect: 'portrait'
  },
  {
    id: 'vid-05',
    type: 'video',
    url: '/media/videos/farm-video-05.mp4',
    thumbUrl: '/media/videos/farm-video-05-thumb.jpg',
    category: 'lawns',
    title: "Fairy-Lit Walkway Columns Video",
    alt: "Nighttime video tour through the garden walkway with pillars wrapped in fairy lights",
    duration: 8.2,
    aspect: 'portrait'
  },
  {
    id: 'vid-06',
    type: 'video',
    url: '/media/videos/farm-video-06.mp4',
    thumbUrl: '/media/videos/farm-video-06-thumb.jpg',
    category: 'lawns',
    title: "Courtyard Garden Night Walkthrough",
    alt: "Ambient video walkthrough across the stone courtyard under lit branches",
    duration: 12.2,
    aspect: 'portrait'
  },
  {
    id: 'vid-07',
    type: 'video',
    url: '/media/videos/farm-video-07.mp4',
    thumbUrl: '/media/videos/farm-video-07-thumb.jpg',
    category: 'deck',
    title: "Elevated Tree Deck Panoramic Tour",
    alt: "Scenic video walkthrough on the high wooden tree deck above the green canopy",
    duration: 9.7,
    aspect: 'portrait'
  },
  {
    id: 'vid-08',
    type: 'video',
    url: '/media/videos/farm-video-08.mp4',
    thumbUrl: '/media/videos/farm-video-08-thumb.jpg',
    category: 'rooms',
    title: "Deluxe Suite Full Walkthrough Tour",
    alt: "Complete interior video tour of the air-conditioned deluxe master bedroom suite",
    duration: 9.4,
    aspect: 'portrait'
  },
  {
    id: 'vid-09',
    type: 'video',
    url: '/media/videos/farm-video-09.mp4',
    thumbUrl: '/media/videos/farm-video-09-thumb.jpg',
    category: 'rooms',
    title: "Grand Living Hall Video Tour",
    alt: "Interior tour showcasing the spacious reception hall, tiled floors, and sofas",
    duration: 7.3,
    aspect: 'portrait'
  },
  {
    id: 'vid-10',
    type: 'video',
    url: '/media/videos/farm-video-10.mp4',
    thumbUrl: '/media/videos/farm-video-10-thumb.jpg',
    category: 'deck',
    title: "Twilight Terrace Deck Walkthrough",
    alt: "Evening video tour on the open-air wooden deck with panoramic sunset vibes",
    duration: 12.5,
    aspect: 'portrait'
  },
  {
    id: 'vid-11',
    type: 'video',
    url: '/media/videos/farm-video-11.mp4',
    thumbUrl: '/media/videos/farm-video-11-thumb.jpg',
    category: 'rooms',
    title: "Tree Mural Master Suite Tour",
    alt: "Video walkthrough of the artistic tree mural bedroom suite with king bed",
    duration: 6.5,
    aspect: 'portrait'
  },
  {
    id: 'vid-12',
    type: 'video',
    url: '/media/videos/farm-video-12.mp4',
    thumbUrl: '/media/videos/farm-video-12-thumb.jpg',
    category: 'rooms',
    title: "Guest Bedroom Comfort Tour",
    alt: "Short walkthrough video showing the peaceful AC guest bedroom",
    duration: 8.3,
    aspect: 'portrait'
  },
  {
    id: 'vid-13',
    type: 'video',
    url: '/media/videos/farm-video-13.mp4',
    thumbUrl: '/media/videos/farm-video-13-thumb.jpg',
    category: 'rooms',
    title: "Ensuite Dressing & Vanity Tour",
    alt: "Interior video tour showing the wardrobe, dressing area, and ensuite bathroom",
    duration: 10.2,
    aspect: 'portrait'
  },
  {
    id: 'vid-14',
    type: 'video',
    url: '/media/videos/farm-video-14.mp4',
    thumbUrl: '/media/videos/farm-video-14-thumb.jpg',
    category: 'deck',
    title: "Elevated Tree Deck Sunset Dining Tour",
    alt: "Landscape video tour of the wooden tree deck dining table overlooking the pool",
    duration: 17.8,
    aspect: 'landscape'
  },
  {
    id: 'vid-15',
    type: 'video',
    url: '/media/videos/farm-video-15.mp4',
    thumbUrl: '/media/videos/farm-video-15-thumb.jpg',
    category: 'deck',
    title: "Panoramic Tree Bridge Sunset Tour",
    alt: "Wide landscape video capturing the tree bridge walkway and estate sunset views",
    duration: 17.8,
    aspect: 'landscape'
  },
  {
    id: 'vid-16',
    type: 'video',
    url: '/media/videos/farm-video-16.mp4',
    thumbUrl: '/media/videos/farm-video-16-thumb.jpg',
    category: 'deck',
    title: "Long Wooden Tree Bridge Walkway Tour",
    alt: "Walkthrough video traversing the suspended wooden tree bridge with warm lights",
    duration: 6.1,
    aspect: 'portrait'
  },
  {
    id: 'vid-17',
    type: 'video',
    url: '/media/videos/farm-video-17.mp4',
    thumbUrl: '/media/videos/farm-video-17-thumb.jpg',
    category: 'deck',
    title: "Night Sky Tree Deck Lounge Tour",
    alt: "Evening video showing the open-air wooden deck lounge under the twilight sky",
    duration: 5.5,
    aspect: 'portrait'
  },
  {
    id: 'vid-18',
    type: 'video',
    url: '/media/videos/farm-video-18.mp4',
    thumbUrl: '/media/videos/farm-video-18-thumb.jpg',
    category: 'rooms',
    title: "Family Suite Multi-Bed Video Tour",
    alt: "Interior video tour of the family bedroom suite with dual double beds and sofa",
    duration: 9.4,
    aspect: 'portrait'
  },
  {
    id: 'vid-19',
    type: 'video',
    url: '/media/videos/farm-video-19.mp4',
    thumbUrl: '/media/videos/farm-video-19-thumb.jpg',
    category: 'rooms',
    title: "Bedroom Corridor & Vanity Walkthrough",
    alt: "Video walk through the bedroom corridor, dressing area, and air-conditioned room",
    duration: 10.2,
    aspect: 'portrait'
  },
  {
    id: 'vid-20',
    type: 'video',
    url: '/media/videos/farm-video-20.mp4',
    thumbUrl: '/media/videos/farm-video-20-thumb.jpg',
    category: 'rooms',
    title: "Grand Living Room & Lounge Tour",
    alt: "Full video walkthrough of the vibrant living room with plush sofas and lighting",
    duration: 9.3,
    aspect: 'landscape'
  },
];

export const ALL_FARM_MEDIA: MediaItem[] = [...FARM_PHOTOS, ...FARM_VIDEOS];
