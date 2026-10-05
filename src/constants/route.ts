export const ROUTES = {
  HOME: '/',
  EVENTS: '/events',
  SERVICES: '/services',
  PLAN_EVENT: '/plan-event',
  GALLERY: '/gallery',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404'
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Why Eventrix', href: '/#why-eventrix' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
