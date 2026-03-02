import Link from 'next/link';
import { Tag } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { specials } from '@/data/specials';

export default function SpecialsPreview() {
  const displayed = specials.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Current Specials"
          subtitle="Take advantage of our limited-time offers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((special) => (
            <div
              key={special.id}
              className="border-2 border-grey-medium p-6 text-center hover:border-primary transition-colors group"
            >
              <Tag size={28} className="mx-auto text-primary mb-3" />
              <p className="text-3xl font-bold text-primary mb-2">{special.discount}</p>
              <h3 className="text-lg font-bold text-dark mb-2">{special.title}</h3>
              <p className="text-grey text-sm leading-relaxed">{special.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/specials"
            className="inline-block px-8 py-3 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-hover transition-all"
          >
            View All Specials
          </Link>
        </div>
      </div>
    </section>
  );
}
