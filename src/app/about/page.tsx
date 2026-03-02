import { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DOEBadge from '@/components/sections/DOEBadge';
import TrustBadges from '@/components/sections/TrustBadges';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Litt Heating and Air — a family-owned HVAC contractor in Modesto, CA. Home energy auditing recognized by the US Dept. of Energy.',
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb text="About Us" />
      <Hero title="We Are Here to Serve You" size="md" />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-6">Our Story</h2>
              <p className="text-grey leading-relaxed mb-4">
                Litt Heating and Air was founded with a simple mission: to provide honest, reliable HVAC
                services to the families and businesses of Modesto and the surrounding Central Valley communities.
              </p>
              <p className="text-grey leading-relaxed mb-4">
                As a family-owned and operated business, we understand the importance of trust. When you invite
                us into your home, we treat it with the same respect and care we would give our own. Every
                technician on our team is fully licensed, background-checked, and committed to delivering
                exceptional service.
              </p>
              <p className="text-grey leading-relaxed">
                We are proud that our home energy auditing services have been recognized by the United States
                Department of Energy. This recognition reflects our commitment to not only keeping your home
                comfortable, but also helping you save money and reduce your environmental impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-dark-alt via-[#16213e] to-primary/20 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-white/30 p-8">
                <p className="text-lg font-bold uppercase tracking-wider">Team Photo</p>
                <p className="text-sm mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Honesty', desc: 'We provide upfront pricing with no hidden fees. What we quote is what you pay. If a repair is not necessary, we will tell you.' },
              { title: 'Quality', desc: 'We use only top-quality parts and equipment, and every job is backed by our satisfaction guarantee. We do it right the first time.' },
              { title: 'Community', desc: 'We live and work in the Central Valley. Supporting our neighbors and building lasting relationships is at the heart of everything we do.' },
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3 uppercase">{value.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DOEBadge />
      <WhyChooseUs />
      <TrustBadges />
      <CTABanner />
    </main>
  );
}
