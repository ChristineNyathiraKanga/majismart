import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { deliveryOptions } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function DeliveryEconomics() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: 'expo.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="delivery-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Delivery Economics" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Three paths to last-mile —<br />
              <span className="text-teal-bright">choose by stage and density.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            We scale from asset-light gig networks to high-density electric
            fleets as regions mature. Efficiency is the only moated margin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryOptions.map((option, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`group relative p-10 rounded-3xl border transition-all duration-700 overflow-hidden ${option.featured
                  ? 'bg-navy-mid border-gold/30 hover:border-gold shadow-2xl shadow-gold/5'
                  : 'bg-navy-mid/30 border-white/5 hover:border-teal/30'
                }`}
            >
              {/* Badge */}
              <div className={`inline-block px-4 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-widest mb-10 border ${option.featured ? 'bg-gold/10 border-gold/30 text-gold' :
                  option.letter === 'C' ? 'bg-green/10 border-green/30 text-green' :
                    'bg-teal/10 border-teal/30 text-teal'
                }`}>
                {option.badge}
              </div>

              <h4 className="font-display text-3xl mb-12 text-white leading-tight whitespace-pre-line">
                {option.name}
              </h4>

              <div className="space-y-8 mb-12">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Upfront Capex</span>
                  <span className={`font-display text-3xl ${option.featured ? 'text-gold' : option.letter === 'C' ? 'text-green' : 'text-teal-bright'}`}>
                    {option.capex}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Cost per Drop</span>
                  <span className={`font-display text-3xl ${option.featured ? 'text-gold' : option.letter === 'C' ? 'text-green' : 'text-teal-bright'}`}>
                    {option.costPerDrop}
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className={`font-mono text-[10px] uppercase tracking-widest ${option.featured ? 'text-gold' : 'text-teal-light'}`}>
                  Best for: {option.bestFor}
                </p>
              </div>

              {/* Background Glow */}
              <div className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${option.featured ? 'bg-gold' : 'bg-teal'
                }`} />
            </div>
          ))}
        </div>

        <p className="mt-16 font-mono text-[10px] text-muted/50 uppercase tracking-[0.3em] text-center italic">
          E-bike payback at 12 drops/day: ~6–8 months (assuming KES 350K/unit, KES 25 saving/drop)
        </p>
      </div>
    </section>
  )
}
