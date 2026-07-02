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
    <section id="projects" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-crimson-100 bg-white">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="mb-12 reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson-500 block mb-3">
            03 // Core Constructions & Housing Blueprints
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
            Real Estate, Redevelopments & Public Infrastructure
          </h2>
          <div className="h-[2px] w-12 bg-crimson-500 mt-4" />
        </header>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 stagger-children reveal-up"
        >
          {/* Project 1 */}
          <div className="bg-[#fdf8f8] border border-crimson-100 p-6 rounded-2xl flex flex-col justify-between card-lift">
            <div>
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-semibold text-ink-900">Chavan Sarveshwara Tower</h3>
                <span className="text-[11px] uppercase font-semibold tracking-wider bg-crimson-50 text-crimson-600 border border-crimson-200 px-2 py-0.5 rounded-full shrink-0">
                  RERA APPROVED
                </span>
              </div>
              <p className="text-ink-500 text-xs mb-4 font-semibold uppercase tracking-wide">
                Parsik Nagar, Kalwa, Thane, Mumbai
              </p>
              <p className="text-base text-ink-700 font-normal mb-6 leading-relaxed">
                A landmark 33-story high-rise tower containing luxury 1 and 2 BHK configurations.
                Built using advanced aluminium formwork shuttering, concrete solid waste management
                channels, and complete state-compliant rainwater harvesting systems.
              </p>
            </div>
            <div className="border-t border-crimson-100 pt-4 flex justify-between items-center text-sm">
              <span className="text-ink-500 font-semibold">RERA Registration:</span>
              <span className="text-ink-900 font-semibold">P51700078205</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#fdf8f8] border border-crimson-100 p-6 rounded-2xl flex flex-col justify-between card-lift">
            <div>
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-semibold text-ink-900">RC IVY Homes</h3>
                <span className="text-[11px] uppercase font-semibold tracking-wider bg-white text-ink-700 border border-crimson-100 px-2 py-0.5 rounded-full shrink-0">
                  READY TO MOVE
                </span>
              </div>
              <p className="text-ink-500 text-xs mb-4 font-semibold uppercase tracking-wide">
                Kurla West, Christian Gaon, Mumbai
              </p>
              <p className="text-base text-ink-700 font-normal mb-6 leading-relaxed">
                Conveniently designed G+12 residential building with customized configurations.
                Engineered with embedded structural fire sprinklers, ISI safety systems, and
                automated ground-level vehicle stack structures.
              </p>
            </div>
            <div className="border-t border-crimson-100 pt-4 flex justify-between items-center text-sm">
              <span className="text-ink-500 font-semibold">Developer Entity:</span>
              <span className="text-ink-900 font-semibold">Raja Ram Chavan Group Enterprise</span>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div ref={clientsRef as React.RefObject<HTMLDivElement>} className="border-t border-crimson-100 pt-16 reveal-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-center text-ink-500 mb-10">
            Our Trusted Municipal & Private Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-bold tracking-tight text-ink-500 text-sm stagger-children in-view">
            {CLIENTS.map(c => (
              <div
                key={c}
                className="p-4 bg-[#fdf8f8] border border-crimson-100 rounded-lg hover:text-crimson-600 hover:border-crimson-300 transition-all cursor-default"
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
