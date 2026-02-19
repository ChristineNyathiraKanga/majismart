import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
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

  const teamMembers = [
    {
      initials: 'CEO',
      name: 'CEO / Founder',
      role: 'Product vision, fundraising, strategy',
      desc: 'Nairobi HQ',
      gradient: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)',
    },
    {
      initials: 'CTO',
      name: 'CTO / Tech Lead',
      role: 'App + backend + maps + dispatch + payments',
      desc: 'Consumer + Vendor apps',
      gradient: 'linear-gradient(135deg, var(--gold) 0%, #f4d98c 100%)',
    },
    {
      initials: ' Ops',
      name: 'Operations Manager',
      role: ' Service levels, vendor QA, rider performance',
      desc: 'City rollout lead',
      gradient: 'linear-gradient(135deg, var(--green) 0%, #5ee17c 100%)',
    },
    {
      initials: 'Sales',
      name: 'Sales Channel Manager',
      role: 'Estate + office + reseller partnerships',
      desc: 'Revenue channels',
      gradient: 'linear-gradient(135deg, #6B8CAE 0%, #8fa5bf 100%)',
    },
  ]

  return (
    <section
      id="team"
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
      <style>{`
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .team-card { padding: 24px 16px !important; }
          .agents-bar { flex-direction: column !important; gap: 12px !important; text-align: center; }
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
        Team & Execution Plan
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
        Lean. Ops-first.<br />Built to scale city by city.
      </h2>

      <div
        className="team-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-card reveal"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
          >
            <div
              className="team-avatar"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: member.gradient,
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.2rem',
                color: 'var(--navy)',
              }}
            >
              {member.initials}
            </div>
            <div
              className="team-name"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.1rem',
                marginBottom: '4px',
              }}
            >
              {member.name}
            </div>
            <div
              className="team-role"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: 'var(--teal)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              {member.role}
            </div>
            <p className="team-desc" style={{ fontSize: '0.75rem', color: 'rgba(176,200,224,0.65)', lineHeight: 1.6 }}>
              {member.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className="agents-bar reveal"
        style={{
          background: 'rgba(233,196,106,0.06)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '22px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.15rem',
            color: 'var(--gold)',
          }}
        >
          + 5 Vendor Onboarding Agents
        </div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(176,200,224,0.6)' }}>
          Field activation · vendor compliance checks · Nairobi pilot zones ·
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.58rem',
              color: 'var(--muted)',
              marginLeft: '8px',
            }}
          >
            Statutory costs budgeted: PAYE | AHL 3% | SHIF 2.75% | NSSF tiered (confirmed with payroll provider)
          </span>
        </div>
      </div>
    </section>
  )
}
