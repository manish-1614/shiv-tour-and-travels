import type { Driver, Review } from '@/types/driver';

export const driversData: Driver[] = [
  {
    name: 'Rajesh Kumar',
    photo: '/images/drivers/driver-1.webp',
    experience: 12,
    states: ['Rajasthan', 'Himachal Pradesh', 'Uttarakhand', 'Delhi NCR'],
    specialty: 'Himachal hill routes',
    languages: ['Hindi', 'English'],
  },
  {
    name: 'Sunil Sharma',
    photo: '/images/drivers/driver-2.webp',
    experience: 8,
    states: ['Uttar Pradesh', 'Bihar', 'Jharkhand', 'Madhya Pradesh'],
    specialty: 'Temple circuits & pilgrimage routes',
    languages: ['Hindi', 'Bhojpuri'],
  },
  {
    name: 'Vikram Singh',
    photo: '/images/drivers/driver-3.webp',
    experience: 15,
    states: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa'],
    specialty: 'Western India long-distance tours',
    languages: ['Hindi', 'English', 'Marathi'],
  },
];

export const reviewsData: Review[] = [
  {
    name: 'Priya Mehta',
    rating: 5,
    text: 'Best cab service we have ever used. Driver was polite, car was spotless, and the trip was perfectly planned.',
    date: '2025-12-15',
    route: 'Delhi → Manali',
  },
  {
    name: 'Amit Verma',
    rating: 5,
    text: 'Booked a 7-seater for a family trip. Zero hidden charges and the driver knew every good stop along the way.',
    date: '2026-01-20',
    route: 'Jaipur → Udaipur',
  },
  {
    name: 'Sneha Gupta',
    rating: 4,
    text: 'Very reliable service. They called 30 minutes before pickup as promised. Will definitely book again.',
    date: '2026-02-10',
    route: 'Delhi → Agra',
  },
  {
    name: 'Rahul Joshi',
    rating: 5,
    text: 'Our driver was like a personal guide — showed us hidden temples and local food spots we would have never found.',
    date: '2026-03-05',
    route: 'Varanasi → Bodh Gaya',
  },
];
