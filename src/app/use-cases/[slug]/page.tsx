import { notFound } from 'next/navigation';
import { USE_CASES } from '@/lib/content';
import { UseCasePageView } from '@/components/UseCasePageView';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(USE_CASES).map((slug) => ({ slug }));
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = USE_CASES[slug];
  if (!page) notFound();
  return <UseCasePageView page={page} />;
}
