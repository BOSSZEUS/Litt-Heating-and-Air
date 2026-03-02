import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Hero({ title, subtitle, ctaText, ctaHref, size = 'md' }: HeroProps) {
  const heights = {
    sm: 'min-h-[180px]',
    md: 'min-h-[300px]',
    lg: 'min-h-[420px]',
  };

  return (
    <section
      className={`relative ${heights[size]} flex items-center bg-gradient-to-br from-dark-alt via-[#16213e] to-[#0f3460]`}
      aria-label={title}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-primary/10" />

      <div className="relative z-10 w-full max-w-wide mx-auto px-5 md:px-10 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold text-white uppercase tracking-wider leading-tight drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-grey-medium max-w-2xl">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <div className="mt-8">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
