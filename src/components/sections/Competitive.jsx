import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ShieldCheck,
  MapPinned,
  RefreshCw,
  Building2,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger)

export default function Competitive() {
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

  const competitors = [
    { name: 'Maji Smart', drink: true, refill: true, app: true, mpesa: true, subs: true, vendorQA: true, cityRollout: true, highlight: true },
    { name: 'Jibu Kenya', drink: true, refill: false, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'GoBeba', drink: true, refill: true, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'PowWater', drink: true, refill: false, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'Balozy', drink: true, refill: true, app: false, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'Uber/Generic', drink: true, refill: true, app: false, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
   ]

  const moats = [
    {
      icon: ShieldCheck,
      text: "Vendor verification + brand authenticity controls",
    },
    {
      icon: MapPinned,
      text: "City-by-city vendor network — proprietary registry",
    },
    {
      icon: RefreshCw,
      text: "Scheduled refills + household water profiles",
    },
    {
      icon: Building2,
      text: "Estate & office SLA channel lock-in",
    },
    {
      icon: Zap,
      text: "E-bike micro-depot economics — unbeatable delivery margin",
    },
  ];

  return (
    <section
      id="competitive"
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
        Competitive Landscape & Moat
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
        We win by being water's vertical operator —<br />not a logistics generalist
      </h2>

      <div
        className="competitive-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '70px',
        }}
      >
        <div
            className="comp-table reveal"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflowX: 'auto',
              overflowY: 'hidden',
            }}
          >
            <table
              style={{
                width: '100%',
                minWidth: '950px',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <th style={{ padding: '14px 18px', textAlign: 'left' }}>Platform</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>Drinking Water</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>Bulk Water</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>App + Tracking</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>M-Pesa</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>Subscriptions</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>Vendor QA</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center' }}>City Rollout</th>
                </tr>
              </thead>

              <tbody>
                {competitors.map((comp, idx) => {
                  const isFirst = idx === 0;

                  const renderValue = (value) => (value ? '✓' : '-');

                  return (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border)',
                        background: isFirst
                          ? 'rgba(0, 200, 120, 0.08)'
                          : comp.highlight
                          ? 'rgba(10,147,150,0.12)'
                          : 'transparent',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 18px',
                          fontFamily: isFirst
                            ? "'DM Serif Display', serif"
                            : 'inherit',
                          fontSize: isFirst ? '1rem' : '0.8rem',
                          color: isFirst ? 'var(--green)' : 'var(--white)',
                        }}
                      >
                        {comp.name}
                      </td>

                      {[
                        comp.drink,
                        comp.refill,
                        comp.app,
                        comp.mpesa,
                        comp.subs,
                        comp.vendorQA,
                        comp.cityRollout,
                      ].map((value, i) => (
                        <td
                          key={i}
                          style={{
                            padding: '14px 18px',
                            textAlign: 'center',
                            fontSize: '0.75rem',
                            color: isFirst ? 'var(--green)' : 'var(--teal-bright)',
                            fontWeight: isFirst ? '600' : '400',
                          }}
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>


        <div className="moat-list">
          <div
            className="moat-header reveal"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--teal)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Our Moat
          </div>

          {moats.map((moat, idx) => {
            const Icon = moat.icon;

            return (
              <div
                key={idx}
                className="moat-item reveal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "var(--navy-card)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--teal)",
                  borderRadius: "0 8px 8px 0",
                  padding: "14px 18px",
                  marginBottom: "12px",
                  fontSize: "0.78rem",
                  color: "rgba(176,200,224,0.8)",
                  transition: "all 0.3s",
                }}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  color="var(--teal-bright)"
                />

                <span>{moat.text}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
