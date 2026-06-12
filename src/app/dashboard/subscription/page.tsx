'use client';

import { useState } from 'react';
import { Card, CardBody } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SUBSCRIPTION_PLANS } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export default function SubscriptionPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function subscribe(planId: string) {
    setLoading(planId);
    const res = await fetch('/api/stripe/checkout/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId }),
    });
    const json = await res.json();
    if (json.url) window.location.href = json.url;
    else setLoading(null);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Subscription</h1>
      <p className="mt-1 text-neutral-500">Manage your subscription plan.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <Card key={plan.id} className={'popular' in plan && plan.popular ? 'border-brand-500 ring-2 ring-brand-100' : ''}>
            <CardBody>
              {'popular' in plan && plan.popular && <Badge className="mb-3">Popular</Badge>}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold text-brand-700">
                {formatCurrency(plan.price)}<span className="text-sm font-normal text-neutral-400">/mo</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                onClick={() => subscribe(plan.id)}
                disabled={loading === plan.id}
              >
                {loading === plan.id ? 'Redirecting…' : plan.cta}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
