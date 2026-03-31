import type { FC } from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Local Knowledge',
    description: 'Every driver knows the best routes, fastest shortcuts, and must-visit stops in their region.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Hidden Gems',
    description: 'Discover temples, markets, and mountain views that only locals know about.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safe Navigation',
    description: 'Hill roads, night drives, rainy weather — our drivers handle it all with calm expertise.',
  },
];

interface DriverGuideSectionProps {}

const DriverGuideSection: FC<DriverGuideSectionProps> = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-brand-blue text-center mb-3 sm:mb-4">
          Your Driver Knows the Stories Behind Every Temple, Market & Mountain
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Travel with your family like it&apos;s our own.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center text-brand-saffron mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-blue mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverGuideSection;
