import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MatrixRain } from './components/MatrixRain'
import { KonamiEgg } from './components/KonamiEgg'
import { FakeTerminal } from './components/FakeTerminal'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './components/sections/Hero'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Certifications } from './components/sections/Certifications'
// import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoClicks, setLogoClicks] = useState(0)
  const [showTerminal, setShowTerminal] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const ASCII = `
 ██████╗ ███████╗
 ██╔══██╗██╔════╝
 ██████╔╝█████╗
 ██╔══██╗██╔══╝
 ██║  ██║███████╗
 ╚═╝  ╚═╝╚══════╝`
    console.log('%c' + ASCII, 'color:#00ff41;font-family:monospace;font-size:10px;line-height:1.4;text-shadow:0 0 8px #00ff41')
    console.log('%c> Romain Eyquem — Architecte Cybersécurité', 'color:#00ff41;font-family:monospace;font-size:13px;font-weight:bold')
    console.log('%c> Si tu lis ça, tu sais déjà utiliser F12.', 'color:#00cc33;font-family:monospace;font-size:12px')
    console.log('%c> Contact disponible en bas de page.', 'color:#00882a;font-family:monospace;font-size:11px')
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const next = logoClicks + 1
    if (next >= 5) {
      setShowTerminal(true)
      setLogoClicks(0)
    } else {
      setLogoClicks(next)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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


  const navigationItems = [
    { id: 'competences', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="relative">
      <CustomCursor />
      <MatrixRain />
      <KonamiEgg />
      {/* Barre de progression scroll */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 200,
        height: '2px',
        width: `${scrollProgress * 100}%`,
        background: '#00ff41',
        boxShadow: '0 0 8px #00ff41',
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />
      <AnimatePresence>
        {showTerminal && <FakeTerminal onClose={() => setShowTerminal(false)} />}
      </AnimatePresence>
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" onClick={handleLogoClick} className="text-xl font-bold cyber-text interactive-element">
              RE
            </a>
            
            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(item => (
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

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50">
              <div className="flex flex-col space-y-4">
                {navigationItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm transition-colors hover:text-primary px-4 py-2 ${
                      activeSection === item.id ? 'text-primary bg-muted/30' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
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