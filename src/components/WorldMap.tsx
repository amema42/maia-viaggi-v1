import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Heart, Globe, Landmark, Sun, Flower2, Building, Star, Map } from 'lucide-react'
import { DESTINATIONS } from '@/lib/index'
import { IMAGES } from '@/assets/images'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/ScrollReveal'
import { modalOverlay, modalContent } from '@/lib/motion'

interface WorldMapProps {
  filterTags?: string[]
}

const AREA_FILTERS = [
  { id: 'all', label: 'Tutte', icon: Globe },
  { id: 'europa', label: 'Europa', icon: Landmark },
  { id: 'africa', label: 'Africa', icon: Sun },
  { id: 'asia', label: 'Asia', icon: Flower2 },
  { id: 'americhe', label: 'Americhe', icon: Building },
  { id: 'medioriente', label: 'Medio Oriente', icon: Star },
]

const getArea = (dest: typeof DESTINATIONS[0]) => {
  const europeCountries = ['Italia', 'Francia', 'Austria', 'Ungheria', 'Romania', 'Croazia', 'Paesi Bassi', 'Grecia', 'Portogallo', 'Spagna', 'Regno Unito', 'Irlanda', 'Repubblica Ceca']
  const africaCountries = ['Marocco', 'Egitto', 'Tanzania', 'Kenya', 'Tunisia', 'Namibia']
  const asiaCountries = ['Tailandia', 'Giappone', 'Indonesia', 'Cina', 'India', 'Vietnam', 'Cambogia']
  const americheCountries = ['Stati Uniti', 'Messico', 'Brasile', 'Argentina', 'Peru', 'Cuba', 'USA / Bahamas']
  const mediorienteCountries = ['Emirati Arabi', 'Giordania', 'Israele', 'Oman', 'Turchia']
  if (europeCountries.includes(dest.country)) return 'europa'
  if (africaCountries.includes(dest.country)) return 'africa'
  if (asiaCountries.includes(dest.country)) return 'asia'
  if (americheCountries.includes(dest.country)) return 'americhe'
  if (mediorienteCountries.includes(dest.country)) return 'medioriente'
  if (dest.country === 'Maldive') return 'asia'
  return 'all'
}

const getArchetypeColor = (archetypeId: string) => {
  if (archetypeId === 'dreamer') return '#237478'
  if (archetypeId === 'chic') return '#821d30'
  if (archetypeId === 'strategist') return '#dcb38c'
  if (archetypeId === 'adventurous') return '#ce5b20'
  return '#595142'
}

const archetypeLabel = (id: string) => {
  if (id === 'dreamer') return 'il sognatore'
  if (id === 'chic') return 'la chic'
  if (id === 'strategist') return 'la stratega'
  if (id === 'adventurous') return "l'avventuroso"
  return 'neutra'
}

export function WorldMap({ filterTags = [] }: WorldMapProps) {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
  const [activeArea, setActiveArea] = useState('all')

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDestination(null)
    }
    if (selectedDestination) {
      document.addEventListener('keydown', handleEsc)
      return () => document.removeEventListener('keydown', handleEsc)
    }
  }, [selectedDestination])

  const filteredDestinations = useMemo(() => {
    let dests = DESTINATIONS
    if (filterTags.length > 0) {
      dests = dests.filter(dest => filterTags.some(tag => dest.tags.includes(tag)))
    }
    if (activeArea !== 'all') {
      dests = dests.filter(dest => getArea(dest) === activeArea)
    }
    return dests
  }, [filterTags, activeArea])

  const destination = selectedDestination ? DESTINATIONS.find(d => d.id === selectedDestination) : null

  const buildWhatsAppUrl = (dest: typeof DESTINATIONS[0]) => {
    const highlight = dest.highlights?.[0] || ''
    const message = `Ciao MAIA Viaggi! Sono interessato/a al viaggio a *${dest.name}* (${dest.country})${highlight ? `, in particolare: ${highlight}` : ''}. Potete darmi più informazioni e un preventivo?`
    return `https://wa.me/390640089596?text=${encodeURIComponent(message)}`
  }

  return (
    <div>
      {/* Area filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {AREA_FILTERS.map((area) => {
          const Icon = area.icon
          return (
            <button type="button"
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeArea === area.id
                  ? 'bg-[#1A1A1A] text-[#F5EFE1] border-[#1A1A1A]'
                  : 'bg-white/80 text-[#595142] border-zinc-200 hover:border-[#821d30] hover:text-[#821d30]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {area.label}
            </button>
          )
        })}
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredDestinations.map((dest, index) => {
          const color = getArchetypeColor(dest.archetype)
          const imageUrl = IMAGES[dest.imageKey as keyof typeof IMAGES]
          const isLead = index === 0

          return (
            <ScrollReveal
              key={dest.id}
              delay={Math.min(index % 4, 4) as 0 | 1 | 2 | 3 | 4}
              className={isLead ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div
                onClick={() => setSelectedDestination(dest.id)}
                className="dest-card cursor-pointer relative rounded-2xl overflow-hidden bg-white border border-zinc-100 h-full"
              >
                <div className={`relative overflow-hidden ${isLead ? 'h-64 md:h-full' : 'h-48'}`}>
                  <img
                    src={imageUrl}
                    alt={dest.name}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover photo-editorial transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-[#1A1A1A] bg-[#F5EFE1]/92 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    {archetypeLabel(dest.archetype)}
                  </div>

                  <div className={`absolute left-4 right-4 ${isLead ? 'bottom-14' : 'bottom-3'}`}>
                    <h3 className={`font-heading font-medium text-white leading-tight drop-shadow ${isLead ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {dest.country}
                    </p>
                  </div>
                </div>

                {isLead ? (
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                    {dest.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-white/20 backdrop-blur-sm text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="p-4">
                    <p className="text-sm text-[#595142] leading-relaxed line-clamp-2">{dest.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {dest.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium border border-zinc-200 text-[#595142]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-xs font-medium flex items-center gap-1 text-[#821D30]">
                      Scopri di più <span>&rarr;</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Empty state */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-16 text-zinc-400">
          <Map className="w-12 h-12 mx-auto mb-4 text-zinc-300" />
          <p className="text-lg font-medium">Nessuna destinazione trovata</p>
          <button type="button"
            onClick={() => setActiveArea('all')}
            className="mt-4 px-6 py-2 rounded-full bg-[#821d30] text-white text-sm font-medium"
          >
            Mostra tutte
          </button>
        </div>
      )}

      {/* Detail modal */}
      <AnimatePresence>
        {selectedDestination && destination && (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl overflow-hidden max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-56 md:h-72">
                <img
                  src={IMAGES[destination.imageKey as keyof typeof IMAGES]}
                  alt={destination.name}
                  className="w-full h-full object-cover photo-editorial"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button type="button"
                  className="absolute top-4 right-4 w-9 h-9 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
                  onClick={() => setSelectedDestination(null)}
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-6">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">{destination.name}</h2>
                  <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {destination.country}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-base text-foreground/80 leading-relaxed mb-6 font-heading italic">
                  &ldquo;{destination.description}&rdquo;
                </p>

                {destination.highlights?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#CE5B20]" /> Da non perdere
                    </h3>
                    <ul className="space-y-1.5">
                      {destination.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                          <span className="mt-1" style={{ color: getArchetypeColor(destination.archetype) }}>&#x2726;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Travel info */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-zinc-50 rounded-lg p-3">
                    <p className="font-mono text-xs text-zinc-500 mb-1">periodo</p>
                    <p className="text-sm font-medium">{destination.periodo}</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-3">
                    <p className="font-mono text-xs text-zinc-500 mb-1">volo</p>
                    <p className="text-sm font-medium">{destination.volo}</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-3">
                    <p className="font-mono text-xs text-zinc-500 mb-1">fuso</p>
                    <p className="text-sm font-medium">{destination.fuso}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">{tag}</Badge>
                  ))}
                </div>

                <a
                  href={buildWhatsAppUrl(destination)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-full font-medium text-white text-base text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-px bg-[#821D30]"
                >
                  Scrivici per {destination.name} &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
