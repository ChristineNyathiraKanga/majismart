import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { channels, gtmTimeline } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function GoToMarket() {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -40,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="gtm-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Go-to-Market" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Estate-first. Office-second.<br />
              <span className="text-teal-bright">Lock channels before supply.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            We target density drivers first. Residential estates and central
            business districts provide the route density for e-bike economics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Channel Cards */}
          <div className="space-y-6">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                ref={(el) => (itemsRef.current[idx] = el)}
                className="group p-8 bg-navy-mid/30 border border-white/5 rounded-2xl flex gap-8 items-start hover:bg-navy-card/50 hover:border-teal/30 transition-all duration-500"
              >
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  {channel.icon}
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-white group-hover:text-teal-bright transition-colors">
                    {channel.name}
                  </h4>
                  <p className="text-xs text-muted/50 leading-relaxed font-light">
                    {channel.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-teal/20 to-transparent" />
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal mb-12">First 90 Days</h3>

            <div className="space-y-12">
              {gtmTimeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[53px] top-1 w-2.5 h-2.5 rounded-full bg-navy border-2 border-teal shadow-[0_0_10px_rgba(10,147,150,0.5)]" />
                  <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">
                    {item.period}
                  </div>
                  <p className="text-sm text-muted/70 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-6 bg-teal/5 border border-teal/20 rounded-2xl">
              <p className="font-mono text-[9px] leading-relaxed text-teal-light uppercase tracking-widest">
                Rider incentive stack: Guaranteed floor (D1–28) · Streak bonuses · Referral rewards · Priority dispatch for top performers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
