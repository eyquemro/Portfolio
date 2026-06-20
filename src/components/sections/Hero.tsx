import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiRootme, SiTryhackme  } from "react-icons/si"
import { GlitchPhoto } from '../GlitchPhoto'

export function Hero() {
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
              Architecte en Cybersécurité
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative mx-auto"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <GlitchPhoto
                  src="/profil.jpg"
                  alt="Photo de profil"
                  className="rounded-full w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 