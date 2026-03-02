import { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'HVAC Services',
  description: 'Complete HVAC services in Modesto, CA. AC repair, heating, furnace installation, duct cleaning, heat pumps, and 24/7 emergency service. Call (209) 380-3032.',
};

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumb text="HVAC Services" />
      <Hero
        title="Professional HVAC Services"
        subtitle="Comprehensive heating and cooling solutions for homes and businesses throughout the Central Valley."
        size="md"
      />

      <section className="section-padding bg-white">
        <div className="max-w-container mx-auto text-center">
          <p className="text-grey leading-relaxed max-w-3xl mx-auto">
            From routine maintenance to emergency repairs and complete system installations,
            Litt Heating and Air has you covered. Our licensed technicians are trained on
            all major HVAC brands and backed by our satisfaction guarantee. Explore our
            services below to learn how we can help keep your home comfortable year-round.
          </p>
        </div>
      </section>

      <ServicesOverview showHeading={false} />
      <CTABanner />
    </main>
  );
}
