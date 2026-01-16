import { LocationItem } from '@/types/location';

export const LOCATIONS: LocationItem[] = [
  {
    id: 'l1',
    name: 'Joss Pusat',
    address: 'Jl. Damai Sejahtera No. 88',
    city: 'Yogyakarta',
    phone: '+62 812 3456 7890',
    mapsUrl: 'https://maps.google.com',
    operatingHours: '08:00 - 23:00',
    status: 'open',
  },
  {
    id: 'l2',
    name: 'Joss Kaliurang',
    address: 'Jl. Kaliurang KM 5',
    city: 'Yogyakarta',
    phone: '+62 812 9876 5432',
    mapsUrl: 'https://maps.google.com',
    operatingHours: '10:00 - 22:00',
    status: 'open',
  },
  {
    id: 'l3',
    name: 'Joss Jakarta Selatan',
    address: 'Jl. Senopati No. 10',
    city: 'Jakarta',
    phone: '-',
    mapsUrl: '#',
    operatingHours: 'Coming Soon',
    status: 'coming-soon',
  },
];
