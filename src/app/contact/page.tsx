import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ContactForm from '@/components/forms/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/companyInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Litt Heating and Air in Modesto, CA. Call (209) 380-3032 or send us a message. Available 24/7 for HVAC emergencies.',
};

const contactDetails = [
  {
    icon: <MapPin size={24} />,
    label: 'Address',
    value: `${companyInfo.address}, ${companyInfo.city}, ${companyInfo.state} ${companyInfo.zip}`,
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: companyInfo.phoneFormatted,
    href: `tel:${companyInfo.phone}`,
  },
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: <Clock size={24} />,
    label: 'Hours',
    value: companyInfo.hours,
  },
];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumb text="Contact Us" />
      <Hero title="Let's Connect" size="md" />

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div>
              <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-grey hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-grey">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 bg-grey-light h-[250px] flex items-center justify-center">
                <p className="text-grey text-sm">
                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold"
                  >
                    View on Google Maps →
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading title="Send Us a Message" centered={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
    </main>
  );
}
