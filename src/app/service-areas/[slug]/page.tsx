import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MapPin, CheckCircle } from 'lucide-react';
import { serviceAreas } from '@/data/serviceAreas';
import { services } from '@/data/services';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import EmergencyBanner from '@/components/sections/EmergencyBanner';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface ServiceAreaPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: ServiceAreaPageProps): Metadata {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const area = serviceAreas.find((a) => a.slug === params.slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${area.name}, CA` },
        ]}
      />
      <Hero
        title={`HVAC Services in ${area.name}, CA`}
        subtitle={`Professional heating and cooling services for ${area.name} homeowners`}
        size="sm"
      />

      {/* Area Description */}
      <section className="section-padding">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
              <MapPin size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary uppercase tracking-wide">
              {area.name}, California
            </h2>
          </div>
          <p className="text-grey leading-relaxed text-lg mb-8">
            {area.description}
          </p>

          {/* Zip Codes */}
          <div className="bg-grey-light rounded-lg p-6">
            <h3 className="font-bold text-dark mb-3">
              ZIP Codes We Serve in {area.name}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {area.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="bg-white px-3 py-1 rounded text-sm font-medium text-grey border border-grey-border"
                >
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-8 text-center">
            HVAC Services Available in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <CheckCircle
                  size={20}
                  className="text-primary flex-shrink-0"
                />
                <span className="font-medium text-dark group-hover:text-primary transition-colors">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Need HVAC Service in {area.name}?
          </h2>
          <p className="text-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact Litt Heating and Air today for a free estimate on any heating
            or cooling service. We proudly serve {area.name} and the surrounding
            Central Valley communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-a-quote">Get a Free Estimate</Button>
            <Button href="tel:+12093803032" variant="dark">
              Call (209) 380-3032
            </Button>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <TrustBadges />
      <CTABanner />
    </>
  );
}
