import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function PromoBar() {
  return (
    <div className="border-b border-brand-700/50 bg-brand-100 text-center text-sm text-brand-900">
      <Link href="/blog/" className="inline-flex items-center gap-2 px-4 py-2 hover:underline">
        <span className="rounded bg-brand-500 px-2 py-0.5 text-xs font-semibold text-white">Product news</span>
        <span className="text-brand-800">{SITE.promo}</span>
      </Link>
    </div>
  );
}
