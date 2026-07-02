interface LogoProps {
  onClick?: () => void
  className?: string
  variant?: 'dark' | 'light'
}

export default function ChavanLogo({ onClick, className = '', variant = 'dark' }: LogoProps) {
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo-transparent.png'
  return (
    <div
      className={`flex items-center cursor-pointer select-none ${className}`}
      onClick={onClick}
      style={{ background: 'transparent' }}
    >
      <img
        src={src}
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
