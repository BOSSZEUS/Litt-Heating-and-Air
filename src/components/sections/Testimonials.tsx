import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import { testimonials } from '@/data/testimonials';
import { companyInfo } from '@/data/companyInfo';

interface TestimonialsProps {
  limit?: number;
  showHeading?: boolean;
}

export default function Testimonials({ limit = 4, showHeading = true }: TestimonialsProps) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="section-padding bg-grey-light">
      <div className="container-wide">
        {showHeading && (
          <SectionHeading
            title="What Our Customers Say"
            subtitle={`Rated ${companyInfo.rating} stars from ${companyInfo.reviewCount} Google Reviews`}
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <StarRating rating={t.rating} size={18} className="mb-3" />
              <p className="text-grey-dark text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-dark text-sm">{t.name}</p>
                  <p className="text-grey text-xs">{t.location}</p>
                </div>
                <span className="text-xs text-primary font-bold uppercase">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
