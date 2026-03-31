import type { InquiryFormData } from '@/types/inquiry';
import { WHATSAPP_BASE_URL } from './constants';

export function buildWhatsAppMessage(data: InquiryFormData): string {
  const lines = [
    'New Booking Inquiry — Shiv Tour & Travels',
    '-----------------------------------------',
    `Travelers  : ${data.numberOfTravelers}`,
    `Start Date : ${data.journeyStartDate}`,
    `Duration   : ${data.durationDays} Day(s)`,
    `Pickup     : ${data.pickupLocation}`,
    `Drop       : ${data.dropLocation}`,
    `Trip Type  : ${data.tripType}`,
    `Budget     : ${data.budgetRange ?? 'Not specified'}`,
    '-----------------------------------------',
    `Name       : ${data.customerName ?? 'Not provided'}`,
    `Contact    : ${data.customerPhone ?? 'Not provided'}`,
    '-----------------------------------------',
    'Sent from: shivourtravels.com',
  ];
  return lines.join('\n');
}

export function buildWhatsAppURL(data: InquiryFormData): string {
  const message = buildWhatsAppMessage(data);
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
