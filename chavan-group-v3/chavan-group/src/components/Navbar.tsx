import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import ChavanLogo from './ChavanLogo'

type View = 'home' | 'water' | 'solar' | 'safety'

interface NavbarProps {
  currentView: View
  onNavigate: (v: View) => void
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
]

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleAnchorClick = (href: string) => {
    onNavigate('home')
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <>
      <header className="w-full px-4 md:px-10 lg:px-14 pt-5 z-20 relative">
        <nav className="liquid-glass rounded-2xl px-6 py-4 flex items-center justify-between">

          {/* Logo — bigger */}
          <ChavanLogo onClick={() => onNavigate('home')} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-base font-semibold text-white hover:text-red-400 transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleAnchorClick('#chat')}
            className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl text-base font-bold transition-colors duration-200 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Consultation
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          <ChavanLogo onClick={() => { onNavigate('home'); setMobileOpen(false) }} className="mb-4" />
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleAnchorClick(link.href)}
              className="text-4xl font-bold text-white hover:text-red-500 transition-colors tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleAnchorClick('#chat')}
            className="mt-4 bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg"
          >
            Get Consultation
          </button>
        </div>
      )}
    </>
  )
}
