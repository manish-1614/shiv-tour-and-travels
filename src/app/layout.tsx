import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { BUSINESS_NAME, WEBSITE_URL, HERO_HEADLINE } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} — Trusted Cab Service Across India`,
    template: `%s — ${BUSINESS_NAME}`,
  },
  description: HERO_HEADLINE,
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: `${BUSINESS_NAME} — Trusted Cab Service Across India`,
    description: HERO_HEADLINE,
    url: WEBSITE_URL,
    siteName: BUSINESS_NAME,
    locale: 'en_IN',
    type: 'website',
  },
};

const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1A3A5C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-brand-blue bg-white antialiased">
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
      </body>
    </html>
  );
}
