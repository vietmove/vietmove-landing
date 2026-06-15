import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizes: Record<Size, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

interface ContainerProps {
  children: ReactNode
  size?: Size
  className?: string
}

export function Container({ children, size = 'xl', className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 lg:px-14', sizes[size], className)}>
      {children}
    </div>
  )
}
