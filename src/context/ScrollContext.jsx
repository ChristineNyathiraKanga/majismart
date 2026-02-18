import { createContext, useContext, useRef } from 'react'

const ScrollContext = createContext(null)

export function ScrollProvider({ children }) {
  const lenisRef = useRef(null)

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options)
    } else {
      // Fallback for native scroll if Lenis is not ready
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ScrollContext.Provider value={{ lenisRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider')
  }
  return context
}
