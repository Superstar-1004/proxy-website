import type { Metadata } from 'next';
import { LegalDocument } from '@/components/marketing/LegalDocument';
import { TERMS_SECTIONS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ProxyVault Terms of Service — rules governing use of our proxy infrastructure and platform.',
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title="Terms of Service"
      version="Version 1.0"
      effectiveDate="June 1, 2026"
      intro="This agreement governs the contractual relationship between ProxyVault as a service provider and any person or entity using our proxy services and platform."
      sections={TERMS_SECTIONS}
    />
  );
}
