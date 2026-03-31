import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routesData } from '@/data/routes';
import { pricingData } from '@/data/pricing';
import { BUSINESS_NAME, BUSINESS_PHONE, WEBSITE_URL } from '@/lib/constants';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import FloatingCTABar from '@/components/FloatingCTABar';

interface RoutePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return routesData.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const route = routesData.find((r) => r.slug === params.slug);
  if (!route) return {};

  return {
    title: `${route.title} — ${BUSINESS_NAME} | ${BUSINESS_PHONE}`,
    description: route.metaDescription,
    openGraph: {
      title: `${route.title} — ${BUSINESS_NAME}`,
      description: route.metaDescription,
      url: `${WEBSITE_URL}/routes/${route.slug}`,
      siteName: BUSINESS_NAME,
    },
  };
}

function getMatchingPricing(pickup: string, drop: string) {
  return pricingData.find((p) => {
    const r = p.route.toLowerCase();
    return r.includes(pickup.toLowerCase()) && r.includes(drop.toLowerCase());
  });
}

export default function RoutePage({ params }: RoutePageProps) {
  const route = routesData.find((r) => r.slug === params.slug);
  if (!route) notFound();

  const pricing = getMatchingPricing(route.pickup, route.drop);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: route.title,
    description: route.metaDescription,
    touristType: 'Families, Business Travelers, Tourists',
    provider: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
      url: WEBSITE_URL,
    },
    ...(route.pickup && route.drop
      ? {
          itinerary: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: route.pickup },
              { '@type': 'ListItem', position: 2, name: route.drop },
            ],
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="pb-16 md:pb-0">
        {/* Hero for route page */}
        <section className="bg-brand-blue text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {route.h1}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              {route.metaDescription}
            </p>
            {pricing && (
              <div className="inline-flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center">
                  <p className="text-white/60 text-sm">4-Seater</p>
                  <p className="font-heading font-bold text-xl text-brand-gold">{pricing.fourSeater}</p>
                </div>
                <div className="hidden sm:block w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-white/60 text-sm">7-Seater</p>
                  <p className="font-heading font-bold text-xl text-brand-gold">{pricing.sevenSeater}</p>
                </div>
                <div className="hidden sm:block w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-white/60 text-sm">Duration</p>
                  <p className="font-heading font-bold text-xl">{pricing.duration}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key selling points */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-brand-saffron font-heading text-2xl font-bold mb-1">Verified</div>
                <p className="text-sm text-gray-600">Background-checked, trained drivers</p>
              </div>
              <div className="p-4">
                <div className="text-brand-saffron font-heading text-2xl font-bold mb-1">Transparent</div>
                <p className="text-sm text-gray-600">What we quote is what you pay</p>
              </div>
              <div className="p-4">
                <div className="text-brand-saffron font-heading text-2xl font-bold mb-1">24x7</div>
                <p className="text-sm text-gray-600">Support before, during, and after your trip</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-filled inquiry form */}
        <InquiryForm
          prefillPickup={route.pickup}
          prefillDrop={route.drop}
          source="route-page"
          routeSlug={route.slug}
        />
      </main>

      <Footer />
      <FloatingCTABar />
    </>
  );
}
