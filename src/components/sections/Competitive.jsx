import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { competitorMatrix, moatAdvantage } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Competitive() {
  const containerRef = useRef(null)
  const tableRef = useRef(null)
  const moatRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Comparison chart animation
      gsap.from(tableRef.current, {
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'expo.out',
      })

      // Moat staggered reveal
      gsap.from(moatRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        opacity: 0,
        x: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="competitive-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Competitive Landscape & Moat" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              We win by being water's<br />
              <span className="text-teal-bright">vertical operator.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            We are not a generalist logistics layer. We win by controlling the
            entire water dispatch stack from quality to subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Table Container */}
          <div ref={tableRef} className="lg:col-span-8 p-8 bg-navy-mid/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="py-6 font-mono text-[9px] uppercase tracking-[0.2em] text-muted text-left">Platform</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">Drinking</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">Bulk</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">App</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">M-Pesa</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">Subs</th>
                    <th className="py-6 font-mono text-[9px] uppercase tracking-tighter text-muted text-center">QA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {competitorMatrix.map((comp, idx) => (
                    <tr key={idx} className={`group hover:bg-white/[0.02] transition-colors ${comp.name === 'Maji Smart' ? 'bg-teal/5' : ''}`}>
                      <td className={`py-6 text-sm ${comp.name === 'Maji Smart' ? 'text-teal-bright font-display text-xl' : 'text-muted/80'}`}>
                        {comp.name}
                      </td>
                      <td className="py-6 text-center">
                        {comp.drinking ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                      <td className="py-6 text-center">
                        {comp.bulk ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                      <td className="py-6 text-center">
                        {comp.tracking ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                      <td className="py-6 text-center">
                        {comp.mpesa ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                      <td className="py-6 text-center">
                        {comp.subs ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                      <td className="py-6 text-center">
                        {comp.qa ? <span className="text-teal-bright">✓</span> : <span className="text-muted/20">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Moat Section */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-teal mb-8">Direct Competitive Moat</h3>
            {moatAdvantage.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (moatRef.current[idx] = el)}
                className="p-6 bg-navy-mid/30 border border-white/5 rounded-2xl group transition-all hover:border-teal/30 hover:bg-navy-card/50"
              >
                <p className="text-xs text-muted/60 leading-relaxed font-light group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}

            <div className="mt-12 p-8 bg-teal/5 border border-teal/20 rounded-2xl">
              <p className="font-mono text-[9px] text-teal-light uppercase tracking-[0.3em] leading-relaxed">
                We win by being water's vertical operator — not a logistics generalist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
