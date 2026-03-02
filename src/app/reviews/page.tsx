import { Metadata } from 'next';
import { Star, ExternalLink } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { companyInfo } from '@/data/companyInfo';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import TrustBadges from '@/components/sections/TrustBadges';
import StarRating from '@/components/ui/StarRating';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description:
    'Read what our customers say about Litt Heating and Air. 5-star rated HVAC services in Modesto, CA. See our Google reviews. Call (209) 380-3032.',
};

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Reviews' }]} />
      <Hero
        title="Customer Reviews"
        subtitle="See what our customers are saying about Litt Heating and Air"
        size="sm"
      />

      {/* Rating Summary */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <div className="text-5xl font-bold text-primary mb-2">
              {companyInfo.rating}
            </div>
            <StarRating rating={companyInfo.rating} size={28} />
            <p className="text-grey mt-3">
              Based on {companyInfo.reviewCount} Google Reviews
            </p>
            <a
              href={companyInfo.socialLinks.find((l) => l.platform === 'Google')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline"
            >
              View on Google
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="max-w-wide mx-auto">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              >
                <StarRating rating={testimonial.rating} size={18} />
                <p className="text-grey leading-relaxed mt-4 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-grey-border pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-grey">
                    {testimonial.location}
                    {testimonial.date && ` · ${testimonial.date}`}
                  </p>
                  {testimonial.service && (
                    <p className="text-sm text-primary mt-1">
                      {testimonial.service}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="section-padding bg-grey-light">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4">
            Leave Us a Review
          </h2>
          <p className="text-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Had a great experience with Litt Heating and Air? We would love to
            hear from you! Your feedback helps us continue to improve and helps
            other homeowners find quality HVAC service.
          </p>
          <a
            href={companyInfo.socialLinks.find((l) => l.platform === 'Google')?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            <Star size={20} />
            Write a Google Review
          </a>
        </div>
      </section>

      <TrustBadges />
      <CTABanner />
    </>
  );
}
