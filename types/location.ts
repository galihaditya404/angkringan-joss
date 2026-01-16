export interface LocationItem {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  mapsUrl: string;
  operatingHours: string;
  status: 'open' | 'closed' | 'coming-soon';
  image?: string;
}
