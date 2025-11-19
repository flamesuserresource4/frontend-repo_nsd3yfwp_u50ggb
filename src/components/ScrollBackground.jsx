import { useEffect, useMemo, useState } from 'react'

/*
 Scroll-reactive background
 - Soft gradient blobs that subtly move/scale on scroll
 - Conic gradient halo rotates with progress
 - Grid texture with parallax shift
 - Vignette to keep content readable
*/
export default function ScrollBackground() {
  const [progress, setProgress] = useState(0)

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

  // Derived transforms
  const t = useMemo(() => {
    const rotate = progress * 360
    const shiftX = (progress * 40) - 20 // -20px .. 20px
    const shiftY = Math.sin(progress * Math.PI * 2) * 24
    const scaleA = 1 + progress * 0.08
    const scaleB = 1 + (1 - progress) * 0.06
    const hue = progress * 60 // 0..60deg subtle hue shift
    return { rotate, shiftX, shiftY, scaleA, scaleB, hue }
  }, [progress])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Conic gradient halo (rotates) */}
      <div
        className="absolute inset-[-20%] opacity-[0.20]"
        style={{
          background: `conic-gradient(from ${t.rotate}deg at 50% 45%, rgba(59,130,246,0.35), rgba(236,72,153,0.35), rgba(16,185,129,0.3), rgba(99,102,241,0.35), rgba(59,130,246,0.35))`,
          filter: `hue-rotate(${t.hue}deg)`
        }}
      />

      {/* Gradient blobs (parallax + subtle scale) */}
      <div
        className="absolute -top-48 -left-40 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, rgba(99,102,241,0.55), rgba(99,102,241,0) 70%)',
          transform: `translate3d(${t.shiftX}px, ${t.shiftY}px, 0) scale(${t.scaleA})`,
          filter: `saturate(1.05) hue-rotate(${t.hue / 2}deg)`
        }}
      />
      <div
        className="absolute -bottom-56 -right-48 h-[40rem] w-[40rem] rounded-full blur-[72px]"
        style={{
          background: 'radial-gradient(closest-side, rgba(236,72,153,0.50), rgba(236,72,153,0) 70%)',
          transform: `translate3d(${-t.shiftX * 0.8}px, ${-t.shiftY * 0.6}px, 0) scale(${t.scaleB})`,
          filter: `hue-rotate(${t.hue}deg)`
        }}
      />

      {/* Subtle grid with parallax shift */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          transform: `translate(${t.shiftX * 0.5}px, ${t.shiftY * 0.4}px)`,
          opacity: 0.25
        }}
      />

      {/* Soft radial vignette for readability */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(80% 55% at 50% 10%, rgba(2,6,23,0.06), rgba(2,6,23,0.0) 60%, rgba(2,6,23,0.06))'
      }} />
    </div>
  )
}
