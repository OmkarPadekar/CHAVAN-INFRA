import ChavanLogo from '../components/ChavanLogo'

type View = 'home' | 'water' | 'solar' | 'safety'

interface FooterProps {
  onNavigate: (v: View) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollTo = (id: string) => {
    onNavigate('home')
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <footer className="w-full bg-black border-t border-white/5 pt-20 pb-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <ChavanLogo onClick={() => onNavigate('home')} className="mb-6" variant="light" />
            <p className="text-gray-400 max-w-md font-light leading-relaxed text-sm">
              Empowering real-world technological architectures. Built on the bedrock of proven
              structural engineering — clean grids, clean water, compliant safety standards.
            </p>
          </div>

          <div className="liquid-glass-dark border border-white/20 p-6 rounded-xl md:ml-auto w-full max-w-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson-500 block mb-3">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { label: 'About', href: '#about' },
                { label: 'Sectors', href: '#sectors' },
                { label: 'Projects', href: '#projects' },
                { label: 'Careers', href: '#careers' },
                { label: 'Contact', href: '#chat' },
              ].map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-light">
          <span>© {new Date().getFullYear()} Chavan Group of Companies. All rights reserved.</span>
          <div className="flex gap-8 tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-white transition-colors">Regulatory Disclosure</a>
            <a href="#" className="hover:text-white transition-colors">Sovereign Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
