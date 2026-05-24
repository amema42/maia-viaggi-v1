interface BrushDividerProps {
  color?: string
  flip?: boolean
  className?: string
}

export function BrushDivider({ color = '#DCB38C', flip = false, className = '' }: BrushDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden py-4 ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 6c80-3 160 4 240 2s160-5 240-2c80 3 160 5 240 1s160-6 240-3c80 3 160 4 240 1"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M20 8c60-2 140 3 220 1s180-4 260-1c80 3 140 4 220 2s160-3 240-1c80 2 120 3 200 1"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="6 4"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
