"use client";

import type { FC } from 'react';
import Image from 'next/image';
import { pricingData } from '@/data/pricing';

interface FleetCard {
  title: string;
  subtitle: string;
  passengers: string;
  features: string[];
  image: string;
  imageAlt: string;
  rating: number;
  reviews: number;
  priceRange: { min: number; max: number };
  popularRoutes: string[];
}

const fleetCards: FleetCard[] = [
  {
    title: '4-Seater Sedan',
    subtitle: 'Perfect for individuals & small groups',
    passengers: 'Up to 4 passengers',
    features: ['AC sedan', 'Intercity-ready', 'Comfortable boot space', 'Ideal for business trips'],
    image: '/images/car/white-suzuki-dzire-car-desktop.webp',
    imageAlt: 'Shiv Tour and Travels 4-seater white Maruti Suzuki Dzire sedan cab',
    rating: 4.8,
    reviews: 124,
    priceRange: { min: 3500, max: 18000 },
    popularRoutes: ['Delhi-Manali', 'Jaipur-Udaipur', 'Delhi-Agra']
  },
  {
    title: '7-Seater MUV/SUV',
    subtitle: 'Spacious comfort for families',
    passengers: 'Up to 7 passengers',
    features: ['MUV/SUV', 'Family-friendly', 'Ample boot space', 'Multi-day trip ready'],
    image: '/images/car/innova-travel-india-fort-desktop.webp',
    imageAlt: 'Shiv Tour and Travels 7-seater Toyota Innova Crysta for family trips',
    rating: 4.9,
    reviews: 89,
    priceRange: { min: 5500, max: 24000 },
    popularRoutes: ['Delhi-Shimla', 'Mumbai-Shirdi', 'Varanasi-Bodh Gaya']
  },
];

interface FleetSectionProps {}

const FleetSection: FC<FleetSectionProps> = () => {
  // Calculate estimated price based on duration (simplified)
  const estimatePrice = (basePrice: number, days: number): number => {
    return basePrice * Math.min(days, 5); // Cap at 5 days for simplicity
  };

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue text-center mb-4">
          Choose Your Ride
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Every cab cleaned and checked before your trip.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleetCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* 360-degree view container */}
              <div className="relative h-56 sm:h-64 bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                   onClick={() => alert(`360° view of ${card.title} would open here`)}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* 360-degree icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4v5h.582m13.317 0H20v5M8 13a4 4 0 010-8M8 13a4 4 0 000 8M8 13a4 4 0 010-8M8 13a4 4 0 000 8M13 8a4 4 0 010-8M13 8a4 4 0 000 8"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold text-brand-blue">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-brand-saffron/10 text-brand-saffron text-sm font-medium px-3 py-1 rounded-full">
                      {card.passengers}
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" 
                             fill={i < Math.floor(card.rating) ? '#ffc107' : i < card.rating ? '#ffc107' : 'none'} 
                             stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-gray-500">({card.reviews})</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{card.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-wa" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                
                {/* Popular routes badge */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {card.popularRoutes.map((route) => (
                    <span key={route} className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                      {route}
                    </span>
                  ))}
                </div>
                
                {/* Price estimator */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Estimated Price (3 days):</span>
                    <span className="font-medium text-brand-blue">
                      ₹{estimatePrice(card.priceRange.min, 3).toLocaleString()} - ₹{estimatePrice(card.priceRange.max, 3).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-brand-saffron h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <a
                  href="#inquiry-form"
                  className="w-full block text-center bg-brand-saffron text-white font-semibold rounded-lg py-3 h-12 
                              hover:bg-orange-700 transition-colors transform hover:scale-105"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
