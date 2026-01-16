import { Metadata } from 'next';
import { MenuGrid } from '@/features/menu/menu-grid';

export const metadata: Metadata = {
  title: 'Menu | Angkringan Joss',
  description: 'Explore our selection of signature coffee, handcrafted beverages, and traditional snacks.',
};

export default function MenuPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <div className="bg-earth-900 text-cream-100 py-20 px-4 mb-16">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Menu</h1>
          <p className="text-earth-100/70 max-w-2xl mx-auto">
            Thoughtfully curated, lovingly brewed. From our signature Kopi Susu to classic espresso and traditional snacks.
          </p>
        </div>
      </div>
      
      <div className="container-custom px-4 pb-24">
        <MenuGrid />
      </div>
    </div>
  );
}
