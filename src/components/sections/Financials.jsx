import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Financials() {
  const containerRef = useRef(null)
  const chartRef = useRef(null)

  const barData = [
    { month: 'M1', val: 120 },
    { month: 'M2', val: 280 },
    { month: 'M3', val: 520 },
    { month: 'M4', val: 820 },
    { month: 'M5', val: 1200 },
    { month: 'M6', val: 1650 },
    { month: 'M9', val: 3100 },
    { month: 'M12', val: 5200 },
    { month: 'M18', val: 11000 },
    { month: 'M24', val: 22000 },
  ]

  const maxVal = 22000

  const cityRolloutTable = [
    { city: 'Nairobi', launch: 'M1', breakeven: 'M18–22', rev24: '22M/mo', highlight: true },
    { city: 'Mombasa', launch: 'M10', breakeven: 'M28–32', rev24: '8M/mo' },
    { city: 'Kisumu', launch: 'M16', breakeven: 'M34–38', rev24: '4M/mo' },
    { city: 'Nakuru/Eldoret', launch: 'M20', breakeven: 'M36–40', rev24: '3M/mo' },
  ]

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

      // Bar chart animation
      ScrollTrigger.create({
        trigger: '#barChart',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('#barChart .bar', {
            scaleY: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power3.out',
            transformOrigin: 'bottom',
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="financials"
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
        Financial Model
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
        City-by-city rollout<br />to KES 22M/month
      </h2>

      <div
        className="fin-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        <div>
          <div
            className="chart-wrap reveal"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '36px',
            }}
          >
            <div
              className="chart-title"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                marginBottom: '28px',
              }}
            >
              Revenue Trajectory (KES 000s / month)
            </div>
            <div
              id="barChart"
              className="bar-chart"
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '10px',
                height: '200px',
                borderBottom: '1px solid var(--border)',
                borderLeft: '1px solid var(--border)',
                padding: '0 10px 10px',
              }}
            >
              {barData.map((d, i) => {
                const heightPct = (d.val / maxVal) * 100
                const isBreakeven = i === 8
                const isMax = i === 9
                const color = isMax
                  ? 'linear-gradient(to top, #0A9396, #2DC653)'
                  : isBreakeven
                    ? 'linear-gradient(to top, #0A9396, #00C8D7)'
                    : 'linear-gradient(to top, rgba(10,147,150,0.4), rgba(10,147,150,0.7))'

                return (
                  <div
                    key={i}
                    className="bar-group"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      flex: 1,
                    }}
                  >
                    <div
                      className="bar"
                      style={{
                        width: '100%',
                        borderRadius: '3px 3px 0 0',
                        transformOrigin: 'bottom',
                        transform: 'scaleY(0)',
                        minHeight: '4px',
                        position: 'relative',
                        height: `${heightPct}%`,
                        background: color,
                      }}
                    />
                    <span
                      className="bar-month"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.5rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {d.month}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <table
            className="city-table reveal"
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                {['City', 'Launch', 'Break-even', 'M24 Rev'].map((th) => (
                  <th
                    key={th}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.58rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      padding: '10px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cityRolloutTable.map((row, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid rgba(10,147,150,0.1)',
                      color: row.highlight ? 'var(--teal-bright)' : 'inherit',
                      fontFamily: row.highlight ? "'DM Serif Display', serif" : 'inherit',
                      fontSize: row.highlight ? '1rem' : '0.83rem',
                    }}
                  >
                    {row.city}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '0.83rem', borderBottom: '1px solid rgba(10,147,150,0.1)' }}>{row.launch}</td>
                  <td style={{ padding: '14px 16px', fontSize: '0.83rem', borderBottom: '1px solid rgba(10,147,150,0.1)' }}>{row.breakeven}</td>
                  <td
                    style={{
                      padding: '14px 16px',
                      fontSize: '0.83rem',
                      borderBottom: '1px solid rgba(10,147,150,0.1)',
                      color: row.highlight ? 'var(--teal-bright)' : 'inherit',
                    }}
                  >
                    {row.rev24}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className="assumptions-box reveal"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '28px',
              marginTop: '20px',
            }}
          >
            <h4
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                marginBottom: '16px',
              }}
            >
              Key Assumptions
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                'Avg order: 1.6×20L bottles per transaction',
                'Commission: 12% → 15% by M12',
                'Subscription attach: 18% of active users',
                'Batching efficiency: 2.4 drops/rider/hour',
                'Monthly burn: KES 1.0–1.6M (lean pilot)',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(176,200,224,0.7)',
                    padding: '6px 0',
                    borderBottom: '1px solid rgba(10,147,150,0.08)',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <span style={{ color: 'var(--teal)' }}>. </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="model-note reveal"
        style={{
          background: 'rgba(10,147,150,0.08)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '18px 28px',
          marginTop: '20px',
          fontSize: '0.82rem',
          color: 'var(--teal-light)',
          textAlign: 'center',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '0.04em',
        }}
      >
        <span style={{ color: 'var(--gold)' }}>Break-even: Month 16–22 · Profitability tied to batching efficiency + subscription attachment rate</span>
      </div>
    </section>
  )
}
