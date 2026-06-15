import { cn } from '@/lib/utils'
import { VMMark } from './VMMark'

interface LogoProps {
  /** 'dark' for light backgrounds, 'light' for dark backgrounds */
  variant?: 'dark' | 'light'
  className?: string
  /** hide the wordmark, show the tile only */
  markOnly?: boolean
}

export function Logo({ variant = 'dark', className, markOnly = false }: LogoProps) {
  const text = variant === 'dark' ? 'text-[var(--color-foreground)]' : 'text-[var(--color-background)]'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <VMMark variant={variant} className="w-7 h-7" />
      {!markOnly && (
        <span className={cn('font-display font-bold text-[19px] tracking-[-0.03em] leading-none', text)}>
          Viet<span className="text-[var(--color-accent)]">Move</span>
        </span>
      )}
    </span>
  )
}
