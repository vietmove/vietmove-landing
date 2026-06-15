import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import data from '@/content/final-cta.json'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[var(--color-accent)] text-[var(--color-foreground)]">
      {/* rising chevron motif */}
      <div className="absolute inset-0 vm-grid-texture opacity-[0.5]" aria-hidden="true" />
      <svg
        className="absolute -right-10 -bottom-16 w-[420px] h-[420px] text-[var(--color-foreground)]/10 pointer-events-none"
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <path d="M20 80 50 50 80 80M20 64 50 34 80 64M20 48 50 18 80 48" />
      </svg>

      <Container>
        <div className="relative">
          <Eyebrow color="ink" className="mb-5 !text-black/70 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-black/60" />
            <span className="lang-vi">{data.eyebrowVi}</span>
            <span className="lang-en">{data.eyebrowEn}</span>
          </Eyebrow>

          <h2
            className="font-display font-bold tracking-[-0.04em] leading-[0.98] mb-6 whitespace-pre-line"
            style={{ fontSize: 'clamp(48px, 12vw, 104px)' }}
          >
            <span className="lang-vi">{data.headingVi}</span>
            <span className="lang-en">{data.headingEn}</span>
          </h2>

          <p className="text-[18px] leading-[1.55] max-w-[540px] mb-9 text-black/75">
            <span className="lang-vi">{data.leadVi}</span>
            <span className="lang-en">{data.leadEn}</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={data.kickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] pl-6 pr-2 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-px"
            >
              <span className="lang-vi">{data.ctaPrimaryVi}</span>
              <span className="lang-en">{data.ctaPrimaryEn}</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent)] text-[var(--color-foreground)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" aria-hidden="true">
                  <path d="M3.5 10.5 10.5 3.5M5 3.5h5.5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center px-6 py-3 rounded-full border-[1.5px] border-[var(--color-foreground)] text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
            >
              <span className="lang-vi">{data.ctaSecondaryVi}</span>
              <span className="lang-en">{data.ctaSecondaryEn}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
