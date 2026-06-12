import Link from 'next/link';
import type { ContentPage } from '@/lib/content';

export function UseCasePageView({ page }: { page: ContentPage }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          {page.badge && <span className="page-badge">{page.badge}</span>}
          <h1>{page.title}</h1>
          <p className="page-desc">{page.description}</p>
          <div className="hero-cta">
            <Link href="/register/" className="btn btn-white btn-lg">Get Started</Link>
            <Link href="/pricing/" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>View Pricing</Link>
          </div>
          {page.stats && (
            <div className="stats-row">
              {page.stats.map((s) => (
                <span key={s.label} className="stat-pill"><strong>{s.value}</strong> {s.label}</span>
              ))}
            </div>
          )}
        </div>
      </section>
      {page.sections.map((section) => (
        <section key={section.heading} className="section section-light">
          <div className="container two-col">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 16 }}>{section.heading}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>{section.body}</p>
              {section.bullets && (
                <ul style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                  {section.bullets.map((b) => (
                    <li key={b} style={{ padding: '8px 0', paddingLeft: 22, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--brand-500)', fontWeight: 700 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="video-placeholder" aria-hidden="true">▶</div>
          </div>
        </section>
      ))}
      {page.recommended && (
        <section className="section section-tint">
          <div className="container">
            <h2 className="section-title">Recommended Proxy Types</h2>
            <div className="solutions-grid">
              {page.recommended.map((r) => (
                <Link key={r.href} href={r.href} className="solution-card">
                  <div className="solution-header"><span className="solution-price">{r.price}</span></div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className="solution-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to Get Started?</h2>
          <div className="cta-buttons">
            <Link href="/register/" className="btn btn-primary btn-lg">Create Account</Link>
            <Link href="/use-cases/" className="btn btn-outline btn-lg">All Use Cases</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
