import { useEffect, useRef, useState } from "react"
import { useScroll } from "../../context/ScrollContext"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Logo from "../ui/Logo"

gsap.registerPlugin(ScrollTrigger)

export default function Nav() {
  const { scrollTo } = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        if (navRef.current) {
          navRef.current.style.background =
            self.progress > 0
              ? "rgba(10,22,40,0.97)"
              : "linear-gradient(to bottom, rgba(10,22,40,0.95) 0%, transparent 100%)"
        }
        navRef.current.style.backdropFilter = "blur(8px)"
      },
    })
  }, [])

  const navLinks = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "market", label: "Market" },
    { id: "business", label: "Model" },
    { id: "competitive", label: "Moat" },
    { id: "team", label: "Team" },
  ]

  const handleNavClick = (id) => {
    scrollTo(`#${id}`)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("#hero")
            }}
            className="flex items-center gap-3 text-white font-semibold tracking-[0.18em] text-sm"
          >
            <Logo className="w-7" />
            MAJI SMART
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.id)
                  }}
                  className="text-xs uppercase tracking-widest text-muted hover:text-teal-bright transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 relative z-[60]"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center gap-10 transform transition-all duration-500 ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {navLinks.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="text-3xl text-white hover:text-teal-bright transition-colors duration-200"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
