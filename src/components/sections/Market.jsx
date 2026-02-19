import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Market() {
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

      ScrollTrigger.create({
        trigger: '.tam-visual',
        start: 'top 75%',
        onEnter: () => {
          gsap.from('.tam-ring', {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.4)',
            transformOrigin: 'center',
          })
          gsap.from('.tam-label', {
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            delay: 0.4,
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const cities = [
    { phase: 'Phase 1', name: 'Nairobi', pop: '4.9M pop', households: '~1.1M households' },
    { phase: 'Phase 2', name: 'Mombasa', pop: '1.2M pop', households: '~270K households' },
    { phase: 'Phase 3', name: 'Kisumu', pop: '600K pop', households: '~135K households' },
    { phase: 'Phase 3', name: 'Nakuru / Eldoret', pop: '500K pop', households: '~110K households' },
  ]

  return (
    <section
      id="market"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Market Opportunity
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        A massive, underserved market<br />with proven digital payment rails
      </h2>

      <div className="market-layout grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* TAM Visual */}
        <div className="tam-visual relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] mx-auto reveal">
          <div className="tam-ring outer absolute inset-0 rounded-full border border-teal/25 bg-teal/5" />
          <div className="tam-ring mid absolute inset-10 lg:inset-[50px] rounded-full border border-teal/40 bg-teal/10" />
          <div className="tam-ring inner absolute inset-20 lg:inset-[120px] rounded-full border border-teal bg-teal/20" />
          
          <div className="tam-label absolute font-mono text-center top-4 lg:top-6 left-1/2 -translate-x-1/2">
            <span className="font-display text-lg text-teal-bright block">$1B+</span>
            <span className="text-[0.55rem] tracking-[0.15em] text-muted uppercase">TAM</span>
          </div>
          <div className="tam-label absolute font-mono text-center top-14 lg:top-[72px] left-1/2 -translate-x-1/2">
            <span className="font-display text-lg text-teal-bright block">$280M</span>
            <span className="text-[0.55rem] tracking-[0.15em] text-muted uppercase">SAM</span>
          </div>
          <div className="tam-label absolute font-mono text-center top-28 lg:top-[142px] left-1/2 -translate-x-1/2">
            <span className="font-display text-lg text-teal-bright block">$18M</span>
            <span className="text-[0.55rem] tracking-[0.15em] text-muted uppercase">SOM</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted mb-7 leading-relaxed">
            Rollout cities unlock progressively — starting with Nairobi's 1.1M households as the proving ground before scaling the playbook across Kenya.
          </p>
          <div className="cities-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="city-card bg-navy-card border border-border rounded-lg p-6 transition-all hover:border-teal reveal"
              >
                <span className="font-mono text-[0.58rem] tracking-[0.2em] text-gold uppercase mb-2 block">
                  {city.phase}
                </span>
                <div className="font-display text-xl lg:text-2xl mb-2">
                  {city.name}
                </div>
                <div className="text-sm text-muted">
                  <strong className="text-teal-light">{city.pop}</strong> · {city.households}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
