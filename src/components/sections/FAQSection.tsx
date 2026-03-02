'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  showHeading?: boolean;
}

export default function FAQSection({ faqs, title, showHeading = true }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-container mx-auto">
        {showHeading && (
          <SectionHeading title={title || "Frequently Asked Questions"} />
        )}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-grey-medium">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-grey-light transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-dark text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-grey text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
