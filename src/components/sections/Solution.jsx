import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Solution() {
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

  const steps = [
    { num: '01', icon: '📱', title: 'Order', body: "Choose brand or 'best value'. Select quantity (min 1×20L). Pay via M-Pesa or card." },
    { num: '02', icon: '📍', title: 'Match', body: 'Algorithm routes to nearest stocked, verified vendor + nearest available rider.' },
    { num: '03', icon: '🏍️', title: 'Dispatch', body: 'Bodaboda or e-bike rider picks up. Real-time GPS tracking sent to customer.' },
    { num: '04', icon: '✅', title: 'Delivered', body: 'Quality-verified water arrives. Ratings collected. Refill subscription optionally activated.', isGreen: true },
  ]

  const marqueeItems = [
    'Water-specific infrastructure:',
    'Vendor Verification',
    'Authenticity Controls',
    'Scheduled Refills',
    'SLA-grade supply',
    'City-by-City Network Moat'
  ]

  return (
    <section
      id="solution"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy-mid overflow-hidden"
    >
      <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
        The Solution
      </div>

      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-12 lg:mb-16 max-w-[800px] reveal">
        One app. Nearest vendor.<br />Nearest rider. Water in 60 min.
      </h2>

      <div className="solution-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-10 relative">
        {/* Connecting line - hidden on mobile */}
        <div className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-teal to-green" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="step-card px-4 lg:px-6 pb-8 lg:pb-10 text-center relative z-10 reveal"
          >
            <div
              className={`w-14 h-14 rounded-full bg-navy border-2 flex items-center justify-center font-mono text-sm mx-auto mb-6 lg:mb-7 transition-all ${
                step.isGreen ? 'border-green text-green' : 'border-teal text-teal-bright'
              }`}
            >
              {step.num}
            </div>
            <span className="text-4xl mb-4 block">{step.icon}</span>
            <div className={`font-display text-xl lg:text-[1.3rem] mb-3 ${step.isGreen ? 'text-green' : 'text-teal-bright'}`}>
              {step.title}
            </div>
            <p className="text-[0.83rem] text-white/70 leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-3.5 bg-teal/5 mt-12">
        <div className="marquee-track flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className={`font-mono text-xs tracking-widest uppercase ${
                idx % marqueeItems.length === 0 ? 'text-teal' : 'text-muted'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
