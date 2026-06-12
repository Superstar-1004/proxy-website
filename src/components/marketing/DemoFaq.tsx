'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    q: 'What will the demo include?',
    a: 'We\'ll walk you through how our proxy network works, how to set it up, and how it supports use cases like web scraping, automation, ad verification, or data collection. The session is tailored to your needs and includes time for technical questions. It typically takes 20–30 minutes.',
  },
  {
    q: 'Can I test the proxies before committing?',
    a: 'Yes. We can provide trial access or guide you through a live test during the demo so you can validate performance, targeting options, and compatibility with your tools or infrastructure.',
  },
  {
    q: 'What happens after the demo?',
    a: 'If it\'s a good fit, we\'ll recommend the right plan based on your usage, targeting needs, and scale. You\'ll receive pricing details and onboarding guidance. There\'s no obligation to purchase after the demo.',
  },
  {
    q: 'Who should attend the demo?',
    a: 'We recommend including anyone involved in implementation — engineers, data leads, or procurement. Our product experts can adjust the technical depth based on your audience.',
  },
];

export function DemoFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {FAQS.map((faq, i) => (
        <div key={faq.q}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-brand-900">{faq.q}</span>
            <ChevronDown className={cn('h-5 w-5 shrink-0 text-neutral-400 transition-transform', open === i && 'rotate-180')} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm leading-relaxed text-neutral-600">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
