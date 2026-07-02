import { ArrowLeft, CheckCircle, FileText, Sliders, Layers, Activity } from 'lucide-react'
import ChavanLogo from '../components/ChavanLogo'

interface Props { onBack: () => void }

const STATS = [
  { value: 'Up to 99%', label: 'Water Recovery Limit' },
  { value: '40% Lower', label: 'Operational Overhead' },
  { value: '35% Lower', label: 'Lifecycle Asset Savings' },
  { value: '90% Less', label: 'Physical Footprint vs Standard ETP' },
]

const PROCESSES = [
  { name: 'Non-Contact Micro-Electrolysis', desc: 'No mechanical wear or passivating oxide barriers.' },
  { name: 'Electro-Coagulation & Flocculation', desc: 'Forces tiny suspended particles to group naturally without alum dosage.' },
  { name: 'Electro-Oxidation & Disinfection', desc: 'Breaks organic load limits instantly with reactive oxygen species.' },
  { name: 'Low Sludge Generation', desc: 'Cuts dry sludge disposal logistics and associated fees by up to 70%.' },
]

export default function WaterView({ onBack }: Props) {
  return (
    <div className="min-h-screen relative">
      {/* Looped background video — water/green energy theme */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="https://videos.pexels.com/video-files/3931397/3931397-uhd_2560_1440_25fps.mp4"
        autoPlay loop muted playsInline
      />
      {/* Dark overlay so text stays readable */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001a0e]/92 via-[#002210]/88 to-black/94 -z-10" />

      <div className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-green-500/20 mb-12">
            <button onClick={onBack} className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors font-semibold text-sm uppercase tracking-wide">
              <ArrowLeft className="w-4 h-4" /> Back to Core Hub
            </button>
            <ChavanLogo onClick={onBack} variant="light" />
          </div>

          {/* Intro grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">
                01 // Chavan Green Energies Division
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Excellence in Waste Water<br/>Treatment Solutions
              </h1>
              <p className="text-gray-200 font-medium text-base md:text-lg leading-relaxed mb-6">
                We manufacture decentralised and modular water treatment systems utilising a patented,
                physio-electrical micro-electrolysis reactor. Our technology eliminates primary chemical
                mixing steps entirely, offering up to 99% water recovery for immediate reuse.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-950/40 border border-green-800/40 px-4 py-2 rounded-xl text-sm font-semibold text-green-400 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Manufacturing: Thane near Mumbai
                </div>
                <div className="bg-green-950/40 border border-green-800/40 px-4 py-2 rounded-xl text-sm font-semibold text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Meets CPCB Norms
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="liquid-glass-dark border border-green-500/20 p-5 rounded-2xl">
                  <span className="text-2xl font-bold text-white tracking-tight block">{s.value}</span>
                  <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider mt-2 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="liquid-glass-dark border border-green-500/15 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                <Sliders className="w-5 h-5 text-green-400" /> Reactor Mechanics: Six-In-One Steps
              </h3>
              <p className="text-base text-gray-200 font-medium leading-relaxed mb-6">
                Conventional biological and physical treatments rely heavily on chemical mixers, settling
                tanks, and manual dosage. Chavan's advanced reactor executes six chemical and physical
                processes in a single step under 60 seconds:
              </p>
              <div className="space-y-4">
                {PROCESSES.map(p => (
                  <div key={p.name} className="border-l-2 border-green-500 pl-4 py-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{p.name}</h4>
                    <p className="text-sm text-gray-300 font-medium mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="liquid-glass-dark border border-green-500/15 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                  <Layers className="w-5 h-5 text-green-400" /> Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'MODULE CAPACITY RANGE', val: '5 to 2000 KLD' },
                    { label: 'PRIMARY CHEMICAL USE', val: 'Zero (Pure Physical)' },
                    { label: 'REACTOR LIFESPAN', val: '10+ Years Heavy Usage' },
                    { label: 'DIGITAL INTEGRATION', val: 'Smart Platform Enabled' },
                  ].map(spec => (
                    <div key={spec.label} className="p-3 bg-white/[0.04] border border-white/8 rounded-lg">
                      <span className="text-gray-400 block mb-1 text-xs font-semibold uppercase tracking-wide">{spec.label}</span>
                      <span className="text-white font-bold text-sm">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-950/40 border border-green-900/40 p-5 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Source Documents:</h4>
                {['Chavan Group STP Brochure.pdf', 'Sewage Treatment Plant Brochure.pdf'].map(d => (
                  <span key={d} className="text-sm font-medium text-white flex items-center gap-1 mt-1">
                    <FileText className="w-3 h-3 text-green-400 shrink-0" /> {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="liquid-glass-dark border border-green-500/20 p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Require a Custom Water Auditing & Sizing Proposal?</h3>
            <p className="text-base text-gray-300 font-medium mb-6">
              Connect with our Thane headquarters. We provide full chemical feasibility testing on-site
              for industrial or residential domestic waste streams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8655944707" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-bold transition-all flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <button onClick={onBack} className="border border-white/20 px-6 py-3 rounded-xl text-base font-bold hover:bg-white hover:text-black transition-all">
                Back to Core Hub
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
