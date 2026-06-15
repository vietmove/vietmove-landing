'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { VMMark } from '@/components/ui/VMMark'
import { VKMark } from '@/components/ui/VKMark'
import data from '@/content/ecosystem.json'

const kick = data.products[0]
const upcoming = data.products.slice(1)

function KickCard() {
  return (
    <article className="eco-item group relative overflow-hidden rounded-[20px] bg-[var(--color-foreground)] text-[var(--color-background)] p-6 lg:p-9 lg:row-span-2 flex flex-col">
      {/* lime glow — VietKick's own accent, signalling a live product */}
      <div
        className="absolute -right-20 -top-16 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-kick) 0%, transparent 62%)', opacity: 0.22 }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--color-kick)] opacity-60 animate-ping" />
            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[var(--color-kick)]" />
          </span>
          <span className="lang-vi">{kick.stateVi}</span>
          <span className="lang-en">{kick.stateEn}</span>
        </span>
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/40">P.01</span>
      </div>

      <div className="relative z-10 mt-10 lg:mt-auto lg:pt-16">
        <VKMark variant="light" className="w-14 h-14 lg:w-16 lg:h-16 rounded-[18px] mb-5 shadow-[0_12px_30px_rgba(0,0,0,.35)]" />
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-kick)] mb-3">
          <span className="lang-vi">{kick.sportVi}</span>
          <span className="lang-en">{kick.sportEn}</span>
        </div>
        <h3 className="font-display font-bold tracking-[-0.03em] leading-[0.95]" style={{ fontSize: 'clamp(44px, 7vw, 76px)' }}>
          {kick.name}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.55] text-white/70 max-w-[460px]">
          <span className="lang-vi">{kick.bodyVi}</span>
          <span className="lang-en">{kick.bodyEn}</span>
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {kick.features?.map((f) => (
            <span key={f.en} className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-white/[0.08] text-white/75">
              <span className="lang-vi">{f.vi}</span>
              <span className="lang-en">{f.en}</span>
            </span>
          ))}
        </div>

        <a
          href={kick.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-7 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-kick)] text-[var(--color-foreground)] pl-5 pr-2 py-2 text-sm font-semibold transition-transform hover:-translate-y-px"
        >
          <span className="lang-vi">{kick.linkVi}</span>
          <span className="lang-en">{kick.linkEn}</span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-foreground)] text-[var(--color-kick)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover/btn:translate-x-px group-hover/btn:-translate-y-px" aria-hidden="true">
              <path d="M3.5 10.5 10.5 3.5M5 3.5h5.5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </article>
  )
}

function UpcomingCard({ product, idx }: { product: typeof upcoming[number]; idx: number }) {
  return (
    <article className="eco-item relative overflow-hidden rounded-[20px] border border-black/[0.12] bg-[var(--color-background)] p-6 lg:p-7 flex flex-col hover:border-black transition-colors">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#4A4A4A]">
          <span className={`w-2.5 h-2.5 rounded-full ${product.state === 'soon' ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-muted)]'}`} />
          <span className="lang-vi">{product.stateVi}</span>
          <span className="lang-en">{product.stateEn}</span>
        </span>
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#B0ACA2]">P.0{idx + 2}</span>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="flex items-center justify-center w-11 h-11 rounded-[14px] border border-dashed border-black/25 text-[var(--color-muted)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        </span>
        <div>
          <h3 className="font-display font-bold text-[22px] tracking-[-0.02em] leading-tight">
            <span className="lang-vi">{product.nameVi}</span>
            <span className="lang-en">{product.nameEn}</span>
          </h3>
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#4A4A4A]">
            <span className="lang-vi">{product.sportVi}</span>
            <span className="lang-en">{product.sportEn}</span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-[14px] leading-[1.55] text-[#1B1B1B] max-w-[420px]">
        <span className="lang-vi">{product.bodyVi}</span>
        <span className="lang-en">{product.bodyEn}</span>
      </p>
    </article>
  )
}

export default function Ecosystem() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const items = ref.current?.querySelectorAll('.eco-item')
    if (!items) return
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.75, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="ecosystem" className="py-20 lg:py-28 bg-[#F3F0E8]">
      <Container>
        <div className="mb-10 lg:mb-14 lg:grid lg:grid-cols-2 lg:gap-[60px] lg:items-end">
          <div>
            <Eyebrow className="mb-4 inline-flex items-center gap-2">
              <VMMark className="w-4 h-4 rounded-[5px]" />
              <span className="lang-vi">{data.eyebrowVi}</span>
              <span className="lang-en">{data.eyebrowEn}</span>
            </Eyebrow>
            <h2
              className="font-display font-bold tracking-[-0.035em] leading-[1.05] whitespace-pre-line"
              style={{ fontSize: 'clamp(40px, 9vw, 58px)' }}
            >
              <span className="lang-vi">{data.headingVi}</span>
              <span className="lang-en">{data.headingEn}</span>
            </h2>
          </div>
          <p className="mt-5 lg:mt-0 text-[17px] leading-[1.55] text-[#1B1B1B] max-w-[560px] lg:self-end">
            <span className="lang-vi">{data.leadVi}</span>
            <span className="lang-en">{data.leadEn}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:auto-rows-fr">
          <KickCard />
          {upcoming.map((p, i) => (
            <UpcomingCard key={p.nameEn} product={p} idx={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
