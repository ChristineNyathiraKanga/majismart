import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../context/ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  const { lenisRef } = useScroll()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    })

    lenisRef.current = lenis

    // Wire Lenis into GSAP ticker
    const updateRaf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateRaf)
    gsap.ticker.lagSmoothing(0)

    // Sync Lenis position with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateRaf)
      lenisRef.current = null
    }
  }, [lenisRef])

  return lenisRef
}
