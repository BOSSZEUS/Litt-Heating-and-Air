import { Metadata } from 'next';
import { ShieldCheck, CheckCircle, Clock, Wrench } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Warranties & Guarantees',
  description:
    'Litt Heating and Air stands behind every job. Learn about our warranties, service guarantees, and satisfaction promise. Call (209) 380-3032.',
};

const warranties = [
  {
    icon: ShieldCheck,
    title: 'Workmanship Guarantee',
    description:
      'We stand behind the quality of our work. If any issue arises from our installation or repair within the warranty period, we will return and make it right at no additional cost to you.',
  },
  {
    icon: Wrench,
    title: 'Manufacturer Warranties',
    description:
      'All new equipment installations include full manufacturer warranties. We are authorized dealers for top HVAC brands, ensuring your investment is protected for years to come.',
  },
  {
    icon: CheckCircle,
    title: '100% Satisfaction Promise',
    description:
      'Your satisfaction is our top priority. If you are not completely satisfied with our service, contact us and we will work to make it right. Our 5-star reputation is built on keeping every customer happy.',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description:
      'We respect your time. Our technicians arrive within the scheduled window, and we notify you if anything changes. If we are late, we will make it up to you.',
  },
];

export default function WarrantiesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Warranties' }]} />
      <Hero
        title="Warranties & Guarantees"
        subtitle="We stand behind every job with confidence and integrity"
        size="sm"
      />

      {/* Warranties Grid */}
      <section className="section-padding">
        <div className="max-w-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
              Our Commitment to You
            </h2>
            <p className="text-grey max-w-2xl mx-auto leading-relaxed">
              At Litt Heating and Air, we believe in doing the job right the
              first time. Our warranties and guarantees reflect our confidence
              in our workmanship and the quality equipment we install.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warranties.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-6 text-center">
            Warranty Details
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-dark mb-2">
                  New Equipment Installations
                </h3>
                <p className="text-grey leading-relaxed">
                  All new HVAC equipment installed by Litt Heating and Air comes
                  with the full manufacturer warranty. Warranty coverage varies
                  by brand and product, typically ranging from 5 to 10 years on
                  parts. Extended warranty options are available for additional
                  peace of mind.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">Repair Services</h3>
                <p className="text-grey leading-relaxed">
                  Our repair work is backed by a workmanship warranty. If the
                  same issue recurs within the warranty period after our repair,
                  we will return and fix it at no charge. Parts used in repairs
                  carry their own manufacturer warranty.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">
                  How to Make a Warranty Claim
                </h3>
                <p className="text-grey leading-relaxed">
                  If you experience an issue covered under warranty, simply call
                  us at{' '}
                  <a
                    href="tel:+12093803032"
                    className="text-primary font-bold hover:underline"
                  >
                    (209) 380-3032
                  </a>{' '}
                  and reference your original service or installation. We keep
                  detailed records of all work performed, making the warranty
                  process simple and straightforward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <CTABanner />
    </>
  );
}
