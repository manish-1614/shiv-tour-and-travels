'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { CALL_LINK, WA_GENERAL_LINK } from '@/lib/constants';
import CallbackBadge from './CallbackBadge';

interface HeroSectionProps {}

const quotes = [
  "One Cab. Every Road. All of India",
  "Where Forts Tell Stories and Deserts Glow at Dusk — Rajasthan Awaits.",
  "Let the Backwaters of Kerala Slow Time Down — We'll Get You There"
];

const HeroSection: FC<HeroSectionProps> = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true); // start fade in
      }, 500); // 500ms fade transition
    }, 4000); // Change quote every 4 seconds
    return () => clearInterval(interval);
  }, []);

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

  // Social proof data (would typically come from API)
  const socialProof = {
    bookingsToday: 12,
    happyCustomers: 5432,
    yearsInService: 8
  };

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/shiv-tour-and-travels/images/car/scenic-mountain-road-trip-desktop.webp"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback to image if video not available */}
          <img 
            src="/shiv-tour-and-travels/images/car/scenic-mountain-road-trip-desktop.webp" 
            alt="Premium Shiv Tour cab traveling through scenic mountain roads in India" 
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
        <div className="w-full max-w-3xl text-center mx-auto flex flex-col items-center">
          {/* Hero Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight sm:leading-tight mb-4 sm:mb-6 animate-fade-in drop-shadow-lg">
            We Don't Just Drive You There — We Make the Journey Worth It.
          </h1>
          
          {/* Animated Quotes */}
          <div className="h-20 sm:h-24 mb-4 flex items-center justify-center overflow-hidden w-full px-2">
            <p 
              className={`text-lg sm:text-2xl text-white/90 font-medium transition-opacity duration-500 ease-in-out drop-shadow-md ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {quotes[currentQuote]}
            </p>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10 w-full overflow-hidden">
            <div className="text-center min-w-[70px] sm:min-w-[100px]">
              <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-md">{socialProof.bookingsToday}</div>
              <div className="text-[10px] sm:text-sm text-white/90">Bookings Today</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-white/30 hidden sm:block"></div>
            <div className="text-center min-w-[70px] sm:min-w-[100px]">
              <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-md">{socialProof.happyCustomers}</div>
              <div className="text-[10px] sm:text-sm text-white/90">Happy Customers</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-white/30 hidden sm:block"></div>
            <div className="text-center min-w-[70px] sm:min-w-[100px]">
              <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-md">{socialProof.yearsInService}</div>
              <div className="text-[10px] sm:text-sm text-white/90">Years of Service</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center px-2">
            <a
              href={CALL_LINK}
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 bg-brand-saffron text-white font-semibold 
                          rounded-lg px-6 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg hover:bg-orange-700 transition-colors shadow-lg transform hover:scale-105 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
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
                          rounded-lg px-6 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg hover:bg-green-600 transition-colors shadow-lg transform hover:scale-105 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
          
          <CallbackBadge className="mt-8 animate-fade-in delay-300 w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
