import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">Best proxy servers 2025</div>
          <h1>Proxy Infrastructure Built for Scale and Speed</h1>
          <p className="hero-sub">Own your infrastructure. Avoid vendor lock-in. Stay in control of performance and costs.</p>
          <div className="hero-cta">
            <Link href="/register/" className="btn btn-white btn-lg">Buy Now</Link>
            <Link href="/register/" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>Sign up with Google</Link>
          </div>
          <p className="hero-note">No credit card required. Instant full access.</p>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <p className="trusted-label">As seen on</p>
          <div className="trusted-logos">
            <span>TechRadar</span><span>CNBC</span><span>PCMag</span><span>Tech Advisor</span><span>G2</span>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Solutions for Every Use Case</h2>
          <div className="solutions-grid">
            <Link href="/residential-proxies/" className="solution-card">
              <div className="solution-header"><span className="solution-price">from $1.75/GB</span><span className="solution-stat">32M+ proxy pool</span></div>
              <h3>Residential</h3>
              <p>Ideal for anonymous high-volume web scraping, SEO monitoring, and geo-targeted research at scale.</p>
              <span className="solution-link">Learn more →</span>
            </Link>
            <Link href="/isp-proxies/" className="solution-card">
              <div className="solution-header"><span className="solution-price">from $2.00/proxy</span><span className="solution-stat">500K+ unique IPs</span></div>
              <h3>ISP</h3>
              <p>Great for ecommerce automation, ad verification, and long-session reliability.</p>
              <span className="solution-link">Learn more →</span>
            </Link>
            <Link href="/datacenter-proxies/" className="solution-card">
              <div className="solution-header"><span className="solution-price">from $1.39/proxy</span><span className="solution-stat">60+ locations</span></div>
              <h3>Datacenter</h3>
              <p>Best for speed-critical use cases like software testing and infrastructure monitoring.</p>
              <span className="solution-link">Learn more →</span>
            </Link>
            <Link href="/mobile-proxies/" className="solution-card">
              <div className="solution-header"><span className="solution-price">from $10.11/day</span><span className="solution-stat">4.5M+ IPs</span></div>
              <h3>Mobile</h3>
              <p>Perfect for social platforms, mobile app QA, and regional ad testing.</p>
              <span className="solution-link">Learn more →</span>
            </Link>
            <Link href="/web-unblocker/" className="solution-card featured">
              <div className="solution-header"><span className="solution-price">from $1.00/1000 requests</span><span className="solution-stat badge">AI</span></div>
              <h3>Web Unblocker</h3>
              <p>Ideal for automated web scraping, bypassing blocks, and geo-restricted content.</p>
              <span className="solution-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <h2 className="section-title">How Companies Use Our Proxies</h2>
          <div className="use-cases-grid">
            <Link href="/use-cases/web-scraping/" className="use-case-card"><h4>Web Scraping</h4><p>Collect public data at scale without blocks or CAPTCHAs.</p><span className="learn-more">Learn more →</span></Link>
            <Link href="/use-cases/seo-serp-scraping/" className="use-case-card"><h4>SEO &amp; SERP Scraping</h4><p>Track keyword positions with block-free SERP access.</p><span className="learn-more">Learn more →</span></Link>
            <Link href="/use-cases/price-monitoring/" className="use-case-card"><h4>Price Monitoring</h4><p>Track competitor pricing across regions in real time.</p><span className="learn-more">Learn more →</span></Link>
            <Link href="/use-cases/ai-data-collection/" className="use-case-card"><h4>AI Data Collection</h4><p>Scale training data collection with premium proxies.</p><span className="learn-more">Learn more →</span></Link>
          </div>
          <div className="section-cta"><Link href="/use-cases/" className="btn btn-outline">All Use Cases</Link></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Top Proxy Locations</h2>
          <div className="locations-grid">
            <Link href="/locations/united-states/" className="location-card"><span className="flag">🇺🇸</span><div><strong>United States</strong><span>3,450,886 IPs</span></div></Link>
            <Link href="/locations/united-kingdom/" className="location-card"><span className="flag">🇬🇧</span><div><strong>United Kingdom</strong><span>1,421,770 IPs</span></div></Link>
            <Link href="/locations/germany/" className="location-card"><span className="flag">🇩🇪</span><div><strong>Germany</strong><span>1,439,883 IPs</span></div></Link>
            <Link href="/locations/india/" className="location-card"><span className="flag">🇮🇳</span><div><strong>India</strong><span>3,712,450 IPs</span></div></Link>
          </div>
          <div className="section-cta"><Link href="/locations/" className="btn btn-outline">All Locations</Link></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Have a Large Project?</h2>
          <p>Our proxy experts are always available to help you find the right solution.</p>
          <div className="cta-buttons">
            <Link href="/register/" className="btn btn-primary btn-lg">Register</Link>
            <Link href="#" className="btn btn-outline btn-lg">Book a Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
