import { cn } from '@/lib/utils';

/** Renders the brand as IPN + oble per style guide. */
export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn(className)} aria-label="IPNoble">
      <span>IPN</span>oble
    </span>
  );
}
