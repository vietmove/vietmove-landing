import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import data from '@/content/numbers.json'

export default function MovementNumbers() {
  return (
    <section className="bg-[var(--color-foreground)] text-[var(--color-background)] py-16 lg:py-20 text-center border-y border-[var(--color-foreground)]">
      <Container>
        <Eyebrow color="white" className="mb-4 !text-[var(--color-accent)]">
          <span className="lang-vi">Tầm nhìn</span><span className="lang-en">The vision</span>
        </Eyebrow>
        <h2 className="font-display font-bold tracking-[-0.035em] leading-[0.98] mb-12" style={{ fontSize: 'clamp(36px, 9vw, 52px)' }}>
          <span className="lang-vi">{data.headingVi}</span>
          <span className="lang-en">{data.headingEn}</span>
        </h2>
        <div className="grid grid-cols-2 gap-y-8 gap-x-3 md:grid-cols-4">
          {data.stats.map((s) => (
            <div key={s.en}>
              <div
                className="font-display font-bold tracking-[-0.03em] leading-[0.9] text-[var(--color-background)]"
                style={{ fontSize: 'clamp(38px, 9vw, 58px)' }}
              >
                {s.n}
              </div>
              <div className="text-[12px] text-white/60 mt-2 max-w-[150px] mx-auto">
                <span className="lang-vi">{s.vi}</span>
                <span className="lang-en">{s.en}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
