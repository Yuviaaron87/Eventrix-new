import { EventCategoryInfo } from '../types/event';

export const EVENT_CATEGORIES: EventCategoryInfo[] = [
  {
    id: 'wedding',
    title: 'Weddings & Marriages',
    tagline: 'Your dream fairytale wedding curated under one roof',
    shortDesc: 'Complete wedding planning: mandap decoration, royal catering, bridal photography, DJ, and seamless guest hospitality.',
    fullDesc: 'A wedding is not just an event; it is a once-in-a-lifetime emotional milestone. Eventrix takes away all the chaos by managing mandap decor, floral architecture, royal buffet catering, cinematic video coverage, and Sangeet DJ management.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
    badge: 'Most Popular',
    highlights: ['Royal Floral Mandaps', 'Multi-Cuisine Buffet', 'Cinematic Drone & 4K Film', 'Sangeet DJ & Sound System'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'photography', 'videography'],
    typicalGuestCount: '200 – 1,500+ Guests'
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    tagline: 'Unforgettable milestone birthdays for kids & adults',
    shortDesc: 'Themed stage backdrops, cake & snack catering, live DJ, photo booths, and balloon floral setups.',
    fullDesc: 'Whether it is a magical 1st birthday, a sweet 16th, or a grand 50th jubilee, Eventrix designs bespoke themes, dessert stations, energetic DJs, and memory photography to make the birthday host shine.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    icon: 'PartyPopper',
    badge: 'Trending',
    highlights: ['Custom Concept Themes', 'Live Snack Counter & Cakes', 'Interactive DJ & Games', 'Instant Photo Booths'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'photography'],
    typicalGuestCount: '30 – 300 Guests'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    tagline: 'High-impact galas, product launches & conferences',
    shortDesc: 'Sophisticated stage design, professional audio-visual tech, premium executive dining, and media coverage.',
    fullDesc: 'Elevate your brand reputation with world-class event production. Eventrix manages corporate galas, annual awards, tech summits, and leadership retreats with precision execution and single-point accountability.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    icon: 'Building2',
    badge: 'Enterprise Grade',
    highlights: ['LED Wall & Truss Tech', 'Gourmet Plated Dinners', 'Live Corporate Streaming', 'Executive Lounge Setups'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'photography', 'videography'],
    typicalGuestCount: '100 – 2,000+ Guests'
  },
  {
    id: 'college',
    title: 'College Fest & Youth Events',
    tagline: 'High-energy campus festivals & cultural nights',
    shortDesc: 'Massive concert stage setups, high-decibel pro DJ rigs, food courts, and aftermovie videography.',
    fullDesc: 'Campus festivals require immense energy and flawless safety coordination. We bring concert-grade sound, pro DJ artists, vibrant lighting, multi-vendor food courts, and action videography to college grounds.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    icon: 'GraduationCap',
    badge: 'High Energy',
    highlights: ['Concert Stage Rigs', 'Massive Sound System', 'Multi-Stall Food Street', '4K Fest Aftermovie'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'videography'],
    typicalGuestCount: '500 – 5,000+ Guests'
  },
  {
    id: 'reception',
    title: 'Wedding Receptions',
    tagline: 'Grand evening celebrations of love & elegance',
    shortDesc: 'Luxury entrance tunnels, grand stage styling, lavish multi-cuisine banquets, and acoustic live bands.',
    fullDesc: 'Welcome your guests in sheer grandeur. Our reception packages feature opulent floral arches, champagne pyramids, international buffet spreads, red carpet photography, and soothing ambient DJ music.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    icon: 'Crown',
    badge: 'Luxury Preferred',
    highlights: ['Glass & Crystal Backdrops', 'Live Bar & Mocktail Lounge', 'Grand Entry SFX pyros', 'Portrait Photography'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'photography', 'videography'],
    typicalGuestCount: '250 – 1,200 Guests'
  },
  {
    id: 'private',
    title: 'Private & VIP Parties',
    tagline: 'Exclusive intimate gatherings & anniversary galas',
    shortDesc: 'Tailored luxury decor, private chef experiences, custom sound lounges, and discrete media capture.',
    fullDesc: 'For discerning hosts who demand absolute privacy and perfection. From rooftop cocktail evenings to silver wedding anniversaries, Eventrix coordinates custom decor, fine dining, and intimate lounge music.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    icon: 'GlassWater',
    badge: 'Exclusive',
    highlights: ['Custom Mood Lighting', 'Chef-Curated Tasting Menu', 'VIP Acoustic Artists', 'Discreet Coverage'],
    recommendedServices: ['decoration', 'catering', 'dj_music', 'photography'],
    typicalGuestCount: '20 – 150 Guests'
  }
];
