import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
} from 'recharts'

gsap.registerPlugin(ScrollTrigger)

export default function Financials() {
  const containerRef = useRef(null)

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

  const formatValue = (value) => {
    return value >= 1000 ? value.toLocaleString() : value
  }

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

      <style>{`
        .fin-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .fin-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .fin-layout {
            gap: 32px;
          }
          .chart-wrap {
            padding: 20px !important;
          }
          .city-table th,
          .city-table td {
            padding: 10px 8px !important;
            font-size: 0.72rem !important;
          }
        }
      `}</style>
      <div className="fin-layout">
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
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                color: 'rgba(176,200,224,0.8)',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Revenue Trajectory (KES 000s / month)
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={barData}
                margin={{ top: 30, right: 10, left: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="rgba(107,140,174,0.15)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: 'rgba(176,200,224,0.6)',
                    fontSize: 11,
                    fontFamily: "'Space Mono', monospace",
                  }}
                  dy={8}
                />
                <YAxis
                  domain={[0, 25000]}
                  ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: 'rgba(176,200,224,0.5)',
                    fontSize: 10,
                    fontFamily: "'Space Mono', monospace",
                  }}
                  tickFormatter={(value) => value === 0 ? '0' : value / 1000 + 'k'}
                  width={40}
                />
                <Bar
                  dataKey="val"
                  radius={[2, 2, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={1200}
                  animationEasing="ease-out"
                >
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#4FB8BB" />
                  ))}
                  <LabelList
                    dataKey="val"
                    position="top"
                    formatter={formatValue}
                    style={{
                      fill: 'rgba(176,200,224,0.8)',
                      fontSize: 10,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
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
