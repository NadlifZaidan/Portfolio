import { useEffect } from 'react'
import { profile } from './data/profile'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { EducationSection } from './components/EducationSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.headline}`
  }, [])

  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
