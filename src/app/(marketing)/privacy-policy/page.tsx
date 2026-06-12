import type { Metadata } from 'next';
import { LegalDocument } from '@/components/marketing/LegalDocument';
import { PRIVACY_SECTIONS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ProxyVault Privacy Policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      version="Version 1.0"
      effectiveDate="June 1, 2026"
      intro="This Privacy Policy describes how ProxyVault collects, uses, and protects personal information when you use our website, dashboard, and proxy services."
      sections={PRIVACY_SECTIONS}
    />
  );
}
