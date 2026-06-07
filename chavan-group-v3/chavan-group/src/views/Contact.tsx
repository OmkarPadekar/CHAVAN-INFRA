import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

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

const WA_LINK = 'https://wa.me/8655944707'

export default function Contact() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="chat" className="w-full bg-black py-20 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">

        <header ref={r1} className="mb-10 reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-3">
            Get Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
            Confidential Venture Inquiries
          </h2>
          <p className="text-gray-300 font-medium text-base max-w-xl mx-auto leading-relaxed">
            Establish direct communication with Chavan Group HQ to review designs, schedule
            operational audits, or verify platform integration.
          </p>
        </header>

        <div
          ref={r2 as React.RefObject<HTMLDivElement>}
          className="liquid-glass border border-white/20 p-6 md:p-8 rounded-2xl max-w-xl mx-auto text-left reveal-up"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-5">
            Contact Details
          </span>

          <div className="space-y-5 text-base">
            {/* Address */}
            <div className="py-3 border-b border-white/8">
              <span className="text-gray-400 block text-sm font-semibold mb-1 uppercase tracking-wide">
                Headquarters
              </span>
              <span className="text-white font-medium text-base leading-relaxed">
                912 A, Centrum Business Square, Road No. 16,<br />
                Wagle Industrial Area, Thane (West) — 400604
              </span>
            </div>

            {/* Phone — links to WhatsApp */}
            <div className="py-3 border-b border-white/8">
              <span className="text-gray-400 block text-sm font-semibold mb-1 uppercase tracking-wide">
                Phone / WhatsApp
              </span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold text-lg hover:text-green-400 transition-colors flex items-center gap-2"
              >
                {/* WhatsApp icon inline SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +91 86559 44707 / 08
              </a>
            </div>

            {/* Email */}
            <div className="py-3">
              <span className="text-gray-400 block text-sm font-semibold mb-1 uppercase tracking-wide">
                Email
              </span>
              <a
                href="mailto:chavangreenenergies001@gmail.com"
                className="text-white font-medium hover:text-red-400 transition-colors text-base break-all"
              >
                chavangreenenergies001@gmail.com
              </a>
            </div>
          </div>

          {/* WhatsApp CTA — primary button */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-3 mt-6"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary email CTA */}
          <a
            href="mailto:chavangreenenergies001@gmail.com"
            className="w-full mt-3 border border-white/20 text-white py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:bg-white hover:text-black"
          >
            Send an Email Instead
          </a>
        </div>

      </div>
    </section>
  )
}
