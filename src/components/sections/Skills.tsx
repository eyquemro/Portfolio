import { motion } from 'framer-motion'
import { FaCode, FaNetworkWired, FaShieldHalved, FaKey, FaMagnifyingGlass, FaServer } from 'react-icons/fa6'
import { SiKalilinux, SiWireshark, SiDocker, SiGooglecloud, SiAmazonaws, SiLinux, SiWindows, SiGnubash, SiFortinet, SiOpenvpn, SiAnsible, SiTerraform, SiProxmox, SiRedhat } from 'react-icons/si'
import { MdOutlineWebAsset, MdHive } from 'react-icons/md'
import { GiBrickWall } from "react-icons/gi"

const skillCategories = [
  {
    title: "Cybersécurité Défensive",
    description: "SOC & Équipe Bleue",
    skills: [
      { name: "Wazuh", icon: FaShieldHalved },
      { name: "Fortinet", icon: SiFortinet },
      { name: "TheHive", icon: MdHive },
      { name: "Suricata", icon: FaNetworkWired },
      { name: "Stormshield", icon: GiBrickWall },
      { name: "OpenVAS", icon: FaMagnifyingGlass },
    ],
  },
  {
    title: "Cybersécurité Offensive",
    description: "Test d'Intrusion & Équipe Rouge",
    skills: [
      { name: "Kali Linux", icon: SiKalilinux },
      { name: "Wireshark", icon: SiWireshark },
      { name: "Burp Suite", icon: MdOutlineWebAsset },
      { name: "Nmap", icon: FaNetworkWired },
      { name: "Metasploit", icon: FaCode },
      { name: "SQLMap", icon: SiGnubash },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    description: "Administration & Sécurisation",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Windows Server", icon: SiWindows },
      { name: "Active Directory", icon: FaServer },
      { name: "OpenVPN", icon: SiOpenvpn },
      { name: "FreeIPA", icon: FaKey },
      { name: "RHEL", icon: SiRedhat },
    ],
  },
  {
    title: "Cloud & DevSecOps",
    description: "Infrastructure & Automatisation",
    skills: [
      { name: "AWS", icon: SiAmazonaws },
      { name: "Docker", icon: SiDocker },
      { name: "Proxmox", icon: SiProxmox },
      { name: "Ansible", icon: SiAnsible },
      { name: "Terraform", icon: SiTerraform },
      { name: "GCP", icon: SiGooglecloud },
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