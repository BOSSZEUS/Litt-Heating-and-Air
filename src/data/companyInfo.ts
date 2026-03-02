import { CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Litt Heating and Air',
  phone: '+12093803032',
  phoneFormatted: '(209) 380-3032',
  address: '424 Standiford Ave',
  city: 'Modesto',
  state: 'CA',
  zip: '95350',
  email: 'info@littheatingandair.com',
  hours: 'Open 24/7',
  rating: 5.0,
  reviewCount: 13,
  googleMapsUrl: 'https://maps.google.com/?q=424+Standiford+Ave+Modesto+CA+95350',
  socialLinks: [
    { platform: 'Facebook', url: '#' },
    { platform: 'Instagram', url: '#' },
    { platform: 'Google', url: 'https://maps.google.com/?q=Litt+Heating+and+Air+Modesto+CA' },
    { platform: 'YouTube', url: '#' },
  ],
};

export const serviceCheckboxOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'AC Repair & Service', label: 'AC Repair & Service' },
  { value: 'Heating Repair & Service', label: 'Heating Repair & Service' },
  { value: 'AC Installation', label: 'AC Installation' },
  { value: 'Furnace Installation', label: 'Furnace Installation' },
  { value: 'Duct Cleaning & Repair', label: 'Duct Cleaning & Repair' },
  { value: 'Heat Pump Services', label: 'Heat Pump Services' },
  { value: 'Indoor Air Quality', label: 'Indoor Air Quality' },
];
