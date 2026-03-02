import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  dark: 'bg-dark text-white hover:bg-dark-alt',
  phone: 'border-2 border-primary text-white hover:bg-primary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
