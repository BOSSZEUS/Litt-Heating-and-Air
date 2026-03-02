import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, href, icon, className = '' }: CardProps) {
  const content = (
    <div className={`bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 group ${className}`}>
      {icon && (
        <div className="text-primary mb-4 text-3xl">{icon}</div>
      )}
      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-grey leading-relaxed text-sm">{description}</p>
      {href && (
        <span className="inline-block mt-4 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          Learn More →
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
