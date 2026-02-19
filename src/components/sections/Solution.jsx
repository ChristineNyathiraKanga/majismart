import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import Marquee from '../ui/Marquee'
import { steps, marqueeItems } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Solution() {
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
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="solution-section" ref={containerRef} className="py-32 bg-navy-mid px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal">
          <SectionLabel label="The Solution" />
        </div>

        <h2 className="reveal font-display text-5xl md:text-7xl leading-tight mb-20 text-white">
          One app. Nearest vendor.<br />
          <span className="text-white/90">Nearest rider. Water in 60 min.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="reveal group bg-navy-mid/30 border border-white/5 p-10 rounded-2xl hover:bg-navy-card/50 transition-all duration-500 text-center"
            >
              <div className="text-4xl mb-6">
                {step.icon}
              </div>

              <div className="w-12 h-12 rounded-full border border-teal/30 flex items-center justify-center mx-auto mb-6 text-teal-bright font-mono text-xs">
                {step.num}
              </div>

              <h3 className="font-display text-2xl mb-4 group-hover:text-teal-bright transition-colors text-white">
                {step.title}
              </h3>

              <p className="text-sm text-muted/50 leading-relaxed font-light">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-32 relative -mx-6 pt-12 border-t border-white/5">
          <Marquee items={marqueeItems} speed="30s" />
        </div>
      </div>
    </section>
  )
}
