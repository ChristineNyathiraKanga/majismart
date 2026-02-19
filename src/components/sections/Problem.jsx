import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { problems } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = containerRef.current.querySelectorAll('.reveal')

      gsap.from(reveals, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="problem-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal">
          <SectionLabel label="The Problem" />
        </div>

        <h2 className="reveal font-display text-5xl md:text-7xl leading-tight mb-20 text-white">
          Water is everywhere —<br />
          <span className="text-blue/90">reliable, safe water</span>
          <span className="text-white/90">  is not</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="reveal group bg-navy-mid/30 border border-white/5 p-10 rounded-2xl hover:bg-navy-card/50 transition-all duration-500"
            >
              <div
                className={`font-display text-7xl font-bold mb-8 leading-none tracking-tighter ${problem.isRed ? 'text-red-500' : problem.isGold ? 'text-gold' : 'text-white'
                  }`}
                style={problem.num.includes('\n') ? { whiteSpace: 'pre-line' } : {}}
              >
                {problem.num}
              </div>

              <div className="font-mono text-[9px] uppercase text-teal tracking-[0.3em] mb-4">
                {problem.tag}
              </div>

              <h3 className="font-display text-2xl mb-4 group-hover:text-teal-bright transition-colors text-white">
                {problem.title}
              </h3>

              <p className="text-sm text-muted/50 leading-relaxed font-light">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
