import { AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="max-w-container mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
          <AlertTriangle size={40} />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-dark uppercase tracking-wide mb-4">
          Page Not Found
        </h2>
        <p className="text-grey max-w-lg mx-auto leading-relaxed mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go to Homepage</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
