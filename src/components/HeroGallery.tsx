import { useState, useEffect, useCallback } from 'react'
import { IMAGES } from '@/assets/images'

const HERO_IMAGES = [
  { src: IMAGES.MALDIVES_3, alt: 'Maldive', destId: 'maldives' },
  { src: IMAGES.BALI_3, alt: 'Bali, Indonesia', destId: 'bali' },
  { src: IMAGES.MARRAKECH_5, alt: 'Marrakech, Marocco', destId: 'marrakech' },
  { src: IMAGES.PARIS_3, alt: 'Parigi, Francia', destId: 'paris' },
  { src: IMAGES.NEWYORK_4, alt: 'New York, USA', destId: 'newyork' },
  { src: IMAGES.CRETE_3, alt: 'Creta, Grecia', destId: 'crete' },
  { src: IMAGES.BARCELONA_1, alt: 'Barcellona, Spagna', destId: 'barcelona' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface HeroGalleryProps {
  onDestinationClick?: (destId: string) => void
}

export function HeroGallery({ onDestinationClick }: HeroGalleryProps) {
  const [images] = useState(() => shuffle(HERO_IMAGES))
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const handleClick = () => {
    const dest = images[current]
    if (onDestinationClick && dest.destId) {
      onDestinationClick(dest.destId)
    }
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] cursor-pointer group"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Scopri ${images[current]?.alt}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick() } }}
    >
      {images.map((img, i) => (
        <img
          key={img.destId}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover photo-editorial transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Destination name overlay */}
      <div className="absolute bottom-8 left-4 right-4 text-white transition-opacity duration-300">
        <p className="font-heading text-lg font-medium drop-shadow-lg">
          {images[current]?.alt}
        </p>
        <p className="text-xs text-white/70 mt-0.5 group-hover:text-white/90 transition-colors">
          clicca per scoprire
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            aria-label={`Foto ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
