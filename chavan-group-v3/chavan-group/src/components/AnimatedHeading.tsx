import { useState, useEffect, CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedHeading({ text, className = '', style }: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false)
  const INITIAL_DELAY = 200
  const CHAR_DELAY = 28

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), INITIAL_DELAY)
    return () => clearTimeout(t)
  }, [])

  const lines = text.split('\n')

  return (
    <h1
      className={className}
      style={{
        letterSpacing: '-0.02em',
        lineHeight: '1.1',
        overflowWrap: 'normal',
        wordBreak: 'keep-all',
        whiteSpace: 'normal',
        ...style
      }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay = lineIndex * line.length * CHAR_DELAY + charIndex * CHAR_DELAY
            return (
              <span
                key={charIndex}
                className="char-animated"
                style={{
                  transitionDuration: '500ms',
                  transitionDelay: animated ? `${delay}ms` : '0ms',
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateX(0px)' : 'translateX(-18px)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
