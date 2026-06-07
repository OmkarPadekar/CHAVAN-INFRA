import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const CLIENTS = [
  'SAYA GRAND RESORT',
  'PODAR INT. SCHOOL',
  'ONGC LIMITED',
  'THANE CORP (TMC)',
  'D.Y. PATIL NAVI MUMBAI',
]

export default function Projects() {
  const headerRef = useReveal()
  const cardsRef = useReveal()
  const clientsRef = useReveal()

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-black/90">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="mb-12 reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-3">
            03 // Core Constructions & Housing Blueprints
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Real Estate, Redevelopments & Public Infrastructure
          </h2>
          <div className="h-[2px] w-12 bg-red-600 mt-4" />
        </header>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 stagger-children reveal-up"
        >
          {/* Project 1 */}
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between card-lift">
            <div>
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-semibold text-white">Chavan Sarveshwara Tower</h3>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-red-950/40 text-red-400 border border-red-900/50 px-2 py-0.5 rounded-full shrink-0">
                  RERA APPROVED
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-4 font-mono">
                Parsik Nagar, Kalwa, Thane, Mumbai
              </p>
              <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                A landmark 33-story high-rise tower containing luxury 1 and 2 BHK configurations.
                Built using advanced aluminium formwork shuttering, concrete solid waste management
                channels, and complete state-compliant rainwater harvesting systems.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs font-mono">
              <span className="text-gray-400">RERA Registration:</span>
              <span className="text-white">P51700078205</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between card-lift">
            <div>
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-semibold text-white">RC IVY Homes</h3>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-white/5 text-gray-300 border border-white/10 px-2 py-0.5 rounded-full shrink-0">
                  READY TO MOVE
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-4 font-mono">
                Kurla West, Christian Gaon, Mumbai
              </p>
              <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                Conveniently designed G+12 residential building with customized configurations.
                Engineered with embedded structural fire sprinklers, ISI safety systems, and
                automated ground-level vehicle stack structures.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs font-mono">
              <span className="text-gray-400">Developer Entity:</span>
              <span className="text-white">Raja Ram Chavan Group Enterprise</span>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div ref={clientsRef as React.RefObject<HTMLDivElement>} className="border-t border-white/10 pt-16 reveal-up">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-center text-gray-400 mb-10">
            Our Trusted Municipal & Private Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-bold tracking-tight text-white/40 text-sm stagger-children in-view">
            {CLIENTS.map(c => (
              <div
                key={c}
                className="p-4 bg-white/[0.01] border border-white/5 rounded-lg hover:text-white hover:border-white/20 transition-all cursor-default"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
