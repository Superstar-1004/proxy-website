import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card, CardBody } from '@/components/ui/card';

export const metadata: Metadata = { title: 'API Documentation' };

const endpoints = [
  { method: 'GET', path: '/api/v1/proxies', desc: 'List available proxy endpoints for your account' },
  { method: 'POST', path: '/api/v1/session', desc: 'Create a new proxy session with geo targeting' },
  { method: 'GET', path: '/api/v1/usage', desc: 'Retrieve bandwidth and request statistics' },
  { method: 'POST', path: '/api/v1/rotate', desc: 'Rotate IP for sticky session proxies' },
];

export default function DocsPage() {
  return (
    <main>
      <section className="bg-brand-900 py-16 text-white">
        <Container>
          <h1 className="text-4xl font-bold">API Documentation</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Integrate IPNoble proxies into your applications with our REST API. Authenticate with API keys from your dashboard.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-900">Authentication</h2>
          <Card className="mt-4">
            <CardBody>
              <p className="text-sm text-neutral-600">Include your API key in the Authorization header:</p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-brand-900 p-4 text-sm text-brand-100">
{`curl -H "Authorization: Bearer pv_your_api_key" \\
  https://api.ipnoble.com/v1/proxies`}
              </pre>
            </CardBody>
          </Card>

          <h2 className="mt-12 text-2xl font-bold text-brand-900">Endpoints</h2>
          <div className="mt-6 space-y-4">
            {endpoints.map((ep) => (
              <Card key={ep.path}>
                <CardBody className="flex flex-wrap items-start gap-4">
                  <span className="rounded bg-brand-100 px-2 py-1 text-xs font-bold text-brand-700">{ep.method}</span>
                  <div>
                    <code className="font-mono text-sm font-semibold">{ep.path}</code>
                    <p className="mt-1 text-sm text-neutral-600">{ep.desc}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-brand-900">Proxy Connection</h2>
          <Card className="mt-4">
            <CardBody>
              <pre className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-green-400">
{`# HTTP Proxy
http://user:pass@gate.ipnoble.com:12321

# SOCKS5
socks5://user:pass@gate.ipnoble.com:12322

# With geo targeting
http://user-country-us-state-ca:pass@gate.ipnoble.com:12321`}
              </pre>
            </CardBody>
          </Card>

          <div className="mt-12 rounded-xl bg-brand-50 p-8 text-center">
            <p className="font-semibold text-brand-900">Ready to integrate?</p>
            <Link href="/register/" className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
              Create Account & Get API Key
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
