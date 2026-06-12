import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

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
  description:
    'Proxy infrastructure built for scale and speed. Residential, ISP, datacenter, and mobile proxies with global coverage.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${beVietnam.className} min-h-screen bg-neutral-50 text-neutral-800 antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
