'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { pricingData } from '@/data/pricing';
import { TRUST_TAGLINE } from '@/lib/constants';

interface PricingSectionProps {}

const PricingSection: FC<PricingSectionProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'pricing_section_view');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-brand-blue text-center mb-3 sm:mb-4">
          Popular Routes — Starting Fares at a Glance
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Indicative ranges only. Request your free quote for exact pricing.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-sm scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full bg-white text-left text-xs sm:text-sm min-w-[480px]">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-4 py-3 font-semibold">Route</th>
                <th className="px-4 py-3 font-semibold">4-Seater</th>
                <th className="px-4 py-3 font-semibold">7-Seater</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Duration</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Type</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, i) => (
                <tr
                  key={row.route}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3 font-medium text-brand-blue whitespace-nowrap">
                    {row.route}
                  </td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.fourSeater}</td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.sevenSeater}</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.duration}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="bg-brand-saffron/10 text-brand-saffron text-xs font-medium px-2 py-1 rounded-full">
                      {row.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">
            {TRUST_TAGLINE} — what we quote is what you pay.
          </p>
          <a
            href="#inquiry-form"
            className="inline-block bg-brand-saffron text-white font-semibold rounded-lg px-8 py-3 h-12
                       hover:bg-orange-700 transition-colors shadow-md"
          >
            Get Your Exact Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
