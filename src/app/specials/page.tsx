import { Metadata } from 'next';
import { Tag, Clock, Phone } from 'lucide-react';
import { specials } from '@/data/specials';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Specials & Promotions',
  description:
    'Check out current HVAC specials and promotions from Litt Heating and Air in Modesto, CA. Save on AC repair, heating, and more. Call (209) 380-3032.',
};

export default function SpecialsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Specials' }]} />
      <Hero
        title="Specials & Promotions"
        subtitle="Take advantage of our current HVAC deals and save on your next service"
        size="sm"
      />

      {/* Specials Grid */}
      <section className="section-padding">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specials.map((special, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary rounded-lg overflow-hidden shadow-md"
              >
                <div className="bg-primary text-white p-4 flex items-center gap-3">
                  <Tag size={24} />
                  <h3 className="text-xl font-bold uppercase">
                    {special.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-bold text-primary mb-3">
                    {special.discount}
                  </p>
                  <p className="text-grey leading-relaxed mb-4">
                    {special.description}
                  </p>
                  {special.terms && (
                    <p className="text-sm text-grey/70 italic mb-4">
                      {special.terms}
                    </p>
                  )}
                  <Button href="/get-a-quote" size="sm">
                    Claim This Offer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            How to Redeem
          </h2>
          <p className="text-grey max-w-2xl mx-auto leading-relaxed mb-8">
            To take advantage of our current specials, simply mention the
            promotion when you call or include it in your online quote request.
            Our team will make sure you receive the discounted rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-a-quote">Request a Quote</Button>
            <Button href="tel:+12093803032" variant="dark">
              Call (209) 380-3032
            </Button>
          </div>
        </div>
      </section>

      <TrustBadges />
      <CTABanner />
    </>
  );
}
