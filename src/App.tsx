import { useState, useEffect, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Background = lazy(() => import('./components/Background'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Certifications = lazy(() => import('./components/Certifications'))
const Profiles = lazy(() => import('./components/Profiles'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={!loading} />
      {!loading && (
        <>
          <Cursor />
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Suspense fallback={null}>
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Achievements />
                <Certifications />
                <Profiles />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </>
      )}
    </>
  )
}
