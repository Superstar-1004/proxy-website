'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="auth-main">
      <div className="container auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome back</h1>
            <p>Sign in to manage your proxies and account</p>
          </div>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500); }}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-input" placeholder="you@company.com" required />
            </div>
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>
                <Link href="#" className="form-link">Forgot password?</Link>
              </div>
              <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
          <p className="auth-footer-text">Don&apos;t have an account? <Link href="/register/">Create one free</Link></p>
        </div>
      </div>
    </main>
  );
}
