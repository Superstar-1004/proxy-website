import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { LOCATIONS } from '@/lib/content';
import {
  PageHero,
  SectionHeading,
  PrimaryButton,
  SolutionCard,
  LocationCard,
} from '@/components/marketing/PageLayout';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({ slug }));
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS[slug];
  if (!loc) notFound();

  return (
    <main>
      <PageHero badge={loc.badge} title={loc.title} description={loc.description} stats={loc.stats}>
        <PrimaryButton href="/register/">Get Proxies</PrimaryButton>
      </PageHero>

      {loc.sections.map((section) => (
        <section key={section.heading} className="py-16">
          <Container>
            <SectionHeading title={section.heading} />
            <p className="mt-4 max-w-3xl text-neutral-600">{section.body}</p>
          </Container>
        </section>
      ))}

      {loc.cities && (
        <section className="border-t border-neutral-200 bg-brand-50 py-16">
          <Container>
            <SectionHeading title="Top Cities" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {loc.cities.map((city) => (
                <LocationCard
                  key={city.name}
                  href={`/locations/${slug}/`}
                  flag="🏙️"
                  name={city.name}
                  ips={city.ips}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container>
          <SectionHeading title="Available Proxy Types" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SolutionCard href="/residential-proxies/" title="Residential" description="Real household IPs." price="from $1.75/GB" />
            <SolutionCard href="/isp-proxies/" title="ISP" description="Static ISP IPs." price="from $1.80/proxy" />
            <SolutionCard href="/datacenter-proxies/" title="Datacenter" description="High-speed IPs." price="from $1.39/proxy" />
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-8">
        <Container className="text-center">
          <Link href="/locations/" className="text-sm font-semibold text-brand-600 hover:underline">
            ← All Locations
          </Link>
        </Container>
      </section>
    </main>
  );
}
