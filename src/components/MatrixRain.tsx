import { useEffect, useRef } from 'react'

const CHARS = '01ABCDEF<>{}[]()=+-*/\\|;:,.!@#$%&CVEXSSRCESOCSQLRFISTIEMWAZUHIAM'
const FONT_SIZE = 13
const OPACITY = 0.13

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cols = () => Math.floor(canvas.width / FONT_SIZE)
    let drops: number[] = new Array(cols()).fill(0).map(() => Math.random() * -50)

    const onResize = () => {
      resize()
      drops = new Array(cols()).fill(0).map(() => Math.random() * -50)
    }
    window.addEventListener('resize', onResize)

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 8, 2, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE

        // Leading char plus bright
        if (y > 0 && y < canvas.height) {
          ctx.fillStyle = '#afffbf'
          ctx.fillText(char, x, y)

          // Char derrière plus sombre
          if (y - FONT_SIZE > 0) {
            ctx.fillStyle = '#00ff41'
            ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - FONT_SIZE)
          }
        }

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.5
      }
    }

    const interval = setInterval(draw, 45)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: OPACITY,
        pointerEvents: 'none',
      }}
    />
  )
}
