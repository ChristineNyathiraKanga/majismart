import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Home,
  Building2,
  Store,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger)

export default function GoToMarket() {
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

  const channels = [
    {
      icon: Home,
      name: "Residential Estates",
      desc:
        "Partner with property managers. Bulk deals + scheduled refills. Captive audience of 50–500 households per estate.",
    },
    {
      icon: Building2,
      name: "Offices & Co-working",
      desc:
        "3–10 bottles/week per office. High repeat, predictable logistics, easy SLA commitments.",
    },
    {
      icon: Store,
      name: "Retail Resellers (Dukas)",
      desc:
        "Kiosks and dukas as micro-pickup points. Reduces last-100m cost. Expands supply map.",
    },
  ];

  const timeline = [
    { period: 'Day 1–30', text: 'Onboard 20+ vendors · Recruit 30 riders · Finalise app MVP · Select 3 pilot estates' },
    { period: 'Day 31–60', text: 'Launch pilot zone · 200+ orders · Gather ratings data · Build vendor quality score' },
    { period: 'Day 61–90', text: '500+ orders/month · 3 estate partnerships signed · First office accounts · Batch routing live' },
  ]

  return (
    <section
      id="gtm"
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
        Go-to-Market
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
        Estate-first. Office-second.<br />Lock channels before scaling supply.
      </h2>

      <div
        className="gtm-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
        }}
      >
        <div className="channel-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {channels.map((channel, idx) => (
            <div
              key={idx}
              className="channel-item reveal"
              style={{
                background: 'var(--navy-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                gap: '20px',
                transition: 'all 0.3s',
              }}
            >
              <div className="channel-icon" style={{ fontSize: '2rem', flexShrink: 0 }}>{channel.icon}</div>
              <div>
                <div
                  className="channel-name"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.15rem',
                    marginBottom: '8px',
                    color: 'var(--teal-bright)',
                  }}
                >
                  {channel.name}
                </div>
                <p className="channel-desc" style={{ fontSize: '0.83rem', color: 'rgba(176,200,224,0.7)', lineHeight: 1.65 }}>{channel.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="timeline reveal"
          style={{
            position: 'relative',
            paddingLeft: '28px',
          }}
        >
          <div
            style={{
              content: "''",
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--teal), var(--green))',
            }}
          />
          <div
            className="timeline-header"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--teal)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            First 90 Days
          </div>
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item"
              style={{
                marginBottom: '32px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  content: "''",
                  position: 'absolute',
                  left: '-35px',
                  top: '5px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: idx === timeline.length - 1 ? 'var(--green)' : 'var(--teal)',
                  border: '3px solid var(--navy-mid)',
                }}
              />
              <div
                className="timeline-day"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.72rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}
              >
                {item.period}
              </div>
              <p className="timeline-text" style={{ fontSize: '0.83rem', color: 'rgba(176,200,224,0.75)', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}

        </div>
        
      </div>
      
          <div
            style={{
              marginTop: '28px',
              padding: '16px 20px',
              background: 'rgba(10,147,150,0.08)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--teal-light)',
                fontFamily: "'Space Mono', monospace",
                letterSpacing: '0.06em',
              }}
            >
              Rider incentive stack: Guaranteed floor (D1–28) · Streak bonuses · Referral rewards · Priority dispatch for top performers
            </p>
          </div>
    </section>
  )
}
