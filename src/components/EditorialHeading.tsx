import { type ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

interface EditorialHeadingProps {
  eyebrow?: string
  children: ReactNode
  accentWord?: string
  align?: 'left' | 'center'
  className?: string
}

export function EditorialHeading({
  eyebrow,
  children,
  accentWord,
  align = 'left',
  className = '',
}: EditorialHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  const renderHeading = () => {
    if (!accentWord || typeof children !== 'string') {
      return <>{children}</>
    }
    const parts = children.split(accentWord)
    if (parts.length < 2) return <>{children}</>
    return (
      <>
        {parts[0]}
        <em className="accent-underline not-italic text-[#821D30]">{accentWord}</em>
        {parts.slice(1).join(accentWord)}
      </>
    )
  }

  return (
    <ScrollReveal className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="font-heading italic text-sm md:text-base text-[#DCB38C] mb-3">
          - {eyebrow}
        </p>
      )}
      <h2
        className="font-heading font-semibold tracking-tight leading-[1.1]"
        style={{ fontSize: 'clamp(2.25rem, 5vw + 0.5rem, 4.5rem)' }}
      >
        {renderHeading()}
      </h2>
    </ScrollReveal>
  )
}
