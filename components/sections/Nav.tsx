'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { loaderHasFired } from '@/lib/loaderEvents'
import { useLang } from '@/components/providers/LangProvider'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import data from '@/content/nav.json'

type LenisInstance = {
  scrollTo: (target: string | number, opts?: Record<string, unknown>) => void
  scroll: number
  velocity: number
}

function scrollTo(hash: string) {
  const lenis = (window as unknown as { __lenis?: LenisInstance }).__lenis
  if (lenis) {
    lenis.scrollTo(hash, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Nav() {
  const ref = useRef<HTMLElement>(null)
  const { lang, setLang } = useLang()

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const startAnim = () => {
      gsap.from(el, { y: -20, opacity: 0, duration: 0.6, ease: 'power2.out' })
    }

    if (loaderHasFired()) {
      startAnim()
    } else {
      window.addEventListener('loader:done', startAnim, { once: true })
    }

    // Scroll-aware hide/show — reads Lenis's own scroll/velocity properties.
    let hidden = false
    const tick = () => {
      const lenis = (window as unknown as { __lenis?: LenisInstance }).__lenis
      if (!lenis) return
      const { scroll, velocity } = lenis
      if (velocity === 0) return
      if (velocity > 0 && scroll > 80 && !hidden) {
        gsap.to(el, { yPercent: -100, duration: 0.35, ease: 'power2.inOut', overwrite: true })
        hidden = true
      } else if (velocity < 0 && hidden) {
        gsap.to(el, { yPercent: 0, duration: 0.4, ease: 'power2.out', overwrite: true })
        hidden = false
      }
    }
    gsap.ticker.add(tick)

    return () => {
      window.removeEventListener('loader:done', startAnim)
      gsap.ticker.remove(tick)
    }
  }, { scope: ref })

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.08]"
      style={{ background: 'rgba(250,247,241,.85)', backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)' }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" aria-label="VietMove home" className="transition-transform hover:-translate-y-px">
            <Logo />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {data.links.map(({ hash, vi, en }) => (
              <a
                key={hash}
                href={hash}
                onClick={(e) => { e.preventDefault(); scrollTo(hash) }}
                className="text-sm font-medium text-[#1B1B1B] hover:text-[var(--color-accent)] transition-colors"
              >
                {vi === en ? vi : <><span className="lang-vi">{vi}</span><span className="lang-en">{en}</span></>}
              </a>
            ))}
          </nav>

          {/* Right: lang toggle + CTA */}
          <div className="flex items-center gap-2.5">
            <div
              className="inline-flex p-[3px] border border-[var(--color-foreground)] rounded-full font-mono text-[11px] font-semibold tracking-[0.06em]"
              role="tablist"
              aria-label="Language"
            >
              <button
                role="tab"
                aria-selected={lang === 'vi'}
                onClick={() => setLang('vi')}
                className={`px-[9px] py-[5px] rounded-full transition-colors ${lang === 'vi' ? 'bg-[var(--color-foreground)] text-[var(--color-background)]' : 'text-[#4A4A4A]'}`}
              >
                VI
              </button>
              <button
                role="tab"
                aria-selected={lang === 'en'}
                onClick={() => setLang('en')}
                className={`px-[9px] py-[5px] rounded-full transition-colors ${lang === 'en' ? 'bg-[var(--color-foreground)] text-[var(--color-background)]' : 'text-[#4A4A4A]'}`}
              >
                EN
              </button>
            </div>

            <a
              href="#ecosystem"
              onClick={(e) => { e.preventDefault(); scrollTo('#ecosystem') }}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border-[1.5px] border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)] text-[13px] font-semibold transition-transform hover:-translate-y-px"
            >
              <span className="lang-vi">{data.cta.vi}</span>
              <span className="lang-en">{data.cta.en}</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
