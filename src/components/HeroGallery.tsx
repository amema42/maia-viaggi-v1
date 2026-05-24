import { useState, useEffect, useCallback } from 'react'
import { IMAGES } from '@/assets/images'

const HERO_IMAGES = [
  { src: IMAGES.BALI_1, alt: 'Bali, Indonesia' },
  { src: IMAGES.JAPAN_1, alt: 'Giappone' },
  { src: IMAGES.MARRAKECH_1, alt: 'Marrakech, Marocco' },
  { src: IMAGES.PARIS_1, alt: 'Parigi, Francia' },
  { src: IMAGES.MALDIVES_1, alt: 'Maldive' },
  { src: IMAGES.ISTANBUL_1, alt: 'Istanbul, Turchia' },
  { src: IMAGES.NEWYORK_1, alt: 'New York, USA' },
  { src: IMAGES.CRETE_1, alt: 'Creta, Grecia' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function HeroGallery() {
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

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
      {images.map((img, i) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover photo-editorial transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
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
