export interface InquiryFormData {
  numberOfTravelers: number;
  journeyStartDate: string;
  durationDays: number;
  pickupLocation: string;
  dropLocation: string;
  tripType: TripType;
  budgetRange?: BudgetRange;
  customerName?: string;
  customerPhone?: string;
}

export type TripType = 'one-way' | 'round-trip' | 'tour-package';
export type BudgetRange = '5k-10k' | '10k-25k' | '25k-plus';
