import { BUSINESS_PHONE } from '@/lib/constants';

export interface RoutePageData {
  slug: string;
  title: string;
  metaDescription: string;
  pickup: string;
  drop: string;
  h1: string;
}

export const routesData: RoutePageData[] = [
  {
    slug: 'delhi-to-manali-cab',
    title: 'Delhi to Manali Cab Booking',
    metaDescription:
      `Book a Delhi to Manali cab with Shiv Tour & Travels. Friendly drivers, spotless cars, all-inclusive pricing. Call ${BUSINESS_PHONE}.`,
    pickup: 'Delhi',
    drop: 'Manali',
    h1: 'Delhi to Manali Cab — Trusted & Affordable Booking',
  },
  {
    slug: 'jaipur-to-udaipur-taxi',
    title: 'Jaipur to Udaipur Taxi Service',
    metaDescription:
      `Jaipur to Udaipur taxi at best prices. Clean cabs, verified drivers, transparent billing. Call ${BUSINESS_PHONE}.`,
    pickup: 'Jaipur',
    drop: 'Udaipur',
    h1: 'Jaipur to Udaipur Taxi — Clean Cabs, Fair Prices',
  },
  {
    slug: 'delhi-to-agra-cab',
    title: 'Delhi to Agra Cab — One Day Trip',
    metaDescription:
      `Delhi to Agra cab for one day trip. Visit the Taj Mahal with a trusted driver. Call ${BUSINESS_PHONE}.`,
    pickup: 'Delhi',
    drop: 'Agra',
    h1: 'Delhi to Agra Cab — Same Day Round Trip',
  },
  {
    slug: 'varanasi-bodh-gaya-cab',
    title: 'Varanasi to Bodh Gaya Taxi Service',
    metaDescription:
      `Varanasi to Bodh Gaya taxi with experienced pilgrimage route drivers. Call ${BUSINESS_PHONE}.`,
    pickup: 'Varanasi',
    drop: 'Bodh Gaya',
    h1: 'Varanasi to Bodh Gaya Cab — Pilgrimage Route Experts',
  },
  {
    slug: 'mumbai-shirdi-cab',
    title: 'Mumbai to Shirdi Cab Service',
    metaDescription:
      `Mumbai to Shirdi cab service with verified drivers and transparent pricing. Call ${BUSINESS_PHONE}.`,
    pickup: 'Mumbai',
    drop: 'Shirdi',
    h1: 'Mumbai to Shirdi Cab — Safe & Comfortable Journey',
  },
  {
    slug: 'delhi-to-shimla-taxi',
    title: 'Delhi to Shimla Cab Booking',
    metaDescription:
      `Book a Delhi to Shimla cab. Hill route specialists, clean vehicles, budget-friendly. Call ${BUSINESS_PHONE}.`,
    pickup: 'Delhi',
    drop: 'Shimla',
    h1: 'Delhi to Shimla Taxi — Hill Route Specialists',
  },
  {
    slug: 'jaipur-pushkar-taxi',
    title: 'Jaipur to Pushkar Taxi Fare',
    metaDescription:
      `Jaipur to Pushkar taxi at affordable fares. No hidden charges, clean cabs. Call ${BUSINESS_PHONE}.`,
    pickup: 'Jaipur',
    drop: 'Pushkar',
    h1: 'Jaipur to Pushkar Taxi — Quick & Affordable',
  },
  {
    slug: 'delhi-haridwar-rishikesh',
    title: 'Delhi to Haridwar Rishikesh Cab',
    metaDescription:
      `Delhi to Haridwar and Rishikesh cab service. Spiritual journey with trusted drivers. Call ${BUSINESS_PHONE}.`,
    pickup: 'Delhi',
    drop: 'Haridwar / Rishikesh',
    h1: 'Delhi to Haridwar & Rishikesh Cab — Spiritual Journey',
  },
  {
    slug: 'agra-jaipur-cab',
    title: 'Agra to Jaipur Cab — Golden Triangle',
    metaDescription:
      `Agra to Jaipur cab for Golden Triangle tour. Experienced drivers, all-India permit. Call ${BUSINESS_PHONE}.`,
    pickup: 'Agra',
    drop: 'Jaipur',
    h1: 'Agra to Jaipur Cab — Golden Triangle Route',
  },
  {
    slug: 'all-india-cab-service',
    title: 'All India Cab Service — Any City, Any Route',
    metaDescription:
      `All India cab service with all-India permit. Travel anywhere with Shiv Tour & Travels. Call ${BUSINESS_PHONE}.`,
    pickup: '',
    drop: '',
    h1: 'All India Cab Service — No Boundaries, No Restrictions',
  },
];
