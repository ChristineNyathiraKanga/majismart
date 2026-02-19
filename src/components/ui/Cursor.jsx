import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
    }

    if (isTouchDevice()) {
      setIsTouch(true)
      document.body.style.cursor = 'auto'
      return
    }

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    // Hide cursor initially until mouse moves
    cursor.style.opacity = '0'
    ring.style.opacity = '0'

    // Initialize position
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx - 18
    let ry = my - 18

    cursor.style.left = mx - 5 + 'px'
    cursor.style.top = my - 5 + 'px'
    ring.style.left = rx + 'px'
    ring.style.top = ry + 'px'

    let isHovering = false

    const handleMouseMove = (e) => {
      if (!hasMoved) {
        setHasMoved(true)
        cursor.style.opacity = '1'
        ring.style.opacity = '1'
      }
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

    // Use event delegation for interactive elements
    const interactiveSelectors = 'a, button, .problem-card, .revenue-card, .city-card, .team-card, .moat-item, .channel-item, .feature-card, .stat-card, .step-card, .metric-card, [data-cursor-hover]'

    const handleMouseOver = (e) => {
      const interactive = e.target.closest(interactiveSelectors)
      if (interactive && !isHovering) {
        isHovering = true
        cursor.style.transform = 'scale(2.5)'
        ring.style.width = '60px'
        ring.style.height = '60px'
        ring.style.opacity = '0.5'
      }
    }

    const handleMouseOut = (e) => {
      const interactive = e.target.closest(interactiveSelectors)
      const relatedInteractive = e.relatedTarget?.closest?.(interactiveSelectors)
      if (interactive && !relatedInteractive && isHovering) {
        isHovering = false
        cursor.style.transform = 'scale(1)'
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [hasMoved])

  if (isTouch) return null

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={ringRef} className="cursor-ring" id="cursorRing" />
    </>
  )
}
