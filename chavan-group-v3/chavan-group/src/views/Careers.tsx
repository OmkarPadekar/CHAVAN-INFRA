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

const JOBS = [
  {
    title: 'Sales Engineer',
    location: 'Thane West / On-Site',
    desc: 'Engineering degree/diploma holder responsible for handling builder interactions, MEP consulting, and converting site leads for STP, solar, and fire fighting systems.',
  },
  {
    title: 'Estimation Engineer',
    location: 'Thane HQ',
    desc: 'In-charge of reading infrastructure blueprints, drafting precise tender quotes for large-scale fire hydrant, sprinkler loops, and mechanical car parking arrays.',
  },
  {
    title: 'HVAC Draughtsman',
    location: 'Thane / Mumbai',
    desc: 'Create and refine highly detailed HVAC duct layouts, coordinate with fire smoke extraction planning teams using professional CAD software.',
  },
]

export default function Careers() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="careers" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-crimson-100 bg-[#fdf8f8]">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="mb-12 text-center max-w-2xl mx-auto reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson-500 block mb-3">
            04 // Engineering Careers
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
            Join us to build a better tomorrow
          </h2>
          <p className="text-ink-500 font-normal mt-3 text-base">
            We are actively hiring fresh graduates and experienced professionals at our Thane HQ
            and multiple on-site locations.
          </p>
          <div className="h-[2px] w-12 bg-crimson-500 mx-auto mt-4" />
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children reveal-up"
        >
          {JOBS.map(job => (
            <div
              key={job.title}
              className="bg-white border border-crimson-100 p-6 rounded-2xl flex flex-col justify-between card-lift"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{job.title}</h3>
                <p className="text-sm text-crimson-600 font-semibold mb-4">{job.location}</p>
                <p className="text-sm text-ink-700 font-normal mb-6 leading-relaxed">{job.desc}</p>
              </div>
              <a
                href="mailto:chavangreenenergies001@gmail.com"
                className="text-sm text-crimson-600 border border-crimson-200 hover:border-crimson-500 hover:bg-crimson-500 hover:text-white p-2.5 rounded-lg text-center transition-all block font-semibold"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
