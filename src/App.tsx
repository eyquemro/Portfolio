import { useState, useEffect } from 'react'
import { Home } from './pages/Home'
import { Hero } from './components/sections/Hero'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Certifications } from './components/sections/Certifications'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Gestion du scroll et de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id') || ''

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-xl font-bold cyber-text">
              RE
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'competences', label: 'Compétences' },
                { id: 'experience', label: 'Expérience' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
} 