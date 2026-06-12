export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#006970" />
      <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white" opacity="0.9" />
      <path d="M14 10L26 16L20 22L14 16L14 10Z" fill="white" opacity="0.6" />
    </svg>
  );
}
