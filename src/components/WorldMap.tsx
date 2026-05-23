import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Heart, Globe, Landmark, Sun, Flower2, Building, Star, Map, Check } from 'lucide-react';
import { DESTINATIONS, ARCHETYPES } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { springPresets } from '@/lib/motion';

interface WorldMapProps {
  visible: boolean;
  filterTags?: string[];
}

const AREA_FILTERS = [
  { id: 'all', label: 'Tutte', icon: Globe },
  { id: 'europa', label: 'Europa', icon: Landmark },
  { id: 'africa', label: 'Africa', icon: Sun },
  { id: 'asia', label: 'Asia', icon: Flower2 },
  { id: 'americhe', label: 'Americhe', icon: Building },
  { id: 'medioriente', label: 'Medio Oriente', icon: Star },
];

const getArea = (dest: typeof DESTINATIONS[0]) => {
  const europeCountries = ['Italia', 'Francia', 'Austria', 'Ungheria', 'Romania', 'Croazia', 'Paesi Bassi', 'Grecia', 'Portogallo', 'Spagna', 'Regno Unito', 'Irlanda', 'Repubblica Ceca'];
  const africaCountries = ['Marocco', 'Egitto', 'Tanzania', 'Kenya', 'Tunisia', 'Namibia'];
  const asiaCountries = ['Tailandia', 'Giappone', 'Indonesia', 'Cina', 'India', 'Vietnam', 'Cambogia'];
  const americheCountries = ['Stati Uniti', 'Messico', 'Brasile', 'Argentina', 'Perù', 'Cuba'];
  const mediorienteCountries = ['Emirati Arabi', 'Giordania', 'Israele', 'Oman'];

  if (europeCountries.includes(dest.country)) return 'europa';
  if (africaCountries.includes(dest.country)) return 'africa';
  if (asiaCountries.includes(dest.country)) return 'asia';
  if (americheCountries.includes(dest.country)) return 'americhe';
  if (mediorienteCountries.includes(dest.country)) return 'medioriente';
  return 'all';
};

export function WorldMap({ visible, filterTags = [] }: WorldMapProps) {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [activeArea, setActiveArea] = useState('all');

  const filteredDestinations = useMemo(() => {
    let dests = DESTINATIONS;
    if (filterTags.length > 0) {
      dests = dests.filter(dest => filterTags.some(tag => dest.tags.includes(tag)));
    }
    if (activeArea !== 'all') {
      dests = dests.filter(dest => getArea(dest) === activeArea);
    }
    return dests;
  }, [filterTags, activeArea]);

  const destination = selectedDestination
    ? DESTINATIONS.find(d => d.id === selectedDestination)
    : null;

  const getArchetypeColor = (archetypeId: string) => {
    if (archetypeId === 'dreamer') return '#237478';
    if (archetypeId === 'chic') return '#821d30';
    if (archetypeId === 'strategist') return '#dcb38c';
    return '#ce5b20';
  };

  const buildWhatsAppUrl = (dest: typeof DESTINATIONS[0]) => {
    const highlight = dest.highlights && dest.highlights.length > 0 ? dest.highlights[0] : '';
    const message = `Ciao MAIA Viaggi! Sono interessato/a al viaggio a *${dest.name}* (${dest.country})${highlight ? `, in particolare: ${highlight}` : ''}. Potete darmi più informazioni e un preventivo?`;
    return `https://wa.me/390640089596?text=${encodeURIComponent(message)}`;
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Filtri area geografica */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springPresets.gentle, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {AREA_FILTERS.map((area) => {
          const Icon = area.icon;
          return (
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeArea === area.id
                  ? 'bg-[#1A1A1A] text-[#F5EFE1] border-[#1A1A1A]'
                  : 'bg-white/80 text-[#595142] border-[#D8CDB5] hover:border-[#821d30] hover:text-[#821d30]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {area.label}
            </button>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDestinations.map((dest) => {
            const color = getArchetypeColor(dest.archetype);
            const imageUrl = IMAGES[dest.imageKey as keyof typeof IMAGES];

            return (
              <div
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white border border-[#D8CDB5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={dest.name}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-[#1A1A1A] bg-[#F5EFE1]/92 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    {dest.archetype === 'dreamer' ? 'il sognatore' :
                     dest.archetype === 'chic' ? 'la chic' :
                     dest.archetype === 'strategist' ? 'la stratega' :
                     dest.archetype === 'neutral' ? 'neutra' : "l'avventuroso"}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-heading font-medium text-white text-lg leading-tight drop-shadow">{dest.name}</h3>
                    <p className="text-white/80 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {dest.country}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-[#595142] leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium border border-[#D8CDB5] text-[#595142]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-[#821D30]">
                    Scopri di più <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Nessun risultato */}
      {filteredDestinations.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-gray-400"
        >
          <Map className="w-12 h-12 mx-auto mb-4 text-[#D8CDB5]" />
          <p className="text-lg font-medium">Nessuna destinazione trovata</p>
          <button
            onClick={() => setActiveArea('all')}
            className="mt-4 px-6 py-2 rounded-full bg-[#821d30] text-white text-sm font-semibold"
          >
            Mostra tutte
          </button>
        </motion.div>
      )}

      {/* Modale Dettaglio */}
      <AnimatePresence>
        {selectedDestination && destination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-3xl overflow-hidden max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
            >
              {/* Immagine header */}
              <div className="relative h-56 md:h-72">
                <img
                  src={IMAGES[destination.imageKey as keyof typeof IMAGES]}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full"
                  onClick={() => setSelectedDestination(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="absolute bottom-5 left-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{destination.name}</h2>
                  <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {destination.country}
                  </p>
                </div>
              </div>

              {/* Contenuto */}
              <div className="p-6">
                {/* Descrizione suggestiva */}
                <p className="text-base text-foreground/80 leading-relaxed mb-6 italic">
                  "{destination.description}"
                </p>

                {/* Highlights */}
                {destination.highlights && destination.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-accent" /> Da non perdere
                    </h3>
                    <ul className="space-y-1.5">
                      {destination.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                          <span style={{ color: getArchetypeColor(destination.archetype) }}>✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA WhatsApp */}
                <a
                  href={buildWhatsAppUrl(destination)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-full font-medium text-white text-base text-center transition-all hover:shadow-lg hover:-translate-y-px bg-[#821D30]"
                >
                  Scrivici per {destination.name} →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
