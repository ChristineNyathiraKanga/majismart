import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TAMCircles({ tam = '$18B', sam = '$4B', som = '$120M' }) {
  const containerRef = useRef(null)
  const ringsRef = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(ringsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.4)',
        transformOrigin: 'center',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-96 flex items-center justify-center">
      {/* Outer ring (TAM) */}
      <div
        ref={(el) => (ringsRef.current[0] = el)}
        className="absolute rounded-full border border-teal/25 bg-teal/4"
        style={{ width: '320px', height: '320px' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase text-teal-light tracking-widest">
          TAM {tam}
        </div>
      </div>

      {/* Middle ring (SAM) */}
      <div
        ref={(el) => (ringsRef.current[1] = el)}
        className="absolute rounded-full border border-teal/25 bg-teal/4"
        style={{ width: '200px', height: '200px' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase text-teal-light tracking-widest text-center">
          SAM {sam}
        </div>
      </div>

      {/* Inner ring (SOM) */}
      <div
        ref={(el) => (ringsRef.current[2] = el)}
        className="absolute rounded-full border border-teal/25 bg-teal/4"
        style={{ width: '80px', height: '80px' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] uppercase text-teal-light tracking-widest text-center">
          SOM {som}
        </div>
      </div>
    </div>
  )
}
