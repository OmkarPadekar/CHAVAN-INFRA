interface LogoProps {
  onClick?: () => void
  className?: string
}

export default function ChavanLogo({ onClick, className = '' }: LogoProps) {
  return (
    <div
      className={`flex items-center cursor-pointer select-none ${className}`}
      onClick={onClick}
      style={{ background: 'transparent' }}
    >
      <img
        src="/logo.png"
        alt="Chavan Group of Companies"
        className="h-14 md:h-16 w-auto object-contain"
        style={{
          background: 'transparent',
          mixBlendMode: 'normal',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  )
}
