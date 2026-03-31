import type { FC } from 'react';
import { BUSINESS_NAME, BUSINESS_PHONE, CALL_LINK, WA_GENERAL_LINK } from '@/lib/constants';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">{BUSINESS_NAME}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Because every journey has a story — and we want yours to be perfect.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
            <div className="space-y-2">
              <a href={CALL_LINK} className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {BUSINESS_PHONE}
              </a>
              <a
                href={WA_GENERAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Popular Routes</h4>
            <div className="grid grid-cols-1 gap-1">
              {[
                { label: 'Delhi → Manali', href: '/routes/delhi-to-manali-cab' },
                { label: 'Jaipur → Udaipur', href: '/routes/jaipur-to-udaipur-taxi' },
                { label: 'Delhi → Agra', href: '/routes/delhi-to-agra-cab' },
                { label: 'Delhi → Shimla', href: '/routes/delhi-to-shimla-taxi' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Row */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/60 text-sm mb-3">
            Verified Drivers | Transparent Billing | 24x7 Support | All-India Permit
          </p>
          <p className="text-center text-white/40 text-xs">
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
