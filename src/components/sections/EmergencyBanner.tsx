import { Siren } from 'lucide-react';
import PhoneButton from '@/components/ui/PhoneButton';

export default function EmergencyBanner() {
  return (
    <section className="bg-primary py-10 px-5">
      <div className="max-w-wide mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <Siren size={48} className="text-white shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
            24/7 Emergency HVAC Service
          </h3>
          <p className="text-white/80 mt-1">
            Day or night, our technicians are ready to help when you need it most.
          </p>
        </div>
        <PhoneButton variant="outline" size="lg" className="shrink-0 border-white text-white hover:bg-white hover:text-primary" />
      </div>
    </section>
  );
}
