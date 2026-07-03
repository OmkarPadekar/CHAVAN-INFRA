import { ArrowLeft, CheckCircle, FileText, Sliders, Layers, Activity, Sparkles } from 'lucide-react'
import ChavanLogo from '../components/ChavanLogo'
import GreenEnergyBackground from '../components/GreenEnergyBackground'

interface Props { onBack: () => void }

const STATS = [
  { value: '50+ MW', label: 'Aggregate Team Project Scale' },
  { value: '9.5%', label: 'Collateral-Free Institutional Loans' },
  { value: '10-15 Yrs', label: 'Post-Install Maintenance Agreements' },
  { value: '30+ MW', label: 'Direct Rooftop Capacity Handled' },
]

const NMMC = [
  { school: 'NMMC School No. 36', cap: '20 KW' },
  { school: 'NMMC School No. 38', cap: '18 KW' },
  { school: 'NMMC School No. 31, Kopar Khairane', cap: '18 KW' },
  { school: 'NMMC School No. 40, Mahape Gaon', cap: '15 KW' },
]

export default function SolarView({ onBack }: Props) {
  return (
    <div className="min-h-screen relative">
      {/* Looped, code-drawn solar + windmill scene */}
      <GreenEnergyBackground />
      {/* Amber-tinted overlay so text stays readable and page keeps its solar identity */}
      <div className="fixed inset-0 bg-amber-50/35 -z-10" />
      <div className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-amber-200 mb-12">
            <button onClick={onBack} className="flex items-center gap-2.5 text-ink-500 hover:text-ink-900 transition-colors font-semibold text-sm uppercase tracking-wide">
              <ArrowLeft className="w-4 h-4" /> Back to Core Hub
            </button>
            <ChavanLogo onClick={onBack} variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-3">
                02 // Rooftop Solar Integration Systems
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink-900 mb-6 leading-tight">
                Sovereign Solar Power<br/>Engineering (EPC)
              </h1>
              <p className="text-ink-700 font-medium text-base md:text-lg leading-relaxed mb-6">
                Chavan Green Energies operates as a premier EPC system integrator. With aggregate capacity
                experience exceeding 50+ MW across residential, commercial, industrial, and institutional
                segments, we build highly optimised networks linked with state net metering policies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl text-sm font-semibold text-amber-700 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> 500+ Active Installs & Net Meters Setup
                </div>
                <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl text-sm font-semibold text-amber-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> DISCOM Liaisoning & Net Meter Setup
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-white/90 backdrop-blur border border-amber-200 shadow-[0_8px_32px_rgba(150,110,20,0.06)] p-5 rounded-2xl">
                  <span className="text-2xl font-bold text-ink-900 tracking-tight block">{s.value}</span>
                  <span className="text-xs text-ink-500 uppercase font-semibold tracking-wider mt-2 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NMMC Table */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-ink-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
              <Sparkles className="w-5 h-5 text-amber-600" /> Institutional Installations (NMMC School Net Meters)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-amber-200 bg-white/90 backdrop-blur">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-amber-100 bg-amber-50/60 text-xs font-bold text-ink-500 uppercase tracking-wide">
                    <th className="p-4">Asset / Institution</th>
                    <th className="p-4">Configured Capacity</th>
                    <th className="p-4">System Configuration</th>
                  </tr>
                </thead>
                <tbody>
                  {NMMC.map(row => (
                    <tr key={row.school} className="border-b border-amber-100 last:border-0">
                      <td className="p-4 text-ink-900 font-semibold text-sm">{row.school}</td>
                      <td className="p-4 text-amber-700 font-bold text-sm">{row.cap}</td>
                      <td className="p-4 text-ink-500 font-medium text-sm">Solar On Grid Grid-Tied System</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How it works + clients */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/90 backdrop-blur border border-amber-200 shadow-[0_8px_32px_rgba(150,110,20,0.06)] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-ink-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
                <Sliders className="w-5 h-5 text-amber-600" /> The Net Metering Workflow
              </h3>
              <div className="space-y-4">
                {[
                  'Monocrystalline panels capture solar irradiation converting it to high voltage DC power.',
                  'Solar On-Grid Inverter transcribes DC into standard three-phase AC synchronized to system grids.',
                  'Bi-directional net-meter records imports/exports, crediting the customer\'s power account.',
                ].map((step, i) => (
                  <div key={i} className="p-3 bg-amber-50/60 border border-amber-100 rounded-lg flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-ink-700 font-medium text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-amber-200 shadow-[0_8px_32px_rgba(150,110,20,0.06)] p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <Layers className="w-5 h-5 text-amber-600" /> Landmark Commissioned Assets
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'D.Y. Patil Nerul Campus', tag: 'Institutional Rooftop Integration' },
                    { name: 'Saya Grand Resort Cluster', tag: 'Commercial EPC System' },
                    { name: 'Municipal School Grids', tag: 'Government Net-Meter Setup' },
                  ].map(c => (
                    <li key={c.name} className="flex justify-between items-center border-b border-amber-100 pb-3">
                      <span className="text-ink-900 font-semibold text-sm">{c.name}</span>
                      <span className="text-amber-700 text-xs font-bold uppercase tracking-wide">{c.tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">Source Document:</h4>
                <span className="text-sm font-medium text-ink-900 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 shrink-0" /> Chavan Green Energies Brochure.pdf
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/90 backdrop-blur border border-amber-200 shadow-[0_8px_32px_rgba(150,110,20,0.06)] p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-ink-900 mb-3">Require a Free Energy Audit & Feasibility Mapping?</h3>
            <p className="text-base text-ink-500 font-medium mb-6">
              We check structural weight limits, calculate shadow-free acreage, and structure financial amortization schedules.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8655944707" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-bold transition-all flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <button onClick={onBack} className="border border-ink-900/15 text-ink-900 px-6 py-3 rounded-xl text-base font-bold hover:bg-ink-900 hover:text-white transition-all">
                Back to Core Hub
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
