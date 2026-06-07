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
    <div className="w-full relative min-h-screen">
      {/* Fixed background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-20 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=1920')`,
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0c0202]/95 via-[#0e0303]/90 to-black/95 -z-10" />

      {/* HOME view */}
      {view === 'home' && (
        <>
          {/* Navbar floats over hero */}
          <div className="absolute top-0 left-0 right-0 z-30">
            <Navbar currentView={view} onNavigate={navigate} />
          </div>
          <Hero />
          <About />
          <Sectors onNavigate={navigate} />
          <Projects />
          <Careers />
          <Contact />
          <Footer onNavigate={navigate} />
        </>
      )}

      {/* DETAIL views — navbar sticks to top */}
      {view !== 'home' && (
        <>
          <div className="sticky top-0 z-30">
            <Navbar currentView={view} onNavigate={navigate} />
          </div>
          {view === 'water' && <WaterView onBack={goHome} />}
          {view === 'solar' && <SolarView onBack={goHome} />}
          {view === 'safety' && <SafetyView onBack={goHome} />}
          <Footer onNavigate={navigate} />
        </>
      )}
    </div>
  )
}
