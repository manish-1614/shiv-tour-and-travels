'use client';

import type { FC } from 'react';
import { HERO_HEADLINE, CALL_LINK, WA_GENERAL_LINK } from '@/lib/constants';
import CallbackBadge from './CallbackBadge';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'hero_call_click');
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'hero_whatsapp_click');
    }
  };

  // Dynamic headlines array
  const headlines = [
    "Discover the Majesty of Rajasthan",
    "Experience Serene Kerala Backwaters", 
    "Explore the Himalayan Heights",
    "Journey Through Vibrant Gujarat",
    "Uncover Spiritual Varanasi",
    "Adventure Awaits in Ladakh"
  ];

  // Social proof data (would typically come from API)
  const socialProof = {
    bookingsToday: 12,
    happyCustomers: 5432,
    yearsInService: 8
  };

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback to image if video not available */}
          <img 
            src="/images/fleet/hero-cab.webp" 
            alt="Shiv Tour and Travels cab ready for your journey across India" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          {/* Dynamic Headline */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 animate-fade-in">
            <span className="block">{headlines[0]}</span>
            <span className="block mt-2">{headlines[1]}</span>
          </h1>
          
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 animate-fade-in delay-100">
            Friendly Drivers | Spotless Cabs | Guide-Like Expertise | All-India Coverage
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-in delay-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{socialProof.bookingsToday}</div>
              <div className="text-sm text-white/80">Bookings Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{socialProof.happyCustomers}</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{socialProof.yearsInService}</div>
              <div className="text-sm text-white/80">Years of Service</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={CALL_LINK}
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 bg-brand-saffron text-white font-semibold 
                          rounded-lg px-6 py-4 h-14 text-lg hover:bg-orange-700 transition-colors shadow-lg transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <a
              href={WA_GENERAL_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-wa text-white font-semibold 
                          rounded-lg px-6 py-4 h-14 text-lg hover:bg-green-600 transition-colors shadow-lg transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
          
          <CallbackBadge className="mt-6 animate-fade-in delay-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
