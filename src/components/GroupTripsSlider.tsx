import { useState, useEffect, useCallback } from 'react'
import { IMAGES } from '@/assets/images'
import { useLanguage } from '@/lib/i18n'

const GROUP_TRIPS = [
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Marocco',
    image: IMAGES.MARRAKECH_GROUP_REALISTIC_20260401_225943_169,
    tags: ['Medina', 'Sahara', 'Hammam', 'Majorelle'],
    description: 'Stiamo organizzando un viaggio di gruppo a Marrakech. Date, itinerario e dettagli in definizione.',
    waText: 'Ciao MAIA! Sono interessato al viaggio di gruppo a Marrakech. Potete darmi maggiori informazioni su date e programma?',
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turchia',
    image: IMAGES.ISTANBUL_1,
    tags: ['Bosforo', 'Bazar', 'Moschee', 'Cucina'],
    description: 'Un viaggio di gruppo tra Europa e Asia. Hagia Sophia, il Gran Bazar e una cucina che vale il viaggio da sola.',
    waText: 'Ciao MAIA! Sono interessato al viaggio di gruppo a Istanbul. Potete darmi maggiori informazioni?',
  },
  {
    id: 'barcelona',
    name: 'Barcellona',
    country: 'Spagna',
    image: IMAGES.BARCELONA_1,
    tags: ['Gaudi', 'Tapas', 'Mediterraneo', 'Architettura'],
    description: 'Gaudi, tapas e Mediterraneo. Architettura visionaria, vita di strada e cultura catalana in un mix esplosivo.',
    waText: 'Ciao MAIA! Sono interessato al viaggio di gruppo a Barcellona. Potete darmi maggiori informazioni?',
  },
  {
    id: 'prague',
    name: 'Praga',
    country: 'Repubblica Ceca',
    image: IMAGES.PRAGUE_1,
    tags: ['Ponte Carlo', 'Birra', 'Gotico', 'Castello'],
    description: 'Ponte Carlo al tramonto, birra artigianale e una citta vecchia che sembra uscita da una fiaba gotica.',
    waText: 'Ciao MAIA! Sono interessato al viaggio di gruppo a Praga. Potete darmi maggiori informazioni?',
  },
  {
    id: 'cairo',
    name: 'Cairo + Giza',
    country: 'Egitto',
    image: IMAGES.CAIRO_1,
    tags: ['Piramidi', 'Sfinge', 'Nilo', 'Faraoni'],
    description: 'Testimone di 5000 anni di storia. Piramidi, Sfinge e tesori faraonici per un viaggio nel tempo.',
    waText: 'Ciao MAIA! Sono interessato al viaggio di gruppo al Cairo. Potete darmi maggiori informazioni?',
  },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function GroupTripsSlider() {
  const { t } = useLanguage()
  const [trips] = useState(() => shuffle(GROUP_TRIPS))
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % trips.length)
  }, [trips.length])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const trip = trips[current]

  return (
    <section id="viaggi-gruppo-section" className="relative overflow-hidden" style={{ height: '100svh' }}>
      {/* Background images with crossfade */}
      {trips.map((tr, i) => (
        <div key={tr.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={tr.image}
            alt={`Viaggio di gruppo a ${tr.name}`}
            className="w-full h-full object-cover object-center photo-editorial"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-12 h-full pt-20 pb-8">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-heading italic text-sm md:text-base text-white/80 mb-4">
            - {t('groupTripsEyebrow')}
          </p>

          {/* Destination name with crossfade */}
          <div className="relative h-[1.2em] mb-4" style={{ fontSize: 'clamp(3rem, 12vw, 7rem)' }}>
            {trips.map((tr, i) => (
              <h2
                key={tr.id}
                className={`absolute inset-0 font-heading font-semibold text-white leading-[1.05] transition-opacity duration-700 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ fontSize: 'inherit' }}
              >
                {tr.name}
              </h2>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-4 leading-relaxed min-h-[3em]">
            {trip.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {trip.tags.map((tag) => (
              <span key={tag} className="text-sm px-3 py-1.5 rounded-full bg-white/15 text-white">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/390640089596?text=${encodeURIComponent(trip.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#CE5B20] text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-medium shadow-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
          >
            {t('groupTripsCta')}
          </a>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {trips.map((tr, i) => (
              <button
                key={tr.id}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`${tr.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-8' : 'bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
