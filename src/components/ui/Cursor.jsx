import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = () => {
      return (
        (navigator.maxTouchPoints || navigator.msMaxTouchPoints) > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
    }

    if (isTouchDevice()) {
      setIsVisible(false)
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleInteractiveEnter = () => setIsHovering(true)
    const handleInteractiveLeave = () => setIsHovering(false)

    // Animate ring with lag
    const animateRing = () => {
      const dx = mouseX - ringX
      const dy = mouseY - ringY
      const lag = 0.12

      ringX += dx * lag
      ringY += dy * lag

      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      requestAnimationFrame(animateRing)
    }

    animateRing()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add interactive element listeners
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractiveEnter)
      el.addEventListener('mouseleave', handleInteractiveLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveEnter)
        el.removeEventListener('mouseleave', handleInteractiveLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed w-2.5 h-2.5 bg-teal-bright rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 z-50 ${
          isHovering ? 'scale-[2.5]' : 'scale-100'
        }`}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed border border-teal rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-100 z-50 ${
          isHovering ? 'w-14 h-14' : 'w-9 h-9'
        }`}
      />
    </>
  )
}
