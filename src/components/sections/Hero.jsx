import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StatCard from '../ui/StatCard'
import { heroStats } from '../../data/content'
import { useScroll } from '../../context/ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const descRef = useRef(null)
  const statsRef = useRef(null)
  const actionsRef = useRef(null)
  const ringsRef = useRef([])
  const { scrollTo } = useScroll()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation sequence
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(titleRef.current.querySelectorAll('span'), {
          opacity: 0,
          y: 80,
          stagger: 0.1,
          duration: 1.2,
          ease: 'expo.out',
        }, '-=0.6')
        .from(subRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.8')
        .from(descRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        }, '-=0.4')
        .from(statsRef.current.children, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.6')
        .from(actionsRef.current.children, {
          opacity: 0,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')

      // Parallax effect on scroll
      gsap.to(ringsRef.current, {
        y: (i) => (i + 1) * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  // Background ring pulse animations
  useEffect(() => {
    ringsRef.current.forEach((ring, idx) => {
      gsap.to(ring, {
        duration: 3 + idx * 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scale: 1.05 + idx * 0.02,
        opacity: 0.1 + (3 - idx) * 0.1,
      })
    })
  }, [])

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative min-h-screen bg-navy text-white overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(10,147,150,0.1),transparent_70%)]" />
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            ref={(el) => (ringsRef.current[idx] = el)}
            className="absolute border border-teal/10 rounded-full"
            style={{
              width: `${500 + idx * 350}px`,
              height: `${500 + idx * 350}px`,
              right: `${-100 - idx * 100}px`,
              top: `${0 - idx * 10}%`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-light">
              Nairobi · Antler Pre-Seed 2026
            </span>
          </div>

          {/* Main Title with Reveal */}
          <h1
            ref={titleRef}
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 overflow-hidden select-none"
          >
            <span className="block italic text-teal-bright">MajiSmart</span>
          </h1>

          {/* Subtitle & Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 ref={subRef} className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
                The Operating System for Household Water
              </h3>
            </div>
            <div>
              <p ref={descRef} className="text-sm text-muted/60 leading-relaxed max-w-sm">
                Aggregating drinking water vendors + last-mile dispatch via bodaboda & e-bike,
                with M-Pesa payments, real-time tracking, and quality controls — Nairobi first, then Kenya.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-2xl">
            {heroStats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            ))}
          </div>

          {/* Primary Actions */}
          <div ref={actionsRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#problem-section')}
              className="group relative px-8 py-4 bg-teal text-navy font-mono text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-1">Explore MajiSmart</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
              <div className="absolute inset-0 bg-teal-bright translate-y-full transition-transform group-hover:translate-y-0" />
            </button>
            <button
              onClick={() => scrollTo('#cta-section')}
              className="px-8 py-4 border border-white/10 hover:border-teal/50 transition-all font-mono text-xs uppercase tracking-widest text-muted hover:text-white"
            >
              Investor Portal
            </button>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-20">
        <p className="font-mono text-[8px] uppercase tracking-[0.5em] rotate-90 origin-right">
          Innovating Local Infrastructure
        </p>
      </div>
    </section>
  )
}
