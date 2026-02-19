import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DeliveryEconomics() {
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

  const deliveryOptions = [
    {
      badge: 'Option A',
      name: 'Rider Network\n(Asset-Light)',
      capex: 'KES 0',
      costPerDrop: 'KES 60 / drop',
      bestFor: 'Phase 1 launch',
      variant: 'teal',
    },
    {
      badge: 'Option B',
      name: 'Hybrid: Own\nFleet + Riders',
      capex: 'KES 150K–300K\n(5-10 e-bikes)',
      costPerDrop: 'KES 35–45 / drop',
      bestFor: 'High-density estates',
      featured: true,
      variant: 'gold',
    },
    {
      badge: 'Option C',
      name: 'Full E-bike\nFleet',
      capex: 'KES 600K–1.2M\n(20-40 e-bikes)',
      costPerDrop: 'KES 25–32 / drop',
      bestFor: 'Scale phase only',
      variant: 'green',
    },
  ]

  return (
    <section
      id="delivery"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-gradient-to-b from-navy-mid to-navy"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Delivery Economics - E-BIKE CAPEX OPTIONS
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        Three paths to last-mile —<br />choose by stage and density
      </h2>

      <div className="delivery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deliveryOptions.map((option, idx) => (
          <div
            key={idx}
            className={`delivery-card rounded-xl p-8 lg:p-10 relative overflow-hidden transition-all reveal ${
              option.featured
                ? 'border border-gold bg-gradient-to-br from-navy-card to-gold/5'
                : 'border border-border bg-navy-card'
            }`}
          >
            <div
              className={`inline-block font-mono text-[0.6rem] tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full mb-7 border ${
                option.variant === 'gold'
                  ? 'bg-gold/15 text-gold border-gold/30'
                  : option.variant === 'green'
                  ? 'bg-green/15 text-green border-green/30'
                  : 'bg-teal/15 text-teal border-teal/30'
              }`}
            >
              {option.badge}
            </div>
            <div className="font-display text-2xl lg:text-[1.6rem] mb-7 leading-tight whitespace-pre-line">
              {option.name}
            </div>
            <div className="mb-2.5">
              <span className="text-[0.68rem] text-muted tracking-wider uppercase block mb-1">
                Upfront Capex
              </span>
              <span
                className={`font-display text-2xl block whitespace-pre-line ${
                  option.variant === 'gold' ? 'text-gold' : option.variant === 'green' ? 'text-green' : 'text-teal-bright'
                }`}
              >
                {option.capex}
              </span>
            </div>
            <div className="mt-4 mb-2.5">
              <span className="text-[0.68rem] text-muted tracking-wider uppercase block mb-1">
                Cost per Drop
              </span>
              <span
                className={`font-display text-2xl block ${
                  option.variant === 'gold' ? 'text-gold' : option.variant === 'green' ? 'text-green' : 'text-teal-bright'
                }`}
              >
                {option.costPerDrop}
              </span>
            </div>
            <div
              className={`mt-6 py-2.5 px-4 rounded-md font-mono text-sm ${
                option.variant === 'gold'
                  ? 'bg-gold/10 text-gold'
                  : option.variant === 'green'
                  ? 'bg-green/10 text-green'
                  : 'bg-teal/10 text-teal-light'
              }`}
            >
              Best for: {option.bestFor}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.68rem] text-muted tracking-wider">
        E-bike payback at 12 drops/day: ~6–8 months (assuming KES 350K/unit, KES 25 cost saving/drop vs bodaboda)
      </p>
    </section>
  )
}
