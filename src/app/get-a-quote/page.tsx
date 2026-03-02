import { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import QuoteForm from '@/components/forms/QuoteForm';
import PhoneButton from '@/components/ui/PhoneButton';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a free HVAC estimate from Litt Heating and Air. AC repair, heating, furnace installation, and more in Modesto, CA. Call (209) 380-3032.',
};

export default function GetAQuotePage() {
  return (
    <main>
      <Breadcrumb text="Get a Quote" />
      <Hero title="Request An Estimate Today" size="md" />

      {/* Schedule by Phone */}
      <section className="section-padding bg-white text-center">
        <SectionHeading title="Schedule by Phone" />
        <p className="text-grey mb-5">Open 24/7</p>
        <PhoneButton variant="primary" size="lg" />
      </section>

      {/* Schedule Online */}
      <section className="section-padding bg-white text-center">
        <SectionHeading
          title="Schedule Online"
          subtitle="Submit the form below to schedule a quote."
        />
        <QuoteForm />
      </section>

      <TrustBadges />
    </main>
  );
}
