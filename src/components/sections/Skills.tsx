import { motion } from 'framer-motion'
import { FaCode,   FaNetworkWired, FaShieldHalved, FaChartLine, FaDiamond } from 'react-icons/fa6'
import { SiKalilinux, SiWireshark, SiPython, SiDocker, SiKubernetes, SiGooglecloud, SiAmazonaws, SiLinux, SiWindows, SiSplunk, SiGnubash, SiElastic,  SiFortinet ,SiOpenvpn } from 'react-icons/si'
import { MdOutlineWebAsset } from 'react-icons/md'
import { GiBrickWall } from "react-icons/gi";

const skillCategories = [
  {
    title: "Cybersécurité Défensive",
    description: "SOC & Blue Team",
    skills: [
      { name: "Fortinet", icon: SiFortinet },
      { name: "Wazuh", icon: FaShieldHalved },
      { name: "TheHive", icon: FaDiamond },
      { name: "Splunk", icon: SiSplunk },
      { name: "Elastic", icon: SiElastic },
      { name: "QRadar", icon: FaChartLine },
    ],
  },
  {
    title: "Cybersécurité Offensive",
    description: "Pentest & Red Team",
    skills: [
      { name: "Kali Linux", icon: SiKalilinux },
      { name: "Wireshark", icon: SiWireshark },
      { name: "Pentest Web", icon: MdOutlineWebAsset  },
      { name: "Network Scan", icon: FaNetworkWired },
      { name: "Reverse Shell", icon: SiGnubash },
      { name: "Exploit Dev", icon: FaCode },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    description: "Administration & Sécurisation",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Windows Server", icon: SiWindows },
      { name: "Active Directory", icon: SiWindows },
      { name: "Firewall", icon: GiBrickWall  },
      { name: "Open VPN", icon: SiOpenvpn  },
      { name: "IDS/IPS", icon: FaNetworkWired },
    ],
  },
  {
    title: "Cloud & DevSecOps",
    description: "Infrastructure & Automatisation",
    skills: [
      { name: "AWS", icon: SiAmazonaws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Python", icon: SiPython },
      { name: "CI/CD", icon: FaCode },
    ],
  }
]

export function Skills() {
  return (
    <section id="competences" className="relative">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="cyber-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gradient">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <skill.icon className="w-8 h-8 mb-2 text-primary group-hover:text-accent transition-colors" />
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 