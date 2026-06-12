import { requireAuth } from '@/lib/session';
import { getDashboardData } from '@/lib/dashboard';
import { Card, CardBody, CardHeader } from '@/components/ui/card';
import { formatBytes, formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await requireAuth();
  const data = await getDashboardData(user.id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Welcome back, {data.user?.name ?? 'User'}</h1>
      <p className="mt-1 text-neutral-500">Here&apos;s an overview of your proxy account.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Active Plan', value: data.stats.activePlan },
          { label: 'Total Bandwidth', value: formatBytes(data.stats.totalBandwidth) },
          { label: 'Total Requests', value: data.stats.totalRequests.toLocaleString() },
          { label: 'API Keys', value: data.apiKeyCount.toString() },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardBody>
              <p className="text-sm text-neutral-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-brand-800">{stat.value}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Orders</h2>
            <Link href="/dashboard/proxies/" className="text-sm text-brand-600 hover:underline">Buy proxies</Link>
          </CardHeader>
          <CardBody className="pt-0">
            {data.orders.length === 0 ? (
              <p className="text-sm text-neutral-500">No orders yet.</p>
            ) : (
              <ul className="divide-y divide-neutral-100">
                {data.orders.map((order) => (
                  <li key={order.id} className="flex justify-between py-3 text-sm">
                    <span>{order.package.name}</span>
                    <span className="font-medium">{formatCurrency(Number(order.amount))}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold">Quick Actions</h2>
          </CardHeader>
          <CardBody className="grid gap-3 pt-0">
            <Link href="/dashboard/proxies/" className="rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:border-brand-300 hover:bg-brand-50">Purchase proxy packages</Link>
            <Link href="/dashboard/api-keys/" className="rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:border-brand-300 hover:bg-brand-50">Manage API keys</Link>
            <Link href="/docs/" className="rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:border-brand-300 hover:bg-brand-50">View API documentation</Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
