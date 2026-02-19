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
    { value: '$100K', label: 'Pre-seed raise', color: 'var(--gold)' },
    { value: 'M16-22', label: 'Break-even target', color: 'var(--gold)' },
    { value: '5 cities', label: '3-year roadmap', color: 'var(--gold)' },
    { value: '\u221E', label: 'Water. Every day', color: 'var(--teal)' },
  ]

  return (
    <section
      id="cta"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--navy)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .cta-stats { flex-direction: column !important; gap: 24px !important; }
          .cta-buttons { flex-direction: column !important; width: 100%; }
          .cta-buttons a { width: 100%; text-align: center; }
        }
      `}</style>
      {/* Background circles */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(10,147,150,0.1)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(10,147,150,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          borderRadius: '50%',
          border: '1px solid rgba(10,147,150,0.03)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-label reveal"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'var(--teal)',
          textTransform: 'uppercase',
          marginBottom: '32px',
          opacity: 0.8,
        }}
      >
        MajiSmart · Antler Pre-Seed 2026
      </div>

      <h2
        className="reveal"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          lineHeight: 1.15,
          marginBottom: '28px',
        }}
      >
        Every home. Every city.<br />
        <span style={{ fontStyle: 'italic', color: 'var(--teal-bright)' }}>Clean water on demand.</span>
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: '1rem',
          color: 'rgba(176,200,224,0.6)',
          maxWidth: '600px',
          marginBottom: '48px',
          lineHeight: 1.7,
        }}
      >
        Water is Kenya's most consumed, most unreliable, and least digitised essential. We are building the infrastructure layer that connects supply to demand — starting with a bottle, scaling to a city.
      </p>

      <div
        className="cta-stats reveal"
        style={{
          display: 'flex',
          gap: '48px',
          marginBottom: '48px',
        }}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="cta-stat" style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '2.4rem',
                color: stat.color,
                marginBottom: '4px',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* <div
        className="cta-buttons reveal"
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        <a
          href="#"
          className="btn-primary"
          style={{
            background: 'var(--teal)',
            color: 'var(--white)',
            padding: '14px 36px',
            borderRadius: '8px',
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Request Full Deck →
        </a>
        <a
          href="#team"
          className="btn-secondary"
          style={{
            background: 'transparent',
            color: 'var(--white)',
            padding: '14px 36px',
            borderRadius: '8px',
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1rem',
            textDecoration: 'none',
            border: '1px solid var(--border)',
            transition: 'all 0.3s',
            cursor: 'pointer',
          }}
        >
          Meet the Team
        </a>
      </div> */}

      <div
        className="reveal"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.68rem',
          color: 'var(--muted)',
          marginBottom: '20px',
        }}
      >
        <a
          href="mailto:hello@majismart.co"
          style={{
            color: 'var(--teal-light)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
        >
          hello@majismart.co
        </a>
        {' · '}Nairobi, Kenya
      </div>

      <div
        className="antler-badge reveal"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 22px',
          background: 'rgba(233,196,106,0.08)',
          border: '1px solid rgba(233,196,106,0.25)',
          borderRadius: '24px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6rem',
          color: 'var(--gold)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ animation: 'blink 1.5s infinite' }}>⚡</span>
        Antler.co Cohort 2026
      </div>
    </section>
  )
}
