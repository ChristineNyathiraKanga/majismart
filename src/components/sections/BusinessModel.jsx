import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BusinessModel() {
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

  const revenueStreams = [
    { icon: '📈', name: 'Platform Commission', value: '10–12% at launch\n→ 12–18% at scale', sub: 'On each water order value', variant: 'teal' },
    { icon: '🚚', name: 'Delivery Margin', value: 'KES 50–120 fee\nminus rider payout', sub: 'Improved via batching + e-bikes', variant: 'teal' },
    { icon: '🏠', name: 'Household Subscription', value: 'KES 199–349/mo', sub: 'Priority dispatch · refill scheduling · bundles', variant: 'gold' },
    { icon: '🏢', name: 'Vendor Subscription', value: 'KES 1,000–2,500/mo', sub: 'Promoted listing · analytics · SLA access', variant: 'green' },
  ]

  return (
    <section
      id="business"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy-mid"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Business Model
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        Four revenue streams.<br />Minimum order: 1 × 20L bottle.
      </h2>

      <div className="revenue-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {revenueStreams.map((stream, idx) => (
          <div
            key={idx}
            className={`revenue-card bg-navy-card rounded-lg p-7 lg:p-9 transition-all relative overflow-hidden reveal ${
              stream.variant === 'gold' ? 'border border-gold/40' : stream.variant === 'green' ? 'border border-green/30' : 'border border-border'
            }`}
          >
            <span className="text-3xl mb-5 block">{stream.icon}</span>
            <span
              className={`font-mono text-[0.62rem] tracking-[0.15em] uppercase mb-3 block ${
                stream.variant === 'gold' ? 'text-gold' : stream.variant === 'green' ? 'text-green' : 'text-teal'
              }`}
            >
              {stream.name}
            </span>
            <div className="font-display text-xl lg:text-2xl mb-2 leading-tight whitespace-pre-line">
              {stream.value}
            </div>
            <p className="text-sm text-muted leading-relaxed">{stream.sub}</p>
          </div>
        ))}
      </div>

      <div className="model-note bg-teal/10 border border-border rounded-lg px-6 py-4 text-center font-mono text-sm text-teal-light tracking-wide reveal">
        1×20L order: ~KES 50–60 gross &nbsp;·&nbsp; 2×20L order: ~KES 80–95 gross&nbsp;·&nbsp; 
        <span className="text-gold">Subscription + batching = path to profitability</span>
      </div>
    </section>
  )
}
