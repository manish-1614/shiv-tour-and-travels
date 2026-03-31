'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { CALL_LINK, WA_GENERAL_LINK, BUSINESS_PHONE } from '@/lib/constants';

interface WhatsAppFallbackProps {
  onClose: () => void;
}

const WhatsAppFallback: FC<WhatsAppFallbackProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may not be available */
    }
  };

  const handleRetryWhatsApp = () => {
    window.open(WA_GENERAL_LINK, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center"
          aria-label="Close fallback modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <h3 className="font-heading text-lg font-bold text-brand-blue mb-2">
          Having trouble opening WhatsApp?
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          No worries — here are other ways to reach us instantly:
        </p>

        <div className="space-y-3">
          <button
            onClick={handleRetryWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-brand-wa text-white font-semibold rounded-lg py-3 h-12
                       hover:bg-green-600 transition-colors"
          >
            Retry WhatsApp
          </button>

          <a
            href={CALL_LINK}
            className="w-full flex items-center justify-center gap-2 bg-brand-saffron text-white font-semibold rounded-lg py-3 h-12
                       hover:bg-orange-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>

          <button
            onClick={handleCopyNumber}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 text-brand-blue font-semibold rounded-lg py-3 h-12
                       hover:bg-gray-200 transition-colors"
          >
            {copied ? 'Copied \u2713' : 'Copy Number'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFallback;
