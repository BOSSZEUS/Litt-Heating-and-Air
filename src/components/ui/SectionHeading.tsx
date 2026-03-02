interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold uppercase tracking-wide ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? 'text-grey-medium' : 'text-grey'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-16 h-1 ${light ? 'bg-white' : 'bg-primary'} ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
