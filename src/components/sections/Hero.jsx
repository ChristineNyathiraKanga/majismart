import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-eyebrow', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' })
        .from('.hero-title', { opacity: 0, y: 50, duration: 0.9, ease: 'power3.out' }, '-=0.4')
        .from('.hero-sub', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.hero-stats', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.scroll-hint', { opacity: 0, duration: 0.6 }, '-=0.2')

      // Remove .reveal opacity:0 for hero elements
      const heroReveals = containerRef.current.querySelectorAll('.reveal')
      heroReveals.forEach(el => el.style.opacity = 1)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '0 80px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background */}
      <div className="hero-bg" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div
          className="ripple-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid rgba(10,147,150,0.15)',
            width: '400px',
            height: '400px',
            right: '-80px',
            top: '10%',
            animation: 'ripplePulse 6s ease-in-out infinite',
            animationDelay: '0s',
          }}
        />
        <div
          className="ripple-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid rgba(10,147,150,0.15)',
            width: '700px',
            height: '700px',
            right: '-220px',
            top: '-10%',
            animation: 'ripplePulse 6s ease-in-out infinite',
            animationDelay: '1.5s',
          }}
        />
        <div
          className="ripple-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid rgba(10,147,150,0.15)',
            width: '1000px',
            height: '1000px',
            right: '-400px',
            top: '-25%',
            animation: 'ripplePulse 6s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
        <div
          className="ripple-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid rgba(10,147,150,0.15)',
            width: '1350px',
            height: '1350px',
            right: '-580px',
            top: '-42%',
            animation: 'ripplePulse 6s ease-in-out infinite',
            animationDelay: '4.5s',
          }}
        />
      </div>

      {/* Hero Inner */}
      <div
        className="hero-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          maxWidth: '780px',
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-eyebrow reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(10,147,150,0.12)',
            border: '1px solid var(--border)',
            padding: '7px 16px',
            borderRadius: '100px',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--teal-light)',
            marginBottom: '30px',
            width: 'fit-content',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--gold)',
              animation: 'blink 2s infinite',
            }}
          />
          Antler Pre-Seed 2026 · Nairobi, Kenya
        </div>

        {/* Title */}
        <h1
          className="hero-title reveal"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
            lineHeight: 1.05,
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}
        >
          The <span style={{ color: 'var(--teal-bright)', fontStyle: 'italic' }}>Operating<br />System</span> for<br />Household Water
        </h1>

        {/* Sub */}
        <p
          className="hero-sub reveal"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: 'var(--muted)',
            marginBottom: '14px',
            fontWeight: 300,
            maxWidth: '580px',
            lineHeight: 1.6,
          }}
        >
          One app. Nearest vendor. Nearest rider. Water in 60 min.
        </p>

        {/* Desc */}
        <p
          className="hero-desc reveal"
          style={{
            fontSize: '0.9rem',
            color: 'rgba(144,176,208,0.7)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '52px',
          }}
        >
          Aggregating drinking water vendors + last-mile dispatch via bodaboda & e-bike, with M-Pesa payments, real-time tracking, and quality controls — Nairobi first, then Kenya.
        </p>

        {/* Stats */}
        <div
          className="hero-stats reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: 0,
            marginBottom: '48px',
            width: 'fit-content',
          }}
        >
          <div
            className="stat-item"
            style={{
              padding: '24px 36px',
              border: '1px solid var(--border)',
              background: 'rgba(13,32,64,0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px 0 0 8px',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '2.2rem',
                color: 'var(--teal-bright)',
                display: 'block',
                lineHeight: 1,
              }}
            >
              33<span style={{ fontSize: '1.5rem' }}>%</span>
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '6px',
                display: 'block',
              }}
            >
              piped water access
            </span>
          </div>
          <div
            className="stat-item"
            style={{
              padding: '24px 36px',
              border: '1px solid var(--border)',
              borderLeft: 'none',
              background: 'rgba(13,32,64,0.6)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.8rem',
                color: 'var(--teal-bright)',
                display: 'block',
                lineHeight: 1,
              }}
            >
              KES 320
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '6px',
                display: 'block',
              }}
            >
              avg. 20L bottle
            </span>
          </div>
          <div
            className="stat-item"
            style={{
              padding: '24px 36px',
              border: '1px solid var(--border)',
              borderLeft: 'none',
              background: 'rgba(13,32,64,0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.8rem',
                color: 'var(--teal-bright)',
                display: 'block',
                lineHeight: 1,
              }}
            >
              $1B+
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '6px',
                display: 'block',
              }}
            >
              water market Kenya
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="hero-actions reveal" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => scrollToSection('problem')}
            className="btn-primary"
            style={{
              background: 'var(--teal)',
              color: 'white',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Explore the Opportunity ↓
          </button>
          <button
            onClick={() => scrollToSection('cta')}
            className="btn-ghost"
            style={{
              background: 'transparent',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              padding: '14px 28px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            hello@majismart.co
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        className="scroll-hint"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--muted)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: '40px',
            height: '1px',
            background: 'var(--teal)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
        Scroll
      </div>
    </section>
  )
}
