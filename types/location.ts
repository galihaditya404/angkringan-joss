export interface LocationItem {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  mapsUrl: string;
  embedUrl?: string; // New field for iframe SRC
  operatingHours: string;
  status: 'open' | 'closed' | 'coming-soon';
  image?: string;
}
