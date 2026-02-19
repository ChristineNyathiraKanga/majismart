import { useEffect, useRef, useState } from 'react'
import { useScroll } from '../../context/ScrollContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from '../ui/Logo'

gsap.registerPlugin(ScrollTrigger)

export default function Nav() {
  const { scrollTo } = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    // Nav scroll effect
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        if (navRef.current) {
          navRef.current.style.background =
            self.progress > 0
              ? 'rgba(10,22,40,0.97)'
              : 'linear-gradient(to bottom, rgba(10,22,40,0.95) 0%, transparent 100%)'
        }
      }
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
    scrollTo(`#${id}`)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        id="mainNav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '20px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.95) 0%, transparent 100%)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.18em',
            color: 'var(--white)',
            textDecoration: 'none',
          }}
          className="nav-logo"
        >
          <Logo className="w-7" />
          MAJI SMART
        </a>

        {/* Desktop Navigation */}
        <ul
          className="nav-links hidden lg:flex"
          style={{
            display: 'flex',
            gap: '36px',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id) }}
                style={{
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--teal-bright)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick('cta')}
          style={{
            background: 'var(--teal)',
            color: 'white',
            border: 'none',
            padding: '9px 22px',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.15s',
          }}
          className="nav-cta hidden lg:block"
          onMouseEnter={(e) => { e.target.style.background = 'var(--teal-bright)'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={(e) => { e.target.style.background = 'var(--teal)'; e.target.style.transform = 'translateY(0)' }}
        >
          Get in Touch
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[1001]"
        >
          <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-px' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[98] bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-700 ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'
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
          className="mt-8 px-10 py-4 bg-teal text-white font-mono text-xs uppercase tracking-widest font-bold rounded"
        >
          Get in Touch
        </button>
      </div>
    </>
  )
}
