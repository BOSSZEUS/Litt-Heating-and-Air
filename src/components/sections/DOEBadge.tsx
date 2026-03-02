import { Award } from 'lucide-react';

export default function DOEBadge() {
  return (
    <section className="bg-dark py-14 px-5">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="shrink-0">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <Award size={48} className="text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">
            US Dept. of Energy Recognized
          </h3>
          <p className="text-grey-medium leading-relaxed">
            Our home energy auditing services are recognized by the United States Department of Energy.
            We help homeowners identify inefficiencies, reduce energy consumption, and lower utility bills
            through comprehensive audits and actionable recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
