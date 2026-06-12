import { requireAuth } from '@/lib/session';
import { getDashboardData } from '@/lib/dashboard';
import { Card, CardBody, CardHeader } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

export default async function BillingPage() {
  const user = await requireAuth();
  const { invoices, orders } = await getDashboardData(user.id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Billing History</h1>
      <p className="mt-1 text-neutral-500">View invoices and payment history.</p>

      <Card className="mt-8">
        <CardHeader><h2 className="font-semibold">Invoices</h2></CardHeader>
        <CardBody className="overflow-x-auto pt-0">
          {invoices.length === 0 ? (
            <p className="text-sm text-neutral-500">No invoices yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3 pr-4">Amount</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3">PDF</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-neutral-100">
                    <td className="py-3 pr-4">{new Date(inv.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 pr-4">{formatCurrency(Number(inv.amount))}</td>
                    <td className="py-3 pr-4 capitalize">{inv.status}</td>
                    <td className="py-3">
                      {inv.pdfUrl ? (
                        <a href={inv.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Download</a>
                      ) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardHeader><h2 className="font-semibold">Orders</h2></CardHeader>
        <CardBody className="pt-0">
          {orders.length === 0 ? (
            <p className="text-sm text-neutral-500">No orders yet.</p>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {orders.map((order) => (
                <li key={order.id} className="flex justify-between py-3 text-sm">
                  <span>{order.package.name} · <span className="capitalize text-neutral-500">{order.status}</span></span>
                  <span className="font-medium">{formatCurrency(Number(order.amount))}</span>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
