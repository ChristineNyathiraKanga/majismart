import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Generic scroll reveals
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

      // Initial state for all .reveal elements
      gsap.set('.reveal', { opacity: 0, y: 40 })

      // Problem cards animation
      ScrollTrigger.create({
        trigger: '.problem-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.from('.problem-card', {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    {
      num: '67%',
      isRed: true,
      tag: '',
      title: 'No Piped Water',
      body: 'Only 33% of Kenyan households have piped access (KNBS/KDHS 2022). The rest rely on vendors, boreholes, or tankers.',
    },
    {
      num: 'Trust\nGap',
      isGold: true,
      tag: '',
      title: 'Safety Uncertainty',
      body: 'Even when utilities supply treated water, most households still boil or treat — driving demand for delivered branded water.',
    },
    {
      num: 'Zero',
      tag: '',
      title: 'Digital Dispatch',
      body: 'No platform connects households to vetted vendors with real-time tracking, quality controls, and flexible M-Pesa payment.',
    },
  ]

  return (
    <section
      id="problem"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, var(--navy) 0%, #0B1E38 100%)',
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .problem-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .problem-grid { grid-template-columns: 1fr !important; }
          .problem-card { padding: 32px 24px !important; }
          .problem-num { font-size: 3rem !important; }
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
        The Problem
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
        Water is everywhere —<br />reliable, safe water is not
      </h2>

      <div
        className="problem-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {problems.map((problem, idx) => (
          <div
            key={idx}
            className="problem-card"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
              padding: '48px 36px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
          >
            <span
              className="problem-num"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '4.5rem',
                color: problem.isRed ? '#FF6B6B' : problem.isGold ? 'var(--gold)' : 'var(--teal-bright)',
                lineHeight: 1,
                marginBottom: '8px',
                display: 'block',
                whiteSpace: 'pre-line',
              }}
            >
              {problem.num}
            </span>
            <span
              className="problem-tag"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'block',
              }}
            >
              {problem.tag}
            </span>
            <h3
              className="problem-title"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.5rem',
                marginBottom: '16px',
              }}
            >
              {problem.title}
            </h3>
            <p
              className="problem-body"
              style={{
                fontSize: '0.88rem',
                color: 'rgba(176,200,224,0.7)',
                lineHeight: 1.75,
              }}
            >
              {problem.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
