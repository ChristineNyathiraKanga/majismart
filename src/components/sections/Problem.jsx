import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { problems } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const bgTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background text
      gsap.to(bgTextRef.current, {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      })

      // Cards reveal
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        rotationX: -15,
        stagger: 0.2,
        duration: 1.2,
        ease: 'expo.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="problem-section"
      ref={containerRef}
      className="relative py-32 bg-navy overflow-hidden px-6"
    >
      {/* Background Cinematic Text */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.03] z-0"
      >
        <span className="font-display text-[30vw] leading-none uppercase">The Crisis. The Gap. The Crisis.</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLabel label="The Problem" />

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[1.1] max-w-2xl">
            Water is everywhere —<br />
            <span className="text-teal-bright">reliable, safe</span> water is not.
          </h2>
          <p className="text-muted text-lg max-w-md pb-4 border-l border-teal/20 pl-6">
            Kenya's water infrastructure is fragmented, leaving millions to rely
            on informal vendors with zero quality accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative bg-navy-mid/40 backdrop-blur-sm border border-white/5 p-10 overflow-hidden transition-all hover:bg-navy-card/60 hover:border-teal/30"
            >
              {/* Animated highlight */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-teal transition-all duration-500 group-hover:h-full" />

              <div className="relative z-10">
                <div className={`font-display text-7xl font-bold mb-6 leading-none tracking-tighter ${problem.isRed ? 'text-red-400' :
                    problem.isGold ? 'text-gold' :
                      'text-teal-bright'
                  }`}>
                  {problem.num}
                </div>

                <div className="font-mono text-[9px] uppercase text-teal tracking-[0.3em] mb-4">
                  {problem.tag}
                </div>

                <h3 className="font-display text-2xl mb-4 group-hover:text-teal-bright transition-colors">
                  {problem.title}
                </h3>

                <p className="text-sm text-muted/60 leading-relaxed font-light">
                  {problem.body}
                </p>
              </div>

              {/* Subtle grid background for card */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
