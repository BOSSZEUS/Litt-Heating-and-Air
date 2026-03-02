import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'HVAC tips, maintenance advice, and industry news from Litt Heating and Air in Modesto, CA. Stay informed about your heating and cooling system.',
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />
      <Hero
        title="HVAC Blog"
        subtitle="Tips, advice, and news from Litt Heating and Air"
        size="sm"
      />

      <section className="section-padding">
        <div className="max-w-container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
            <BookOpen size={40} />
          </div>
          <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-4">
            Coming Soon
          </h2>
          <p className="text-grey max-w-2xl mx-auto leading-relaxed mb-8">
            We are working on bringing you helpful articles about HVAC
            maintenance, energy-saving tips, and industry news. Check back soon
            for our latest content!
          </p>
          <p className="text-grey max-w-2xl mx-auto leading-relaxed mb-8">
            In the meantime, if you have any questions about your heating or
            cooling system, feel free to reach out to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Contact Us</Button>
            <Button href="tel:+12093803032" variant="dark">
              Call (209) 380-3032
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
