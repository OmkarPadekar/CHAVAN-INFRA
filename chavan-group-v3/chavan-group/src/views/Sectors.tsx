import { useEffect, useRef } from 'react'
import { Droplet, Sun, Shield, CheckCircle, ArrowUpRight } from 'lucide-react'

type View = 'home' | 'water' | 'solar' | 'safety'

interface SectorsProps {
  onNavigate: (v: View) => void
}

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

const SECTORS = [
  {
    view: 'water' as View,
    tag: 'Water Infrastructure',
    Icon: Droplet,
    title: 'Chavan Green Energies (STP)',
    desc: 'Advanced, patented physio-electrical wastewater systems. Zero chemicals, 90% less footprint, and up to 99% recycled water recovery.',
    points: [
      'Patented Non-Contact Micro-Electrolysis',
      '35% Lifecycle cost reductions',
      'High potential for Zero Liquid Discharge',
    ],
    cta: 'Enter Technical Dossier',
  },
  {
    view: 'solar' as View,
    tag: 'Renewable Power',
    Icon: Sun,
    title: 'Solar Integration EPC',
    desc: 'Rooftop system integrations with over 50 MW experience across industrial, municipal, and residential sectors in India.',
    points: [
      '500+ Projects & Net Meters Installed',
      'Institutional setups like DY Patil Nerul',
      'Low-interest (9.5%) collateral-free loans',
    ],
    cta: 'Enter Solar Portfolio',
  },
  {
    view: 'safety' as View,
    tag: 'Smart Cities',
    Icon: Shield,
    title: 'Chavan Infrastructure',
    desc: 'Life-critical automated fire safety loops and structural multi-level vehicle storage systems maximizing urban environments.',
    points: [
      'NBC-Compliant Fire Alarm Loops',
      'Multi-level Hydraulic stack systems',
      'Smart ANPR & EV charging integration',
    ],
    cta: 'Enter Smart Infrastructure',
  },
]

export default function Sectors({ onNavigate }: SectorsProps) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="sectors" className="w-full py-24 lg:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-black/95">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="mb-16 max-w-3xl reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-3">
            02 // Industrial Sector Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white">
            Click on any division to view the complete technical specifications.
          </h2>
          <div className="h-[2px] w-12 bg-red-600" />
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children reveal-up"
        >
          {SECTORS.map(({ view, tag, Icon, title, desc, points, cta }) => (
            <div
              key={view}
              onClick={() => { onNavigate(view); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="liquid-glass border border-white/5 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer card-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold tracking-wider uppercase text-red-500 bg-red-950/20 px-3 py-1 rounded-full border border-red-900/30">
                    {tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2 mb-8">
                  {points.map(p => (
                    <li key={p} className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between text-sm border-t border-white/10 pt-4 text-red-500 font-semibold">
                <span>{cta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
