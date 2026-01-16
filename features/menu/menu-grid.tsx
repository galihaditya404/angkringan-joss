'use client';

import { MENU_ITEMS } from './data';
import { MenuCard } from './menu-card';
import { MenuCategory } from '@/types/menu';
import { FadeIn } from '@/components/motion/fade-in';

export function MenuGrid() {
  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'non-coffee', label: 'Non-Coffee' },
    { id: 'snack', label: 'Snacks' },
  ];

  return (
    <div className="space-y-24">
      {categories.map((category, categoryIndex) => {
        const items = MENU_ITEMS.filter((item) => item.category === category.id);

        if (items.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-3xl font-heading font-black text-foreground mb-12 uppercase tracking-tight flex items-center gap-4">
                <span className="w-8 h-1 bg-accent"></span>
                {category.label}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {items.map((item, index) => (
                <FadeIn
                  key={item.id}
                  delay={index * 0.1} // Stagger effect
                  direction="up"
                  className="h-full"
                >
                  <MenuCard item={item} />
                </FadeIn>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
