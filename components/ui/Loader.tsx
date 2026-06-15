'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { dispatchLoaderDone } from '@/lib/loaderEvents'
import { Logo } from '@/components/ui/Logo'

export function Loader() {
  const ref = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const counter = counterRef.current
    const bar = barRef.current
    if (!el || !counter || !bar) return

    const obj = { val: 0 }
    const tl = gsap.timeline()

    tl.to(obj, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate() {
        counter.textContent = Math.round(obj.val).toString()
      },
    })
    tl.to(bar, { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, '<')
    tl.call(dispatchLoaderDone, undefined, '+=0.15')
    tl.to(el, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, '<')
    tl.set(el, { display: 'none' })

    return () => { tl.kill() }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9990] flex flex-col bg-[var(--color-foreground)]"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-6 lg:px-10 lg:pt-8">
        <Logo variant="light" />
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40">
          Loading
        </span>
      </div>

      {/* Push counter to bottom */}
      <div className="flex-1" />

      {/* Slogan — bottom left, above the counter */}
      <div className="px-6 lg:px-10">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)]">
          A movement built from Vietnam
        </span>
      </div>

      {/* Counter — bottom left */}
      <div className="px-6 pb-5 lg:px-10 lg:pb-7 flex items-start gap-1">
        <span
          ref={counterRef}
          className="font-display font-bold text-[var(--color-background)] tabular-nums leading-none"
          style={{ fontSize: 'clamp(5rem, 18vw, 13rem)' }}
        >
          0
        </span>
        <span
          className="font-mono text-white/50 leading-none mt-[0.15em]"
          style={{ fontSize: 'clamp(1.25rem, 4vw, 3rem)' }}
        >
          %
        </span>
      </div>

      {/* Full-width progress bar — very bottom */}
      <div className="w-full h-[2px] bg-white/10">
        <div
          ref={barRef}
          className="h-full bg-[var(--color-accent)] origin-left scale-x-0"
        />
      </div>
    </div>
  )
}
