import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { PromoBar } from '@/components/layout/PromoBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../../css/styles.css';
import './blog.css';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-be-vietnam',
});

export const metadata: Metadata = {
  title: {
    default: 'ProxyVault | Premium Quality Proxies, Unbeatable Prices',
    template: '%s | ProxyVault',
  },
  description: 'Proxy infrastructure built for scale and speed. Residential, ISP, datacenter, and mobile proxies with global coverage.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={beVietnam.className}>
        <PromoBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
