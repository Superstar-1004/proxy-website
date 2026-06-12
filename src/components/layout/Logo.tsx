export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white" opacity="0.9" />
      <path d="M16 8L22 14L16 20L10 14L16 8Z" fill="white" opacity="0.5" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#27a0ab" />
          <stop offset="1" stopColor="#006970" />
        </linearGradient>
      </defs>
    </svg>
  );
}
