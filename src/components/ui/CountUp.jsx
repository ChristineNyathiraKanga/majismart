import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CountUp({ end = 0, duration = 2, suffix = '' }) {
  const numRef = useRef(null)

  useEffect(() => {
    if (!numRef.current) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.value).toLocaleString()
        }
      },
    })
  }, [end, duration])

  return <span ref={numRef}>0</span>
}
