export type EventType = 'wedding' | 'birthday' | 'corporate' | 'college' | 'reception' | 'private';

export type ServiceType = 'decoration' | 'catering' | 'dj_music' | 'photography' | 'videography';

export interface EventCategoryInfo {
  id: EventType;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  icon: string;
  badge: string;
  highlights: string[];
  recommendedServices: ServiceType[];
  typicalGuestCount: string;
}

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  icon: string;
  features: string[];
  options: {
    title: string;
    description: string;
    badge?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: EventType;
  image: string;
  location: string;
  date: string;
  featured?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Father of the Bride", "Corporate Event Lead"
  city: string;
  eventType: EventType;
  eventTitle: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface CateringMenuOption {
  id: string;
  name: string;
  category: 'veg' | 'nonveg' | 'dessert' | 'beverage';
  description: string;
  image: string;
  popular?: boolean;
}

export interface EventPackage {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  isPopular?: boolean;
  features: string[];
  includedServices: string[];
}

export interface EventPlanState {
  step: number;
  eventType: EventType | '';
  eventName: string;
  eventDate: string;
  location: string;
  expectedGuests: string;
  budgetRange: string;
  selectedServices: ServiceType[];
  foodPreference: 'veg' | 'nonveg' | 'both' | '';
  foodCuisines: string[];
  decorationStyle: string;
  musicPreference: string;
  mediaPreference: string;
  specialNotes: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactCity: string;
}
