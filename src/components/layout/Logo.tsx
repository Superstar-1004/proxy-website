import Image from 'next/image';

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/images/company-logo.png"
      alt="IPNoble logo"
      width={size}
      height={size}
      className="rounded-md object-contain"
      style={{ width: size, height: size }}
      unoptimized
    />
  );
}
