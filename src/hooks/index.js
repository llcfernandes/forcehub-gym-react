import { useEffect, useRef, useState } from 'react'

/* Scroll reveal — adiciona .visible quando elemento entra na viewport */
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stat-cell')
      .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

/* Contador animado com IntersectionObserver */
export function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let current = 0
      const step = 16
      const timer = setInterval(() => {
        current = Math.min(current + Math.ceil(target / (duration / step)), target)
        setCount(current)
        if (current >= target) clearInterval(timer)
      }, step)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])
  return [count, ref]
}
