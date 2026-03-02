import Link from 'next/link';
import { Snowflake, Flame } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';
import { mainNav } from '@/data/navigation';
import MobileMenu from './MobileMenu';
import PhoneButton from '@/components/ui/PhoneButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark shadow-lg">
      <div className="max-w-wide mx-auto px-5 flex items-center justify-between min-h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white shrink-0" aria-label={`${companyInfo.name} - Home`}>
          <span className="flex flex-col items-center gap-0.5 bg-primary p-2 rounded">
            <Snowflake size={14} className="text-white" />
            <Flame size={14} className="text-orange-400" />
          </span>
          <span className="font-bold text-base lg:text-lg leading-tight uppercase tracking-widest">
            LITT<br />
            <small className="text-[10px] font-normal tracking-wider opacity-90">HEATING &amp; AIR</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center" aria-label="Main navigation">
          <ul className="flex items-center">
            {mainNav.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="block px-3 xl:px-4 py-6 text-white text-[13px] xl:text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1 text-xs inline-block group-hover:rotate-180 transition-transform">▾</span>
                  )}
                </Link>
                {item.children && (
                  <ul className="absolute top-full left-0 min-w-[260px] bg-dark border-t-[3px] border-primary shadow-xl opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-3 text-white text-[13px] hover:bg-primary hover:pl-7 transition-all duration-200 border-b border-white/5 last:border-b-0"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ml-2">
            <Link
              href="/get-a-quote"
              className="px-5 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-primary-hover transition-all"
            >
              Get An Estimate
            </Link>
            <PhoneButton variant="outline" size="sm" />
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
