import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCalendarCheck } from 'react-icons/fa6'
import { IconType } from 'react-icons'

interface Experience {
  type: 'education' | 'work' | 'event';
  icon: IconType;
  title: string;
  organization: string;
  organizationLink?: string;
  period: string;
  description?: string;
  location?: string;
  tags?: string[];
  tasks?: string[];
}

const educationExperiences: Experience[] = [
  {
    type: 'education',
    icon: FaGraduationCap,
    title: "Mastère Spécialisé Expert Forensic et Cybersécurité",
    organization: "UTT - Université de Technologie de Troyes",
    organizationLink: "https://www.utt.fr/formations/mastere-specialise/expert-en-cybersecurite",
    period: "2023 - 2024",
    description: "Formation spécialisée en investigation numérique et réponse aux incidents de sécurité. Expertise en analyse forensique, threat hunting, et gestion des incidents de sécurité. Programme accrédité par la CGE avec un taux d'insertion de 100% à 6 mois.",
    tags: ["Digital Forensics", "Incident Response", "Threat Hunting", "Malware Analysis", "OSINT", "Pentest"]
  },
  {
    type: 'education',
    icon: FaGraduationCap,
    title: "Master en Management des Systèmes d'Information",
    organization: "ESME Sudria",
    organizationLink: "https://www.esme.fr/formation-informatique/expert-systemes-information/",
    period: "2021 - 2023",
    description: "Formation approfondie en sécurité des systèmes d'information et en gestion des infrastructures IT. Spécialisation en cybersécurité avec un focus sur la protection des données et la sécurisation des réseaux.",
    tags: ["Gestion de Projets IT", "Infrastructure Cloud",  "Réseaux", "Développement Logiciel", "Développement Web", "Développement Mobile", "CI/CD DevOps"]
  }
]

const workExperiences: Experience[] = [
  {
    type: 'work',
    icon: FaBriefcase,
    title: "RSSI - Responsable de la Sécurité des Systèmes d'Information",
    organization: "Voltaire Group",
    period: "sept. 2024 - aujourd'hui",
    location: "Bidart, Nouvelle-Aquitaine",
    tasks: [
      "Élaboration et mise en œuvre de la cartographie complète du système d'information",
      "Pilotage de la mise en conformité RGPD et renforcement de la protection des données",
      "Conception de plans de continuité d'activité",
      "Déploiement d'une campagne de phishing Gophish",
      "Déploiement et configuration d'un SIEM Wazuh",
      "Mise en place d'une politique de sécurité des systèmes d'information"

    ],
    tags: ["Cybersécurité", "RGPD", "Risk Management", "Gouvernance", "Infrastructure Cloud", "Campagne de phishing", " Déploiement SIEM Wazuh"]
  },
  {
    type: 'work',
    icon: FaBriefcase,
    title: "Software Engineer",
    organization: "Amazon Web Services",
    period: "mars 2024 - sept. 2024",
    location: "Pessac, Nouvelle-Aquitaine",
    tasks: [
      "Conception et implémentation de solutions cloud natives sur AWS",
      "Administration avancée des services AWS (EC2, S3, Lambda)",
      "Optimisation des performances et de la sécurité des applications cloud"
    ],
    tags: ["AWS", "Cloud", "DevOps", "Java"]
  },
  {
    type: 'work',
    icon: FaBriefcase,
    title: "Software Engineer",
    organization: "Crédit Mutuel - Alliance Fédérale",
    period: "sept. 2020 - sept. 2023",
    location: "Fontenay-sous-Bois, Île-de-France",
    tasks: [
      "Direction de projets innovants dans le domaine des flux financiers",
      "Développement full-stack en C# et SQL avec focus sur l'expérience utilisateur",
      "Mise en place de processus de qualité : tests unitaires et intégration continue"
    ],
    tags: ["C#", "SQL", "Gestion de Projet"]
  }
]

const eventExperiences: Experience[] = [
  {
    type: 'event',
    icon: FaCalendarCheck,
    title: "Participation au FIC 2025",
    organization: "Forum International de la Cybersécurité",
    organizationLink: "https://www.forum-fic.com",
    period: "Avril 2025",
    description: "Rencontres avec les principaux acteurs du domaine de la cybersécurité. Participation à des conférences spécialisées, dont celles sur l’OSINT et la conférence CorINN sur l'investigation numérique.",
    tags: ["FIC 2025", "OSINT", "Cybersecurity Events", "Conférences", "Investigation Numérique"]
  },
  // autres expériences...
];


function ExperienceTimeline({ experiences, title }: { experiences: Experience[], title: string }) {
  return (
    <div>
      <motion.h3 
        className="text-2xl font-bold mb-6 text-gradient"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <div className="space-y-6 mb-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="cyber-card group hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <exp.icon className="w-8 h-8 mt-1 text-primary group-hover:text-accent transition-colors" />
              <div className="flex-1">
                <h4 className="text-xl font-bold">{exp.title}</h4>
                {exp.organizationLink ? (
                  <a 
                    href={exp.organizationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary hover:text-accent transition-colors"
                  >
                    {exp.organization}
                  </a>
                ) : (
                  <p className="text-lg text-primary">{exp.organization}</p>
                )}
                <div className="flex flex-col gap-1 mb-4">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  {exp.location && (
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  )}
                </div>
                
                {exp.description && (
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                )}

                {exp.tasks && (
                  <ul className="list-disc mb-4 text-muted-foreground">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="mb-1">{task}</li>
                    ))}
                  </ul>
                )}

                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expérience
        </motion.h2>
        <div className="mt-12">
          <ExperienceTimeline 
            title="Expérience Professionnelle" 
            experiences={workExperiences} 
          />
          <ExperienceTimeline 
            title="Parcours Académique" 
            experiences={educationExperiences} 
          />
          <ExperienceTimeline 
            title="Evènements" 
            experiences={eventExperiences} 
          />
        </div>
      </div>
    </section>
  )
} 