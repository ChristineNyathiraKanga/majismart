import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BarChart({ data = [] }) {
  const containerRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    if (!data.length || !containerRef.current) return

    const ctx = gsap.context(() => {
      const maxValue = Math.max(...data.map((d) => d.val || d.value))

      gsap.to(barsRef.current, {
        height: (idx) => {
          const val = data[idx]?.val || data[idx]?.value || 0
          return `${(val / maxValue) * 100}%`
        },
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [data])

  if (!data.length) return null

  const maxValue = Math.max(...data.map((d) => d.val || d.value))

  return (
    <div ref={containerRef} className="w-full">
      <div className="flex items-end gap-2 h-52 border-b border-l border-teal/20 px-3 pb-3">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div
              ref={(el) => (barsRef.current[idx] = el)}
              className={`w-full rounded-t transition-all ${
                item.month === 'M24' || item.month === 'M18'
                  ? 'bg-gradient-to-t from-green/40 to-green/70'
                  : 'bg-gradient-to-t from-teal/40 to-teal/70'
              }`}
              style={{ minHeight: '4px' }}
            />
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
