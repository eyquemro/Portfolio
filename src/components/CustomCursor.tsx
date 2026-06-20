import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    document.body.style.cursor = 'none'

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, input, textarea, [role="button"]')) setHovering(true)
    }
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, input, textarea, [role="button"]')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  const size = hovering ? 28 : clicking ? 14 : 20
  const color = '#00ff41'

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 999999,
        transition: 'width 0.12s, height 0.12s',
      }}
    >
      {/* Ligne horizontale */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: 1, background: color,
        transform: 'translateY(-50%)',
        boxShadow: `0 0 5px ${color}`,
      }} />
      {/* Ligne verticale */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0,
        width: 1, background: color,
        transform: 'translateX(-50%)',
        boxShadow: `0 0 5px ${color}`,
      }} />
      {/* Point central */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: clicking ? 5 : 3, height: clicking ? 5 : 3,
        background: color,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        boxShadow: `0 0 8px ${color}`,
        transition: 'width 0.1s, height 0.1s',
      }} />
    </div>
  )
}
