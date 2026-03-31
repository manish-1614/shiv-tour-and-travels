import type { FC } from 'react';
import { TRUST_TAGLINE } from '@/lib/constants';

const steps = [
  { number: '1', title: 'Share Details', description: 'Tell us where, when, and how many travelers' },
  { number: '2', title: 'Journey Plan', description: 'We design the perfect route and itinerary' },
  { number: '3', title: 'Budget Breakdown', description: 'Transparent cost — every rupee accounted for' },
  { number: '4', title: 'Confirm via WhatsApp', description: 'Finalize and book instantly on WhatsApp' },
];

interface BudgetPlanningSectionProps {}

const BudgetPlanningSection: FC<BudgetPlanningSectionProps> = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-brand-blue text-center mb-3 sm:mb-4">
          Plan Your Dream Trip — Know Every Rupee Before You Travel
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          No hidden charges. No last-minute surprises. Just your journey, planned with care.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-brand-saffron text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-brand-blue mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-green-700">{TRUST_TAGLINE}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Verified drivers. Transparent billing. 24x7 support.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPlanningSection;
