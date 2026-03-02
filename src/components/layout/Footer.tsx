import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';
import { footerNav } from '@/data/navigation';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook size={20} />,
  Instagram: <Instagram size={20} />,
  Google: <GoogleIcon />,
  YouTube: <Youtube size={20} />,
};

export default function Footer() {
  return (
    <footer className="bg-dark py-10 px-5 text-center" role="contentinfo">
      <div className="max-w-container mx-auto">
        {/* Social Icons */}
        <ul className="flex justify-center gap-5 mb-6" aria-label="Social media links">
          {companyInfo.socialLinks.map((link) => (
            <li key={link.platform}>
              <a
                href={link.url}
                aria-label={link.platform}
                className="flex items-center justify-center w-10 h-10 text-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[link.platform]}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Links */}
        <div className="mb-4">
          {footerNav.map((item, i) => (
            <span key={item.label}>
              <Link
                href={item.href}
                className="text-white text-sm px-2 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
              {i < footerNav.length - 1 && (
                <span className="text-grey">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-grey text-[13px]">
          &copy;{new Date().getFullYear()} {companyInfo.name} &ndash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
