import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
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

      ScrollTrigger.create({
        trigger: '.problem-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.from('.problem-card', {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    {
      num: '67%',
      isRed: true,
      title: 'No Piped Water',
      body: 'Only 33% of Kenyan households have piped access (KNBS/KDHS 2022). The rest rely on vendors, boreholes, or tankers.',
    },
    {
      num: 'Trust\nGap',
      isGold: true,
      title: 'Safety Uncertainty',
      body: 'Even when utilities supply treated water, most households still boil or treat — driving demand for delivered branded water.',
    },
    {
      num: 'Zero',
      title: 'Digital Dispatch',
      body: 'No platform connects households to vetted vendors with real-time tracking, quality controls, and flexible M-Pesa payment.',
    },
  ]

  return (
    <section
      id="problem"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-gradient-to-b from-navy to-[#0B1E38]"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        The Problem
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        Water is everywhere —<br />reliable, safe water is not
      </h2>

      <div className="problem-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {problems.map((problem, idx) => (
          <div
            key={idx}
            className="problem-card bg-navy-card border border-border p-8 lg:p-12 relative overflow-hidden transition-colors hover:border-teal"
          >
            <span
              className={`font-display text-6xl lg:text-7xl leading-none mb-2 block whitespace-pre-line ${
                problem.isRed ? 'text-[#FF6B6B]' : problem.isGold ? 'text-gold' : 'text-teal-bright'
              }`}
            >
              {problem.num}
            </span>
            <h3 className="font-display text-xl lg:text-2xl mb-4">
              {problem.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {problem.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
