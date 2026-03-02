import { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/serviceAreas';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas | HVAC Services in Modesto & Central Valley',
  description:
    'Litt Heating and Air serves Modesto, Ceres, Escalon, Manteca, Ripon, Riverbank, and Turlock with professional HVAC services. Call (209) 380-3032.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Service Areas' }]} />
      <Hero
        title="Service Areas"
        subtitle="Proudly serving the Central Valley with professional HVAC services"
        size="sm"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Serving the Greater Modesto Area
          </h2>
          <p className="text-grey max-w-3xl mx-auto leading-relaxed mb-12">
            Litt Heating and Air is proud to provide reliable heating and air
            conditioning services throughout the Central Valley. From our home
            base in Modesto, we serve homeowners in surrounding communities with
            the same commitment to quality workmanship, honest pricing, and
            exceptional customer service.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {area.name}, CA
                  </h3>
                </div>
                <p className="text-grey leading-relaxed line-clamp-3">
                  {area.description}
                </p>
                <span className="inline-block mt-4 text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Find Us on the Map
          </h2>
          <p className="text-grey mb-8">
            Visit us at 424 Standiford Ave, Modesto, CA 95350 or call us at{' '}
            <a
              href="tel:+12093803032"
              className="text-primary font-bold hover:underline"
            >
              (209) 380-3032
            </a>
          </p>
          <div className="bg-grey-light rounded-lg p-8">
            <a
              href="https://www.google.com/maps/place/424+Standiford+Ave,+Modesto,+CA+95350"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <MapPin size={20} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />
      <CTABanner />
    </>
  );
}
