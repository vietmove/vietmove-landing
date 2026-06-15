import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import { LangProvider } from '@/components/providers/LangProvider'
import { Loader } from '@/components/ui/Loader'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'VietMove — A movement built from Vietnam',
  description:
    'VietMove is a sports-tech movement built from Vietnam. We build products that get people moving — starting with VietKick for football, and growing into more sports over time.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      data-lang="vi"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LangProvider>
          <LenisProvider>
            <Loader />
            {children}
          </LenisProvider>
        </LangProvider>
      </body>
    </html>
  )
}
