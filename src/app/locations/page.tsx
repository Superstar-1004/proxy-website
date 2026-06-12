import Link from 'next/link';
import { LOCATIONS } from '@/lib/content';

export default function LocationsIndexPage() {
  const locs = Object.values(LOCATIONS);
  const allCountries = [
    { flag: '🇺🇸', name: 'United States', ips: '3,450,886 IPs', href: '/locations/united-states/' },
    { flag: '🇮🇳', name: 'India', ips: '3,712,450 IPs', href: '/locations/india/' },
    { flag: '🇩🇪', name: 'Germany', ips: '1,439,883 IPs', href: '/locations/germany/' },
    { flag: '🇬🇧', name: 'United Kingdom', ips: '1,421,770 IPs', href: '/locations/united-kingdom/' },
    { flag: '🇫🇷', name: 'France', ips: '1,418,633 IPs', href: '/locations/' },
    { flag: '🇮🇹', name: 'Italy', ips: '1,393,154 IPs', href: '/locations/' },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-badge">Global Coverage</span>
          <h1>Top Proxy Locations</h1>
          <p className="page-desc">Access 34M+ ethically sourced IPs across 195+ countries with city-level targeting.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Featured Locations</h2>
          <div className="locations-grid">
            {locs.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}/`} className="location-card">
                <span className="flag">{loc.flag}</span>
                <div><strong>{loc.title.replace(' Proxy Servers', '')}</strong><span>{loc.ipCount} IPs</span></div>
              </Link>
            ))}
          </div>
          <h2 className="section-title" style={{ marginTop: 48 }}>All Countries</h2>
          <div className="locations-grid">
            {allCountries.map((c) => (
              <Link key={c.name} href={c.href} className="location-card">
                <span className="flag">{c.flag}</span>
                <div><strong>{c.name}</strong><span>{c.ips}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
