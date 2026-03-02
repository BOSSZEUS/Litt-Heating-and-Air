import { DollarSign } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function FinancingPreview() {
  return (
    <section className="section-padding bg-grey-light">
      <div className="max-w-container mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5">
          <DollarSign size={32} />
        </div>
        <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-4">
          Flexible Financing Available
        </h2>
        <p className="text-grey max-w-2xl mx-auto mb-8 leading-relaxed">
          We believe everyone deserves a comfortable home. That is why we offer flexible financing
          options to help you get the HVAC system you need today and pay over time with affordable
          monthly payments.
        </p>
        <Button href="/financing">Learn About Financing</Button>
      </div>
    </section>
  );
}
