import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiRootme, SiTryhackme  } from "react-icons/si"
import { GlitchPhoto } from '../GlitchPhoto'

const SUBTITLE = 'Architecte en Cybersécurité'

export function Hero() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setTyped(SUBTITLE.slice(0, i))
      if (i >= SUBTITLE.length) { clearInterval(timer); setDone(true) }
    }, 55)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-[80vh] flex items-center relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Romain Eyquem
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {typed}
              <span style={{
                opacity: done ? 0 : 1,
                animation: done ? 'none' : 'blink 1s step-end infinite',
                color: '#00ff41',
              }}>_</span>
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Conception et déploiement d'architectures de sécurité en environnements critiques — SOC, SIEM, IAM, segmentation réseau. Expertise en sécurité offensive et défensive, investigation numérique et conformité ANSSI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/eyquemro"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/romain-e-52816b1a3"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.root-me.org/eyquemro"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button"
              >
                <SiRootme  className="w-5 h-5" />
                <span>Root-Me</span>
              </a>
              <a
                href="https://tryhackme.com/p/eyquemro"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button"
              >
                <SiTryhackme  className="w-5 h-5" />
                <span>TryHackMe</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 rounded-full" style={{
                boxShadow: '0 0 40px rgba(0,255,65,0.12)',
              }} />
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: '1px solid rgba(0,255,65,0.4)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,65,0.8)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(0,255,65,0.25)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,65,0.4)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <GlitchPhoto
                  src="/profil.jpg"
                  alt="Photo de profil"
                  className="rounded-full w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 