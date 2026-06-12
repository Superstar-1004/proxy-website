'use client';

import { useState } from 'react';
import { Card, CardBody } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ProfileForm({ initialName, email }: { initialName: string; email: string }) {
  const [name, setName] = useState(initialName);
  const [status, setStatus] = useState<'idle' | 'loading' | 'saved' | 'error'>('idle');

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/user/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    setStatus(res.ok ? 'saved' : 'error');
  }

  return (
    <Card className="mt-8 max-w-lg">
      <CardBody>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Display name</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <Input id="email" value={email} disabled className="bg-neutral-50" />
          </div>
          {status === 'saved' && <p className="text-sm text-brand-600">Profile updated.</p>}
          {status === 'error' && <p className="text-sm text-red-600">Update failed.</p>}
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Saving…' : 'Save Changes'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
