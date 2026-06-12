import { MarketingShell } from '@/components/marketing/MarketingShell';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}
