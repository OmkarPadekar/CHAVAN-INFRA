import FadeIn from '../components/FadeIn'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      <video
        className="hero-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090202]/80 via-transparent to-transparent pointer-events-none" style={{zIndex:1}} />

      <div className="w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16" style={{position:'relative', zIndex:5}}>
        <div className="w-full lg:grid lg:grid-cols-2 lg:items-end gap-12">
          <div>
            <h1 className="font-bold text-white mb-5" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
            }}>
              Shaping tomorrow<br/>
              with vision and action.
            </h1>

            <FadeIn delay={400} duration={1000}>
              <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl font-medium leading-relaxed">
                We back visionaries and craft civil, environmental, and safety infrastructures
                that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={700} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a href="#chat" className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-xl font-bold text-base transition-colors duration-200">
                  Start a Chat
                </a>
                <button
                  onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Explore Divisions
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
            <FadeIn delay={1000} duration={1000} className="w-full sm:w-auto">
              <div className="liquid-glass border border-red-500/20 px-6 py-4 rounded-xl">
                <span className="text-xl md:text-2xl font-semibold text-white block">
                  Infrastructure. Safety. Renewable Grids.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
