import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, MapPinned, RefreshCw, Building2, Zap } from 'lucide-react'

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
    { name: 'Jibu Kenya', drink: true, refill: false, app: false, mpesa: true, subs: false, vendorQA: true, cityRollout: false },
    { name: 'GoBeba', drink: true, refill: false, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'PowWater', drink: false, refill: true, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
    { name: 'Balozy', drink: true, refill: true, app: false, mpesa: false, subs: false, vendorQA: false, cityRollout: false },
    { name: 'Uber/Generic', drink: false, refill: false, app: true, mpesa: true, subs: false, vendorQA: false, cityRollout: false },
  ]

  const moats = [
    { icon: ShieldCheck, text: 'Vendor verification + brand authenticity controls' },
    { icon: MapPinned, text: 'City-by-city vendor network — proprietary registry' },
    { icon: RefreshCw, text: 'Scheduled refills + household water profiles' },
    { icon: Building2, text: 'Estate & office SLA channel lock-in' },
    { icon: Zap, text: 'E-bike micro-depot economics — unbeatable delivery margin' },
  ]

  return (
    <section
      id="competitive"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Competitive Landscape & Moat
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        We win by being water's vertical operator —<br />not a logistics generalist
      </h2>

      <div className="competitive-layout grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
        <div className="comp-table bg-navy-card border border-border rounded-xl overflow-x-auto reveal">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="font-mono text-[0.58rem] tracking-[0.15em] text-muted uppercase border-b border-border">
                <th className="p-4 text-left">Platform</th>
                <th className="p-4 text-center">Drinking Water</th>
                <th className="p-4 text-center">Bulk Water</th>
                <th className="p-4 text-center">App + Tracking</th>
                <th className="p-4 text-center">M-Pesa</th>
                <th className="p-4 text-center">Subscriptions</th>
                <th className="p-4 text-center">Vendor QA</th>
                <th className="p-4 text-center">City Rollout</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, idx) => {
                const isFirst = idx === 0
                return (
                  <tr
                    key={idx}
                    className={`border-b border-border ${isFirst ? 'bg-green/10' : ''}`}
                  >
                    <td className={`p-4 ${isFirst ? 'font-display text-base text-green' : 'text-sm text-white'}`}>
                      {comp.name}
                    </td>
                    {[comp.drink, comp.refill, comp.app, comp.mpesa, comp.subs, comp.vendorQA, comp.cityRollout].map((val, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center text-sm ${isFirst ? 'text-green font-semibold' : val ? 'text-teal-bright' : 'text-muted/40'}`}
                      >
                        {val ? '✓' : '—'}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="moat-list">
          <div className="font-mono text-[0.6rem] tracking-[0.2em] text-teal uppercase mb-6 reveal">
            Our Moat
          </div>
          {moats.map((moat, idx) => {
            const Icon = moat.icon
            return (
              <div
                key={idx}
                className="moat-item flex items-center gap-3.5 bg-navy-card border border-border border-l-[3px] border-l-teal rounded-r-lg py-3.5 px-4 mb-3 text-sm text-white/80 transition-all hover:border-l-teal-bright hover:text-white hover:translate-x-1 reveal"
              >
                <Icon size={18} strokeWidth={1.8} className="text-teal-bright flex-shrink-0" />
                <span>{moat.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
