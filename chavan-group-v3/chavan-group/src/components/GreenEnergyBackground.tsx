/**
 * GreenEnergyBackground — a looping, code-drawn scene (solar panels + wind turbines
 * on rolling green hills, drifting clouds) used behind the Green Energies / STP pages.
 * Pure SVG + CSS animation. No external video/gif, no licensing, near-zero weight.
 */
export default function GreenEnergyBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eef6ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dcefd8" />
            <stop offset="100%" stopColor="#c3e6bd" />
          </linearGradient>
          <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfe6b6" />
            <stop offset="100%" stopColor="#9fd694" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2540" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />

        {/* Sun */}
        <circle cx="1360" cy="140" r="70" fill="#ffe9a8" opacity="0.9">
          <animate attributeName="opacity" values="0.75;1;0.75" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="1360" cy="140" r="46" fill="#ffd76a" />

        {/* Drifting clouds */}
        <g opacity="0.85" className="cloud-drift-slow">
          <ellipse cx="220" cy="130" rx="70" ry="24" fill="#ffffff" />
          <ellipse cx="270" cy="118" rx="50" ry="20" fill="#ffffff" />
          <ellipse cx="170" cy="120" rx="45" ry="18" fill="#ffffff" />
        </g>
        <g opacity="0.75" className="cloud-drift-fast">
          <ellipse cx="720" cy="90" rx="55" ry="18" fill="#ffffff" />
          <ellipse cx="760" cy="80" rx="38" ry="15" fill="#ffffff" />
        </g>
        <g opacity="0.7" className="cloud-drift-slow" style={{ animationDelay: '-12s' }}>
          <ellipse cx="1050" cy="200" rx="60" ry="20" fill="#ffffff" />
          <ellipse cx="1095" cy="190" rx="40" ry="16" fill="#ffffff" />
        </g>

        {/* Back hills */}
        <path d="M0,520 C250,460 450,470 650,510 C900,560 1150,470 1600,510 L1600,900 L0,900 Z" fill="url(#hillBack)" />

        {/* Wind turbines (on back hills) */}
        {[
          { x: 260, y: 480, scale: 0.55, speed: '5.5s' },
          { x: 420, y: 455, scale: 0.42, speed: '4.5s' },
          { x: 1180, y: 460, scale: 0.5, speed: '6s' },
          { x: 1320, y: 490, scale: 0.4, speed: '5s' },
        ].map((t, i) => (
          <g key={i} transform={`translate(${t.x} ${t.y}) scale(${t.scale})`}>
            <rect x="-4" y="-160" width="8" height="160" rx="2" fill="#e8ecef" />
            <rect x="-4" y="-160" width="8" height="160" rx="2" fill="#c9d2d8" opacity="0.5" />
            <g style={{ transformOrigin: '0px -160px', animation: `spin ${t.speed} linear infinite` }}>
              <ellipse cx="0" cy="-160" rx="5" ry="3.5" fill="#c9d2d8" />
              {[0, 120, 240].map(rot => (
                <path
                  key={rot}
                  d="M0,-160 L4,-158 L10,-260 C11,-266 6,-270 2,-266 Z"
                  fill="#f4f6f7"
                  stroke="#d5dbdf"
                  strokeWidth="1"
                  transform={`rotate(${rot} 0 -160)`}
                />
              ))}
            </g>
          </g>
        ))}

        {/* Front hills */}
        <path d="M0,620 C300,580 500,660 800,610 C1050,570 1300,650 1600,600 L1600,900 L0,900 Z" fill="url(#hillFront)" />

        {/* Trees */}
        {[
          { x: 90, y: 640, s: 1 }, { x: 150, y: 660, s: 0.8 }, { x: 60, y: 680, s: 0.9 },
          { x: 1480, y: 630, s: 1 }, { x: 1540, y: 660, s: 0.85 },
          { x: 980, y: 700, s: 0.9 }, { x: 1040, y: 715, s: 0.7 },
        ].map((tr, i) => (
          <g key={i} transform={`translate(${tr.x} ${tr.y}) scale(${tr.s})`}>
            <rect x="-4" y="0" width="8" height="26" fill="#7a5a3a" />
            <circle cx="0" cy="-14" r="26" fill="#4f9e5c" />
            <circle cx="-16" cy="-4" r="18" fill="#5aab66" />
            <circle cx="16" cy="-4" r="18" fill="#5aab66" />
          </g>
        ))}

        {/* Solar panel array (hero foreground) */}
        <g transform="translate(560,660)">
          {[0, 1, 2, 3, 4].map(i => (
            <g key={i} transform={`translate(${i * 130},0)`}>
              <polygon points="0,60 110,60 130,0 20,0" fill="url(#panel)" stroke="#0a1a2c" strokeWidth="2" />
              {/* glint sweep */}
              <polygon points="0,60 110,60 130,0 20,0" fill="url(#panel)" />
              <polygon
                points="10,55 26,55 46,5 30,5"
                fill="#ffffff"
                opacity="0"
                className="panel-glint"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
              {/* grid lines */}
              {[1, 2, 3].map(g => (
                <line key={g} x1={g * 26} y1="60" x2={g * 26 + 22} y2="0" stroke="#0a1a2c" strokeWidth="1" opacity="0.6" />
              ))}
              <line x1="0" y1="40" x2="130" y2="40" stroke="#0a1a2c" strokeWidth="1" opacity="0.5" />
              <line x1="0" y1="20" x2="130" y2="20" stroke="#0a1a2c" strokeWidth="1" opacity="0.5" />
              {/* support legs */}
              <line x1="15" y1="60" x2="0" y2="90" stroke="#8a8f94" strokeWidth="4" />
              <line x1="105" y1="60" x2="120" y2="90" stroke="#8a8f94" strokeWidth="4" />
            </g>
          ))}
        </g>

        {/* Ground shadow line under panels */}
        <ellipse cx="850" cy="758" rx="420" ry="14" fill="#7fbf7a" opacity="0.35" />
      </svg>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cloudDriftSlow {
          from { transform: translateX(-40px); }
          to { transform: translateX(60px); }
        }
        @keyframes cloudDriftFast {
          from { transform: translateX(-30px); }
          to { transform: translateX(90px); }
        }
        @keyframes panelGlint {
          0%, 85%, 100% { opacity: 0; transform: translateX(0); }
          90% { opacity: 0.55; }
          95% { opacity: 0; transform: translateX(70px); }
        }
        .cloud-drift-slow {
          animation: cloudDriftSlow 22s ease-in-out infinite alternate;
        }
        .cloud-drift-fast {
          animation: cloudDriftFast 15s ease-in-out infinite alternate;
        }
        .panel-glint {
          animation: panelGlint 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
