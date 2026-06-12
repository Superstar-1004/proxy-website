'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardBody } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage(json.message);
      setStatus('success');
      form.reset();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Failed to send');
      setStatus('error');
    }
  }

  return (
    <main>
      <section className="bg-brand-900 py-16 text-white">
        <Container>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-brand-100">Our team typically responds within 24 hours.</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-xl">
          <Card>
            <CardBody>
              {status === 'success' ? (
                <p className="text-center text-brand-700">{message}</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium">Subject</label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  {status === 'error' && <p className="text-sm text-red-600">{message}</p>}
                  <Button type="submit" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardBody>
          </Card>
        </Container>
      </section>
    </main>
  );
}
