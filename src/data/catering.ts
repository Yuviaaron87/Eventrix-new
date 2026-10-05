import { CateringMenuOption } from '../types/event';

export const CATERING_ITEMS: CateringMenuOption[] = [
  // Vegetarian
  {
    id: 'veg-1',
    name: 'Paneer Tikka & Malai Kofta',
    category: 'veg',
    description: 'Charcoal grilled cottage cheese marinated in aromatic spices paired with cashew cream gravy.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'veg-2',
    name: 'Dal Makhani & Garlic Naan',
    category: 'veg',
    description: 'Slow-cooked black lentils simmered overnight with butter and fresh cream served with piping hot naan.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veg-3',
    name: 'Live Chaat & Pani Puri Counter',
    category: 'veg',
    description: 'Crispy hollow puris filled with spiced potatoes, tangy mint water and tamarind chutney prepared live.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'veg-4',
    name: 'Exotic Vegetable Dum Biryani',
    category: 'veg',
    description: 'Long-grain basmati rice layered with garden vegetables, saffron milk, and aromatic spices cooked in handi.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },
  
  // Non-Vegetarian
  {
    id: 'nonveg-1',
    name: 'Royal Mutton Dum Biryani',
    category: 'nonveg',
    description: 'Tender tender goat meat cooked dum-style with basmati rice, caramelised onions, and royal spices.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'nonveg-2',
    name: 'Murgh Butter Chicken',
    category: 'nonveg',
    description: 'Succulent tandoori chicken cooked in a rich, buttery tomato sauce infused with dried fenugreek leaves.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'nonveg-3',
    name: 'Live Tandoori & Kebab Bar',
    category: 'nonveg',
    description: 'Freshly grilled Seekh Kebabs, Tangdi Kebabs and Fish Amritsari sizzled directly over charcoal.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
  },
  
  // Desserts
  {
    id: 'dessert-1',
    name: 'Hot Shahi Gulab Jamun & Rabri',
    category: 'dessert',
    description: 'Soft milk dumplings soaked in cardamom syrup served warm alongside thick rabri and pistachios.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'dessert-2',
    name: 'Live Nitrogen Ice Cream & Fondue',
    category: 'dessert',
    description: 'Interactive instant ice cream making using liquid nitrogen with Belgian chocolate fountain.',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80'
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Craft Mocktail Lounge',
    category: 'beverage',
    description: 'Bartender-crafted Virgin Mojitos, Mango Jalapeno coolers, Berry Blasts, and Blue Lagoon fusions.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    popular: true
  }
];
