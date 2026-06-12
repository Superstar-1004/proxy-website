import { prisma } from '@/lib/prisma';

export async function getDashboardData(userId: string) {
  const [user, subscription, orders, usage, apiKeys, invoices] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.subscription.findUnique({ where: { userId } }),
    prisma.order.findMany({
      where: { userId },
      include: { package: true },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.usageRecord.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 14,
    }),
    prisma.apiKey.count({ where: { userId } }),
    prisma.invoice.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ]);

  const totalBandwidth = usage.reduce((s, r) => s + r.bandwidth, BigInt(0));
  const totalRequests = usage.reduce((s, r) => s + r.requests, 0);

  return {
    user,
    subscription,
    orders,
    usage,
    apiKeyCount: apiKeys,
    invoices,
    stats: {
      totalBandwidth,
      totalRequests,
      activePlan: subscription?.plan ?? 'Free',
      subscriptionStatus: subscription?.status ?? 'inactive',
    },
  };
}

export async function getProxyPackages() {
  return prisma.proxyPackage.findMany({
    where: { active: true },
    orderBy: [{ type: 'asc' }, { price: 'asc' }],
  });
}
