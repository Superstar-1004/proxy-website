import Link from 'next/link';
import { SITE } from '@/lib/nav';

export function PromoBar() {
  return (
    <div className="promo-bar">
      <Link href={SITE.promoLink} className="promo-bar-inner">
        <span className="promo-badge">Product news</span>
        {SITE.promo}
      </Link>
    </div>
  );
}
