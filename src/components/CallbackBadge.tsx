import type { FC } from 'react';
import { CALLBACK_BADGE_TEXT } from '@/lib/constants';

interface CallbackBadgeProps {}

const CallbackBadge: FC<CallbackBadgeProps> = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
      </svg>
      <span className="text-sm font-medium text-green-700">
        {CALLBACK_BADGE_TEXT}
      </span>
    </div>
  );
};

export default CallbackBadge;
