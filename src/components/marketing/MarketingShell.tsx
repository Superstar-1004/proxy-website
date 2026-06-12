import { PromoBar } from '@/components/layout/PromoBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
