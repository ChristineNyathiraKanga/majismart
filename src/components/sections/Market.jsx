import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { cities } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Market() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = containerRef.current.querySelectorAll('.reveal')

      gsap.from(reveals, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="market-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal">
          <SectionLabel label="Market Opportunity" />
        </div>

        <h2 className="reveal font-display text-5xl md:text-7xl leading-tight mb-20 text-white">
          A massive, underserved market<br />
          <span className="text-white/90">with proven digital payment rails</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TAM Visual */}
          <div className="reveal relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border border-teal/20 rounded-full bg-teal/5" />
            <div className="absolute inset-[15%] border border-teal/40 rounded-full bg-teal/10" />
            <div className="absolute inset-[35%] border border-teal rounded-full bg-teal/20" />

            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center">
              <div className="font-display text-2xl text-teal-bright">$1B+</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-muted">TAM</div>
            </div>

            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 text-center">
              <div className="font-display text-xl text-teal-bright">$280M</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-muted">SAM</div>
            </div>

            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 text-center">
              <div className="font-display text-lg text-teal-bright">$18M</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-muted">SOM</div>
            </div>
          </div>

          <div className="space-y-12">
            <p className="reveal text-sm text-muted/70 leading-relaxed font-light">
              Rollout cities unlock progressively — starting with Nairobi's 1.1M households
              as the proving ground before scaling the playbook across Kenya.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cities.map((city, idx) => (
                <div
                  key={idx}
                  className="reveal p-8 bg-navy-mid/30 border border-white/5 rounded-2xl group hover:bg-navy-card/50 transition-all duration-500"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold mb-3">
                    {city.phase}
                  </div>
                  <h4 className="font-display text-2xl mb-4 text-white group-hover:text-teal-bright transition-colors">
                    {city.name}
                  </h4>
                  <p className="text-xs text-muted/50 font-light">
                    <strong className="text-teal-light">{city.pop}</strong> · {city.households}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
