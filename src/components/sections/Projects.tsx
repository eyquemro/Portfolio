import { motion } from 'framer-motion'

const projects = [
  {
    title: "Détection d'Intrusion avec Wazuh",
    description: "Mise en place et configuration d'un SIEM Wazuh pour la détection d'intrusions et la surveillance de la sécurité en temps réel.",
    tags: ["SIEM", "Wazuh", "SOC", "Détection"],
    link: "#"
  },
  {
    title: "Audit de Sécurité Web",
    description: "Réalisation d'audits de sécurité sur des applications web avec méthodologie OWASP et outils spécialisés.",
    tags: ["Pentest", "OWASP", "Web", "Audit"],
    link: "#"
  },
  {
    title: "Automatisation Sécurité",
    description: "Développement de scripts Python pour l'automatisation des tâches de sécurité et l'analyse des vulnérabilités.",
    tags: ["Python", "Automatisation", "Sécurité", "DevSecOps"],
    link: "https://github.com/eyquemro"
  },
  {
    title: "Infrastructure Sécurisée",
    description: "Conception et déploiement d'une infrastructure réseau sécurisée avec pare-feu, IDS/IPS et surveillance.",
    tags: ["Infrastructure", "Réseau", "Sécurité", "Monitoring"],
    link: "#"
  }
]

export function Projects() {
  return (
    <section id="projets" className="py-20">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projets & Réalisations
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="cyber-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 cyber-text">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-sm bg-muted rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Voir le projet
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com/eyquemro"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
} 