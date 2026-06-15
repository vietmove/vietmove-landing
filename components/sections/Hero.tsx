'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { loaderHasFired } from '@/lib/loaderEvents'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { VMMark } from '@/components/ui/VMMark'
import data from '@/content/hero.json'

type LenisInstance = { scrollTo: (t: string | number, o?: Record<string, unknown>) => void }
function scrollTo(hash: string) {
  const lenis = (window as unknown as { __lenis?: LenisInstance }).__lenis
  if (lenis) lenis.scrollTo(hash, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}

const chipState: Record<string, string> = {
  live: 'bg-[var(--color-kick)]',
  soon: 'bg-[var(--color-accent)]',
  future: 'bg-[var(--color-muted)]',
}

/** Momentum graphic — orbiting rings around the VietMove mark, ringed by ecosystem chips. */
function MomentumStage() {
  return (
    <div className="relative mx-auto aspect-square w-[300px] sm:w-[360px] lg:w-[440px]">
      {/* faint grid + radial glow */}
      <div className="absolute inset-0 rounded-[32px] vm-grid-texture" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(55% 50% at 50% 50%, rgba(255,74,28,.18), transparent 70%)', filter: 'blur(36px)' }}
        aria-hidden="true"
      />

      {/* orbit rings */}
      <div className="absolute inset-[8%] rounded-full border border-black/10 vm-orbit" style={{ ['--vm-orbit-duration' as string]: '26s' }} aria-hidden="true">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
      </div>
      <div
        className="absolute inset-[22%] rounded-full border border-dashed border-black/15 vm-orbit"
        style={{ ['--vm-orbit-duration' as string]: '16s', animationDirection: 'reverse' }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--color-foreground)]" />
      </div>

      {/* center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <VMMark className="w-24 h-24 lg:w-28 lg:h-28 shadow-[0_20px_50px_rgba(10,10,10,.22)] rounded-[24px]" />
        </div>
      </div>

      {/* ecosystem chips */}
      <div className="absolute -left-3 sm:-left-8 top-[14%] vm-float">
        <Chip chip={data.chips[0]} />
      </div>
      <div className="absolute -right-2 sm:-right-10 top-[40%] vm-float" style={{ animationDelay: '-2s' }}>
        <Chip chip={data.chips[1]} />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[6%] vm-float" style={{ animationDelay: '-3.6s' }}>
        <Chip chip={data.chips[2]} />
      </div>
    </div>
  )
}

function Chip({ chip }: { chip: typeof data.chips[number] }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[var(--color-background)] py-1.5 pl-2 pr-3.5 shadow-[0_8px_24px_rgba(10,10,10,.10)] whitespace-nowrap">
      <span className={`w-2.5 h-2.5 rounded-full ${chipState[chip.state]}`} />
      <span className="flex flex-col leading-tight">
        <span className="font-display font-bold text-[13px] tracking-[-0.01em]">{chip.label}</span>
        <span className="font-mono text-[10px] tracking-[0.06em] text-[#4A4A4A] uppercase">
          <span className="lang-vi">{chip.tagVi}</span>
          <span className="lang-en">{chip.tagEn}</span>
        </span>
      </span>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const startAnim = () => {
      const node = ref.current
      if (!node) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Headline — fade-up per line (no clipping mask, safe for Vietnamese diacritics)
      tl.from(node.querySelectorAll('.hero-line'), {
        y: 28, opacity: 0, duration: 0.8, stagger: 0.12,
      }, 0)

      // Supporting elements
      tl.from(node.querySelectorAll('[data-hero-anim]'), {
        y: 22, opacity: 0, duration: 0.7, stagger: 0.09,
      }, 0.2)

      tl.from(node.querySelector('[data-hero-stage]'), {
        opacity: 0, scale: 0.94, duration: 1, ease: 'power2.out',
      }, 0.1)
    }

    if (loaderHasFired()) startAnim()
    else window.addEventListener('loader:done', startAnim, { once: true })

    return () => window.removeEventListener('loader:done', startAnim)
  }, { scope: ref })

  return (
    <section ref={ref} className="relative overflow-hidden py-10 lg:py-[72px] lg:min-h-[780px] lg:flex lg:items-center">
      <Container>
        <div className="lg:grid lg:grid-cols-[1.12fr_1fr] lg:gap-[60px] lg:items-center">
          {/* Copy */}
          <div>
            <div data-hero-anim>
              <Eyebrow className="mb-5 inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[var(--color-accent)]" />
                <span className="lang-vi">{data.eyebrowVi}</span>
                <span className="lang-en">{data.eyebrowEn}</span>
              </Eyebrow>
            </div>

            <h1
              className="font-display font-bold tracking-[-0.04em] leading-[1.18] mb-6"
              style={{ fontSize: 'clamp(46px, 8.5vw, 78px)' }}
            >
              <span className="lang-vi">
                <span className="hero-line block">{data.headlineLine1Vi}</span>
                <span className="hero-line block">
                  <span className="relative inline-block text-[var(--color-accent)]">
                    {data.headlineWordVi}
                    <span className="absolute left-0 -bottom-1 h-[6px] w-full bg-[var(--color-accent)]/25 rounded-full" />
                  </span>
                </span>
                <span className="hero-line block">{data.headlineLine2Vi}</span>
              </span>
              <span className="lang-en">
                <span className="hero-line block">{data.headlineLine1En}</span>
                <span className="hero-line block">
                  <span className="relative inline-block text-[var(--color-accent)]">
                    {data.headlineWordEn}
                    <span className="absolute left-0 -bottom-1 h-[6px] w-full bg-[var(--color-accent)]/25 rounded-full" />
                  </span>{' '}
                  {data.headlineLine2En}
                </span>
              </span>
            </h1>

            <p className="text-[17px] leading-[1.55] text-[#1B1B1B] max-w-[540px] mb-7" data-hero-anim>
              <span className="lang-vi">{data.leadVi}</span>
              <span className="lang-en">{data.leadEn}</span>
            </p>

            <div className="flex flex-wrap gap-3 mb-7" data-hero-anim>
              <a
                href="#ecosystem"
                onClick={(e) => { e.preventDefault(); scrollTo('#ecosystem') }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] pl-5 pr-2 py-2 text-sm font-semibold transition-transform hover:-translate-y-px"
              >
                <span className="lang-vi">{data.ctaPrimaryVi}</span>
                <span className="lang-en">{data.ctaPrimaryEn}</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent)] text-[var(--color-foreground)] overflow-hidden">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" aria-hidden="true">
                    <path d="M3.5 10.5 10.5 3.5M5 3.5h5.5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#manifesto"
                onClick={(e) => { e.preventDefault(); scrollTo('#manifesto') }}
                className="inline-flex items-center px-5 py-2.5 rounded-full border-[1.5px] border-[var(--color-foreground)] text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
              >
                <span className="lang-vi">{data.ctaSecondaryVi}</span>
                <span className="lang-en">{data.ctaSecondaryEn}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-[18px] gap-y-2 text-[13px] text-[#4A4A4A]" data-hero-anim>
              {data.meta.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
                  <span className="lang-vi">{item.vi}</span>
                  <span className="lang-en">{item.en}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Momentum stage */}
          <div className="mt-14 lg:mt-0" data-hero-stage>
            <MomentumStage />
          </div>
        </div>
      </Container>
    </section>
  )
}
