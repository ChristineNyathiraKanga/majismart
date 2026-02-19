import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
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

  const teamMembers = [
    {
      initials: 'CEO',
      name: 'CEO / Founder',
      role: 'Product vision, fundraising, strategy',
      desc: 'Nairobi HQ',
      gradient: 'from-teal to-teal-light',
    },
    {
      initials: 'CTO',
      name: 'CTO / Tech Lead',
      role: 'App + backend + maps + dispatch + payments',
      desc: 'Consumer + Vendor apps',
      gradient: 'from-gold to-[#f4d98c]',
    },
    {
      initials: 'Ops',
      name: 'Operations Manager',
      role: 'Service levels, vendor QA, rider performance',
      desc: 'City rollout lead',
      gradient: 'from-green to-[#5ee17c]',
    },
    {
      initials: 'Sales',
      name: 'Sales Channel Manager',
      role: 'Estate + office + reseller partnerships',
      desc: 'Revenue channels',
      gradient: 'from-muted to-[#8fa5bf]',
    },
  ]

  return (
    <section
      id="team"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy-mid"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        Team & Execution Plan
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        Lean. Ops-first.<br />Built to scale city by city.
      </h2>

      <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-card bg-navy-card border border-border rounded-xl p-6 lg:p-8 text-center transition-all hover:border-teal hover:-translate-y-1 reveal"
          >
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-5 flex items-center justify-center font-display text-xl text-navy`}
            >
              {member.initials}
            </div>
            <div className="font-display text-lg mb-1">
              {member.name}
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-teal uppercase mb-3.5">
              {member.role}
            </div>
            <p className="text-xs text-white/65 leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="agents-bar bg-gold/5 border border-border rounded-xl p-5 lg:p-6 flex flex-col sm:flex-row items-center gap-6 reveal">
        <span className="text-3xl">👥</span>
        <div className="text-center sm:text-left">
          <strong className="text-gold font-display text-lg block mb-1">+ 5 Vendor Onboarding Agents</strong>
          <span className="text-sm text-muted">
            Field activation · vendor compliance checks · Nairobi pilot zones · 
            <span className="text-xs text-muted ml-1">Statutory costs budgeted: PAYE | AHL 3% | SHIF 2.75% | NSSF tiered (confirmed with payroll provider)</span>
          </span>
        </div>
      </div>
    </section>
  )
}
