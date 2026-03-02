import { Special } from '@/types';

export const specials: Special[] = [
  {
    id: 1,
    title: 'AC Tune-Up Special',
    description: 'Get your air conditioning system ready for summer with our comprehensive tune-up service. Includes full inspection, filter replacement, and coil cleaning.',
    discount: '$49.99',
    terms: 'Regular price $129. New customers only. Cannot be combined with other offers. Must mention this offer when scheduling.',
    validUntil: '2025-09-30',
  },
  {
    id: 2,
    title: 'Free Estimate on New Systems',
    description: 'Thinking about upgrading your HVAC system? Get a free, no-obligation estimate on a new AC or furnace installation. We will help you find the right system for your home and budget.',
    discount: 'FREE',
    terms: 'Applies to new system installations only. No purchase necessary for estimate.',
    validUntil: '2025-12-31',
  },
  {
    id: 3,
    title: '$75 Off Any Repair Over $500',
    description: 'Save on major HVAC repairs. Whether it is your air conditioner, furnace, or heat pump, we have got you covered with quality repairs at honest prices.',
    discount: '$75 OFF',
    terms: 'Minimum repair cost of $500 before discount. Cannot be combined with other offers. One coupon per household.',
    validUntil: '2025-12-31',
  },
  {
    id: 4,
    title: 'Seasonal Maintenance Plan',
    description: 'Sign up for our annual maintenance plan and receive priority scheduling, 15% off all repairs, and two tune-ups per year — one for heating and one for cooling.',
    discount: '$199/year',
    terms: 'Annual commitment required. Includes two seasonal tune-ups. Discount applies to parts and labor on repairs.',
    validUntil: '2025-12-31',
  },
];
