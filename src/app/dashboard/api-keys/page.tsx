'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type ApiKey = {
  id: string;
  name: string;
  prefix: string;
  lastUsed: string | null;
  createdAt: string;
};

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [name, setName] = useState('');
  const [newKey, setNewKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadKeys() {
    const res = await fetch('/api/api-keys/');
    if (res.ok) setKeys(await res.json());
  }

  useEffect(() => { loadKeys(); }, []);

  async function createKey(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/api-keys/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const json = await res.json();
    if (res.ok) {
      setNewKey(json.key);
      setName('');
      loadKeys();
    }
    setLoading(false);
  }

  async function deleteKey(id: string) {
    await fetch('/api/api-keys/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    loadKeys();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">API Keys</h1>
      <p className="mt-1 text-neutral-500">Create and manage API keys for programmatic access.</p>

      {newKey && (
        <Card className="mt-6 border-brand-300 bg-brand-50">
          <CardBody>
            <p className="text-sm font-semibold text-brand-800">Copy your new API key — it won&apos;t be shown again:</p>
            <code className="mt-2 block break-all rounded bg-white p-3 text-sm">{newKey}</code>
            <Button variant="outline" className="mt-3" onClick={() => setNewKey(null)}>Dismiss</Button>
          </CardBody>
        </Card>
      )}

      <Card className="mt-8 max-w-lg">
        <CardBody>
          <form onSubmit={createKey} className="flex gap-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Key name (e.g. Production)" required />
            <Button type="submit" disabled={loading}>{loading ? 'Creating…' : 'Create'}</Button>
          </form>
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardBody className="overflow-x-auto">
          {keys.length === 0 ? (
            <p className="text-sm text-neutral-500">No API keys yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3 pr-4">Prefix</th>
                  <th className="pb-3 pr-4">Created</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((key) => (
                  <tr key={key.id} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 font-medium">{key.name}</td>
                    <td className="py-3 pr-4 font-mono">{key.prefix}…</td>
                    <td className="py-3 pr-4">{new Date(key.createdAt).toLocaleDateString()}</td>
                    <td className="py-3">
                      <button type="button" onClick={() => deleteKey(key.id)} className="text-red-600 hover:underline">Revoke</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
