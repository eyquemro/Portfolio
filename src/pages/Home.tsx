import { Hero, Skills, Experience, Contact } from '../components/sections'

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="space-y-32 md:space-y-48">
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </div>
    </div>
  )
} 