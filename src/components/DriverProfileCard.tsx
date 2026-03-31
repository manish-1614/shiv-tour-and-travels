'use client';

import type { FC } from 'react';
import Image from 'next/image';
import type { Driver } from '@/types/driver';
import { WHATSAPP_BASE_URL } from '@/lib/constants';

interface DriverProfileCardProps {
  driver: Driver;
}

const DriverProfileCard: FC<DriverProfileCardProps> = ({ driver }) => {
  const waLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `Hello, I would like to book a trip with driver ${driver.name} from Shiv Tour & Travels.`
  )}`;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden min-w-[260px] flex-shrink-0 snap-start">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={driver.photo}
          alt={`${driver.name} — verified driver at Shiv Tour and Travels`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-brand-blue text-lg mb-1">
          {driver.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {driver.experience} years experience · {driver.specialty}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {driver.states.slice(0, 3).map((state) => (
            <span key={state} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {state}
            </span>
          ))}
          {driver.states.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              +{driver.states.length - 3} more
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Speaks: {driver.languages.join(', ')}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-brand-wa text-white font-semibold rounded-lg py-2.5 h-11
                     hover:bg-green-600 transition-colors text-sm"
        >
          Book with {driver.name.split(' ')[0]}
        </a>
        <p className="text-xs text-center text-gray-500 mt-2">
          Verified. Trained. Local knowledge. Ready.
        </p>
      </div>
    </div>
  );
};

export default DriverProfileCard;
