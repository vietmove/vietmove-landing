'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import data from '@/content/principles.json'

const icons = [
  // upward
  <path key="up" d="M6 18 12 8l6 10M9.5 13 12 9.5 14.5 13" />,
  // action / bolt-arrow
  <path key="act" d="M13 3 5 14h6l-1 7 8-11h-6z" />,
  // change / refresh
  <path key="chg" d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2M18 4v4h-4M6 20v-4h4" />,
]

export default function Principles() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const items = ref.current?.querySelectorAll('.principle-item')
    if (!items) return
    gsap.from(items, {
      y: 36, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="principles" className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="mb-12 lg:mb-16 max-w-[680px]">
          <Eyebrow className="mb-4">
            <span className="lang-vi">{data.eyebrowVi}</span>
            <span className="lang-en">{data.eyebrowEn}</span>
          </Eyebrow>
          <h2
            className="font-display font-bold tracking-[-0.035em] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(38px, 8vw, 56px)' }}
          >
            <span className="lang-vi">{data.headingVi}</span>
            <span className="lang-en">{data.headingEn}</span>
          </h2>
          <p className="text-[17px] leading-[1.55] text-[#1B1B1B]">
            <span className="lang-vi">{data.leadVi}</span>
            <span className="lang-en">{data.leadEn}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.items.map((item, i) => (
            <article
              key={item.n}
              className="principle-item group relative overflow-hidden rounded-[18px] border border-black/[0.12] bg-[var(--color-background)] p-7 lg:p-8 flex flex-col min-h-[280px] hover:border-black transition-colors"
            >
              <div className="flex items-center justify-between mb-auto">
                <span className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-[var(--color-foreground)] text-[var(--color-accent)] transition-transform duration-300 group-hover:-translate-y-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[i]}
                  </svg>
                </span>
                <span className="font-display font-bold text-[40px] tracking-[-0.04em] leading-none text-black/10 group-hover:text-[var(--color-accent)]/30 transition-colors">
                  {item.n}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="font-display font-bold text-[24px] tracking-[-0.02em] leading-tight mb-2">
                  <span className="lang-vi">{item.titleVi}</span>
                  <span className="lang-en">{item.titleEn}</span>
                </h3>
                <p className="text-[14px] leading-[1.55] text-[#1B1B1B]">
                  <span className="lang-vi">{item.bodyVi}</span>
                  <span className="lang-en">{item.bodyEn}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
