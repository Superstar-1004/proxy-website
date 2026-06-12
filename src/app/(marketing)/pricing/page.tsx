import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { PROXY_PACKAGES, SUBSCRIPTION_PLANS } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = { title: 'Pricing' };

export default function PricingPage() {
  return (
    <main>
      <section className="bg-brand-900 py-16 text-white">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-brand-100">Pay only for what you use. No hidden fees.</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-brand-900">Subscription Plans</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl border bg-white p-6 shadow-sm ${'popular' in plan && plan.popular ? 'border-brand-500 ring-2 ring-brand-200' : 'border-neutral-200'}`}
              >
                {'popular' in plan && plan.popular && <Badge className="mb-3">Most Popular</Badge>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{plan.description}</p>
                <p className="mt-4 text-3xl font-bold text-brand-700">
                  {formatCurrency(plan.price)}<span className="text-base font-normal text-neutral-400">/{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-brand-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.id === 'enterprise' ? '/contact/' : '/register/'}
                  className="mt-6 block rounded-lg bg-brand-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-600"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {Object.entries(PROXY_PACKAGES).map(([key, pkg]) => (
        <section key={key} id={key} className="border-t border-neutral-200 py-16 scroll-mt-20">
          <Container>
            <h2 className="text-2xl font-bold text-brand-900">{pkg.title}</h2>
            <p className="mt-2 text-neutral-600">{pkg.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pkg.tiers.map((tier) => (
                <div key={tier.name} className={`rounded-xl border p-5 ${tier.popular ? 'border-brand-500 bg-brand-50' : 'border-neutral-200 bg-white'}`}>
                  {tier.popular && <Badge className="mb-2">Popular</Badge>}
                  <h3 className="font-bold">{tier.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-brand-700">
                    {formatCurrency(tier.price)}<span className="text-sm font-normal text-neutral-400">/{tier.unit}</span>
                  </p>
                  <Link href="/register/" className="mt-4 block text-center text-sm font-semibold text-brand-600 hover:underline">Buy now</Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section id="unblocker" className="border-t border-neutral-200 py-16 scroll-mt-20">
        <Container>
          <Badge className="mb-3">New</Badge>
          <h2 className="text-2xl font-bold text-brand-900">Web Unblocker</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            AI-powered automated unblocking for web scraping. Bypass CAPTCHAs and anti-bot systems automatically.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Starter', price: 1.0, unit: '1000 req', popular: false },
              { name: 'Growth', price: 0.8, unit: '1000 req', popular: true },
              { name: 'Scale', price: 0.6, unit: '1000 req', popular: false },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-xl border p-5 ${tier.popular ? 'border-brand-500 bg-brand-50' : 'border-neutral-200 bg-white'}`}>
                {tier.popular && <Badge className="mb-2">Popular</Badge>}
                <h3 className="font-bold">{tier.name}</h3>
                <p className="mt-2 text-2xl font-bold text-brand-700">
                  {formatCurrency(tier.price)}<span className="text-sm font-normal text-neutral-400">/{tier.unit}</span>
                </p>
                <Link href="/web-unblocker/" className="mt-4 block text-center text-sm font-semibold text-brand-600 hover:underline">Learn more</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
