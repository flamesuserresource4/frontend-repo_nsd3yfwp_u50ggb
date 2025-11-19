import { useEffect, useMemo, useRef, useState } from 'react'

/*
 Scroll-reactive background
 - Conic gradient halo rotates with scroll
 - Two gradient blobs with parallax + scale
 - Grid texture shifts subtly
 - Vignette for readability
 - Section-aware hue shifting (e.g., pink on portfolio, emerald on contact)
*/
export default function ScrollBackground() {
  const [progress, setProgress] = useState(0)
  const [currentHue, setCurrentHue] = useState(220) // base blue-ish
  const targetHueRef = useRef(220)
  const rafRef = useRef(0)

  // Scroll progress 0..1
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = (h.scrollHeight - h.clientHeight) || 1
      const p = Math.min(1, Math.max(0, window.scrollY / max))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Section-aware hue target via IntersectionObserver
  useEffect(() => {
    const idToHue = (id) => {
      switch (id) {
        case 'portfolio': return 330 // pink
        case 'contact': return 160 // emerald
        case 'services': return 210 // blue
        case 'pricing': return 50 // amber
        case 'testimonials': return 260 // violet
        case 'about': return 200 // cyan-blue
        case 'process': return 190 // teal
        case 'hero': return 220
        default: return 220
      }
    }

    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (sections.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      // pick the most visible entry
      let best = null
      let bestRatio = 0
      for (const e of entries) {
        if (e.isIntersecting && e.intersectionRatio > bestRatio) {
          best = e
          bestRatio = e.intersectionRatio
        }
      }
      if (best) {
        const id = best.target.getAttribute('id') || ''
        targetHueRef.current = idToHue(id)
      }
    }, {
      root: null,
      // favor center of viewport
      rootMargin: '-30% 0px -30% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Smoothly ease currentHue toward targetHue
  useEffect(() => {
    const ease = () => {
      const current = currentHue
      const target = targetHueRef.current
      // shortest hue distance around the circle
      let delta = ((target - current + 540) % 360) - 180
      const next = current + delta * 0.06 // easing factor
      setCurrentHue(next)
      rafRef.current = requestAnimationFrame(ease)
    }
    rafRef.current = requestAnimationFrame(ease)
    return () => cancelAnimationFrame(rafRef.current)
  }, [currentHue])

  // Derived transforms
  const t = useMemo(() => {
    const rotate = progress * 360
    const shiftX = (progress * 60) - 30 // -30 .. 30px
    const shiftY = Math.sin(progress * Math.PI * 2) * 28
    const scaleA = 1 + progress * 0.12
    const scaleB = 1 + (1 - progress) * 0.1
    const hue = (currentHue + progress * 8) % 360 // small extra motion
    return { rotate, shiftX, shiftY, scaleA, scaleB, hue }
  }, [progress, currentHue])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Conic gradient halo (rotates + hue) */}
      <div
        className="absolute inset-[-20%] opacity-[0.32]"
        style={{
          background: `conic-gradient(from ${t.rotate}deg at 50% 45%, hsla(${t.hue},90%,60%,0.30), hsla(${(t.hue+80)%360},90%,62%,0.30), hsla(${(t.hue+160)%360},80%,55%,0.28), hsla(${(t.hue+240)%360},85%,62%,0.30), hsla(${t.hue},90%,60%,0.30))`,
          filter: `saturate(1.1)`
        }}
      />

      {/* Gradient blobs (parallax + subtle scale) */}
      <div
        className="absolute -top-56 -left-44 h-[46rem] w-[46rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(closest-side, hsla(${(t.hue+220)%360},95%,70%,0.55), rgba(0,0,0,0) 70%)`,
          transform: `translate3d(${t.shiftX}px, ${t.shiftY}px, 0) scale(${t.scaleA})`,
          filter: `saturate(1.05)`
        }}
      />
      <div
        className="absolute -bottom-60 -right-56 h-[44rem] w-[44rem] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(closest-side, hsla(${(t.hue+20)%360},95%,68%,0.50), rgba(0,0,0,0) 70%)`,
          transform: `translate3d(${-t.shiftX * 0.85}px, ${-t.shiftY * 0.65}px, 0) scale(${t.scaleB})`
        }}
      />

      {/* Subtle grid with parallax shift */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          transform: `translate(${t.shiftX * 0.6}px, ${t.shiftY * 0.5}px)`,
          opacity: 0.26
        }}
      />

      {/* Soft radial vignette for readability */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(80% 55% at 50% 10%, rgba(2,6,23,0.08), rgba(2,6,23,0.0) 60%, rgba(2,6,23,0.10))'
      }} />
    </div>
  )
}
