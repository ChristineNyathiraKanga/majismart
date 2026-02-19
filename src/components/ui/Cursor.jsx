import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

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

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 5 + 'px'
      cursor.style.top = my - 5 + 'px'
    }

    const animateCursor = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animateCursor)
    }
    animateCursor()

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2.5)'
      ring.style.width = '60px'
      ring.style.height = '60px'
      ring.style.opacity = '0.5'
    }

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.opacity = '1'
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Add interactive element listeners
    const interactiveElements = document.querySelectorAll(
      'a, button, .problem-card, .revenue-card, .city-card, .team-card, .moat-item, .channel-item'
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={ringRef} className="cursor-ring" id="cursorRing" />
    </>
  )
}
