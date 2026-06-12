import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Logo size={28} />
              <span>ProxyVault</span>
            </Link>
            <p>Premium quality proxies at unbeatable prices.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/residential-proxies/">Residential Proxies</Link>
            <Link href="/isp-proxies/">ISP Proxies</Link>
            <Link href="/datacenter-proxies/">Datacenter Proxies</Link>
            <Link href="/mobile-proxies/">Mobile Proxies</Link>
            <Link href="/web-unblocker/">Web Unblocker</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/blog/">Blog</Link>
            <Link href="/documentation/">Documentation</Link>
            <Link href="/quick-start-guides/">Quick-Start Guides</Link>
            <Link href="/help-center/">Help Center</Link>
            <Link href="/integrations/">Integrations</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Case Studies</Link>
            <Link href="/pricing/">Pricing</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">KYC Policy</Link>
            <Link href="#">Acceptable Use Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2026 ProxyVault.com | All rights reserved</p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Discord">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
