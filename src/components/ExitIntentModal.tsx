'use client';

import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { WA_GENERAL_LINK, CALL_LINK } from '@/lib/constants';

interface ExitIntentModalProps {}

const ExitIntentModal: FC<ExitIntentModalProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('exitShown') === 'true') return;

    setIsVisible(true);
    sessionStorage.setItem('exitShown', 'true');

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exit_intent_shown');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'exit_intent_whatsapp');
    }
  };

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) showModal();
    };

    let inactivityTimer: ReturnType<typeof setTimeout>;
    const resetInactivity = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(showModal, 30000);
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      resetInactivity();
      window.addEventListener('touchstart', resetInactivity);
      window.addEventListener('scroll', resetInactivity);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(inactivityTimer);
      window.removeEventListener('touchstart', resetInactivity);
      window.removeEventListener('scroll', resetInactivity);
    };
  }, [showModal]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center"
          aria-label="Close exit intent modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="text-5xl mb-4">🚗</div>
        <h3 className="font-heading text-xl font-bold text-brand-blue mb-2">
          Planning a trip? Chat with us instantly on WhatsApp!
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          We respond in 30 minutes. No spam. Just your perfect journey quote.
        </p>

        <div className="space-y-3">
          <a
            href={WA_GENERAL_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-wa text-white font-semibold rounded-lg py-3.5 h-14
                       hover:bg-green-600 transition-colors text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href={CALL_LINK}
            className="w-full flex items-center justify-center gap-2 text-brand-blue font-medium py-2 hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Or call us now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
