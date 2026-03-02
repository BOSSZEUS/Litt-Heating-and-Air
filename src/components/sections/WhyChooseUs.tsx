import { ShieldCheck, Users, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: <ShieldCheck size={40} />,
    title: 'Fully Licensed & Insured',
    description:
      'Rest easy knowing your HVAC work is handled by fully licensed and insured professionals. We meet all California state requirements and carry comprehensive liability coverage.',
  },
  {
    icon: <Users size={40} />,
    title: 'Family Owned Business',
    description:
      'As a family-owned and operated company, we treat every customer like family. We are invested in our community and committed to building lasting relationships through honest, quality service.',
  },
  {
    icon: <Award size={40} />,
    title: 'DOE Recognized',
    description:
      'Our home energy auditing services are recognized by the US Department of Energy. We help homeowners identify efficiency improvements that save money and reduce environmental impact.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Trusted by homeowners across the Central Valley."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 uppercase tracking-wide">
                {reason.title}
              </h3>
              <p className="text-grey text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
