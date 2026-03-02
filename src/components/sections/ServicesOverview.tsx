import { Siren, Thermometer, Flame, Wind, Fan, AirVent, Heater, Leaf, RefreshCw, Snowflake } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Siren: <Siren size={32} />,
  Thermometer: <Thermometer size={32} />,
  Flame: <Flame size={32} />,
  Wind: <Wind size={32} />,
  Fan: <Fan size={32} />,
  AirVent: <AirVent size={32} />,
  Heater: <Heater size={32} />,
  Leaf: <Leaf size={32} />,
  RefreshCw: <RefreshCw size={32} />,
  Snowflake: <Snowflake size={32} />,
};

interface ServicesOverviewProps {
  showHeading?: boolean;
}

export default function ServicesOverview({ showHeading = true }: ServicesOverviewProps) {
  return (
    <section className="section-padding bg-grey-light">
      <div className="container-wide">
        {showHeading && (
          <SectionHeading
            title="Our HVAC Services"
            subtitle="Comprehensive heating and cooling solutions for your home and business."
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.slug}
              title={service.shortTitle}
              description={service.description}
              href={`/services/${service.slug}`}
              icon={iconMap[service.icon] || <AirVent size={32} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
