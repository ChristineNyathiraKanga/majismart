import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state - hidden
      gsap.set('.hero-eyebrow, .hero-title, .hero-sub, .hero-desc, .hero-stats, .hero-actions, .scroll-hint', {
        opacity: 0,
        y: 30
      })

      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        .to('.hero-title', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to('.hero-stats', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .to('.hero-actions', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .to('.scroll-hint', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-24 md:py-20 overflow-hidden relative flex flex-col justify-center"
    >
      {/* Background Ripples */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full border border-teal/15 w-[400px] h-[400px] -right-20 top-[10%] animate-[ripplePulse_6s_ease-in-out_infinite]" />
        <div className="absolute rounded-full border border-teal/15 w-[700px] h-[700px] -right-[220px] -top-[10%] animate-[ripplePulse_6s_ease-in-out_infinite_1.5s]" />
        <div className="absolute rounded-full border border-teal/15 w-[1000px] h-[1000px] -right-[400px] -top-[25%] animate-[ripplePulse_6s_ease-in-out_infinite_3s]" />
        <div className="absolute rounded-full border border-teal/15 w-[1350px] h-[1350px] -right-[580px] -top-[42%] animate-[ripplePulse_6s_ease-in-out_infinite_4.5s]" />
      </div>

      {/* Hero Inner */}
      <div className="relative z-10 max-w-[780px]">
        {/* Eyebrow */}
        <div className="hero-eyebrow inline-flex items-center gap-2.5 bg-teal/10 border border-border px-4 py-1.5 rounded-full text-[0.72rem] tracking-[0.15em] uppercase text-teal-light mb-7 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-[blink_2s_infinite]" />
          Antler Pre-Seed 2026 · Nairobi, Kenya
        </div>

        {/* Title */}
        <h1 className="hero-title font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.05] mb-3 tracking-tight">
          The <span className="text-teal-bright italic">Operating<br />System</span> for<br />Household Water
        </h1>

        {/* Sub */}
        <p className="hero-sub text-[clamp(1rem,2vw,1.35rem)] text-muted mb-3.5 font-light max-w-[580px] leading-relaxed">
          One app. Nearest vendor. Nearest rider. Water in 60 min.
        </p>

        {/* Desc */}
        <p className="hero-desc text-sm text-muted/70 max-w-[520px] leading-relaxed mb-12">
          Aggregating drinking water vendors + last-mile dispatch via bodaboda & e-bike, with M-Pesa payments, real-time tracking, and quality controls — Nairobi first, then Kenya.
        </p>

        {/* Stats */}
        <div className="hero-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-fit mb-12 gap-0">
          <div className="stat-item p-6 border border-border bg-navy-mid/60 backdrop-blur-lg rounded-t-lg sm:rounded-tl-lg sm:rounded-tr-none lg:rounded-l-lg lg:rounded-tr-none">
            <span className="font-display text-4xl text-teal-bright block leading-none">
              33<span className="text-2xl">%</span>
            </span>
            <span className="text-[0.72rem] text-muted tracking-wider uppercase mt-1.5 block">
              piped water access
            </span>
          </div>
          <div className="stat-item p-6 border border-border border-t-0 sm:border-t sm:border-l-0 bg-navy-mid/60 backdrop-blur-lg sm:rounded-tr-lg lg:rounded-none">
            <span className="font-display text-3xl text-teal-bright block leading-none">
              KES 320
            </span>
            <span className="text-[0.72rem] text-muted tracking-wider uppercase mt-1.5 block">
              avg. 20L bottle
            </span>
          </div>
          <div className="stat-item p-6 border border-border border-t-0 lg:border-t lg:border-l-0 bg-navy-mid/60 backdrop-blur-lg rounded-b-lg sm:col-span-2 lg:col-span-1 sm:rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg">
            <span className="font-display text-3xl text-teal-bright block leading-none">
              $1B+
            </span>
            <span className="text-[0.72rem] text-muted tracking-wider uppercase mt-1.5 block">
              water market Kenya
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="hero-actions flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <button
            onClick={() => scrollToSection('problem')}
            className="bg-teal hover:bg-teal-bright text-white px-8 py-3.5 rounded-md text-sm font-medium font-body transition-all duration-200 flex items-center justify-center gap-2"
          >
            Explore the Opportunity ↓
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted text-[0.72rem] tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-teal animate-[scrollPulseV_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
