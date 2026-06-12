import Link from 'next/link';
import { Container } from '@/components/ui/container';
import type { LegalSection } from '@/lib/legal';

export function LegalDocument({
  title,
  version,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  version: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <section className="border-b border-neutral-200 bg-brand-50 py-12 lg:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold text-brand-900 lg:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-neutral-500">
            {version} · Effective date: {effectiveDate}
          </p>
          <p className="mt-4 text-neutral-600">{intro}</p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          <nav className="mb-10 rounded-xl border border-neutral-200 bg-white p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Contents</p>
            <ol className="space-y-1 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-brand-600 hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-brand-900">{section.title}</h2>
                <div className="mt-4 space-y-3 text-neutral-600 leading-relaxed">
                  {section.content.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-4 ml-4">
                    <h3 className="font-semibold text-brand-800">{sub.title}</h3>
                    <div className="mt-2 space-y-2 text-neutral-600">
                      {sub.content.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-neutral-200 pt-8 text-sm">
            <Link href="/privacy-policy/" className="font-medium text-brand-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="font-medium text-brand-600 hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact/" className="font-medium text-brand-600 hover:underline">
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
