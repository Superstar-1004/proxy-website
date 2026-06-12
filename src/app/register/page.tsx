'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="auth-main">
      <div className="container auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create your account</h1>
            <p>No credit card required. Instant full access.</p>
          </div>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500); }}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" className="form-input" placeholder="John Smith" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-input" placeholder="you@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-input" placeholder="Create a password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
              {loading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>
          <p className="auth-footer-text">Already have an account? <Link href="/login/">Sign in</Link></p>
        </div>
      </div>
    </main>
  );
}
