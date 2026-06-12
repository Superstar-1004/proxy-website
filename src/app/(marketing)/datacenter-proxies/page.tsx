import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PROXY_PACKAGES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = { title: 'Datacenter Proxies' };

const pkg = PROXY_PACKAGES.datacenter;

export default function DatacenterProxiesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold text-brand-200">{pkg.priceFrom} · {pkg.stat}</p>
          <h1 className="mt-2 text-4xl font-bold">Datacenter Proxies</h1>
          <p className="mt-4 max-w-2xl text-brand-100">{pkg.description}</p>
          <Link href="/register/" className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50">Get Started</Link>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="mt-6 space-y-3">{pkg.features.map((f) => <li key={f} className="flex gap-2"><span className="text-brand-500">✓</span>{f}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Plans</h2>
            <div className="mt-6 space-y-3">
              {pkg.tiers.map((t) => (
                <div key={t.name} className="flex justify-between rounded-lg border p-4">
                  <span className="font-semibold">{t.name}</span>
                  <span className="font-bold text-brand-700">{formatCurrency(t.price)}/{t.unit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
