import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true,
          })
        },
        start: 'top 88%',
      })

      gsap.set('.reveal', { opacity: 0, y: 40 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '$100K', label: 'Pre-seed raise', color: 'text-gold' },
    { value: 'M16-22', label: 'Break-even target', color: 'text-gold' },
    { value: '5 cities', label: '3-year roadmap', color: 'text-gold' },
    { value: '∞', label: 'Water. Every day', color: 'text-teal' },
  ]

  return (
    <section
      id="cta"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col items-center justify-center text-center bg-navy-mid overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-teal/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-teal/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-teal/[0.03] pointer-events-none" />

      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-8 opacity-80 reveal">
        MajiSmart · Antler Pre-Seed 2026
      </div>

      <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-7 reveal">
        Every home. Every city.<br />
        <span className="italic text-teal-bright">Clean water on demand.</span>
      </h2>

      <p className="text-base text-white/60 max-w-[600px] mb-12 leading-relaxed reveal">
        Water is Kenya's most consumed, most unreliable, and least digitised essential. We are building the infrastructure layer that connects supply to demand — starting with a bottle, scaling to a city.
      </p>

      <div className="cta-stats flex flex-col sm:flex-row gap-8 sm:gap-12 mb-12 reveal">
        {stats.map((stat, idx) => (
          <div key={idx} className="cta-stat text-center">
            <div className={`font-display text-4xl lg:text-5xl mb-1 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="cta-buttons flex flex-col sm:flex-row gap-4 mb-12 reveal"> */}
        {/* <a
          href="mailto:hello@majismart.co"
          className="bg-teal hover:bg-teal-bright text-white px-9 py-4 rounded-lg font-display text-base transition-all"
        >
          Request Full Deck →
        </a>
        <a
          href="#team"
          className="border border-border hover:border-teal text-muted hover:text-white px-9 py-4 rounded-lg font-display text-base transition-all"
        >
          Meet the Team
        </a>
      </div>

      <span className="text-sm text-white/60 reveal">
        <a href="mailto:hello@majismart.co" className="text-teal-light hover:text-teal-bright transition-colors">
          hello@majismart.co
        </a>
        {' · Nairobi, Kenya'}
      </span> */}

      <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-5 py-2 rounded-full mt-5 font-mono text-xs tracking-widest text-gold reveal">
        ⚡ Antler.co Cohort 2026
      </div>
    </section>
  )
}
