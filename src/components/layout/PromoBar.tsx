'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PromoBar() {
  const pathname = usePathname();
  const home = pathname === '/' || pathname === '';

  return (
    <div
      className={cn(
        'relative z-50 border-0 text-center text-sm',
        home ? 'bg-brand-600 text-white' : 'border-b border-brand-700/50 bg-brand-100 text-brand-900',
      )}
    >
      <Link
        href="/blog/"
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 hover:underline',
          home ? 'text-white/90' : '',
        )}
      >
        <span className={cn('rounded px-2 py-0.5 text-xs font-semibold text-white', home ? 'bg-white/15' : 'bg-brand-500')}>
          Product news
        </span>
        <span className={home ? 'text-white/90' : 'text-brand-800'}>{SITE.promo}</span>
      </Link>
    </div>
  );
}
