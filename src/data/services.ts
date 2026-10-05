import { ServiceDetail } from '../types/event';

export const EVENT_SERVICES: ServiceDetail[] = [
  {
    id: 'decoration',
    title: 'Decoration & Theme Design',
    tagline: 'Transforming venue spaces into breathtaking visual masterpieces',
    shortDesc: 'Transform your venue into a space that feels unforgettable. Elegant stage setups, floral arches, entrance pathways & lighting.',
    fullDesc: 'From royal traditional mandaps to sleek modern minimal galas, our floral design architects and lighting engineers turn standard halls and open grounds into magical environments tailored to your vision.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    icon: 'Palette',
    features: [
      'Fresh Exotic & Artificial Floral Architecture',
      'Custom Stage, Backdrops & Ceiling Drapery',
      'Intelligent LED Mood Lighting & Cold Pyros',
      'Themed Entrance Arches & Welcome Signage',
      'Table Centerpieces & VIP Seating Layouts'
    ],
    options: [
      { title: 'Traditional Royal', description: 'Rich marigold accents, antique brass pillars, velvet drapery, and warm heritage lighting.', badge: 'Classic' },
      { title: 'Modern Minimalist', description: 'Clean geometry, pastel florals, acrylic furniture, and subtle ambient warm glows.', badge: 'Popular' },
      { title: 'Floral Extravaganza', description: 'Heavy cascading orchid & rose walls, romantic flower aisles, and botanical ceiling drapes.', badge: 'Luxury' },
      { title: 'Futuristic Tech & LED', description: 'Truss structures, dynamic pixel tube lighting, smoke haze, and modern sharp lines.', badge: 'Corporate' }
    ]
  },
  {
    id: 'catering',
    title: 'Gourmet Catering & Dining',
    tagline: 'Delicious menus designed around your guests and celebration',
    shortDesc: 'Master chefs preparing hygienic, mouth-watering Vegetarian and Non-Vegetarian multi-cuisine spreads.',
    fullDesc: 'Food is the heart of every Indian and global celebration. Eventrix works with master culinary chefs to deliver piping hot live counter items, rich main dishes, fresh salads, and decadent desserts.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    icon: 'Utensils',
    features: [
      '100% Pure Vegetarian Dedicated Kitchen Option',
      'Rich Non-Vegetarian Gourmet Delicacies',
      'Live Chaat, Dosa, BBQ & Mocktail Counters',
      'Eco-friendly Luxury Cutlery & Uniformed Stewards',
      'Customized Menu Tastings Before Final Event'
    ],
    options: [
      { title: 'Pure Vegetarian Delight', description: 'North & South Indian, Rajasthani Thali, Paneer delicacies, live chaat and sweet counters.', badge: '100% Pure Veg' },
      { title: 'Non-Veg Royal Banquet', description: 'Succulent mutton biryanis, tandoori kebabs, butter chicken, seafood grill & continental dishes.', badge: 'Chef Special' },
      { title: 'Fusion & International', description: 'Italian pasta stations, Mexican tacos, Oriental wok live counters, and mocktail lounges.', badge: 'Trending' },
      { title: 'Custom Hybrid Menu', description: 'Combine vegetarian and non-vegetarian live counters based on guest demographics.', badge: 'Flexible' }
    ]
  },
  {
    id: 'dj_music',
    title: 'DJ, Music & Sound Rigs',
    tagline: 'Set the perfect mood from the first arrival to the final dance',
    shortDesc: 'Pro concert sound systems, top resident DJs, live acoustic bands, Dhol players, and intelligent dance floors.',
    fullDesc: 'Music sets the pulse of your celebration. Eventrix provides high-end JBL/RCF sound setups, club-grade DJ console hardware, wireless microphones, moving head lights, and artists who read the crowd effortlessly.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    icon: 'Music',
    features: [
      'High-Decibel Pro Line Array Sound Systems',
      'Celebrity & Experienced Party DJs',
      'Traditional Punjabi Dhol & Live Shehnai',
      'Intelligent Beam Lights & Smoke Fog Machines',
      'Custom Playlist Curation & Sangeet Mixes'
    ],
    options: [
      { title: 'Sangeet & Party Rigs', description: 'Bass-heavy line arrays, pro DJ setup, beam lights, and dance floor pyros.', badge: 'High Energy' },
      { title: 'Live Acoustic Band', description: 'Unplugged guitarists, vocalists, flute artists, and ambient piano players.', badge: 'Sophisticated' },
      { title: 'Traditional Dhol & Baraat', description: 'Energetic traditional drummers for grand entrance baraat processions.', badge: 'Cultural' },
      { title: 'Background Executive Sound', description: 'Crystal-clear speech audio, wireless lapels, and smooth jazz/lounge tunes.', badge: 'Corporate' }
    ]
  },
  {
    id: 'photography',
    title: 'High-Definition Photography',
    tagline: 'Capture the moments you will want to remember forever',
    shortDesc: 'Candid portraits, traditional family albums, pre-wedding shoots, and instant photo printing booths.',
    fullDesc: 'Our team of award-winning portrait and candid photographers use full-frame Sony FX3 & Canon R5 cameras with prime lenses to capture raw emotions, genuine smiles, and subtle details.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    icon: 'Camera',
    features: [
      'Candid Emotion & Storytelling Shots',
      'Traditional Family & Group Coverage',
      'Luxury Leather-Bound Photobook Albums',
      'Pre-Wedding & Pre-Event Location Shoots',
      'Same-Day Digital Highlight Teasers'
    ],
    options: [
      { title: 'Candid & Portrait Masters', description: 'Artistic capture of unscripted moments, tears of joy, and genuine laughter.', badge: 'Essential' },
      { title: 'Traditional Formal Coverage', description: 'Comprehensive coverage ensuring every single guest is photographed with the host.', badge: 'Complete' },
      { title: 'Pre-Event Location Session', description: 'Romantic couple shoots or team corporate portraits at scenic outdoor locations.', badge: 'Feature' },
      { title: 'Instant Live Print Booth', description: 'Fun props booth with magnetic photo prints delivered live on-site to guests.', badge: 'Interactive' }
    ]
  },
  {
    id: 'videography',
    title: 'Cinematic Videography & Drone',
    tagline: 'Turn your celebration into a cinematic movie memory',
    shortDesc: '4K cinema cameras, aerial drone footage, color-graded wedding teasers, and full feature documentaries.',
    fullDesc: 'We treat your event like a Hollywood production. With 4K 120fps slow-motion cameras, stabilized gimbals, crisp audio recorders, and aerial drones, we deliver cinematic trailers that will make you re-live the day for decades.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    icon: 'Video',
    features: [
      '4K Cinema Cameras (Sony FX6/FX3 Rigs)',
      'Licensed Aerial Drone Overhead Shoots',
      '3-Minute Cinematic Trailer with Sound Design',
      'Full-Length Event Highlight Film (45-90 min)',
      'YouTube & Social Media Reel Format Edits'
    ],
    options: [
      { title: 'Cinematic Teaser & Film', description: 'High-end color grading, custom soundtrack design, and cinematic storytelling.', badge: 'Best Seller' },
      { title: '4K Drone Aerial View', description: 'Sweeping aerial perspectives of open venue grounds,baraat entries & fireworks.', badge: 'Spectacular' },
      { title: 'Live Event LED Screen Feed', description: 'Real-time multi-camera live video broadcast directly onto venue LED walls.', badge: 'Pro Event' },
      { title: 'Social Media Instagram Reels', description: 'Vertical 9:16 viral edits delivered within 24 hours of the event.', badge: 'Fast Delivery' }
    ]
  }
];
