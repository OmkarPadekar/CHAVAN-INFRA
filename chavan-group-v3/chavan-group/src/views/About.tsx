import { useEffect, useRef } from 'react'
import { FileText, CheckCircle, Activity } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const s1 = useReveal()
  const s2 = useReveal()

  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-black/90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Text */}
        <section ref={s1} className="lg:col-span-7 reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-3">
            01 // Corporate Skeleton
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Trusted engineering partner since 1983.
          </h2>
          <div className="h-[2px] w-12 bg-red-600 mb-6" />
          <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-6">
            Chavan Group of Companies is a multi-disciplinary infrastructure contractor and system
            integrator based in Thane, Mumbai. We build heavy civil frameworks, urban high-rise
            redevelopments, NBC-compliant Fire Safety systems, and automated car parking layouts.
          </p>
          <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
            Through our technical environmental division,{' '}
            <strong className="text-white font-medium">Chavan Green Energies</strong>, we supply
            modular Sewage Treatment Plants (STP) and EPC Rooftop Solar grids with over 50+ MW
            compiled scale across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left stagger-children in-view">
            {[
              { value: '40+', label: 'Years Industry Legacy' },
              { value: '500+', label: 'Net Meters & Projects' },
              { value: '50+ MW', label: 'Solar Energy Integration' },
            ].map(s => (
              <div key={s.label} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-3xl font-semibold text-white block">{s.value}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Document index */}
        <section ref={s2} className="lg:col-span-5 bg-white/[0.01] border border-white/15 p-8 rounded-2xl reveal-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
            <FileText className="w-4 h-4 text-red-500" /> Technical Registry Index
          </h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
            Verify our architectural calculations, STP chemical reductions, and car-parking schemas
            against official blueprints from the registered brochures:
          </p>
          <div className="space-y-3 text-xs font-mono">
            {[
              'Chavan Group STP Brochure.pdf',
              'Sewage Treatment Plant Brochure.pdf',
              'Chavan Green Energies Brochure.pdf',
              'Chavan Fire & Parking System Brochure.pdf',
            ].map(doc => (
              <div
                key={doc}
                className="flex items-center gap-2.5 p-3 bg-black/40 border border-white/5 rounded-lg text-gray-300"
              >
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-400 font-mono border-t border-white/5 pt-4">
            <Activity className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>ALL BLUEPRINTS FULLY COMPLIANT</span>
          </div>
        </section>

      </div>
    </section>
  )
}
