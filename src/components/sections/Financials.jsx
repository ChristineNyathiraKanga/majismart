import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import BarChart from '../ui/BarChart'
import { barData, financialAssumptions, cityRolloutTable } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Financials() {
  const containerRef = useRef(null)
  const chartRef = useRef(null)
  const tableRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(chartRef.current, {
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: 'expo.out',
      })

      const rows = tableRef.current.querySelectorAll('tr')
      gsap.from(rows, {
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="financials-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Financial Projection" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              City-by-city rollout <br />
              <span className="text-green">to KES 22M/month.</span>
            </h2>
          </div>
          <div className="max-w-xs p-6 bg-green/5 border border-green/20 rounded-2xl">
            <div className="font-mono text-[10px] uppercase text-green mb-2 tracking-widest">M24 Target</div>
            <div className="font-display text-4xl text-green mb-2">KES 22.0M</div>
            <div className="text-[10px] text-muted uppercase tracking-widest">Monthly Recurring Revenue</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Chart Section */}
          <div className="lg:col-span-8 space-y-12">
            <div ref={chartRef} className="p-8 bg-navy-mid/30 backdrop-blur-md border border-white/5 rounded-3xl">
              <div className="flex items-center justify-between mb-12">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-teal">Revenue Trajectory (KES 000s / month)</h3>
              </div>
              <div className="h-[300px]">
                <BarChart data={barData} />
              </div>
            </div>

            {/* Assumptions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-full">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-teal mb-6">Key Assumptions</h4>
              </div>
              {financialAssumptions.map((item, idx) => (
                <div key={idx} className="p-6 border border-white/5 rounded-2xl bg-navy-mid/20 flex gap-4 items-start">
                  <span className="text-teal font-mono text-xs opacity-40">—</span>
                  <p className="text-sm text-muted/70 leading-relaxed font-light">
                    <strong className="text-teal-bright block mb-1 uppercase text-[9px] tracking-widest">{item.label}</strong>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-navy-mid/50 border border-teal/20 rounded-3xl">
              <h3 className="font-display text-2xl mb-8">Nairobi + Region <br /><span className="text-teal-bright text-lg italic">Growth Roadmap</span></h3>
              <div className="overflow-x-auto">
                <table ref={tableRef} className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="py-4 font-mono text-[8px] uppercase tracking-widest text-muted">City</th>
                      <th className="py-4 font-mono text-[8px] uppercase tracking-widest text-muted text-center">Launch</th>
                      <th className="py-4 font-mono text-[8px] uppercase tracking-widest text-muted text-center">B.Even</th>
                      <th className="py-4 font-mono text-[8px] uppercase tracking-widest text-muted text-right">M24 Rev</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityRolloutTable.map((row, idx) => (
                      <tr key={idx} className={`group border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors`}>
                        <td className={`py-4 text-xs font-medium ${row.highlight ? 'text-teal-bright' : 'text-muted'}`}>
                          {row.city}
                        </td>
                        <td className="py-4 text-[10px] text-center font-mono text-muted/50">
                          {row.launch}
                        </td>
                        <td className="py-4 text-[10px] text-center font-mono text-muted/50">
                          {row.breakeven}
                        </td>
                        <td className={`py-4 text-xs text-right font-mono ${row.highlight ? 'text-teal-bright' : 'text-muted/50'}`}>
                          {row.rev24}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-8 bg-gold/5 border border-gold/20 rounded-3xl">
              <h4 className="font-mono text-[10px] uppercase text-gold mb-4 tracking-widest">Break-even Note</h4>
              <ul className="space-y-4">
                <li className="text-xs text-muted/70 leading-relaxed font-light flex gap-3">
                  <span className="text-gold">•</span> Nairobi break-even: Month 18–22
                </li>
                <li className="text-xs text-muted/70 leading-relaxed font-light flex gap-3">
                  <span className="text-gold">•</span> Profitability tied to batching + subscription rate
                </li>
                <li className="text-xs text-muted/70 leading-relaxed font-light flex gap-3">
                  <span className="text-gold">•</span> E-bike payback at 12 drops/day: ~6–8 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
