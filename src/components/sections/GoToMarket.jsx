import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Home, Building2, Store } from 'lucide-react'

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
    { icon: Home, name: 'Residential Estates', desc: 'Partner with property managers. Bulk deals + scheduled refills. Captive audience of 50–500 households per estate.' },
    { icon: Building2, name: 'Offices & Co-working', desc: '3–10 bottles/week per office. High repeat, predictable logistics, easy SLA commitments.' },
    { icon: Store, name: 'Retail Resellers', desc: 'Kiosks and dukas as micro-pickup points. Reduces last-100m cost. Expands supply map.' },
  ]

  const timeline = [
    { period: 'Day 1–30', text: 'Onboard 20+ vendors · Recruit 30 riders · Finalise app MVP · Select 3 pilot estates' },
    { period: 'Day 31–60', text: 'Launch pilot zone · 200+ orders · Gather ratings data · Build vendor quality score' },
    { period: 'Day 61–90', text: '500+ orders/month · 3 estate partnerships signed · First office accounts · Batch routing live' },
  ]

  return (
    <section
      id="gtm"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy-mid"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Go-to-Market
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        Estate-first. Office-second.<br />Lock channels before scaling supply.
      </h2>

      <div className="gtm-layout grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="channel-list flex flex-col gap-5">
          {channels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <div
                key={idx}
                className="channel-item bg-navy-card border border-border rounded-lg p-6 lg:p-7 flex flex-col sm:flex-row gap-4 lg:gap-5 transition-all hover:border-teal reveal"
              >
                <div className="text-teal-bright flex-shrink-0">
                  <Icon size={32} />
                </div>
                <div>
                  <div className="font-display text-lg lg:text-xl mb-2 text-teal-bright">
                    {channel.name}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{channel.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="timeline relative pl-7 reveal">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal to-green" />
          <div className="font-mono text-[0.6rem] tracking-[0.2em] text-teal uppercase mb-8">
            First 90 Days
          </div>
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-item mb-8 relative">
              <div
                className={`absolute -left-[35px] top-1.5 w-4 h-4 rounded-full border-[3px] border-navy-mid ${
                  idx === timeline.length - 1 ? 'bg-green' : 'bg-teal'
                }`}
              />
              <div className="font-mono text-xs text-gold tracking-wider mb-2">
                {item.period}
              </div>
              <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 p-4 lg:p-5 bg-teal/10 rounded-lg border border-border reveal">
        <p className="font-mono text-xs text-teal-light tracking-wide">
          Rider incentive stack: Guaranteed floor (D1–28) · Streak bonuses · Referral rewards · Priority dispatch for top performers
        </p>
      </div>
    </section>
  )
}
