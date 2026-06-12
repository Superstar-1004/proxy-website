import type { Metadata } from 'next';
import { LegalDocument } from '@/components/marketing/LegalDocument';
import { PRIVACY_SECTIONS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'IPNoble Privacy Policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      version="Version 1.0"
      effectiveDate="June 1, 2026"
      intro="This Privacy Policy describes how IPNoble collects, uses, and protects personal information when you use our website, dashboard, and proxy services."
      sections={PRIVACY_SECTIONS}
    />
  );
}
