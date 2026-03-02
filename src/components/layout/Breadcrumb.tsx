import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  text?: string; // Legacy prop support
}

export default function Breadcrumb({ items, text }: BreadcrumbProps) {
  // If legacy `text` prop is used or no items, render simple breadcrumb
  if (!items || items.length === 0) {
    return (
      <div className="bg-primary text-center py-3 px-5">
        <span className="text-white text-sm font-bold uppercase tracking-wider">
          {text || 'Home'}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-primary py-3 px-5">
      <div className="max-w-container mx-auto">
        <nav
          className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white/80 transition-colors">
            Home
          </Link>
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-white/60" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/80">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
