import { useEffect, useRef } from 'react'
import { NeatGradient } from '@firecms/neat'

export default function CinematicBackground({ activeTab }: { activeTab: 'software' | 'cyber' }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const themeRoot = document.querySelector('[data-theme]') || document.documentElement
    const styles = getComputedStyle(themeRoot)

    const getVar = (name: string) => styles.getPropertyValue(name).trim()
    const colorMid = getVar('--shiny-mid') || '#0b2551'
    const colorAccent = getVar('--shiny-accent') || '#a4f4fd'

    const isMobile = window.innerWidth < 768

    const gradient = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: '#000000', enabled: true },
        { color: colorMid, enabled: true },
        { color: colorMid, enabled: true },
        { color: colorAccent, enabled: true }, 
        { color: '#050505', enabled: true }, 
      ],
      speed: isMobile ? 0.5 : 2,
      horizontalPressure: isMobile ? 3 : 5,
      verticalPressure: isMobile ? 4 : 7,
      waveFrequencyX: isMobile ? 1 : 2,
      waveFrequencyY: isMobile ? 1 : 2,
      waveAmplitude: isMobile ? 4 : 8,
      shadows: isMobile ? 2 : 5,
      highlights: isMobile ? 4 : 9, 
      colorBrightness: 1,
      colorSaturation: 6,
      wireframe: false,
      colorBlending: 10,
      backgroundColor: colorMid,
      backgroundAlpha: 1,
      grainScale: isMobile ? 1 : 3,
      grainSparsity: 0,
      grainIntensity: isMobile ? 0 : 0.3,
      grainSpeed: isMobile ? 0 : 1,
      resolution: isMobile ? 0.6 : 1,
      yOffset: 0,
      yOffsetWaveMultiplier: 5.5,
      yOffsetColorMultiplier: 5.2,
      yOffsetFlowMultiplier: 6,
      flowDistortionA: 3.7,
      flowDistortionB: 1.4,
      flowScale: 2.9,
      flowEase: 0.32,
      flowEnabled: false,
      enableProceduralTexture: false,
      textureVoidLikelihood: 0.27,
      textureVoidWidthMin: 60,
      textureVoidWidthMax: 420,
      textureBandDensity: 1.2,
      textureColorBlending: 0.06,
      textureSeed: 333,
      textureEase: 1,
      proceduralBackgroundColor: '#0E0707',
      textureShapeTriangles: 20,
      textureShapeCircles: 15,
      textureShapeBars: 15,
      textureShapeSquiggles: 10,
      domainWarpEnabled: false,
      domainWarpIntensity: 0,
      domainWarpScale: 3,
      vignetteIntensity: 0,
      vignetteRadius: 0.8,
      fresnelEnabled: false,
      fresnelPower: 2,
      fresnelIntensity: 0.5,
      fresnelColor: '#FFFFFF',
      iridescenceEnabled: false,
      iridescenceIntensity: 0.5,
      iridescenceSpeed: 1,
      bloomIntensity: 0,
      bloomThreshold: 0.7,
      chromaticAberration: 0,
    })

    const observer = new MutationObserver(() => {
      const branding = document.querySelector('[class*="neat"], [class*="firecms"]');
      if (branding && branding.tagName === 'A') {
        branding.remove();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      gradient.destroy()
      observer.disconnect()
    }
  }, [activeTab])

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} id="gradient" className="w-full h-full opacity-30 mix-blend-screen"></canvas>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0c0c_80%)] opacity-80 pointer-events-none"></div>
      </div>
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
    </>
  )
}
