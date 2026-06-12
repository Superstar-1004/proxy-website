import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCATIONS } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({ slug }));
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS[slug];
  if (!loc) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-badge">{loc.badge}</span>
          <h1>{loc.title}</h1>
          <p className="page-desc">{loc.description}</p>
          <div className="hero-cta">
            <Link href="/register/" className="btn btn-white btn-lg">Get Proxies</Link>
          </div>
          {loc.stats && (
            <div className="stats-row">
              {loc.stats.map((s) => (
                <span key={s.label} className="stat-pill"><strong>{s.value}</strong> {s.label}</span>
              ))}
            </div>
          )}
        </div>
      </section>
      {loc.cities && (
        <section className="section section-light">
          <div className="container">
            <h2 className="section-title">Top Cities</h2>
            <div className="locations-grid">
              {loc.cities.map((city) => (
                <div key={city.name} className="location-card">
                  <span className="flag">🏙️</span>
                  <div><strong>{city.name}</strong><span>{city.ips}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section section-tint">
        <div className="container">
          <h2 className="section-title">Available Proxy Types</h2>
          <div className="solutions-grid">
            <Link href="/residential-proxies/" className="solution-card"><h3>Residential</h3><p>Real household IPs.</p><span className="solution-link">from $1.75/GB →</span></Link>
            <Link href="/isp-proxies/" className="solution-card"><h3>ISP</h3><p>Static ISP IPs.</p><span className="solution-link">from $1.80/proxy →</span></Link>
            <Link href="/datacenter-proxies/" className="solution-card"><h3>Datacenter</h3><p>High-speed IPs.</p><span className="solution-link">from $1.39/proxy →</span></Link>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <Link href="/locations/" className="btn btn-outline btn-lg">All Locations</Link>
        </div>
      </section>
    </main>
  );
}
