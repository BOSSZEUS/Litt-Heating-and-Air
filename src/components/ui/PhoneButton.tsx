import { Phone } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';

interface PhoneButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PhoneButton({ variant = 'primary', size = 'md', className = '' }: PhoneButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    outline: 'border-2 border-primary text-white hover:bg-primary',
  };

  return (
    <a
      href={`tel:${companyInfo.phone}`}
      className={`inline-flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <Phone size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      Call Us: {companyInfo.phoneFormatted}
    </a>
  );
}
