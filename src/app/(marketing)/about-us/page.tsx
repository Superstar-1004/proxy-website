import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHero, CtaSection } from '@/components/marketing/PageLayout';
import { ABOUT_STATS, ABOUT_VALUES, ABOUT_TEAM } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the team powering IPNoble — premium proxy infrastructure trusted by thousands of businesses worldwide.',
};

const PILLARS = [
  {
    title: 'Who We Are',
    heading: 'A Quality-Driven Company with Deep Technical Roots',
    body: 'IPNoble started with a shared idea: proxy infrastructure should be reliable enough that no one has to think about it. That idea has grown into a global network trusted by over 10,000 businesses — from startups to enterprises operating across dozens of markets.',
  },
  {
    title: 'What Drives Us',
    heading: 'Infrastructure you can count on',
    body: 'From day one, our focus has been clear: deliver reliable, high-performance proxy solutions backed by deep expertise at the best possible price. Our proxies are trusted by developers, data teams, and enterprises who value quality, transparency, and flexible pricing.',
  },
  {
    title: 'What We\'re Building Toward',
    heading: 'Quality. Expertise. Client Commitment.',
    body: 'We build with precision, led by technical experts and guided by real customer needs. Every product we release is carefully developed, fully tested, and built to perform at scale. Our clients help shape our roadmap, and our team is here 24/7 to support them.',
  },
  {
    title: 'Going Beyond',
    heading: 'Built to Empower and Educate',
    body: 'We don\'t just sell proxies — we help people understand them. Our blog, API documentation, and quick-start guides are designed to help you work smarter with data, proxies, and web infrastructure, no matter your experience level.',
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <PageHero
        badge="About Us"
        title="Discover the Team Powering Global Data Access"
        variant="light"
      />

      <section className="border-b border-neutral-200 py-12">
        <Container>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-brand-600">{s.value}</p>
                <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{p.title}</p>
                <h2 className="mt-2 text-xl font-bold text-brand-900">{p.heading}</h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-brand-50 py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold text-brand-900">Our Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ABOUT_VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-bold text-brand-900">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-brand-900">Leadership Team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_TEAM.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-xl border border-neutral-200 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-900">{member.name}</p>
                  <p className="text-sm text-neutral-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-12">
        <Container className="max-w-3xl text-center">
          <blockquote className="text-lg italic text-neutral-600">
            &ldquo;If our network is doing its job, it&apos;s invisible — and that&apos;s exactly where we want to be.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-brand-900">Michael Torres</p>
          <p className="text-sm text-neutral-500">CEO, IPNoble</p>
        </Container>
      </section>

      <CtaSection
        title="Ready to Get Started?"
        description="Join thousands of businesses using IPNoble for reliable proxy infrastructure."
      />
    </main>
  );
}
