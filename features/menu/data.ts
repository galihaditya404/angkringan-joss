import { MenuItem } from '@/types/menu';

export const MENU_ITEMS: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Kopi Susu Joss',
    description: 'Our signature palm sugar latte with a hint of cinnamon.',
    price: 25000,
    category: 'coffee',
    isAvailable: true,
    isBestSeller: true,
  },
  {
    id: 'c2',
    name: 'Americano',
    description: 'Double shot espresso with hot water. Clean and bold.',
    price: 22000,
    category: 'coffee',
    isAvailable: true,
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and thick foam.',
    price: 28000,
    category: 'coffee',
    isAvailable: true,
  },
  
  // Non-Coffee
  {
    id: 'n1',
    name: 'Charcoal Latte',
    description: 'Activated charcoal with vanilla and fresh milk.',
    price: 28000,
    category: 'non-coffee',
    isAvailable: true,
  },
  {
    id: 'n2',
    name: 'Matcha Latte',
    description: 'Premium Uji matcha with fresh milk.',
    price: 30000,
    category: 'non-coffee',
    isAvailable: true,
  },

  // Snacks
  {
    id: 's1',
    name: 'Pisang Goreng Madu',
    description: 'Honey glazed fried banana. Crispy and sweet.',
    price: 18000,
    category: 'snack',
    isAvailable: true,
    isBestSeller: true,
  },
  {
    id: 's2',
    name: 'Singkong Goreng',
    description: 'Fried cassava with garlic seasoning.',
    price: 15000,
    category: 'snack',
    isAvailable: true,
  },
];
