import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/products';
import { ProductPageView } from '@/components/marketing/ProductPageView';

export const metadata: Metadata = { title: 'Web Unblocker' };

export default function WebUnblockerPage() {
  return <ProductPageView product={PRODUCTS['web-unblocker']} />;
}
