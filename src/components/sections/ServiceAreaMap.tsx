import Link from 'next/link';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { serviceAreas } from '@/data/serviceAreas';

export default function ServiceAreaMap() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Areas We Serve"
          subtitle="Proudly serving Modesto and the surrounding Central Valley communities."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="flex items-center gap-2 p-4 bg-grey-light hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <MapPin size={16} className="text-primary group-hover:text-white shrink-0" />
              <span className="font-bold text-sm">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
