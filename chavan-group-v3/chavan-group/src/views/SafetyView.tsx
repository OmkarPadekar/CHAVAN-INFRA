import { ArrowLeft, CheckCircle, FileText, Sliders, Layers, Activity } from 'lucide-react'
import ChavanLogo from '../components/ChavanLogo'

interface Props { onBack: () => void }

const STATS = [
  { value: '25-Yr Cycle', label: 'Parking Structure Lifespan' },
  { value: 'G-6 & PIT-3', label: 'Structural Architectures' },
  { value: '24/7 Support', label: 'Emergency Monitoring Desk' },
  { value: 'EV Compatible', label: 'Integrated Charging Bays' },
]

const PARKING_SYSTEMS = [
  {
    title: 'Double PIT-1 Hydraulic Architectures',
    desc: 'Subterranean hydraulic lifting tables enabling two vehicles to stack inside a single conventional parking bay volume.',
  },
  {
    title: 'Puzzle Layout Integration',
    desc: 'Matrix-style horizontal and vertical self-sorting grids controlled via intelligent smart sensors and occupancy triggers.',
  },
  {
    title: 'Smart Access & ANPR Cameras',
    desc: 'Integrated ticketing and Automatic Number Plate Recognition for secure, touch-free vehicular ingress and egress flow.',
  },
]

const FIRE_ITEMS = [
  { title: 'Hydrant & Sprinkler Loops', sub: 'Interlinked directly to custom industrial pump houses.' },
  { title: 'Advanced Smoke Control', sub: 'Automated exhaust ventilation and safety escape routing.' },
  { title: 'Addressable Smoke Detectors', sub: 'Pinpoints risk areas in real-time on master consoles.' },
  { title: 'Safety Consulting', sub: 'Assistance with NBC compliance certifications.' },
]

export default function SafetyView({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-black/95 py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          <button onClick={onBack} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Core Hub
          </button>
          <ChavanLogo onClick={onBack} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-3">
              03 // Safety & Automated Parking Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Chavan Group Smart Infrastructure Systems
            </h1>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-6">
              A dynamic segment of the Chavan Group committed to executing top-tier structural engineering.
              We deliver turnkey Fire Safety Loops and automated Multi-level Car Parking Platforms designed
              to navigate urbanisation and maximise valuable layout dimensions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-red-950/20 border border-red-900/30 px-4 py-2 rounded-xl text-xs font-mono text-red-400 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Meets National Building Code (NBC)
              </div>
              <div className="bg-red-950/20 border border-red-900/30 px-4 py-2 rounded-xl text-xs font-mono text-red-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> ISI-Certified Equipment
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map(s => (
              <div key={s.label} className="liquid-glass border border-white/10 p-5 rounded-2xl">
                <span className="text-2xl font-light text-white tracking-tight block">{s.value}</span>
                <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider mt-2 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Parking */}
          <div className="liquid-glass border border-white/10 p-8 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
              <Sliders className="w-5 h-5 text-red-500" /> Automated Parking Solutions
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              Maximizing horizontal and vertical footprint boundaries using robust mechanical stack systems:
            </p>
            <div className="space-y-4">
              {PARKING_SYSTEMS.map(p => (
                <div key={p.title} className="p-4 bg-white/[0.01] border border-white/5 rounded-lg">
                  <h4 className="text-white font-medium text-sm mb-1">{p.title}</h4>
                  <p className="text-gray-400 font-light text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fire */}
          <div className="liquid-glass border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <Layers className="w-5 h-5 text-red-500" /> Complete Fire Safety Systems
              </h3>
              <p className="text-xs text-gray-400 font-light mb-6">
                Turnkey protection systems for maximum resilience across residential, commercial, and industrial structures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {FIRE_ITEMS.map(item => (
                  <div key={item.title} className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-xs block">{item.title}</span>
                      <span className="text-gray-400 text-[10px]">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-xl">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-1">Source Document:</h4>
              <span className="text-[11px] font-mono text-white flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 shrink-0" /> Chavan Fire & Parking System Brochure.pdf
              </span>
            </div>
          </div>
        </div>

        <div className="liquid-glass border border-white/10 p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-light text-white mb-3">
            Need Multi-Level Parking Layout or Fire AMC?
          </h3>
          <p className="text-sm text-gray-400 font-light mb-6">
            Chavan Group provides comprehensive, end-to-end structural modelling. Schedule an engineering review today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:chavangreenenergies001@gmail.com" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all">
              Contact Infrastructure Desk
            </a>
            <button onClick={onBack} className="border border-white/20 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition-all">
              Back to Core Hub
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
