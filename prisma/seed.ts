import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.proxyPackage.deleteMany();

  const packages = [
    { slug: 'res-1gb', type: 'residential', name: 'Residential 1 GB', description: 'Try residential proxies', price: 7.0, unit: 'GB', quantity: 1, features: ['32M+ IP pool', '195+ countries'], popular: false },
    { slug: 'res-10gb', type: 'residential', name: 'Residential 10 GB', description: 'Most popular residential plan', price: 52.5, unit: 'GB', quantity: 10, features: ['32M+ IP pool', 'Priority support', 'API access'], popular: true },
    { slug: 'res-50gb', type: 'residential', name: 'Residential 50 GB', description: 'Scale your scraping', price: 245.0, unit: 'GB', quantity: 50, features: ['32M+ IP pool', 'Dedicated support'], popular: false },
    { slug: 'dc-10', type: 'datacenter', name: 'Datacenter 10 Proxies', description: 'High-speed datacenter IPs', price: 15.9, unit: 'proxy', quantity: 10, features: ['60+ locations', 'Unlimited bandwidth'], popular: false },
    { slug: 'dc-50', type: 'datacenter', name: 'Datacenter 50 Proxies', description: 'Popular datacenter plan', price: 74.5, unit: 'proxy', quantity: 50, features: ['60+ locations', 'API access'], popular: true },
    { slug: 'isp-60d', type: 'isp', name: 'ISP 60 Days', description: 'Static ISP proxies', price: 2.55, unit: 'proxy', quantity: 1, features: ['Dedicated IPs', '31+ countries'], popular: true },
    { slug: 'mobile-daily', type: 'mobile', name: 'Mobile Daily', description: 'Real mobile IPs', price: 10.11, unit: 'day', quantity: 1, features: ['4G/5G', '40+ countries'], popular: false },
    { slug: 'mobile-monthly', type: 'mobile', name: 'Mobile Monthly', description: 'Monthly mobile plan', price: 117.0, unit: 'month', quantity: 1, features: ['4G/5G', 'Non-expiring'], popular: true },
  ];

  for (const pkg of packages) {
    await prisma.proxyPackage.create({ data: pkg });
  }

  // Demo usage for development
  const demoUser = await prisma.user.findFirst();
  if (demoUser) {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      await prisma.usageRecord.upsert({
        where: {
          userId_proxyType_date: {
            userId: demoUser.id,
            proxyType: 'residential',
            date,
          },
        },
        create: {
          userId: demoUser.id,
          proxyType: 'residential',
          bandwidth: BigInt(Math.floor(Math.random() * 5_000_000_000)),
          requests: Math.floor(Math.random() * 10000),
          date,
        },
        update: {},
      });
    }
  }

  console.log(`Seeded ${packages.length} proxy packages`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
