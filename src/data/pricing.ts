export interface PricingRoute {
  route: string;
  fourSeater: string;
  sevenSeater: string;
  duration: string;
  type: string;
}

export const pricingData: PricingRoute[] = [
  {
    route: 'Delhi → Manali',
    fourSeater: '₹14,000–₹18,000',
    sevenSeater: '₹18,000–₹24,000',
    duration: '3 days',
    type: 'Tour',
  },
  {
    route: 'Jaipur → Udaipur',
    fourSeater: '₹6,000–₹9,000',
    sevenSeater: '₹9,000–₹13,000',
    duration: '1 day',
    type: 'One-way',
  },
  {
    route: 'Delhi → Agra',
    fourSeater: '₹3,500–₹5,500',
    sevenSeater: '₹5,500–₹8,000',
    duration: '1 day',
    type: 'Round trip',
  },
  {
    route: 'Varanasi → Bodh Gaya',
    fourSeater: '₹5,000–₹7,500',
    sevenSeater: '₹7,500–₹11,000',
    duration: '1 day',
    type: 'One-way',
  },
  {
    route: 'Mumbai → Shirdi',
    fourSeater: '₹5,000–₹7,000',
    sevenSeater: '₹7,500–₹10,500',
    duration: '1 day',
    type: 'Round trip',
  },
  {
    route: 'Delhi → Shimla',
    fourSeater: '₹8,000–₹11,000',
    sevenSeater: '₹12,000–₹16,000',
    duration: '2 days',
    type: 'Tour',
  },
  {
    route: 'Jaipur → Pushkar',
    fourSeater: '₹2,500–₹4,000',
    sevenSeater: '₹4,000–₹6,500',
    duration: '1 day',
    type: 'Round trip',
  },
  {
    route: 'Delhi → Haridwar',
    fourSeater: '₹5,000–₹7,000',
    sevenSeater: '₹7,500–₹11,000',
    duration: '1 day',
    type: 'Round trip',
  },
];
