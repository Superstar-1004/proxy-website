import Link from 'next/link';
import { BrandName } from './BrandName';
import { Logo } from './Logo';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-brand-900 text-neutral-300">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-white">
              <Logo size={28} />
              <BrandName />
            </Link>
            <p className="mt-3 text-sm">Premium quality proxies at unbeatable prices.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Products</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/residential-proxies/" className="hover:text-white">Residential Proxies</Link>
              <Link href="/isp-proxies/" className="hover:text-white">ISP Proxies</Link>
              <Link href="/datacenter-proxies/" className="hover:text-white">Datacenter Proxies</Link>
              <Link href="/mobile-proxies/" className="hover:text-white">Mobile Proxies</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/docs/" className="hover:text-white">API Documentation</Link>
              <Link href="/blog/" className="hover:text-white">Blog</Link>
              <Link href="/pricing/" className="hover:text-white">Pricing</Link>
              <Link href="/contact/" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about-us/" className="hover:text-white">About Us</Link>
              <Link href="/book-a-demo/" className="hover:text-white">Book a Demo</Link>
              <Link href="/pricing/" className="hover:text-white">Pricing</Link>
              <Link href="/contact/" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/terms-of-service/" className="hover:text-white">Terms of Service</Link>
              <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-800 pt-6 text-sm sm:flex-row">
          <p>© Copyright 2026 {SITE.domain} | All rights reserved</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms-of-service/" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/about-us/" className="hover:text-white">About Us</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
