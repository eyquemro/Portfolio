import { motion } from 'framer-motion'
import { FaAward, FaShieldHalved } from 'react-icons/fa6'
import { RootMeStats } from '../RootMeStats'
import { SiRootme, SiTryhackme } from 'react-icons/si'

const certifications = [
  {
    name: "CEH",
    title: "Certified Ethical Hacker",
    organization: "EC-Council",
    status: "En cours",
    description: "Certification axée sur les techniques de tests d'intrusion : reconnaissance, exploitation, post‑exploitation et méthodologies d'évaluation.",
    icon: FaShieldHalved
  },
  {
    name: "NSE 2",
    title: "Fortinet NSE 2 — Fundamentals in Cybersecurity",
    organization: "Fortinet",
    status: "Validée",
    description: "Introduction aux concepts fondamentaux de la cybersécurité : types de menaces, principes de sécurité réseau et bonnes pratiques.",
    icon: FaAward
  },
  {
    name: "NSE 3",
    title: "Fortinet NSE 3 — Certified Associate",
    organization: "Fortinet",
    status: "Validée",
    description: "Connaissances sur l'architecture et les contrôles des solutions Fortinet, ainsi que leur mise en œuvre pour protéger les environnements réseau.",
    icon: FaAward
  }
]

const platforms = [
  {
    name: "Root-Me",
    description: "Plateforme de challenges en cybersécurité",
    link: "https://www.root-me.org/eyquemro",
    component: RootMeStats,
    icon: SiRootme
  },
  {
    name: "TryHackMe",
    description: "Formation pratique en cybersécurité",
    link: "https://tryhackme.com/p/eyqueumro",
    icon: SiTryhackme,
    stats: [
      { label: "Rang", value: "Top 1%" },
      { label: "Titre", value: "LEGEND" },
      { label: "Rooms", value: "150+" }
    ]
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Plateformes
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gradient"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Certifications Professionnelles
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="cyber-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="text-xl font-bold">{cert.name}</h4>
                      <p className="text-lg text-primary">{cert.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gradient"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Plateformes Cyber
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => {
                const Icon = platform.icon ?? FaAward
                return (
                  <motion.div
                    key={platform.name}
                    className="cyber-card group hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                      <div>
                        <h4 className="text-xl font-bold">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                    </div>
                    
                    {platform.component ? (
                      <platform.component username="eyquemro" />
                    ) : platform.stats && (
                      <div className="grid grid-cols-3 gap-4">
                        {platform.stats.map((stat) => (
                          <div key={stat.label} className="bg-muted/30 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}