interface PostalStampProps {
  className?: string
}

export function PostalStamp({ className = '' }: PostalStampProps) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: 'rotate(-7deg)' }}
    >
      <svg
        width="140"
        height="100"
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Perforated border */}
        <rect
          x="4" y="4" width="132" height="92" rx="2"
          fill="#F5EFE1"
          stroke="#821D30"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <rect
          x="8" y="8" width="124" height="84" rx="1"
          fill="none"
          stroke="#821D30"
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* MAIA text */}
        <text
          x="70" y="38"
          textAnchor="middle"
          fontFamily="'Fraunces', serif"
          fontSize="16"
          fontWeight="700"
          fill="#821D30"
          letterSpacing="2"
        >
          MAIA
        </text>
        <text
          x="70" y="52"
          textAnchor="middle"
          fontFamily="'Fraunces', serif"
          fontSize="8"
          fontWeight="400"
          fill="#821D30"
          letterSpacing="3"
        >
          VIAGGI
        </text>

        {/* Circular postmark */}
        <circle cx="105" cy="68" r="18" fill="none" stroke="#CE5B20" strokeWidth="1.5" opacity="0.7" />
        <circle cx="105" cy="68" r="14" fill="none" stroke="#CE5B20" strokeWidth="0.5" opacity="0.5" />
        <text
          x="105" y="65"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="5"
          fill="#CE5B20"
          opacity="0.8"
        >
          ROMA
        </text>
        <text
          x="105" y="73"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="4.5"
          fill="#CE5B20"
          opacity="0.7"
        >
          2026
        </text>

        {/* Denomination */}
        <text
          x="30" y="78"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6"
          fill="#DCB38C"
          opacity="0.8"
        >
          italia
        </text>
      </svg>
    </div>
  )
}
