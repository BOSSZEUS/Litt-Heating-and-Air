export interface ServiceSection {
  title: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  sections: ServiceSection[];
  faqs: FAQ[];
}

export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface Special {
  id: number;
  title: string;
  description: string;
  discount: string;
  terms: string;
  validUntil: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
  emailConsent: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  phoneFormatted: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  hours: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  socialLinks: SocialLink[];
}
