'use client'
import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis()
    ;(window as unknown as Record<string, unknown>).__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      ;(window as unknown as Record<string, unknown>).__lenis = undefined
    }
  }, [])

  return <>{children}</>
}
