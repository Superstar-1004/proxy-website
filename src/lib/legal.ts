export type LegalSection = {
  id: string;
  title: string;
  content: string[];
  subsections?: { title: string; content: string[] }[];
};

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'general',
    title: '1. General Provisions',
    content: [
      'This Terms of Service agreement ("Agreement") governs the relationship between IPNoble ("Company", "we", "us") and any person or entity using our services ("Client", "you").',
      'IPNoble provides proxy infrastructure solutions including residential, datacenter, ISP, and mobile proxies, along with API access and account management tools (collectively, the "Services"). Services are available at ipnoble.com and through our dashboard.',
      'By creating an account, purchasing a plan, or using our Services, you agree to this Agreement, our Privacy Policy, and Acceptable Use Policy. If you do not agree, you must not use our Services.',
      'We may update this Agreement at any time. Continued use of the Services after changes constitutes acceptance. The latest version is always available at /terms-of-service/.',
    ],
  },
  {
    id: 'account',
    title: '2. Account Registration',
    content: [
      'To use paid Services, you must register for an account with accurate and complete information including your name, email, and payment details.',
      'You must be at least 18 years old or the age of majority in your jurisdiction. If registering on behalf of a company, you represent that you have authority to bind that entity.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of unauthorized access.',
      'We reserve the right to suspend or terminate accounts that provide false information or violate this Agreement.',
    ],
  },
  {
    id: 'services',
    title: '3. Services & Subscriptions',
    content: [
      'Services are offered on subscription and pay-as-you-go models. Subscription plans renew automatically until cancelled through your dashboard or by contacting support.',
      'Pay-as-you-go traffic and proxy packages do not expire unless otherwise stated at purchase. Refunds are handled according to our refund policy communicated at checkout.',
      'We may modify, add, or discontinue Services with reasonable notice. Pricing changes apply to new purchases; existing subscriptions are honored until renewal.',
      'Service availability may vary by region due to legal restrictions. You are responsible for ensuring proxy use is lawful in your jurisdiction.',
    ],
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use',
    content: [
      'You may use our proxies only for lawful purposes including web scraping of publicly available data, SEO monitoring, ad verification, and market research where permitted.',
      'Prohibited uses include: accessing systems without authorization, distributing malware, spam, fraud, harassment, circumventing security measures on non-public systems, and any activity violating applicable law.',
      'You may not resell or redistribute proxy access without a written reseller agreement. Excessive abuse may result in immediate suspension without refund.',
      'We reserve the right to investigate violations and cooperate with law enforcement when required.',
    ],
  },
  {
    id: 'payment',
    title: '5. Payment & Billing',
    content: [
      'Fees are charged in USD unless otherwise specified. Payment is processed through our third-party payment provider (Stripe).',
      'You authorize us to charge your payment method for recurring subscriptions and one-time purchases. Failed payments may result in service suspension.',
      'Enterprise and custom plans are subject to separate agreements. Contact sales for volume pricing and invoicing terms.',
    ],
  },
  {
    id: 'ip',
    title: '6. Intellectual Property',
    content: [
      'IPNoble retains all rights to our platform, branding, documentation, and software. You receive a limited, non-exclusive license to use the Services during your active subscription.',
      'Data collected through proxies remains subject to the rights of respective content owners. We do not grant rights to third-party content accessed via our network.',
    ],
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: [
      'Services are provided "as is" to the maximum extent permitted by law. We do not guarantee uninterrupted or error-free operation.',
      'Our total liability for any claim shall not exceed the amount you paid us in the twelve months preceding the claim.',
      'We are not liable for indirect, incidental, or consequential damages including lost profits or data.',
    ],
  },
  {
    id: 'termination',
    title: '8. Termination',
    content: [
      'You may cancel your account at any time through the dashboard. Cancellation stops future billing; access continues until the end of the paid period.',
      'We may suspend or terminate access immediately for violation of this Agreement, non-payment, or legal requirements.',
      'Upon termination, your right to use the Services ceases. Provisions that by nature should survive (payment obligations, liability limits, governing law) remain in effect.',
    ],
  },
  {
    id: 'contact',
    title: '9. Contact',
    content: [
      'For questions about this Agreement, contact support@ipnoble.com.',
      'Effective date: June 1, 2026. Version 1.0.',
    ],
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    content: [
      'IPNoble ("we", "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal data when you use our website, dashboard, and proxy services.',
      'By using our Services, you consent to the practices described here. If you disagree, please do not use our Services.',
    ],
  },
  {
    id: 'collect',
    title: '2. Information We Collect',
    content: [
      'Account information: name, email address, company name, billing address, and payment details (processed by Stripe; we do not store full card numbers).',
      'Usage data: bandwidth consumption, API requests, IP connection logs, and dashboard activity for billing, support, and abuse prevention.',
      'Technical data: browser type, device information, IP address, and cookies when you visit our website.',
      'Communications: messages you send via contact forms, support tickets, or demo requests.',
    ],
  },
  {
    id: 'use',
    title: '3. How We Use Your Data',
    content: [
      'To provide, maintain, and improve our proxy Services and dashboard.',
      'To process payments, send invoices, and manage subscriptions.',
      'To respond to support requests and communicate service updates.',
      'To detect and prevent fraud, abuse, and security incidents.',
      'To send marketing communications where you have opted in; you may unsubscribe at any time.',
      'To comply with legal obligations and enforce our Terms of Service.',
    ],
  },
  {
    id: 'share',
    title: '4. Data Sharing',
    content: [
      'We share data with service providers who assist in operations: payment processing (Stripe), hosting (Vercel), email delivery, and analytics — under strict confidentiality agreements.',
      'We may disclose information when required by law, court order, or to protect our rights and users\' safety.',
      'We do not sell your personal data to third parties for their marketing purposes.',
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies',
    content: [
      'We use essential cookies for authentication and session management. Analytics cookies help us understand site usage.',
      'You can control cookies through your browser settings. Disabling essential cookies may limit dashboard functionality.',
    ],
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: [
      'Account data is retained while your account is active and for a reasonable period afterward for legal and billing purposes.',
      'Usage logs are retained as needed for billing disputes and abuse investigation, typically up to 12 months.',
      'You may request deletion of your account and associated personal data by contacting support@ipnoble.com.',
    ],
  },
  {
    id: 'rights',
    title: '7. Your Rights',
    content: [
      'Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to object to or restrict certain processing.',
      'EU/EEA residents may lodge complaints with their local data protection authority. UK residents may contact the ICO.',
      'To exercise your rights, email privacy@ipnoble.com. We will respond within 30 days.',
    ],
  },
  {
    id: 'security',
    title: '8. Security',
    content: [
      'We implement industry-standard measures including encryption in transit (TLS), hashed passwords, and access controls.',
      'No method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
    ],
  },
  {
    id: 'changes',
    title: '9. Changes & Contact',
    content: [
      'We may update this Privacy Policy periodically. Material changes will be communicated via email or dashboard notice.',
      'Contact: privacy@ipnoble.com. Effective date: June 1, 2026.',
    ],
  },
];

export const ABOUT_STATS = [
  { value: '10,000+', label: 'Business clients worldwide' },
  { value: '650+', label: 'Tool integrations' },
  { value: '32M+', label: 'IP addresses in pool' },
  { value: '195+', label: 'Countries covered' },
];

export const ABOUT_VALUES = [
  {
    title: 'Infrastructure Over Hype',
    desc: 'We build systems designed to hold up at scale and over years — not flashy demos that break in production.',
  },
  {
    title: 'Trust Compounds',
    desc: 'We grow alongside our clients. Trust in the product, the team, and the relationship — built steadily, not claimed upfront.',
  },
  {
    title: 'Ownership Drives Outcomes',
    desc: 'Decisions happen close to the work. For our clients, that means faster resolutions and fewer gaps between teams.',
  },
  {
    title: 'Relentless Efficiency',
    desc: 'Efficiency is a compounding advantage — in our infrastructure, our processes, and how we pass savings to you.',
  },
];

export const ABOUT_TEAM = [
  { name: 'Michael Torres', role: 'Chief Executive Officer', initials: 'MT' },
  { name: 'Lisa Park', role: 'Co-Founder & CTO', initials: 'LP' },
  { name: 'Robert Hayes', role: 'Chief Marketing Officer', initials: 'RH' },
  { name: 'Anna Kowalski', role: 'Head of DevOps', initials: 'AK' },
  { name: 'Chris Nguyen', role: 'Head of Client Support', initials: 'CN' },
  { name: 'Sarah Mitchell', role: 'General Counsel', initials: 'SM' },
];
