import { cn } from '@/lib/utils'

interface VMMarkProps {
  /** 'dark' = dark tile (use on light backgrounds); 'light' = light tile (use on dark backgrounds) */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * VietMove monogram — a rounded tile holding three rising chevrons.
 * The chevrons read as forward / upward motion: the "Move" in VietMove,
 * the continuous step-up the brand stands for.
 */
export function VMMark({ variant = 'dark', className }: VMMarkProps) {
  const bg = variant === 'dark' ? '#0A0A0A' : '#FAF7F1'
  const mark = variant === 'dark' ? '#FAF7F1' : '#0A0A0A'
  const accent = '#FF4A1C'

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('block flex-shrink-0', className)}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="24" fill={bg} />
      {/* three rising chevrons nested tightly — back two in the mark color, leading one in accent */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9.5">
        <path d="M28 70 L50 50 L72 70" stroke={mark} opacity="0.28" />
        <path d="M28 60 L50 40 L72 60" stroke={mark} opacity="0.58" />
        <path d="M28 50 L50 30 L72 50" stroke={accent} />
      </g>
    </svg>
  )
}
