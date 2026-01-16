import { MenuItem } from '@/types/menu';
import { formatCurrency } from '@/utils/format';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-earth-100 hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 bg-earth-100 flex items-center justify-center overflow-hidden">
        {/* Placeholder for real image */}
        <div className="absolute inset-0 bg-earth-200/50 group-hover:bg-earth-200/30 transition-colors" />
        <span className="text-earth-900/20 font-heading text-4xl transform group-hover:scale-110 transition-transform duration-500">
          {item.name.charAt(0)}
        </span>
        {item.isBestSeller && (
            <span className="absolute top-3 right-3 bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                Best Seller
            </span>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-heading font-bold text-lg text-earth-900">{item.name}</h3>
            <span className="font-mono text-sm font-semibold text-olive-500">
                {formatCurrency(item.price)}
            </span>
        </div>
        
        <p className="text-charcoal-500 text-sm leading-relaxed flex-grow">
            {item.description}
        </p>
      </div>
    </div>
  );
}
