'use client';

import { useState } from 'react';
import { Card, CardBody } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';

type Package = {
  id: string;
  name: string;
  type: string;
  description: string | null;
  price: number;
  unit: string;
  quantity: number;
  features: string[];
  popular: boolean;
};

export function ProxyPurchaseGrid({ packages }: { packages: Package[] }) {
  const [loading, setLoading] = useState<string | null>(null);

  async function purchase(packageId: string) {
    setLoading(packageId);
    const res = await fetch('/api/orders/checkout/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packageId }),
    });
    const json = await res.json();
    if (json.url) window.location.href = json.url;
    else setLoading(null);
  }

  const grouped = packages.reduce<Record<string, Package[]>>((acc, pkg) => {
    (acc[pkg.type] ??= []).push(pkg);
    return acc;
  }, {});

  return (
    <div className="mt-8 space-y-10">
      {Object.entries(grouped).map(([type, pkgs]) => (
        <div key={type}>
          <h2 className="mb-4 text-lg font-semibold capitalize text-brand-800">{type} Proxies</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pkgs.map((pkg) => (
              <Card key={pkg.id} className={pkg.popular ? 'border-brand-500' : ''}>
                <CardBody>
                  {pkg.popular && <Badge className="mb-2">Popular</Badge>}
                  <h3 className="font-bold">{pkg.name}</h3>
                  {pkg.description && <p className="mt-1 text-sm text-neutral-500">{pkg.description}</p>}
                  <p className="mt-3 text-2xl font-bold text-brand-700">
                    {formatCurrency(pkg.price)}
                    <span className="text-sm font-normal text-neutral-400">/{pkg.unit}</span>
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-neutral-600">
                    {pkg.features.map((f) => <li key={f}>✓ {f}</li>)}
                  </ul>
                  <Button className="mt-4 w-full" onClick={() => purchase(pkg.id)} disabled={loading === pkg.id}>
                    {loading === pkg.id ? 'Redirecting…' : 'Purchase'}
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
