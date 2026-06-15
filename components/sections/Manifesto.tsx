'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import data from '@/content/manifesto.json'

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const { parts } = data

  useGSAP(() => {
    const rows = ref.current?.querySelectorAll('.manifesto-row')
    if (rows) {
      rows.forEach((row) => {
        gsap.from(row.querySelectorAll('[data-rise]'), {
          y: 36, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 78%' },
        })
      })
    }

    const slogan = ref.current?.querySelector('.manifesto-slogan')
    if (slogan) {
      gsap.from(slogan, {
        opacity: 0, y: 24, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: slogan, start: 'top 85%' },
      })
    }
  }, { scope: ref })

  return (
    <section ref={ref} id="manifesto" className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container>
        {/* Intro */}
        <div className="mb-14 lg:mb-20 lg:grid lg:grid-cols-2 lg:gap-[60px] lg:items-end">
          <div>
            <Eyebrow className="mb-4">
              <span className="lang-vi">{data.eyebrowVi}</span>
              <span className="lang-en">{data.eyebrowEn}</span>
            </Eyebrow>
            <h2
              className="font-display font-bold tracking-[-0.035em] leading-[1.08]"
              style={{ fontSize: 'clamp(40px, 8vw, 60px)' }}
            >
              <span className="lang-vi">{data.headingVi}</span>
              <span className="lang-en">{data.headingEn}</span>
            </h2>
          </div>
          <p className="mt-5 lg:mt-0 text-[18px] leading-[1.55] text-[#1B1B1B] max-w-[520px] lg:self-end">
            <span className="lang-vi">{data.leadVi}</span>
            <span className="lang-en">{data.leadEn}</span>
          </p>
        </div>

        {/* The two words */}
        <div className="border-t border-black/10">
          {parts.map((part, i) => (
            <div
              key={part.word}
              className="manifesto-row grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-[60px] py-12 lg:py-16 border-b border-black/10"
            >
              <div className="flex items-start gap-4" data-rise>
                <span className="font-mono text-[13px] text-[var(--color-accent)] mt-3">0{i + 1}</span>
                <h3
                  className={`font-display font-bold tracking-[-0.05em] leading-[0.9] ${i === 1 ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)]'}`}
                  style={{ fontSize: 'clamp(72px, 16vw, 150px)' }}
                >
                  {part.word}
                </h3>
              </div>
              <div className="lg:pt-6">
                <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-[#4A4A4A] mb-4" data-rise>
                  <span className="lang-vi">{part.subVi}</span>
                  <span className="lang-en">{part.subEn}</span>
                </p>
                <p className="font-display text-[22px] lg:text-[28px] tracking-[-0.02em] leading-[1.35] text-[var(--color-foreground)] max-w-[560px]" data-rise>
                  <span className="lang-vi">{part.bodyVi}</span>
                  <span className="lang-en">{part.bodyEn}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slogan resolve */}
        <p
          className="manifesto-slogan mt-14 lg:mt-20 text-center text-balance font-display font-bold tracking-[-0.03em] leading-[1.1] text-[var(--color-foreground)]"
          style={{ fontSize: 'clamp(30px, 6vw, 64px)' }}
        >
          <span className="lang-vi">{data.sloganVi}</span>
          <span className="lang-en">{data.sloganEn}</span>
        </p>
      </Container>
    </section>
  )
}
