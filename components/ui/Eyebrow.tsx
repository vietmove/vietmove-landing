import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  color?: 'muted' | 'accent' | 'white' | 'ink'
  as?: 'p' | 'span'
  className?: string
}

const colorMap = {
  muted: 'text-[#4A4A4A]',
  accent: 'text-[var(--color-accent)]',
  white: 'text-white/50',
  ink: 'text-[var(--color-foreground)]',
}

export function Eyebrow({ children, color = 'accent', as: Tag = 'p', className }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'font-mono text-[11px] tracking-[0.18em] uppercase font-medium',
        colorMap[color],
        className
      )}
    >
      {children}
    </Tag>
  )
}
