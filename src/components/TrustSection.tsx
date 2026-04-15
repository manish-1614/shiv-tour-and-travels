'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { driversData, reviewsData } from '@/data/drivers';
import DriverProfileCard from './DriverProfileCard';

const trustBadges = [
  'Verified Drivers',
  'Transparent Billing',
  '24x7 Support',
  'Zero Hidden Charges',
];

const galleryImages = [
  { src: '/images/interior/clean-car-interior-amenities-desktop.webp', alt: 'Spotlessly clean car interior with amenities' },
  { src: '/images/landmark/taj-mahal-highway-drive-desktop.webp', alt: 'Driving on a modern highway towards Agra' },
  { src: '/images/driver/smiling-man-indian-landmark-desktop.webp', alt: 'Friendly professional driver at a heritage site' },
  { src: '/images/tour/scenic-mountain-lake-tour-desktop.webp', alt: 'Scenic mountain lake destination' },
];

interface TrustSectionProps {}

const TrustSection: FC<TrustSectionProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'driver_profile_view');
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
    <section ref={sectionRef} className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-brand-blue text-center mb-3 sm:mb-4">
          Real People. Real Journeys. Real Reviews.
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Your mother&apos;s safety on that hill road matters to us as much as it matters to you.
        </p>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {reviewsData.map((review) => (
            <div key={review.name} className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-3">&ldquo;{review.text}&rdquo;</p>
              <div className="text-xs text-gray-500">
                <span className="font-medium text-brand-blue">{review.name}</span>
                {review.route && <span> · {review.route}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-gray-200">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Driver Profiles */}
        <h3 className="font-heading text-xl font-bold text-brand-blue text-center mb-6">
          Meet Your Trusted Drivers — Experienced, Verified, and Ready to Guide You
        </h3>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {driversData.map((driver) => (
            <DriverProfileCard key={driver.name} driver={driver} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-green-700">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
