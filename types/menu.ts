export type MenuCategory = 'coffee' | 'non-coffee' | 'snack' | 'beans';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isAvailable: boolean;
  isBestSeller?: boolean;
}
