import { cn } from '@/lib/utils'

interface VKMarkProps {
  /** 'dark' = dark rect (use on light backgrounds); 'light' = light rect (use on dark backgrounds) */
  variant?: 'dark' | 'light'
  className?: string
}

export function VKMark({ variant = 'dark', className }: VKMarkProps) {
  const bg = variant === 'dark' ? '#0A0A0A' : '#FAFAF7'
  const ball = variant === 'dark' ? '#FAFAF7' : '#0A0A0A'
  const pat = variant === 'dark' ? '#0A0A0A' : '#FAFAF7'

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('block flex-shrink-0', className)}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22" fill={bg} />
      <circle cx="50" cy="50" r="38" fill={ball} />
      <g stroke={pat} strokeWidth="0.84" strokeLinecap="round">
        <line x1="57.34" y1="33.05" x2="50" y2="41.64" />
        <line x1="63.85" y1="37.78" x2="57.95" y2="47.42" />
        <line x1="68.39" y1="51.75" x2="57.95" y2="47.42" />
        <line x1="65.90" y1="59.39" x2="54.91" y2="56.76" />
        <line x1="54.02" y1="68.03" x2="54.91" y2="56.76" />
        <line x1="45.98" y1="68.03" x2="45.09" y2="56.76" />
        <line x1="34.10" y1="59.39" x2="45.09" y2="56.76" />
        <line x1="31.61" y1="51.75" x2="42.05" y2="47.42" />
        <line x1="36.15" y1="37.78" x2="42.05" y2="47.42" />
        <line x1="42.66" y1="33.05" x2="50" y2="41.64" />
        <line x1="67.87" y1="25.41" x2="72.34" y2="19.26" />
        <line x1="78.92" y1="59.39" x2="86.14" y2="61.74" />
        <line x1="50" y1="80.40" x2="50" y2="88" />
        <line x1="21.08" y1="59.39" x2="13.86" y2="61.74" />
        <line x1="32.13" y1="25.41" x2="27.66" y2="19.26" />
      </g>
      <g fill={pat}>
        <polygon points="50,41.64 57.95,47.42 54.91,56.76 45.09,56.76 42.05,47.42" />
        <polygon points="67.87,25.41 70.36,33.05 63.85,37.78 57.34,33.05 59.83,25.41" />
        <polygon points="78.92,59.39 72.41,64.12 65.90,59.39 68.39,51.75 76.43,51.75" />
        <polygon points="50,80.40 43.49,75.67 45.98,68.03 54.02,68.03 56.51,75.67" />
        <polygon points="21.08,59.39 23.57,51.75 31.61,51.75 34.10,59.39 27.59,64.12" />
        <polygon points="32.13,25.41 40.17,25.41 42.66,33.05 36.15,37.78 29.64,33.05" />
      </g>
    </svg>
  )
}
