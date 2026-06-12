import { requireAuth } from '@/lib/session';
import { getDashboardData } from '@/lib/dashboard';
import { Card, CardBody, CardHeader } from '@/components/ui/card';
import { formatBytes } from '@/lib/utils';

export default async function UsagePage() {
  const user = await requireAuth();
  const { usage } = await getDashboardData(user.id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Usage Statistics</h1>
      <p className="mt-1 text-neutral-500">Monitor bandwidth and request usage over time.</p>

      <Card className="mt-8">
        <CardHeader>
          <h2 className="font-semibold">Daily Usage (Last 14 days)</h2>
        </CardHeader>
        <CardBody className="overflow-x-auto pt-0">
          {usage.length === 0 ? (
            <p className="text-sm text-neutral-500">No usage data yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3 pr-4">Type</th>
                  <th className="pb-3 pr-4">Bandwidth</th>
                  <th className="pb-3">Requests</th>
                </tr>
              </thead>
              <tbody>
                {usage.map((row) => (
                  <tr key={row.id} className="border-b border-neutral-100">
                    <td className="py-3 pr-4">{new Date(row.date).toLocaleDateString()}</td>
                    <td className="py-3 pr-4 capitalize">{row.proxyType}</td>
                    <td className="py-3 pr-4">{formatBytes(row.bandwidth)}</td>
                    <td className="py-3">{row.requests.toLocaleString()}</td>
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
