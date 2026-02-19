import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PieChart from '../ui/PieChart'
import { useOfFundsData } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function UseOfFunds() {
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

  return (
    <section
      id="use-of-funds"
      ref={containerRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative flex flex-col justify-center bg-navy"
    >
      {/* Header */}
          <div className="font-mono text-[0.65rem] tracking-[0.3em] text-teal uppercase mb-4 opacity-80 reveal">
            The Ask
          </div>

          <div className="mb-6 reveal">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white">
              Use of Funds<br />
              <p className="text-sm md:text-base lg:text-lg font-body text-white leading-relaxed">
              Raising <span className="text-gold font-display text-lg md:text-xl">$100,000</span> for{' '}
              <span className="text-teal font-display text-lg md:text-xl">10% equity</span> ·{' '}
              <span className="text-muted">6-month Nairobi pilot runway</span>
            </p>

            </h2>
          </div>



        {/* Chart Section */}
        <div className="reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <PieChart data={useOfFundsData} />
            </div>

            {/* Summary Stats */}
            <div className="space-y-4">
              <div className="reveal">
                <p className="font-mono text-xs md:text-sm tracking-wide text-teal uppercase mb-6 opacity-80">
                  Fund Allocation Breakdown
                </p>
              </div>

              {useOfFundsData.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal p-4 md:p-5 rounded-lg border border-teal/20 hover:border-teal/50 transition-all duration-300 hover:bg-navy-card/30 group cursor-default"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-body text-sm md:text-base font-semibold text-white mb-1 group-hover:text-teal transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs md:text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-display text-lg md:text-xl text-gold font-bold">
                        ${item.value}k
                      </p>
                      <p className="font-mono text-xs text-teal mt-1">{((item.value / 100) * 100).toFixed(0)}%</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="reveal pt-4 mt-4 border-t border-teal/20">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm text-teal uppercase tracking-wide">Total Raise</p>
                  <p className="font-display text-2xl font-bold text-gold">$100k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
