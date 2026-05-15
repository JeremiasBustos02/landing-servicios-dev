import { useEffect, useRef, useCallback, useState } from 'react'

const SPACING    = 28
const DOT_R      = 1.6
const RIPPLE_R   = 110
const PUSH       = 2.2
const EASE       = 0.10
const DOT_COLOR  = '22,163,74'
const DESKTOP_BP = 768

export default function MeshWrapper({ children }) {
  const wrapperRef = useRef(null)
  const canvasRef  = useRef(null)
  const dotsRef    = useRef([])
  const mouseRef   = useRef({ x: -9999, y: -9999 })
  const rafRef     = useRef(null)

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BP
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BP}px)`)
    const handler = e => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const buildDots = useCallback((w, h) => {
    const next = []
    for (let x = SPACING / 2; x < w; x += SPACING)
      for (let y = SPACING / 2; y < h; y += SPACING)
        next.push({ ox: x, oy: y, x, y })
    dotsRef.current = next
  }, [])

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

  useEffect(() => {
    const canvas  = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper || !isDesktop) {
      cancelAnimationFrame(rafRef.current)
      return
    }

    const ro = new ResizeObserver(() => {
      canvas.width  = wrapper.offsetWidth
      canvas.height = wrapper.offsetHeight
      buildDots(canvas.width, canvas.height)
    })
    ro.observe(wrapper)

    canvas.width  = wrapper.offsetWidth
    canvas.height = wrapper.offsetHeight
    buildDots(canvas.width, canvas.height)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [isDesktop, buildDots, draw])

  const handleMouseMove = useCallback(e => {
    if (!isDesktop) return
    const r = canvasRef.current?.getBoundingClientRect()
    if (!r) return
    mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
  }, [isDesktop])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="mesh-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isDesktop ? (
        <canvas ref={canvasRef} className="mesh-canvas" aria-hidden="true" />
      ) : (
        <div className="mesh-mobile" aria-hidden="true">
          <svg className="mesh-mobile__svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diag-lines"
                width="20" height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(22,163,74,0.13)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-lines)" />
          </svg>
          <div className="mesh-mobile__shimmer" />
        </div>
      )}

      <div className="mesh-content">{children}</div>
    </div>
  )
}