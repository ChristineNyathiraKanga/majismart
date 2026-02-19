import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Add CSS for marquee animation
const marqueeStyle = document.createElement('style')
marqueeStyle.textContent = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`
if (typeof document !== 'undefined') {
  document.head.appendChild(marqueeStyle)
}

export default function Solution() {
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

  const steps = [
    {
      num: "01",
      title: "Order",
      body:
        "Choose brand or 'best value'. Select quantity (min 1×20L). Pay via M-Pesa or card.",
    },
    {
      num: "02",
      title: "Match",
      body:
        "Algorithm routes to nearest stocked, verified vendor + nearest available rider.",
    },
    {
      num: "03",
      title: "Dispatch",
      body:
        "Bodaboda or e-bike rider picks up. Real-time GPS tracking sent to customer.",
    },
    {
      num: "04",
      title: "Delivered",
      body:
        "Quality-verified water arrives. Ratings collected. Refill subscription optionally activated.",
      isGreen: true,
    },
  ];

  const marqueeItems = [
    'Water-specific infrastructure:',
    'Vendor Verification',
    'Authenticity Controls',
    'Scheduled Refills',
    'SLA-grade supply',
    'City-by-City Network Moat'
  ]

  return (
    <section
      id="solution"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '120px 80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--navy-mid)',
        overflow: 'hidden',
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
        The Solution
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
        One app. Nearest vendor.<br />Nearest rider. Water in 60 min.
      </h2>

      <div
        className="solution-steps"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          marginBottom: '40px',
          position: 'relative',
        }}
      >
        {/* Connecting line */}
        <div
          style={{
            content: "''",
            position: 'absolute',
            top: '44px',
            left: '12.5%',
            right: '12.5%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--teal), var(--green), transparent)',
            zIndex: 0,
          }}
        />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="step-card reveal"
            style={{
              padding: '0 24px 40px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              className="step-num"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--navy)',
                border: `2px solid ${step.isGreen ? 'var(--green)' : 'var(--teal)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.9rem',
                color: step.isGreen ? 'var(--green)' : 'var(--teal-bright)',
                margin: '0 auto 28px',
                transition: 'all 0.3s',
              }}
            >
              {step.num}
            </div>
            <div
              className="step-title"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.3rem',
                marginBottom: '12px',
                color: step.isGreen ? 'var(--green)' : 'var(--teal-bright)',
              }}
            >
              {step.title}
            </div>
            <p
              className="step-body"
              style={{
                fontSize: '0.83rem',
                color: 'rgba(176,200,224,0.7)',
                lineHeight: 1.7,
              }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div
        className="marquee-wrap"
        style={{
          overflow: 'hidden',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '14px 0',
          background: 'rgba(10,147,150,0.06)',
          marginTop: '48px',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '60px',
            animation: 'marquee 20s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--teal-light)',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
            >
              <span style={{ color: 'var(--teal)' }}>◆ </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
