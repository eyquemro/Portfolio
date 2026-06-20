import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function KonamiEgg() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<null | 'breach' | 'granted'>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (phase) return
      if (e.key === KONAMI[progress]) {
        const next = progress + 1
        if (next === KONAMI.length) {
          setProgress(0)
          setPhase('breach')
          setTimeout(() => setPhase('granted'), 1400)
          setTimeout(() => setPhase(null), 3600)
        } else {
          setProgress(next)
        }
      } else {
        setProgress(e.key === KONAMI[0] ? 1 : 0)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [progress, phase])

  return (
    <AnimatePresence>
      {phase && (
        <motion.div
          key={phase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{
            background: phase === 'breach'
              ? 'rgba(140, 0, 0, 0.92)'
              : 'rgba(0, 8, 2, 0.95)',
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="text-center"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {phase === 'breach' ? (
              <>
                <motion.p
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                  className="text-5xl font-bold mb-6"
                  style={{ color: '#ff4444', textShadow: '0 0 20px #ff0000' }}
                >
                  ⚠ ACCÈS NON AUTORISÉ ⚠
                </motion.p>
                <p className="text-xl" style={{ color: '#ff8888' }}>
                  INTRUSION DÉTECTÉE — ALERTE NIVEAU CRITIQUE
                </p>
                <p className="text-sm mt-4" style={{ color: '#cc4444' }}>
                  Analyse du vecteur d'attaque en cours...
                </p>
              </>
            ) : (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold mb-4"
                  style={{ color: '#00ff41', textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41' }}
                >
                  ✓ ACCÈS ACCORDÉ
                </motion.p>
                <p className="text-2xl mb-2" style={{ color: '#00cc33' }}>
                  Bienvenue, root
                </p>
                <p className="text-sm mt-4" style={{ color: '#00882a' }}>
                  Konami code validé — vous savez ce que vous faites.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
