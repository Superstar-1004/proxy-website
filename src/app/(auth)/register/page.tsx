'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthDivider, GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { Card, CardBody } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = new FormData(e.currentTarget);

    const res = await fetch('/api/user/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.get('name'),
        email: form.get('email'),
        password: form.get('password'),
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      setError(json.error || 'Registration failed');
      setLoading(false);
      return;
    }

    const result = await signIn('credentials', {
      email: form.get('email') as string,
      password: form.get('password') as string,
      redirect: false,
    });

    if (result?.error) {
      router.push('/login/');
      return;
    }

    router.push('/dashboard/');
    router.refresh();
  }

  return (
    <Card>
      <CardBody>
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-brand-900">Create your account</h1>
          <p className="mt-1 text-sm text-neutral-500">Start using premium proxies in minutes</p>
        </div>

        <GoogleSignInButton mode="sign-up" callbackUrl="/dashboard/" />

        <AuthDivider />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Full name</label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">Password</label>
            <Input id="password" name="password" type="password" placeholder="Min. 8 characters" minLength={8} required />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account with Email'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account? <Link href="/login/" className="font-semibold text-brand-600 hover:underline">Sign in</Link>
        </p>
      </CardBody>
    </Card>
  );
}
