import { Metadata } from 'next';
import { DollarSign, CheckCircle, CreditCard, Calculator } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Financing Options',
  description:
    'Flexible HVAC financing options from Litt Heating and Air in Modesto, CA. Affordable monthly payments for AC and heating installations. Call (209) 380-3032.',
};

const benefits = [
  'Quick and easy application process',
  'Competitive interest rates',
  'Flexible payment terms',
  'No prepayment penalties',
  'Approval for a wide range of credit profiles',
  'Same-day decisions available',
];

export default function FinancingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Financing' }]} />
      <Hero
        title="Flexible Financing Options"
        subtitle="Get the comfort you need today with affordable monthly payments"
        size="sm"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5">
            <DollarSign size={32} />
          </div>
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Comfort Should Be Affordable
          </h2>
          <p className="text-grey max-w-2xl mx-auto leading-relaxed">
            We believe every family deserves a comfortable home. That is why
            Litt Heating and Air offers flexible financing options on qualifying
            HVAC installations and major repairs. Do not let budget concerns keep
            you from the heating and cooling system your family needs.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-wide mx-auto">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-8 text-center">
            How Financing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-4">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                1. Get Your Estimate
              </h3>
              <p className="text-grey leading-relaxed">
                Contact us for a free, no-obligation estimate on your HVAC
                installation or repair. We will go over all your options.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                2. Apply for Financing
              </h3>
              <p className="text-grey leading-relaxed">
                Our team will guide you through the quick application process.
                Most applicants receive a decision the same day.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-4">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                3. Enjoy Your Comfort
              </h3>
              <p className="text-grey leading-relaxed">
                Once approved, we schedule your installation and you enjoy your
                new system while making affordable monthly payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-8 text-center">
            Financing Benefits
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-grey">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact us today to learn more about our financing options and get a
            free estimate on your HVAC project. Our team is happy to answer any
            questions about the financing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-a-quote">Get a Free Estimate</Button>
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
