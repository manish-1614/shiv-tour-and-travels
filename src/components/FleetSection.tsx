import type { FC } from 'react';
import Image from 'next/image';

interface FleetCard {
  title: string;
  subtitle: string;
  passengers: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const fleetCards: FleetCard[] = [
  {
    title: '4-Seater Sedan',
    subtitle: 'Perfect for individuals & small groups',
    passengers: 'Up to 4 passengers',
    features: ['AC sedan', 'Intercity-ready', 'Comfortable boot space', 'Ideal for business trips'],
    image: '/images/fleet/sedan.webp',
    imageAlt: 'Shiv Tour and Travels 4-seater sedan cab for intercity travel',
  },
  {
    title: '7-Seater MUV/SUV',
    subtitle: 'Spacious comfort for families',
    passengers: 'Up to 7 passengers',
    features: ['MUV/SUV', 'Family-friendly', 'Ample boot space', 'Multi-day trip ready'],
    image: '/images/fleet/suv.webp',
    imageAlt: 'Shiv Tour and Travels 7-seater SUV cab for family trips across India',
  },
];

interface FleetSectionProps {}

const FleetSection: FC<FleetSectionProps> = () => {
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
          {fleetCards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 sm:h-64 bg-gray-200">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold text-brand-blue">
                    {card.title}
                  </h3>
                  <span className="bg-brand-saffron/10 text-brand-saffron text-sm font-medium px-3 py-1 rounded-full">
                    {card.passengers}
                  </span>
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
                <a
                  href="#inquiry-form"
                  className="block text-center bg-brand-saffron text-white font-semibold rounded-lg py-3 h-12 
                             hover:bg-orange-700 transition-colors"
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
