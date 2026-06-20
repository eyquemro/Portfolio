import { useState, useCallback, useEffect } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
}

export function GlitchPhoto({ src, alt, className }: Props) {
  const [phase, setPhase] = useState<'intro' | 'idle' | 'click'>('intro')

  useEffect(() => {
    const t = setTimeout(() => setPhase('idle'), 2400)
    return () => clearTimeout(t)
  }, [])

  const triggerClick = useCallback(() => {
    if (phase !== 'idle') return
    setPhase('click')
    setTimeout(() => setPhase('idle'), 1600)
  }, [phase])

  return (
    <div
      className={`relative select-none overflow-hidden ${className ?? ''}`}
      onMouseDown={triggerClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover block" loading="eager" />

      {/* ── INTRO : glitch intense ── */}
      {phase === 'intro' && (
        <>
          {/* Rouge */}
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              filter: 'saturate(0) sepia(1) hue-rotate(-20deg) brightness(2.5)',
              animation: 'gi-red 0.07s steps(5) infinite',
            }} />
          {/* Cyan */}
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              filter: 'saturate(0) sepia(1) hue-rotate(160deg) brightness(2.5)',
              animation: 'gi-cyan 0.09s steps(4) infinite',
            }} />
          {/* Vert phosphore */}
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              filter: 'saturate(0) sepia(1) hue-rotate(100deg) brightness(2.8)',
              opacity: 0.85,
              animation: 'gi-green 0.06s steps(6) infinite',
            }} />
          {/* Magenta */}
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen',
              filter: 'saturate(0) sepia(1) hue-rotate(280deg) brightness(2.2)',
              opacity: 0.7,
              animation: 'gi-white 0.11s steps(3) infinite',
            }} />
          {/* Barres noires de corruption */}
          <div className="absolute inset-0 pointer-events-none" style={{ animation: 'gi-bars 0.09s steps(5) infinite' }} />
          {/* Lignes de scan vertes */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.12) 0px, transparent 1px, transparent 3px)',
              animation: 'gi-scan 0.04s steps(1) infinite',
            }} />
        </>
      )}

      {/* ── CLICK : glitch léger ── */}
      {phase === 'click' && (
        <>
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen', opacity: 0.65,
              filter: 'saturate(0) sepia(1) hue-rotate(-30deg) brightness(1.6)',
              animation: 'gc-red 0.18s steps(2) infinite',
            }} />
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'screen', opacity: 0.65,
              filter: 'saturate(0) sepia(1) hue-rotate(150deg) brightness(1.6)',
              animation: 'gc-cyan 0.22s steps(3) infinite',
            }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.06) 0px, transparent 2px, transparent 6px)',
              animation: 'gi-scan 0.08s steps(1) infinite',
            }} />
        </>
      )}

      <style>{`
        /* ── Intro intense ── */
        @keyframes gi-red {
          0%   { clip-path: inset(3%  0 88% 0); transform: translate(-14px,  1px); }
          20%  { clip-path: inset(55% 0 18% 0); transform: translate( 12px,  0);   }
          40%  { clip-path: inset(22% 0 58% 0); transform: translate(-10px,  3px); }
          60%  { clip-path: inset(75% 0 3%  0); transform: translate( 16px, -1px); }
          80%  { clip-path: inset(40% 0 38% 0); transform: translate( -8px,  2px); }
          100% { clip-path: inset(10% 0 72% 0); transform: translate( 14px,  0);   }
        }
        @keyframes gi-cyan {
          0%   { clip-path: inset(65% 0 8%  0); transform: translate( 13px, 0);   }
          25%  { clip-path: inset(8%  0 75% 0); transform: translate(-12px, 2px); }
          50%  { clip-path: inset(82% 0 2%  0); transform: translate( 10px, 0);   }
          75%  { clip-path: inset(30% 0 48% 0); transform: translate(-16px, 1px); }
          100% { clip-path: inset(48% 0 28% 0); transform: translate( 12px, 0);   }
        }
        @keyframes gi-green {
          0%   { clip-path: inset(8%  0 82% 0); transform: translate(  9px, -2px); }
          17%  { clip-path: inset(45% 0 32% 0); transform: translate(-13px,  0);   }
          33%  { clip-path: inset(68% 0 10% 0); transform: translate( 11px,  2px); }
          50%  { clip-path: inset(18% 0 65% 0); transform: translate( -7px,  0);   }
          67%  { clip-path: inset(85% 0 3%  0); transform: translate( 15px, -1px); }
          83%  { clip-path: inset(32% 0 50% 0); transform: translate( -9px,  0);   }
          100% { clip-path: inset(55% 0 22% 0); transform: translate( 12px,  1px); }
        }
        @keyframes gi-white {
          0%   { clip-path: inset(20% 0 70% 0); transform: translate(-6px, 0); }
          50%  { clip-path: inset(60% 0 15% 0); transform: translate( 8px, 0); }
          100% { clip-path: inset(35% 0 45% 0); transform: translate(-5px, 0); }
        }
        @keyframes gi-bars {
          0%   { background: linear-gradient(transparent 12%, rgba(0,0,0,.95) 12%, rgba(0,0,0,.95) 18%, transparent 18%, transparent 52%, rgba(0,0,0,.95) 52%, rgba(0,0,0,.95) 60%, transparent 60%); }
          20%  { background: linear-gradient(transparent 38%, rgba(0,0,0,.95) 38%, rgba(0,0,0,.95) 44%, transparent 44%); }
          40%  { background: linear-gradient(transparent 4%,  rgba(0,0,0,.95) 4%,  rgba(0,0,0,.95) 9%,  transparent 9%,  transparent 70%, rgba(0,0,0,.95) 70%, rgba(0,0,0,.95) 77%, transparent 77%); }
          60%  { background: linear-gradient(transparent 62%, rgba(0,0,0,.95) 62%, rgba(0,0,0,.95) 70%, transparent 70%); }
          80%  { background: linear-gradient(transparent 25%, rgba(0,0,0,.95) 25%, rgba(0,0,0,.95) 32%, transparent 32%, transparent 80%, rgba(0,0,0,.95) 80%, rgba(0,0,0,.95) 86%, transparent 86%); }
          100% { background: transparent; }
        }
        @keyframes gi-scan {
          0%   { transform: translateY(0);    }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(8px);  }
        }

        /* ── Click léger ── */
        @keyframes gc-red {
          0%   { clip-path: inset(10% 0 80% 0); transform: translate(-6px, 0); }
          50%  { clip-path: inset(60% 0 10% 0); transform: translate( 4px, 0); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 0); }
        }
        @keyframes gc-cyan {
          0%   { clip-path: inset(40% 0 40% 0); transform: translate( 5px, 0); }
          50%  { clip-path: inset(5%  0 85% 0); transform: translate(-4px, 0); }
          100% { clip-path: inset(70% 0 5%  0); transform: translate( 6px, 0); }
        }
      `}</style>
    </div>
  )
}
