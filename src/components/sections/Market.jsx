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

      // TAM circles scale in
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
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--navy)',
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .market-layout { grid-template-columns: 1fr !important; gap: 60px !important; }
          .tam-visual { width: 280px !important; height: 280px !important; }
          .tam-ring.mid { inset: 40px !important; }
          .tam-ring.inner { inset: 90px !important; }
        }
        @media (max-width: 768px) {
          .cities-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .cities-grid { grid-template-columns: 1fr !important; }
          .tam-visual { width: 240px !important; height: 240px !important; }
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
        Market Opportunity
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
        A massive, underserved market<br />with proven digital payment rails
      </h2>

      <div
        className="market-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* TAM Visual */}
        <div
          className="tam-visual reveal"
          style={{
            position: 'relative',
            width: '360px',
            height: '360px',
            margin: '0 auto',
          }}
        >
          <div
            className="tam-ring outer"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(10,147,150,0.25)',
              background: 'rgba(10,147,150,0.04)',
            }}
          />
          <div
            className="tam-ring mid"
            style={{
              position: 'absolute',
              inset: '50px',
              borderRadius: '50%',
              border: '1px solid rgba(10,147,150,0.4)',
              background: 'rgba(10,147,150,0.08)',
            }}
          />
          <div
            className="tam-ring inner"
            style={{
              position: 'absolute',
              inset: '120px',
              borderRadius: '50%',
              border: '1px solid var(--teal)',
              background: 'rgba(10,147,150,0.2)',
            }}
          />
          <div
            className="tam-label"
            style={{
              position: 'absolute',
              fontFamily: "'Space Mono', monospace",
              textAlign: 'center',
              top: '22px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: 'var(--teal-bright)', display: 'block' }}>$1B+</span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>TAM</span>
          </div>
          <div
            className="tam-label"
            style={{
              position: 'absolute',
              fontFamily: "'Space Mono', monospace",
              textAlign: 'center',
              top: '72px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: 'var(--teal-bright)', display: 'block' }}>$280M</span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>SAM</span>
          </div>
          <div
            className="tam-label"
            style={{
              position: 'absolute',
              fontFamily: "'Space Mono', monospace",
              textAlign: 'center',
              top: '142px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: 'var(--teal-bright)', display: 'block' }}>$18M</span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>SOM</span>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.7 }}>
            Rollout cities unlock progressively — starting with Nairobi's 1.1M households as the proving ground before scaling the playbook across Kenya.
          </p>
          <div
            className="cities-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="city-card reveal"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '24px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  className="city-phase"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  {city.phase}
                </span>
                <div
                  className="city-name"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.4rem',
                    marginBottom: '8px',
                  }}
                >
                  {city.name}
                </div>
                <div
                  className="city-pop"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                  }}
                >
                  <strong style={{ color: 'var(--teal-light)' }}>{city.pop}</strong> · {city.households}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
