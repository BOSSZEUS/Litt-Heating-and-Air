import Button from '@/components/ui/Button';
import PhoneButton from '@/components/ui/PhoneButton';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = 'Contact us today for a free estimate. We are available 24/7 for emergencies.',
  dark = true,
}: CTABannerProps) {
  return (
    <section className={`${dark ? 'bg-dark' : 'bg-primary'} py-16 px-5`}>
      <div className="max-w-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
          {title}
        </h2>
        <p className="text-grey-medium text-base mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/get-a-quote" size="lg">
            Get An Estimate
          </Button>
          <PhoneButton variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
