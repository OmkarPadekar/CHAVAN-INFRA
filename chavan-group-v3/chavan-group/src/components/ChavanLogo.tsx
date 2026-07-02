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
        src="/logo-transparent.png"
        alt="Chavan Group of Companies"
        className="h-12 md:h-14 w-auto object-contain"
        style={{
          background: 'transparent',
          mixBlendMode: 'normal',
        }}
      />
    </div>
  )
}
