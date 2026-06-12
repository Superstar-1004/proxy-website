'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const COMPANY_SIZES = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '500+ employees',
];

const USE_CASES = [
  'Web scraping & data collection',
  'SEO & SERP monitoring',
  'Price monitoring',
  'Ad verification',
  'E-commerce automation',
  'AI / ML data pipelines',
  'Other',
];

export function DemoRequestForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/demo/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.get('firstName'),
          lastName: form.get('lastName'),
          email: form.get('email'),
          company: form.get('company'),
          jobTitle: form.get('jobTitle'),
          companySize: form.get('companySize'),
          useCase: form.get('useCase'),
          message: form.get('message') || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-2xl text-white">✓</div>
        <h3 className="text-xl font-bold text-brand-900">Request received!</h3>
        <p className="mt-2 text-neutral-600">
          A product expert will reach out within 1 business day to schedule your 20–30 minute demo.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-neutral-700">First name *</label>
          <Input id="firstName" name="firstName" required placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-neutral-700">Last name *</label>
          <Input id="lastName" name="lastName" required placeholder="Doe" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">Work email *</label>
        <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-neutral-700">Company *</label>
          <Input id="company" name="company" required placeholder="Acme Inc." />
        </div>
        <div>
          <label htmlFor="jobTitle" className="mb-1 block text-sm font-medium text-neutral-700">Job title *</label>
          <Input id="jobTitle" name="jobTitle" required placeholder="Head of Engineering" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="companySize" className="mb-1 block text-sm font-medium text-neutral-700">Company size *</label>
          <select
            id="companySize"
            name="companySize"
            required
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Select size</option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="useCase" className="mb-1 block text-sm font-medium text-neutral-700">Primary use case *</label>
          <select
            id="useCase"
            name="useCase"
            required
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Select use case</option>
            {USE_CASES.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">Anything else we should know?</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your project, scale, or technical requirements…"
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      {status === 'error' && <p className="text-sm text-red-600">{errorMsg}</p>}
      <Button type="submit" className="w-full bg-accent-500 hover:bg-accent-600" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Request a Demo'}
      </Button>
      <p className="text-center text-xs text-neutral-400">
        Sessions typically last 20–30 minutes. No obligation to purchase.
      </p>
    </form>
  );
}
