import { requireAuth } from '@/lib/session';
import { getProxyPackages } from '@/lib/dashboard';
import { ProxyPurchaseGrid } from '@/components/dashboard/ProxyPurchaseGrid';

export default async function ProxiesPage() {
  await requireAuth();
  const packages = await getProxyPackages();

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Buy Proxies</h1>
      <p className="mt-1 text-neutral-500">Purchase proxy packages for your account.</p>
      <ProxyPurchaseGrid packages={packages.map((p) => ({
        id: p.id,
        name: p.name,
        type: p.type,
        description: p.description,
        price: Number(p.price),
        unit: p.unit,
        quantity: p.quantity,
        features: p.features,
        popular: p.popular,
      }))} />
    </div>
  );
}
