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
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)',
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .delivery-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .delivery-grid { grid-template-columns: 1fr !important; }
          .delivery-card { padding: 28px 20px !important; }
        }
      `}</style>
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
        Delivery Economics - E-BIKE CAPEX OPTIONS

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
        Three paths to last-mile —<br />choose by stage and density
      </h2>

      <div
        className="delivery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {deliveryOptions.map((option, idx) => (
          <div
            key={idx}
            className={`delivery-card reveal ${option.featured ? 'featured' : ''}`}
            style={{
              borderRadius: '10px',
              padding: '40px 32px',
              border: `1px solid ${option.featured ? 'var(--gold)' : 'var(--border)'}`,
              background: option.featured ? 'linear-gradient(145deg, var(--navy-card), rgba(233,196,106,0.06))' : 'var(--navy-card)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s',
            }}
          >
            <div
              className="delivery-badge"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: '100px',
                marginBottom: '28px',
                display: 'inline-block',
                background: option.variant === 'gold' ? 'rgba(233,196,106,0.15)' : option.variant === 'green' ? 'rgba(45,198,83,0.15)' : 'rgba(10,147,150,0.15)',
                color: option.variant === 'gold' ? 'var(--gold)' : option.variant === 'green' ? 'var(--green)' : 'var(--teal)',
                border: `1px solid ${option.variant === 'gold' ? 'rgba(233,196,106,0.3)' : option.variant === 'green' ? 'rgba(45,198,83,0.3)' : 'rgba(10,147,150,0.3)'}`,
              }}
            >
              {option.badge}
            </div>
            <div
              className="delivery-name"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.6rem',
                marginBottom: '28px',
                lineHeight: 1.2,
                whiteSpace: 'pre-line',
              }}
            >
              {option.name}
            </div>
            <div className="delivery-meta" style={{ marginBottom: '10px' }}>
              <span
                className="delivery-meta-label"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                Upfront Capex
              </span>
              <span
                className="delivery-meta-val"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.5rem',
                  display: 'block',
                  color: option.variant === 'gold' ? 'var(--gold)' : option.variant === 'green' ? 'var(--green)' : 'var(--teal-bright)',
                }}
              >
                {option.capex}
              </span>
            </div>
            <div className="delivery-meta" style={{ marginTop: '16px', marginBottom: '10px' }}>
              <span
                className="delivery-meta-label"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                Cost per Drop
              </span>
              <span
                className="delivery-meta-val"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.5rem',
                  display: 'block',
                  color: option.variant === 'gold' ? 'var(--gold)' : option.variant === 'green' ? 'var(--green)' : 'var(--teal-bright)',
                }}
              >
                {option.costPerDrop}
              </span>
            </div>
            <div
              className="delivery-best"
              style={{
                marginTop: '24px',
                padding: '10px 16px',
                background: option.variant === 'gold' ? 'rgba(233,196,106,0.1)' : option.variant === 'green' ? 'rgba(45,198,83,0.1)' : 'rgba(10,147,150,0.1)',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: option.variant === 'gold' ? 'var(--gold)' : option.variant === 'green' ? 'var(--green)' : 'var(--teal-light)',
                fontFamily: "'Space Mono', monospace",
              }}
            >
              Best for: {option.bestFor}
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: '24px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.68rem',
          color: 'var(--muted)',
          letterSpacing: '0.08em',
        }}
      >
        E-bike payback at 12 drops/day: ~6–8 months (assuming KES 350K/unit, KES 25 cost saving/drop vs bodaboda)
      </p>
    </section>
  )
}
