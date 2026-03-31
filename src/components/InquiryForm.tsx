'use client';

import type { FC } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import type { InquiryFormData, TripType, BudgetRange } from '@/types/inquiry';
import { buildWhatsAppURL } from '@/lib/whatsapp';
import { saveLead } from '@/lib/firebase';
import { TRUST_TAGLINE } from '@/lib/constants';
import CallbackBadge from './CallbackBadge';
import WhatsAppFallback from './WhatsAppFallback';

interface FieldErrors {
  numberOfTravelers?: string;
  journeyStartDate?: string;
  durationDays?: string;
  pickupLocation?: string;
  dropLocation?: string;
  tripType?: string;
  customerPhone?: string;
  customerName?: string;
}

const tripTypes: { value: TripType; label: string }[] = [
  { value: 'one-way', label: 'One-Way' },
  { value: 'round-trip', label: 'Round Trip' },
  { value: 'tour-package', label: 'Tour Package' },
];

const budgetRanges: { value: BudgetRange; label: string }[] = [
  { value: '5k-10k', label: '₹5k–10k' },
  { value: '10k-25k', label: '₹10k–25k' },
  { value: '25k-plus', label: '₹25k+' },
];

interface InquiryFormProps {
  prefillPickup?: string;
  prefillDrop?: string;
  source?: string;
  routeSlug?: string;
}

const InquiryForm: FC<InquiryFormProps> = ({
  prefillPickup = '',
  prefillDrop = '',
  source = 'form',
  routeSlug,
}) => {
  const [numberOfTravelers, setNumberOfTravelers] = useState(2);
  const [journeyStartDate, setJourneyStartDate] = useState('');
  const [durationDays, setDurationDays] = useState(1);
  const [pickupLocation, setPickupLocation] = useState(prefillPickup);
  const [dropLocation, setDropLocation] = useState(prefillDrop);
  const [tripType, setTripType] = useState<TripType | ''>('');
  const [budgetRange, setBudgetRange] = useState<BudgetRange | ''>('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'form_view');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFirstFocus = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_start');
      }
    }
  }, [hasStarted]);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (numberOfTravelers < 1 || numberOfTravelers > 7) e.numberOfTravelers = 'Must be 1–7 travelers';
    if (!journeyStartDate) e.journeyStartDate = 'Start date is required';
    else if (journeyStartDate < todayStr) e.journeyStartDate = 'Date must be in the future';
    if (durationDays < 1 || durationDays > 30) e.durationDays = 'Must be 1–30 days';
    if (!pickupLocation || pickupLocation.length < 3) e.pickupLocation = 'Enter at least 3 characters';
    if (!dropLocation || dropLocation.length < 3) e.dropLocation = 'Enter at least 3 characters';
    if (!tripType) e.tripType = 'Select a trip type';
    if (customerName && customerName.length < 2) e.customerName = 'Enter at least 2 characters';
    if (customerPhone && !/^[6-9]\d{9}$/.test(customerPhone)) e.customerPhone = 'Enter a valid 10-digit Indian mobile number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'form_submit_click');
    }

    if (!validate()) return;

    setIsLoading(true);

    const data: InquiryFormData = {
      numberOfTravelers,
      journeyStartDate,
      durationDays,
      pickupLocation,
      dropLocation,
      tripType: tripType as TripType,
      budgetRange: budgetRange ? (budgetRange as BudgetRange) : undefined,
      customerName: customerName || undefined,
      customerPhone: customerPhone || undefined,
    };

    try {
      const waURL = buildWhatsAppURL(data);
      const waWindow = window.open(waURL, '_blank');

      await saveLead(data, {
        source,
        language: 'en',
        whatsappStatus: waWindow ? 'sent' : 'fallback',
        routeSlug,
      });

      if (!waWindow) {
        setShowFallback(true);
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'form_submit_fallback');
        }
      } else {
        setShowSuccess(true);
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'form_submit_success');
        }
        setTimeout(() => {
          setShowSuccess(false);
          resetForm();
        }, 5000);
      }
    } catch (error) {
      console.error('Lead save failed:', error);
      setShowFallback(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setNumberOfTravelers(2);
    setJourneyStartDate('');
    setDurationDays(1);
    setPickupLocation(prefillPickup);
    setDropLocation(prefillDrop);
    setTripType('');
    setBudgetRange('');
    setCustomerName('');
    setCustomerPhone('');
    setErrors({});
    setHasStarted(false);
  };

  return (
    <section ref={sectionRef} id="inquiry-form" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-brand-blue text-center mb-2">
          Real pricing. No commitment. Just your journey, planned.
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your trip details and get a free quote on WhatsApp in {TRUST_TAGLINE.toLowerCase().includes('zero') ? 'minutes' : '30 minutes'}.
        </p>

        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-green-700 font-medium">Inquiry sent! We respond within 30 minutes.</p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Number of Travelers */}
          <div>
            <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-brand-blue mb-1">
              Number of Travelers *
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNumberOfTravelers(Math.max(1, numberOfTravelers - 1))}
                className="w-11 h-11 rounded-lg bg-gray-100 text-brand-blue font-bold text-xl hover:bg-gray-200 transition-colors"
              >
                −
              </button>
              <input
                id="numberOfTravelers"
                type="number"
                min={1}
                max={7}
                value={numberOfTravelers}
                onChange={(e) => setNumberOfTravelers(Math.min(7, Math.max(1, parseInt(e.target.value) || 1)))}
                onFocus={handleFirstFocus}
                className="w-16 h-11 text-center text-base border border-gray-300 rounded-lg text-brand-blue font-semibold focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setNumberOfTravelers(Math.min(7, numberOfTravelers + 1))}
                className="w-11 h-11 rounded-lg bg-gray-100 text-brand-blue font-bold text-xl hover:bg-gray-200 transition-colors"
              >
                +
              </button>
              <span className="text-xs sm:text-sm text-gray-500">max 7</span>
            </div>
            {errors.numberOfTravelers && <p role="alert" className="text-red-500 text-sm mt-1">{errors.numberOfTravelers}</p>}
          </div>

          {/* Journey Start Date */}
          <div>
            <label htmlFor="journeyStartDate" className="block text-sm font-medium text-brand-blue mb-1">
              Journey Start Date *
            </label>
            <input
              id="journeyStartDate"
              type="date"
              min={todayStr}
              value={journeyStartDate}
              onChange={(e) => setJourneyStartDate(e.target.value)}
              onFocus={handleFirstFocus}
              className="w-full h-11 px-4 text-base border border-gray-300 rounded-lg text-brand-blue focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
            />
            {errors.journeyStartDate && <p role="alert" className="text-red-500 text-sm mt-1">{errors.journeyStartDate}</p>}
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="durationDays" className="block text-sm font-medium text-brand-blue mb-1">
              Duration (Days) *
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                className="w-11 h-11 rounded-lg bg-gray-100 text-brand-blue font-bold text-xl hover:bg-gray-200 transition-colors"
              >
                −
              </button>
              <input
                id="durationDays"
                type="number"
                min={1}
                max={30}
                value={durationDays}
                onChange={(e) => setDurationDays(Math.min(30, Math.max(1, parseInt(e.target.value) || 1)))}
                onFocus={handleFirstFocus}
                className="w-16 h-11 text-center text-base border border-gray-300 rounded-lg text-brand-blue font-semibold focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setDurationDays(Math.min(30, durationDays + 1))}
                className="w-11 h-11 rounded-lg bg-gray-100 text-brand-blue font-bold text-xl hover:bg-gray-200 transition-colors"
              >
                +
              </button>
              <span className="text-xs sm:text-sm text-gray-500">day(s)</span>
            </div>
            {errors.durationDays && <p role="alert" className="text-red-500 text-sm mt-1">{errors.durationDays}</p>}
          </div>

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-brand-blue mb-1">
              Pickup Location *
            </label>
            <input
              id="pickupLocation"
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              onFocus={handleFirstFocus}
              placeholder="e.g. Delhi, Jaipur Airport"
              className="w-full h-11 px-4 text-base border border-gray-300 rounded-lg text-brand-blue placeholder-gray-400 focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
            />
            {errors.pickupLocation && <p role="alert" className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>}
          </div>

          {/* Drop Location */}
          <div>
            <label htmlFor="dropLocation" className="block text-sm font-medium text-brand-blue mb-1">
              Drop Location *
            </label>
            <input
              id="dropLocation"
              type="text"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              onFocus={handleFirstFocus}
              placeholder="e.g. Manali, Shimla"
              className="w-full h-11 px-4 text-base border border-gray-300 rounded-lg text-brand-blue placeholder-gray-400 focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
            />
            {errors.dropLocation && <p role="alert" className="text-red-500 text-sm mt-1">{errors.dropLocation}</p>}
          </div>

          {/* Trip Type */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-brand-blue mb-2">
                Trip Type *
              </legend>
              <div className="flex flex-wrap gap-2">
                {tripTypes.map((tt) => (
                  <button
                    key={tt.value}
                    type="button"
                    onClick={() => { setTripType(tt.value); handleFirstFocus(); }}
                    className={`px-5 py-2.5 h-11 rounded-full text-sm font-medium border transition-colors ${
                      tripType === tt.value
                        ? 'bg-brand-saffron text-white border-brand-saffron'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-brand-saffron'
                    }`}
                  >
                    {tt.label}
                  </button>
                ))}
              </div>
              {errors.tripType && <p role="alert" className="text-red-500 text-sm mt-1">{errors.tripType}</p>}
            </fieldset>
          </div>

          {/* Budget Range (Optional) */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-brand-blue mb-2">
                Budget Range <span className="text-gray-400 font-normal">(optional)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((br) => (
                  <button
                    key={br.value}
                    type="button"
                    onClick={() => setBudgetRange(budgetRange === br.value ? '' : br.value)}
                    className={`px-5 py-2.5 h-11 rounded-full text-sm font-medium border transition-colors ${
                      budgetRange === br.value
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-brand-blue'
                    }`}
                  >
                    {br.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Customer Name (Optional) */}
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-brand-blue mb-1">
              Your Name <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full h-11 px-4 text-base border border-gray-300 rounded-lg text-brand-blue placeholder-gray-400 focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
            />
            {errors.customerName && <p role="alert" className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
          </div>

          {/* Customer Phone (Optional) */}
          <div>
            <label htmlFor="customerPhone" className="block text-sm font-medium text-brand-blue mb-1">
              Phone Number <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="customerPhone"
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="e.g. 9876543210"
              className="w-full h-11 px-4 text-base border border-gray-300 rounded-lg text-brand-blue placeholder-gray-400 focus:ring-2 focus:ring-brand-saffron focus:border-transparent"
            />
            {errors.customerPhone && <p role="alert" className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-wa text-white font-bold rounded-xl py-4 h-14 text-lg
                         hover:bg-green-600 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
            >
              {isLoading ? (
                'Preparing your inquiry...'
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get My Free Quote on WhatsApp
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Free quote. 30-min response. Zero spam.
            </p>
            <div className="flex justify-center mt-3">
              <CallbackBadge />
            </div>
          </div>
        </form>
      </div>

      {showFallback && (
        <WhatsAppFallback onClose={() => setShowFallback(false)} />
      )}
    </section>
  );
};

export default InquiryForm;
