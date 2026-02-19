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
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--navy-mid)',
      }}
    >
      <div
        className="section-label reveal"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'var(--teal)',
          textTransform: 'uppercase',
          marginBottom: '18px',
          opacity: 0.8,
        }}
      >
        Business Model
      </div>

      <h2
        className="reveal"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          lineHeight: 1.15,
          marginBottom: '60px',
          maxWidth: '800px',
        }}
      >
        Four revenue streams.<br />Minimum order: 1 × 20L bottle.
      </h2>

      <div
        className="revenue-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {revenueStreams.map((stream, idx) => (
          <div
            key={idx}
            className={`revenue-card reveal ${stream.variant}`}
            style={{
              background: 'var(--navy-card)',
              border: `1px solid ${stream.variant === 'gold' ? 'rgba(233,196,106,0.4)' : stream.variant === 'green' ? 'rgba(45,198,83,0.3)' : 'var(--border)'}`,
              borderRadius: '8px',
              padding: '36px 28px',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span style={{ fontSize: '2rem', marginBottom: '20px', display: 'block' }}>{stream.icon}</span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: stream.variant === 'gold' ? 'var(--gold)' : stream.variant === 'green' ? 'var(--green)' : 'var(--teal)',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              {stream.name}
            </span>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.4rem',
                marginBottom: '8px',
                lineHeight: 1.2,
                whiteSpace: 'pre-line',
              }}
            >
              {stream.value}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{stream.sub}</p>
          </div>
        ))}
      </div>

      <div
        className="model-note reveal"
        style={{
          background: 'rgba(10,147,150,0.08)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '18px 28px',
          fontSize: '0.82rem',
          color: 'var(--teal-light)',
          textAlign: 'center',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '0.04em',
        }}
      >
        1×20L order: ~KES 50–60 gross contribution &nbsp;·&nbsp; 2×20L order: ~KES 80–95 gross contribution&nbsp;·&nbsp; <span style={{ color: 'var(--gold)' }}>Subscription + batching = path to profitability</span>
      </div>
    </section>
  )
}
