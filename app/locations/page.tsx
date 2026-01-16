import { Metadata } from 'next';
import { LOCATIONS } from '@/features/locations/data';
import { LocationCard } from '@/features/locations/location-card';

export const metadata: Metadata = {
  title: 'Locations | Angkringan Joss',
  description: 'Find an Angkringan Joss near you. Experience the warmth of modern coffee culture.',
};

export default function LocationsPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
       <div className="bg-earth-900 text-cream-100 py-20 px-4 mb-16">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Locations</h1>
          <p className="text-earth-100/70 max-w-2xl mx-auto">
            From humble beginnings to your neighborhood corner. Come visit us.
          </p>
        </div>
      </div>

      <div className="container-custom px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS.map((location) => (
                <LocationCard key={location.id} location={location} />
            ))}
        </div>
      </div>
    </div>
  );
}
