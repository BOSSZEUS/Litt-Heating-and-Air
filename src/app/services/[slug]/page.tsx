import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services } from '@/data/services';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import EmergencyBanner from '@/components/sections/EmergencyBanner';
import Button from '@/components/ui/Button';

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'HVAC Services', href: '/services' },
          { label: service.title },
        ]}
      />
      <Hero title={service.title} subtitle={service.description} size="sm" />

      {/* Service Content Sections */}
      <section className="section-padding">
        <div className="max-w-container mx-auto">
          {service.sections.map((section, index) => (
            <div
              key={index}
              className={`${
                index > 0 ? 'mt-12 pt-12 border-t border-grey-border' : ''
              }`}
            >
              <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
                {section.title}
              </h2>
              <p className="text-grey leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need a repair, installation, or just want to schedule a
            maintenance visit, our team is here to help. Contact us today for a
            free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-a-quote">Get a Free Estimate</Button>
            <Button href="tel:+12093803032" variant="dark">
              Call (209) 380-3032
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection
          title={`${service.shortTitle} FAQs`}
          faqs={service.faqs}
        />
      )}

      <EmergencyBanner />
      <TrustBadges />
      <CTABanner />
    </>
  );
}
