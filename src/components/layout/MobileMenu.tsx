'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { companyInfo } from '@/data/companyInfo';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white z-[1001] relative"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Panel */}
      <nav
        className={`fixed top-0 right-0 w-[300px] h-full bg-dark overflow-y-auto z-[999] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="pt-20 pb-8">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-6 py-4 text-white text-[15px] font-bold uppercase tracking-wide border-b border-white/5 hover:text-primary transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-white/[0.03] ${
                        openDropdown === item.label ? 'max-h-[600px]' : 'max-h-0'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMenu}
                          className="block px-10 py-3 text-white text-sm hover:bg-primary hover:pl-12 transition-all border-b border-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-white text-[15px] font-bold uppercase tracking-wide border-b border-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="px-6 pt-4 space-y-3">
            <Link
              href="/get-a-quote"
              onClick={closeMenu}
              className="block w-full text-center px-5 py-3 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-hover transition-all"
            >
              Get An Estimate
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-primary text-white font-bold uppercase tracking-wider hover:bg-primary transition-all"
            >
              <Phone size={16} />
              Call Us: {companyInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
