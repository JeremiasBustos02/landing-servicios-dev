import { useEffect, useRef, useCallback } from 'react'
import '../MeshWrapper.css'

const SPACING   = 28
const DOT_R     = 1.6
const RIPPLE_R  = 110
const PUSH      = 2.2
const EASE      = 0.10
const DOT_COLOR = '22,163,74'

export default function MeshWrapper({ children }) {
  const canvasRef  = useRef(null)
  const dotsRef    = useRef([])
  const mouseRef   = useRef({ x: -9999, y: -9999 })
  const rafRef     = useRef(null)
  const wrapperRef = useRef(null)

  /* ── Construye la grilla de puntos ── */
  const buildDots = useCallback((w, h) => {
    const next = []
    for (let x = SPACING / 2; x < w; x += SPACING)
      for (let y = SPACING / 2; y < h; y += SPACING)
        next.push({ ox: x, oy: y, x, y })
    dotsRef.current = next
  }, [])

  /* ── Loop de animación ── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const { width: w, height: h } = canvas
    const { x: mx, y: my } = mouseRef.current

    ctx.clearRect(0, 0, w, h)

    for (const d of dotsRef.current) {
      const dx   = d.x - mx
      const dy   = d.y - my
      const dist = Math.sqrt(dx * dx + dy * dy)

      let scale   = 1
      let opacity = 0.22

      if (dist < RIPPLE_R && dist > 0) {
        const t  = 1 - dist / RIPPLE_R
        scale    = 1 + t * 3.2
        opacity  = 0.22 + t * 0.62
        d.x     += (dx / dist) * t * -PUSH
        d.y     += (dy / dist) * t * -PUSH
      } else {
        d.x += (d.ox - d.x) * EASE
        d.y += (d.oy - d.y) * EASE
      }

      ctx.beginPath()
      ctx.arc(d.x, d.y, DOT_R * scale, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${DOT_COLOR},${opacity.toFixed(2)})`
      ctx.fill()
    }

    rafRef.current = requestAnimationFrame(draw)
  }, [])

  /* ── Resize ── */
  useEffect(() => {
    const canvas  = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ro = new ResizeObserver(() => {
      const { offsetWidth: w, offsetHeight: h } = wrapper
      canvas.width  = w
      canvas.height = h
      buildDots(w, h)
    })

    ro.observe(wrapper)

    /* Primer render */
    const w = wrapper.offsetWidth
    const h = wrapper.offsetHeight
    canvas.width  = w
    canvas.height = h
    buildDots(w, h)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [buildDots, draw])

  /* ── Mouse / Touch ── */
  const handleMouseMove = useCallback(e => {
    const r = canvasRef.current?.getBoundingClientRect()
    if (!r) return
    mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 }
  }, [])

  const handleTouchMove = useCallback(e => {
    const r = canvasRef.current?.getBoundingClientRect()
    if (!r) return
    const touch = e.touches[0]
    mouseRef.current = { x: touch.clientX - r.left, y: touch.clientY - r.top }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="dot-grid-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="dot-grid-canvas" aria-hidden="true" />
      <div className="dot-grid-content">
        {children}
      </div>
    </div>
  )
}