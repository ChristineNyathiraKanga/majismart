import { useEffect, useRef, useState } from 'react'
import { useScroll } from '../../context/ScrollContext'
import { gsap } from 'gsap'
import Logo from '../ui/Logo'

export default function Nav() {
  const { scrollTo } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simplified entrance
  useEffect(() => {
    gsap.set(navRef.current, { y: -20, opacity: 0 })
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }, [])

  const navLinks = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Market' },
    { id: 'business', label: 'Model' },
    { id: 'competitive', label: 'Moat' },
    { id: 'team', label: 'Team' },
  ]

  const handleNavClick = (id) => {
    scrollTo(`#${id}-section`)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 will-change-transform ${isScrolled
          ? 'py-4 bg-navy-mid/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-8 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <div
            onClick={() => scrollTo('#hero-section')}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <Logo className="w-12 h-auto" />
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.2em] leading-none text-white">MAJISMART</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-teal-light opacity-60">Water OS · Nairobi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-bright transition-all duration-500 group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => handleNavClick('cta')}
              className="px-6 py-2 border border-teal/30 rounded-full font-mono text-[10px] uppercase tracking-widest text-teal-bright hover:bg-teal hover:text-navy hover:border-teal transition-all duration-500"
            >
              Investor Access
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[1001]"
          >
            <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-px' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[998] bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-700 ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'
        }`}>
        {navLinks.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="font-display text-4xl text-white hover:text-teal-bright transition-colors"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick('cta')}
          className="mt-8 px-10 py-4 bg-teal text-navy font-mono text-xs uppercase tracking-widest font-bold rounded-full"
        >
          Get in Touch
        </button>
      </div>
    </>
  )
}
