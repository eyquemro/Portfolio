import { useState, useCallback } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
}

export function GlitchPhoto({ src, alt, className }: Props) {
  const [glitching, setGlitching] = useState(false)

  const triggerGlitch = useCallback(() => {
    if (glitching) return
    setGlitching(true)
    setTimeout(() => setGlitching(false), 1800)
  }, [glitching])

  return (
    <div
      className={`relative select-none ${className ?? ''}`}
      onMouseDown={triggerGlitch}
      style={{ cursor: 'pointer' }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="eager" />

      {glitching && (
        <>
          {/* Calque rouge décalé */}
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.6,
              transform: 'translate(-4px, 2px)',
              filter: 'saturate(0) sepia(1) hue-rotate(-30deg) brightness(1.5)',
              animation: 'glitch-r 0.18s steps(2) infinite',
            }}
          />
          {/* Calque cyan décalé */}
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.6,
              transform: 'translate(4px, -2px)',
              filter: 'saturate(0) sepia(1) hue-rotate(150deg) brightness(1.5)',
              animation: 'glitch-c 0.22s steps(3) infinite',
            }}
          />
          {/* Bandes de glitch */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.06) 0px, transparent 2px, transparent 6px)',
              animation: 'glitch-scan 0.08s steps(1) infinite',
            }}
          />
        </>
      )}

      <style>{`
        @keyframes glitch-r {
          0%   { clip-path: inset(10% 0 80% 0); transform: translate(-6px, 0); }
          50%  { clip-path: inset(60% 0 10% 0); transform: translate(4px, 0); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 0); }
        }
        @keyframes glitch-c {
          0%   { clip-path: inset(40% 0 40% 0); transform: translate(5px, 0); }
          50%  { clip-path: inset(5% 0 85% 0);  transform: translate(-4px, 0); }
          100% { clip-path: inset(70% 0 5% 0);  transform: translate(6px, 0); }
        }
        @keyframes glitch-scan {
          0%   { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  )
}
