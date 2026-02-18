import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { revenueStreams } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function BusinessModel() {
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
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="business-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Business Model" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Four revenue streams.<br />
              <span className="text-teal-bright">Minimum order: 1 × 20L bottle.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            We monetize every touchpoint in the water value chain — from consumer
            commissions to enterprise SaaS for vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueStreams.map((stream, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`group relative bg-navy-mid/30 backdrop-blur-md border p-10 rounded-2xl transition-all duration-500 hover:bg-navy-card/50 ${stream.variant === 'gold' ? 'border-gold/20 hover:border-gold/40' :
                  stream.variant === 'green' ? 'border-green/20 hover:border-green/40' :
                    'border-white/5 hover:border-teal/30'
                }`}
            >
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {stream.icon}
              </div>

              <div className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-4 ${stream.variant === 'gold' ? 'text-gold' :
                  stream.variant === 'green' ? 'text-green' : 'text-teal'
                }`}>
                {stream.name}
              </div>

              <div className="font-display text-2xl mb-4 leading-tight text-white whitespace-pre-line">
                {stream.value}
              </div>

              <p className="text-sm text-muted/50 leading-relaxed font-light">
                {stream.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 py-8 bg-teal/5 border border-teal/20 rounded-2xl text-center px-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-teal-light leading-relaxed">
            1×20L order: ~KES 50–60 gross &nbsp;·&nbsp; 2×20L order: ~KES 80–95 gross &nbsp;·&nbsp;
            <span className="text-gold">Subscription + batching = path to profitability</span>
          </p>
        </div>
      </div>
    </section>
  )
}
