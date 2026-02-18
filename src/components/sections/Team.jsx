import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { team } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="team-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Our Team" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Operators with<br />
              <span className="text-teal-bright">local leverage.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            Building infrastructure requires deep operational roots. Our team blends
            tech prowess with local logistics expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group bg-navy-mid/30 border border-white/5 rounded-3xl p-8 hover:bg-navy-card/60 hover:border-teal/30 transition-all duration-500"
            >
              <div className="relative mb-8 w-20 h-20">
                <div className="absolute inset-0 bg-teal/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-mid rounded-2xl border border-white/10 flex items-center justify-center text-4xl shadow-xl">
                  {member.avatar}
                </div>
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal mb-3">
                {member.role}
              </div>

              <h4 className="font-display text-xl mb-4 text-white group-hover:text-teal-bright transition-colors">
                {member.title}
              </h4>

              <p className="text-xs text-muted/50 leading-relaxed font-light">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Global Support Bar */}
        <div className="mt-20 p-10 bg-gradient-to-r from-teal/10 to-transparent border border-teal/20 rounded-3xl flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-teal mb-3">Supported By</div>
            <div className="font-display text-3xl text-white mb-2">Antler East Africa</div>
            <p className="text-sm text-muted/60 max-w-lg leading-relaxed font-light">
              Leveraging a global venture network and deep in-country advisor pools
              to fast-track regulatory and supply-chain hurdles.
            </p>
          </div>
          <div className="h-px w-full md:w-px md:h-20 bg-teal/20" />
          <div className="text-center md:text-left">
            <div className="font-display text-4xl text-teal-bright mb-1">5+</div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">Field Agents Active</div>
          </div>
        </div>
      </div>
    </section>
  )
}
