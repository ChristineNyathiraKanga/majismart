import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PieChart({ data = [] }) {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const svgRef = useRef(null)
  const pathsRef = useRef([])

  const colors = ['#0A9396', '#94D2BD', '#E9C46A', '#2DC653', '#A855F7', '#EC4899']
  const total = data.reduce((sum, item) => sum + item.value, 0)

  let currentAngle = -90

  const segments = data.map((item, idx) => {
    const sliceAngle = (item.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + 45 * Math.cos(startRad)
    const y1 = 50 + 45 * Math.sin(startRad)
    const x2 = 50 + 45 * Math.cos(endRad)
    const y2 = 50 + 45 * Math.sin(endRad)

    const largeArc = sliceAngle > 180 ? 1 : 0
    const pathData = [
      `M 50 50`,
      `L ${x1} ${y1}`,
      `A 45 45 0 ${largeArc} 1 ${x2} ${y2}`,
      `Z`,
    ].join(' ')

    const midAngle = startAngle + sliceAngle / 2
    const midRad = (midAngle * Math.PI) / 180
    const labelX = 50 + 28 * Math.cos(midRad)
    const labelY = 50 + 28 * Math.sin(midRad)
    const percentage = ((item.value / total) * 100).toFixed(0)

    currentAngle = endAngle

    return {
      pathData,
      color: colors[idx % colors.length],
      label: item.label,
      value: item.value,
      percentage,
      labelX,
      labelY,
      idx,
    }
  })

  useEffect(() => {
    if (!svgRef.current) return

    const ctx = gsap.context(() => {
      pathsRef.current.forEach((path, idx) => {
        gsap.from(path, {
          strokeDashoffset: () => {
            const length = path.getTotalLength()
            return length
          },
          opacity: 0,
          duration: 0.8,
          delay: idx * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, svgRef.current)

    return () => ctx.revert()
  }, [data])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="w-full max-w-sm md:max-w-md aspect-square"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(10, 147, 150, 0.15))' }}
      >
        {segments.map((segment) => (
          <g
            key={segment.idx}
            className="cursor-pointer transition-opacity duration-300"
            onMouseEnter={() => setHoveredIdx(segment.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            opacity={hoveredIdx === null || hoveredIdx === segment.idx ? 1 : 0.4}
          >
            <path
              ref={(el) => (pathsRef.current[segment.idx] = el)}
              d={segment.pathData}
              fill={segment.color}
              stroke={segment.color}
              strokeWidth="0.5"
              className="transition-all duration-300 hover:filter hover:brightness-110"
              style={{
                filter:
                  hoveredIdx === segment.idx ? 'brightness(1.2) drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))' : '',
              }}
            />
            {hoveredIdx === segment.idx && (
              <text
                x={segment.labelX}
                y={segment.labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-mono text-white fill-white font-bold"
                fontSize="2.5"
                pointerEvents="none"
              >
                {segment.percentage}%
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-8 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {segments.map((segment) => (
          <div
            key={segment.idx}
            className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm border border-teal/20 hover:border-teal/50 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredIdx(segment.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-white/0 group-hover:ring-white/50 transition-all duration-300"
              style={{ backgroundColor: segment.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-mono text-teal uppercase tracking-wide truncate">
                {segment.label}
              </p>
              {/* <p className="text-sm md:text-base font-display text-white">${segment.value}k</p> */}
            </div>
            {/* <p className="text-xs md:text-sm font-mono text-gold font-bold whitespace-nowrap">
              {segment.percentage}%
            </p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
