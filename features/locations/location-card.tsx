'use client';

import { LocationItem } from '@/types/location';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';

interface LocationCardProps {
  location: LocationItem;
}

export function LocationCard({ location }: LocationCardProps) {
  const isComingSoon = location.status === 'coming-soon';

  return (
    <div className="bg-background border border-border flex flex-col lg:flex-row overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Left: Details */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                   <h3 className="font-heading font-black text-3xl uppercase tracking-tighter text-foreground mb-2">{location.name}</h3>
                   <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${location.status === 'open' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted">{location.status} Now</span>
                   </div>
                </div>
            </div>

            <div className="space-y-4 text-sm text-foreground/80 font-medium">
                <div className="flex items-start gap-4 p-4 bg-surface/50 border border-border/50">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                        <p className="uppercase tracking-wide text-xs text-muted mb-1">Address</p>
                        <p>{location.address}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface/50 border border-border/50">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <div>
                        <p className="uppercase tracking-wide text-xs text-muted mb-1">Hours</p>
                        <p>{location.operatingHours}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface/50 border border-border/50">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <div>
                        <p className="uppercase tracking-wide text-xs text-muted mb-1">Contact</p>
                        <p>{location.phone}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
            <Button 
                size="lg"
                className="w-full rounded-none h-14 bg-foreground text-background hover:bg-accent font-bold uppercase tracking-wider"
                onClick={() => !isComingSoon && window.open(location.mapsUrl, '_blank')}
            >
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
            </Button>
        </div>
      </div>

      {/* Right: Map Embed */}
      {location.embedUrl && (
          <div className="lg:w-[45%] min-h-[400px] lg:min-h-auto bg-surface relative border-t lg:border-t-0 lg:border-l border-border grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
               src={location.embedUrl} 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full"
             ></iframe>
          </div>
      )}
    </div>
  );
}
