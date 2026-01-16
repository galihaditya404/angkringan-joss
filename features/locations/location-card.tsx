'use client';

import { LocationItem } from '@/types/location';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

interface LocationCardProps {
  location: LocationItem;
}

export function LocationCard({ location }: LocationCardProps) {
  const isComingSoon = location.status === 'coming-soon';

  return (
    <div className={`bg-white rounded-xl border border-earth-100 p-6 flex flex-col gap-4 transition-all hover:shadow-md ${isComingSoon ? 'opacity-75 grayscale' : ''}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-heading font-bold text-xl text-earth-900">{location.name}</h3>
        {isComingSoon ? (
          <span className="px-2 py-1 bg-earth-100 text-charcoal-500 text-xs font-semibold rounded-full">Coming Soon</span>
        ) : (
          <span className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${location.status === 'open' ? 'bg-secondary/10 text-secondary' : 'bg-red-100 text-red-600'}`}>
            {location.status}
          </span>
        )}
      </div>

      <div className="space-y-3 text-sm text-charcoal-500">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 text-earth-800" />
          <div>
            <p>{location.address}</p>
            <p>{location.city}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-earth-800" />
          <p>{location.operatingHours}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-earth-800" />
          <p>{location.phone}</p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Button
          variant="outline"
          fullWidth
          disabled={isComingSoon}
          onClick={() => !isComingSoon && window.open(location.mapsUrl, '_blank')}
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
}
