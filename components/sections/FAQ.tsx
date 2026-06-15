'use client'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import data from '@/content/faq.json'

interface FAQItemData {
  questionVi: string
  questionEn: string
  answerVi: string
  answerEn: string
  defaultOpen?: boolean
}

function FAQRow({ item }: { item: FAQItemData }) {
  const [open, setOpen] = useState(item.defaultOpen ?? false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useGSAP(() => {
    const el = contentRef.current
    if (!el) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      if (!open) gsap.set(el, { height: 0, overflow: 'hidden' })
      return
    }

    if (open) {
      gsap.to(el, { height: 'auto', duration: 0.4, ease: 'power2.out' })
    } else {
      gsap.to(el, { height: 0, duration: 0.3, ease: 'power2.in' })
    }
  }, [open])

  return (
    <div className="border-b border-black/[0.12]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex justify-between items-start gap-4 py-6 text-left cursor-pointer group"
      >
        <span className="font-display font-semibold text-[19px] tracking-[-0.015em] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
          <span className="lang-vi">{item.questionVi}</span>
          <span className="lang-en">{item.questionEn}</span>
        </span>
        <span
          className={`flex-shrink-0 w-[30px] h-[30px] rounded-full border border-[var(--color-foreground)] inline-flex items-center justify-center text-base transition-all duration-300 ${open ? 'rotate-45 bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-background)]' : ''}`}
        >
          +
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden">
        <p className="pb-6 text-[15px] leading-[1.6] text-[#1B1B1B] max-w-[640px]">
          <span className="lang-vi">{item.answerVi}</span>
          <span className="lang-en">{item.answerEn}</span>
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { section, items } = data
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="mb-8 lg:grid lg:grid-cols-2 lg:gap-[60px] lg:items-end lg:mb-14">
          <div>
            <Eyebrow className="mb-4">— FAQ</Eyebrow>
            <h2
              className="font-display font-bold tracking-[-0.035em] leading-[1.1] mb-3"
              style={{ fontSize: 'clamp(38px, 8vw, 56px)' }}
            >
              <span className="lang-vi">{section.headingVi}</span>
              <span className="lang-en">{section.headingEn}</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.55] text-[#1B1B1B] max-w-[560px] lg:self-end">
            <span className="lang-vi">
              Chưa thấy câu trả lời? Nhắn cho chúng tôi ở{' '}
              <a href={`mailto:${section.email}`} className="text-[var(--color-accent)] underline underline-offset-2">{section.email}</a>.
            </span>
            <span className="lang-en">
              Not here? Email us at{' '}
              <a href={`mailto:${section.email}`} className="text-[var(--color-accent)] underline underline-offset-2">{section.email}</a>.
            </span>
          </p>
        </div>

        <div className="border-t border-black/[0.12]">
          {items.map((faq, i) => (
            <FAQRow key={i} item={faq} />
          ))}
        </div>
      </Container>
    </section>
  )
}
