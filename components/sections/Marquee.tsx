import data from '@/content/marquee.json'

/**
 * Continuous word marquee — pure CSS (vm-marquee-track), no JS.
 * The track holds the word list twice; translating it -50% loops seamlessly.
 */
export default function Marquee() {
  const words = data.words
  const sequence = [...words, ...words]

  return (
    <section
      aria-hidden="true"
      className="vm-marquee overflow-hidden bg-[var(--color-foreground)] text-[var(--color-background)] py-5 border-y border-[var(--color-foreground)] select-none"
    >
      <div className="vm-marquee-track" style={{ ['--vm-marquee-duration' as string]: '32s' }}>
        {sequence.map((word, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display font-bold tracking-[-0.02em] text-[clamp(28px,4vw,46px)] px-6">
              {word}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
          </span>
        ))}
      </div>
    </section>
  )
}
