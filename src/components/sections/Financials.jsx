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

  const formatValue = (value) => value >= 1000 ? value.toLocaleString() : value

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
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Financial Model
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        City-by-city rollout<br />to KES 22M/month
      </h2>

      <div className="fin-layout grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-20 items-start">
        <div>
          <div className="chart-wrap bg-navy-card border border-border rounded-xl p-6 lg:p-9 reveal">
            <div className="font-mono text-xs tracking-wide text-white/80 text-center mb-5">
              Revenue Trajectory (KES 000s / month)
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData} margin={{ top: 30, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="0" stroke="rgba(107,140,174,0.15)" vertical={false} />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(176,200,224,0.6)', fontSize: 11, fontFamily: "'Space Mono', monospace" }}
                  dy={8}
                />
                <YAxis
                  domain={[0, 25000]}
                  ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(176,200,224,0.5)', fontSize: 10, fontFamily: "'Space Mono', monospace" }}
                  tickFormatter={(value) => value === 0 ? '0' : value / 1000 + 'k'}
                  width={40}
                />
                <Bar dataKey="val" radius={[2, 2, 0, 0]} isAnimationActive={true} animationDuration={1200} animationEasing="ease-out">
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#4FB8BB" />
                  ))}
                  <LabelList
                    dataKey="val"
                    position="top"
                    formatter={formatValue}
                    style={{ fill: 'rgba(176,200,224,0.8)', fontSize: 10, fontFamily: "'Space Mono', monospace" }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <table className="city-table w-full reveal">
            <thead>
              <tr className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-muted border-b border-border">
                <th className="p-3 text-left">City</th>
                <th className="p-3 text-left">Launch</th>
                <th className="p-3 text-left">Break-even</th>
                <th className="p-3 text-left">M24 Rev</th>
              </tr>
            </thead>
            <tbody>
              {cityRolloutTable.map((row, idx) => (
                <tr key={idx} className="border-b border-teal/10">
                  <td className={`p-3.5 ${row.highlight ? 'font-display text-base text-teal-bright' : 'text-sm'}`}>
                    {row.city}
                  </td>
                  <td className="p-3.5 text-sm">{row.launch}</td>
                  <td className="p-3.5 text-sm">{row.breakeven}</td>
                  <td className={`p-3.5 text-sm ${row.highlight ? 'text-teal-bright' : ''}`}>
                    {row.rev24}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="assumptions-box bg-navy-card border border-border rounded-xl p-7 mt-5 reveal">
            <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-teal mb-4">
              Key Assumptions
            </h4>
            <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc">
              <li> Avg order: 1.6×20L bottles per transaction</li>
              <li> Commission: 12% → 15% by M12</li>
              <li>Subscription attach: 18% of active users</li>
              <li>Batching efficiency: 2.4 drops/rider/hour</li>
              <li><span className="text-gold">Monthly burn: KES 1.0–1.6M (lean pilot)</span></li>
            </ul>
          </div>
        </div>

        <div className="model-note bg-gold/10 border border-border rounded-lg px-6 py-4 text-center font-mono text-sm text-gold-light tracking-wide reveal">
        <span className="text-gold">Break-even: Month 16–22 · Profitability tied to batching efficiency + subscription attachment rate</span>
      </div>
      </div>
    </section>
  )
}
