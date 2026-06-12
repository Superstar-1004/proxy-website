'use client';

import { useState } from 'react';
import Link from 'next/link';

const TABS = ['residential', 'isp', 'datacenter', 'mobile', 'unblocker'] as const;

export default function PricingPage() {
  const [active, setActive] = useState<(typeof TABS)[number]>('residential');

  return (
    <main>
      <section className="page-hero-light">
        <div className="container page-hero-content">
          <div className="page-badge">Best proxy servers 2025</div>
          <h1>ProxyVault Proxy Pricing</h1>
          <p className="page-desc">Get access to reliable proxies at highly competitive prices</p>
        </div>
      </section>
      <section className="section section-light pricing-section">
        <div className="container">
          <div className="pricing-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`pricing-tab${active === tab ? ' active' : ''}`}
                onClick={() => setActive(tab)}
              >
                {tab === 'unblocker' ? 'Web Unblocker' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          {active === 'residential' && (
            <div className="pricing-grid">
              <article className="pricing-card"><h3>1 GB</h3><div className="pricing-amount"><span className="price">$7.00</span><span className="unit">/GB</span></div><Link href="/register/" className="btn btn-outline btn-block">Buy Now</Link></article>
              <article className="pricing-card popular"><span className="popular-badge">Most Popular</span><h3>10 GB</h3><div className="pricing-amount"><span className="price">$5.25</span><span className="unit">/GB</span></div><Link href="/register/" className="btn btn-primary btn-block">Buy Now</Link></article>
              <article className="pricing-card"><h3>50 GB</h3><div className="pricing-amount"><span className="price">$4.90</span><span className="unit">/GB</span></div><Link href="/register/" className="btn btn-outline btn-block">Buy Now</Link></article>
              <article className="pricing-card"><h3>Enterprise</h3><div className="pricing-amount"><span className="price">Custom</span></div><Link href="#" className="btn btn-outline btn-block">Contact Sales</Link></article>
            </div>
          )}
          {active === 'isp' && (
            <div className="pricing-grid">
              <article className="pricing-card"><h3>24 Hours</h3><div className="pricing-amount"><span className="price">$1.80</span><span className="unit">/proxy</span></div><Link href="/register/" className="btn btn-outline btn-block">Buy Now</Link></article>
              <article className="pricing-card popular"><span className="popular-badge">Most Popular</span><h3>60 Days</h3><div className="pricing-amount"><span className="price">$2.55</span><span className="unit">/proxy</span></div><Link href="/register/" className="btn btn-primary btn-block">Buy Now</Link></article>
              <article className="pricing-card"><h3>90 Days</h3><div className="pricing-amount"><span className="price">$2.40</span><span className="unit">/proxy</span></div><Link href="/register/" className="btn btn-outline btn-block">Buy Now</Link></article>
              <article className="pricing-card"><h3>500+</h3><div className="pricing-amount"><span className="price">Custom</span></div><Link href="#" className="btn btn-outline btn-block">Contact Sales</Link></article>
            </div>
          )}
          {active !== 'residential' && active !== 'isp' && (
            <div className="section-cta">
              <Link href={`/${active === 'unblocker' ? 'web-unblocker' : active + '-proxies'}/`} className="btn btn-primary">
                View {active === 'unblocker' ? 'Web Unblocker' : active} Plans
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
