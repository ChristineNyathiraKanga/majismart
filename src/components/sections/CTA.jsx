import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../../context/ScrollContext'
import { ctaStats } from '../../data/content'
import CountUp from '../ui/CountUp'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const ringsRef = useRef([])
  const { scrollTo } = useScroll()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      })

      tl.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1.2,
        ease: 'expo.out',
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    ringsRef.current.forEach((ring, idx) => {
      gsap.to(ring, {
        duration: 20 + idx * 10,
        rotation: 360,
        repeat: -1,
        ease: 'none',
      })

      gsap.to(ring, {
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: idx * 0.5,
      })
    })
  }, [])

  return (
    <section
      id="cta-section"
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center py-32 px-6 bg-navy overflow-hidden"
    >
      {/* Dynamic Cinematic Rings */}
      <div className="absolute inset-0 pointer-events-none">
        {[1000, 1500, 2000].map((size, idx) => (
          <div
            key={idx}
            ref={(el) => (ringsRef.current[idx] = el)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-teal/5 rounded-full"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 border border-gold/30 bg-gold/5 rounded-full px-6 py-2 mb-12">
          <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-[9px] text-gold/80 uppercase tracking-[0.3em]">
            Investment Round: Pre-Seed Open
          </span>
        </div>

        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-tight mb-12">
          Let's scale <br />
          <span className="text-teal-bright italic">better</span> water.
        </h2>

        {/* CTA Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mb-20 max-w-3xl mx-auto">
          {ctaStats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className={`font-display text-4xl md:text-5xl mb-3 tracking-tighter transition-transform group-hover:scale-110 duration-500 ${idx === 0 ? 'text-teal-bright' : idx === 1 ? 'text-gold' : 'text-green'
                }`}>
                {stat.value.includes('$') ? stat.value : <CountUp end={parseInt(stat.value)} />}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-12">
          <button
            onClick={() => window.open('mailto:hello@majismart.co')}
            className="group relative px-12 py-5 bg-teal text-navy font-mono text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10">Secure the Prospectus</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
            <div className="absolute inset-0 bg-teal-bright translate-y-full transition-transform group-hover:translate-y-0" />
          </button>

          <div className="flex flex-col gap-4">
            <a href="mailto:hello@majismart.co" className="font-mono text-xs text-muted/60 hover:text-teal-bright transition-colors uppercase tracking-widest">
              hello@majismart.co
            </a>
            <div className="flex justify-center gap-8 opacity-40">
              <span className="font-mono text-[8px] uppercase tracking-[0.4em]">Nairobi HQ</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.4em]">Kenya 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
