import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './views/Hero'
import About from './views/About'
import Sectors from './views/Sectors'
import Projects from './views/Projects'
import Careers from './views/Careers'
import Contact from './views/Contact'
import Footer from './views/Footer'
import WaterView from './views/WaterView'
import SolarView from './views/SolarView'
import SafetyView from './views/SafetyView'

type View = 'home' | 'water' | 'solar' | 'safety'

export default function App() {
  const [view, setView] = useState<View>('home')

  // Update document title per view
  useEffect(() => {
    const titles: Record<View, string> = {
      home: 'Chavan Group — Safety & Infrastructure Solutions',
      water: 'Water Treatment — Chavan Green Energies',
      solar: 'Solar EPC — Chavan Green Energies',
      safety: 'Fire Safety & Parking — Chavan Infrastructure',
    }
    document.title = titles[view]
  }, [view])

  const navigate = (v: View) => {
    setView(v)
    if (v !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Navbar floats over everything, fixed to viewport, hides on scroll-down */}
      <Navbar currentView={view} onNavigate={navigate} />

      {/* HOME view — navbar overlays the full-bleed hero, no spacer needed */}
      {view === 'home' && (
        <>
          <Hero />
          <About />
          <Sectors onNavigate={navigate} />
          <Projects />
          <Careers />
          <Contact />
          <Footer onNavigate={navigate} />
        </>
      )}

      {/* DETAIL views — content starts below the fixed navbar */}
      {view !== 'home' && (
        <>
          <div style={{ paddingTop: '96px' }}>
            {view === 'water' && <WaterView onBack={goHome} />}
            {view === 'solar' && <SolarView onBack={goHome} />}
            {view === 'safety' && <SafetyView onBack={goHome} />}
          </div>
          <Footer onNavigate={navigate} />
        </>
      )}
    </div>
  )
}
