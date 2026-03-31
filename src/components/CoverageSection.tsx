import type { FC } from 'react';

const popularRoutes = [
  'Delhi NCR', 'Rajasthan', 'Himachal Pradesh', 'Uttarakhand',
  'Uttar Pradesh', 'Maharashtra', 'Gujarat', 'Goa',
  'Bihar', 'Madhya Pradesh', 'Punjab', 'Jammu & Kashmir',
];

interface CoverageSectionProps {}

const CoverageSection: FC<CoverageSectionProps> = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
          From Kashmir to Kanyakumari — We Go Where You Go
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-10">
          Licensed to operate across all Indian states. Any pickup, any drop, no restrictions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {popularRoutes.map((route) => (
            <div
              key={route}
              className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium"
            >
              {route}
            </div>
          ))}
        </div>
        <p className="mt-8 text-brand-gold font-medium">
          Our permit covers every state and union territory in India. No exceptions.
        </p>
      </div>
    </section>
  );
};

export default CoverageSection;
