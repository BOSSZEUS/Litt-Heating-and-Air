import Hero from '@/components/sections/Hero';
import StatsCounter from '@/components/sections/StatsCounter';
import EmergencyBanner from '@/components/sections/EmergencyBanner';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DOEBadge from '@/components/sections/DOEBadge';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import SpecialsPreview from '@/components/sections/SpecialsPreview';
import Testimonials from '@/components/sections/Testimonials';
import FinancingPreview from '@/components/sections/FinancingPreview';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Modesto's Trusted HVAC Experts"
        subtitle="Licensed heating and cooling professionals serving the Central Valley. Home energy auditing recognized by the US Department of Energy."
        ctaText="Get a Free Estimate"
        ctaHref="/get-a-quote"
        size="lg"
      />
      <StatsCounter />
      <section className="section-padding bg-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-6">
            Welcome to Litt Heating and Air
          </h2>
          <p className="text-grey leading-relaxed max-w-3xl mx-auto">
            At Litt Heating and Air, we are dedicated to keeping your home comfortable year-round.
            As a family-owned HVAC contractor based in Modesto, California, we bring honest pricing,
            expert craftsmanship, and genuine care to every job. Whether you need emergency repairs
            at 2 AM or a complete system installation, our licensed technicians are here to help.
          </p>
        </div>
      </section>
      <EmergencyBanner />
      <ServicesOverview />
      <WhyChooseUs />
      <DOEBadge />
      <ServiceAreaMap />
      <SpecialsPreview />
      <Testimonials limit={4} />
      <FinancingPreview />
      <CTABanner />
    </main>
  );
}
