import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import Marquee from '../ui/Marquee'
import { steps, marqueeItems } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Solution() {
  const containerRef = useRef(null)
  const stepsRef = useRef([])
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power4.out',
      })

      // Step cards staggered reveal
      stepsRef.current.forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 90%',
          },
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        })

        // Inner icon animation
        const icon = step.querySelector('.step-icon-content')
        if (icon) {
          gsap.to(icon, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.5,
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="solution-section" ref={containerRef} className="py-32 bg-navy-mid relative overflow-hidden">
      {/* Dynamic Background Water Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-navy to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="The Solution" />
            <h2 ref={titleRef} className="font-display text-5xl md:text-7xl leading-tight">
              One app.<br />
              <span className="text-green italic">Full Transparency.</span>
            </h2>
          </div>
          <div className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l-2 border-green/30 pl-6 mb-2">
            We bridge the infrastructure gap with a digital-first layer, connecting
            vetted supply with high-density household demand.
          </div>
        </div>

        {/* Steps display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepsRef.current[idx] = el)}
              className="group flex flex-col items-center text-center p-8 bg-navy/40 border border-white/5 rounded-2xl transition-all hover:bg-navy-card/80 hover:border-teal/20"
            >
              <div className="mb-8 relative">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-transform group-hover:scale-110 duration-500 ${step.isGreen ? 'border-green text-green' : 'border-teal/30 text-teal-bright'
                  }`}>
                  <span className="font-mono text-xs font-bold">{step.num}</span>
                </div>
                <div className="step-icon-content absolute -bottom-2 -right-2 text-4xl pointer-events-none drop-shadow-xl">
                  {step.icon}
                </div>
              </div>

              <h3 className={`font-display text-2xl mb-4 ${step.isGreen ? 'text-green' : 'text-teal-bright'
                }`}>
                {step.title}
              </h3>

              <p className="text-sm text-muted/70 leading-relaxed font-light">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee Segment */}
        <div className="relative -mx-6 py-12 border-y border-white/5 bg-navy/20">
          <Marquee items={marqueeItems} speed="30s" />
        </div>
      </div>
    </section>
  )
}
