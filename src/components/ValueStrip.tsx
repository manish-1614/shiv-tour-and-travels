"use client";

import type { FC } from 'react';
import { useState } from 'react';

interface ValueCard {
  icon: React.ReactNode;
  headline: string;
  description: string;
  statistic?: string;
  tooltip?: string;
}

const values: ValueCard[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    headline: 'All-India Permit',
    description: 'Travel anywhere, no boundaries',
    statistic: '28 States Covered',
    tooltip: 'Permitted to operate in all Indian states and union territories'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976 2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    headline: 'Friendly Staff',
    description: 'Polite, calm, and composed always',
    statistic: '98% Satisfaction',
    tooltip: 'Based on customer feedback and reviews'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    headline: 'Spotless Vehicles',
    description: 'Hygiene-first, inspected every trip',
    statistic: '5000+ Rides',
    tooltip: 'Regularly sanitized and maintained fleet'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    headline: 'Driver as Guide',
    description: 'Local expertise for every destination',
    statistic: '150+ Routes',
    tooltip: 'Experienced drivers familiar with popular tourist routes'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3-3v8a3 3 0 003 3z" />
      </svg>
    ),
    headline: 'Budget Planning',
    description: 'Know your costs before you go',
    statistic: 'Transparent Pricing',
    tooltip: 'No hidden charges, all costs disclosed upfront'
  },
];

interface ValueStripProps {}

const ValueStrip: FC<ValueStripProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {values.map((v, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={v.headline}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm 
                          hover:shadow-lg transition-all duration-300 transform 
                          ${isHovered ? 'scale-105 z-10' : ''} 
                          ${i === values.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="mb-4">
                  <div className={`${isHovered ? 'animate-pulse' : ''} text-brand-saffron`}>
                    {v.icon}
                  </div>
                  {v.statistic && (
                    <div className={`mt-2 text-sm font-medium ${isHovered ? 'text-brand-saffron' : 'text-gray-600'}`}>
                      {v.statistic}
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-brand-blue mb-2">
                  {v.headline}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{v.description}</p>
                {v.tooltip && (
                  <div className={`mt-auto pt-4 text-[10px] sm:text-xs leading-relaxed ${isHovered ? 'text-brand-blue font-medium' : 'text-gray-400'} 
                            flex items-start justify-center gap-1.5`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>{v.tooltip}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;
