import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { DemoRequestForm } from '@/components/marketing/DemoRequestForm';
import { DemoFaq } from '@/components/marketing/DemoFaq';
import { TrustedMarquee } from '@/components/marketing/TrustedMarquee';
import { Building2, TrendingDown, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Meet with a IPNoble product expert. Get a tailored demo of our proxy network for your use case.',
};

const BENEFITS = [
  {
    icon: Building2,
    title: 'Enterprise Access',
    desc: 'Higher limits, advanced configurations, and priority support beyond self-serve.',
  },
  {
    icon: TrendingDown,
    title: 'Better Economics',
    desc: 'Lower unit costs through volume pricing, bulk discounts, and custom commits.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Fit',
    desc: 'Validate performance, routing, and compliance for your specific workload.',
  },
];

const STATS = [
  { value: '50%', label: 'Lower Cost' },
  { value: '99%', label: 'Uptime' },
  { value: '100%', label: 'Ethically Sourced' },
];

const TEAM = [
  { name: 'Alex Morgan', role: 'Head of Sales', initials: 'AM' },
  { name: 'Sarah Chen', role: 'Account Executive', initials: 'SC' },
  { name: 'James Wright', role: 'Account Manager', initials: 'JW' },
  { name: 'Maria Santos', role: 'Senior Account Executive', initials: 'MS' },
  { name: 'David Kim', role: 'Sales Development Rep', initials: 'DK' },
  { name: 'Emily Foster', role: 'Account Management Lead', initials: 'EF' },
];

const AWARDS = ['G2 Leader', 'Trustpilot Excellent', 'Capterra Top Rated', 'GetApp Category Leader'];

export default function BookADemoPage() {
  return (
    <main>
      {/* Hero + form */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-brand-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Get a tailored demo</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-900 lg:text-5xl">
              Meet With a Product Expert
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              See how IPNoble can power your web scraping, automation, and data collection at scale.
            </p>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-lg font-bold text-brand-900">Request your demo</h2>
              <DemoRequestForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-brand-900">IPNoble customers are winning</h2>
                <div className="mt-6 space-y-5">
                  {BENEFITS.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-900">{title}</h3>
                        <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-brand-600">{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-neutral-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-12">
        <Container>
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-neutral-400">Awards</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {AWARDS.map((award) => (
              <span key={award} className="rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-400">
                {award}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-y border-neutral-200 bg-brand-50 py-16 lg:py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-brand-900 lg:text-3xl">
            The Team to Help You Get Started
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
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

      <TrustedMarquee variant="light" />

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-900 lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <DemoFaq />
        </Container>
      </section>
    </main>
  );
}
