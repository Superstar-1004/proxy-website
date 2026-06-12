import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { LOCATIONS } from '@/lib/content';
import { PageHero, SectionHeading, LocationCard } from '@/components/marketing/PageLayout';

const EXTRA_COUNTRIES = [
  { flag: '🇫🇷', name: 'France', ips: '1,418,633 IPs', href: '/locations/' },
  { flag: '🇮🇹', name: 'Italy', ips: '1,393,154 IPs', href: '/locations/' },
  { flag: '🇨🇦', name: 'Canada', ips: '1,200,000 IPs', href: '/locations/' },
  { flag: '🇦🇺', name: 'Australia', ips: '980,000 IPs', href: '/locations/' },
];

export default function LocationsIndexPage() {
  const locs = Object.values(LOCATIONS);

  return (
    <main>
      <PageHero
        badge="Global Coverage"
        title="Top Proxy Locations"
        description="Access 34M+ ethically sourced IPs across 195+ countries with city-level targeting."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading title="Featured Locations" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locs.map((loc) => (
              <LocationCard
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                flag={loc.flag}
                name={loc.title.replace(' Proxy Servers', '')}
                ips={`${loc.ipCount} IPs`}
              />
            ))}
          </div>

          <SectionHeading title="More Countries" className="mt-16" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRA_COUNTRIES.map((c) => (
              <LocationCard key={c.name} href={c.href} flag={c.flag} name={c.name} ips={c.ips} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
