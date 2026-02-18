import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import TAMCircles from '../ui/TAMCircles'
import { cities } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Market() {
  const containerRef = useRef(null)
  const cityCardsRef = useRef([])
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'expo.out',
      })

      gsap.from(cityCardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="market-section" ref={containerRef} className="py-32 bg-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={contentRef} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Market Landscape" />
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              A blue ocean in a<br />
              <span className="text-teal-bright italic">global water crisis.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted/60 font-light leading-relaxed border-l border-teal/20 pl-6">
            Starting with Nairobi's high-intent consumer base before moving
            horizontally across the region's emerging metropoles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual TAM Representation */}
          <div className="lg:col-span-6">
            <TAMCircles tam="$1.2B" sam="$300M" som="$45M" />
            <div className="mt-12 flex justify-center gap-12 font-mono text-[9px] uppercase tracking-widest text-muted/40">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full border border-teal" /> <span>TAM: Kenya Market</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal/40" /> <span>SAM: Nairobi Focus</span>
              </div>
            </div>
          </div>

          {/* City Rollout Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cities.map((city, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cityCardsRef.current[idx] = el)}
                  className="p-8 bg-navy-mid/30 border border-white/5 rounded-3xl group hover:bg-navy-card/60 hover:border-teal/30 transition-all duration-500"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold mb-3 opacity-60">
                    {city.phase}
                  </div>
                  <h4 className="font-display text-2xl mb-4 text-white group-hover:text-teal-bright transition-colors">
                    {city.name}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-xs text-teal-light/80 font-medium tracking-tight">{city.pop}</p>
                    <p className="text-[11px] text-muted/40 uppercase tracking-widest">{city.households}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-teal/5 border border-teal/20 rounded-2xl">
              <p className="text-[10px] text-teal-light/60 font-mono leading-relaxed uppercase tracking-[0.1em]">
                Phase 1 Unit Economics: 1,100,000 households in Nairobi →
                5% target penetration = 45k active recurring users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
