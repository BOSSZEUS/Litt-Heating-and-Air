import { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'HVAC Services',
    href: '/services',
    children: [
      { label: '24 Hour Emergency Services', href: '/services/emergency' },
      { label: 'AC Repair & Service', href: '/services/ac-repair' },
      { label: 'Heating Repair & Service', href: '/services/heating-repair' },
      { label: 'AC Installation', href: '/services/ac-installation' },
      { label: 'Furnace Installation', href: '/services/furnace-installation' },
      { label: 'Duct Cleaning & Repair', href: '/services/duct-cleaning' },
      { label: 'Heat Pump Services', href: '/services/heat-pumps' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Specials', href: '/specials' },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: [
      { label: 'Modesto', href: '/service-areas/modesto' },
      { label: 'Ceres', href: '/service-areas/ceres' },
      { label: 'Escalon', href: '/service-areas/escalon' },
      { label: 'Manteca', href: '/service-areas/manteca' },
      { label: 'Ripon', href: '/service-areas/ripon' },
      { label: 'Riverbank', href: '/service-areas/riverbank' },
      { label: 'Turlock', href: '/service-areas/turlock' },
    ],
  },
  { label: 'Warranties', href: '/warranties' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Financing', href: '/financing' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Get A Quote', href: '/get-a-quote' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Contact Us', href: '/contact' },
];
