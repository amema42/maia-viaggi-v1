export const ARCHETYPES = {
  DREAMER: {
    id: 'dreamer',
    name: 'Michele il Sognatore',
    color: '#237478',
    description: 'Esperienza e saggezza. Guide esperte per chi cerca consigli autentici e destinazioni significative.',
    role: 'Il Sognatore'
  },
  CHIC: {
    id: 'chic',
    name: 'Anna la Chic',
    color: '#821d30',
    description: 'Eleganza e raffinatezza in ogni dettaglio. Destinazioni esclusive per chi cerca il lusso autentico.',
    role: 'La Chic'
  },
  STRATEGIST: {
    id: 'strategist',
    name: 'Isabel la Stratega',
    color: '#dcb38c',
    description: 'Pianificazione perfetta e attenzione ai dettagli. Viaggi su misura per chi ama l\'organizzazione.',
    role: 'La Stratega'
  },
  ADVENTUROUS: {
    id: 'adventurous',
    name: 'Andrea l\'Avventuroso',
    color: '#ce5b20',
    description: 'Adrenalina e scoperta. Esperienze uniche per chi vuole vivere il viaggio come un\'avventura.',
    role: 'L\'Avventuroso'
  }
} as const;

export type ArchetypeId = typeof ARCHETYPES[keyof typeof ARCHETYPES]['id'];

export interface Destination {
  id: string;
  name: string;
  country: string;
  coordinates: { lat: number; lng: number };
  archetype: ArchetypeId;
  description: string;
  imageKey: string;
  highlights: string[];
  tags: string[]; // Tipologie di viaggio associate
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    coordinates: { lat: -8.3405, lng: 115.0920 },
    archetype: 'adventurous',
    description: 'Paradiso tropicale tra templi sacri, risaie terrazzate e spiagge da sogno. Un\'avventura spirituale e naturalistica.',
    imageKey: 'BALI_1',
    highlights: ['Templi antichi', 'Surf e diving', 'Yoga e wellness', 'Cucina balinese'],
    tags: ['Avventura', 'Mare', 'Relax', 'Culturale']
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'USA',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    archetype: 'chic',
    description: 'La città che non dorme mai. Shopping di lusso, arte contemporanea e skyline iconico per un\'esperienza metropolitana esclusiva.',
    imageKey: 'NEWYORK_1',
    highlights: ['Fifth Avenue', 'Broadway', 'MoMA e Met', 'Rooftop bars'],
    tags: ['Lusso', 'Culturale', 'Famiglia']
  },
  {
    id: 'london',
    name: 'Londra',
    country: 'Regno Unito',
    coordinates: { lat: 51.5074, lng: -2.5 },
    archetype: 'strategist',
    description: 'Tradizione e modernità si incontrano. Musei di classe mondiale, teatri storici e quartieri alla moda perfettamente organizzati.',
    imageKey: 'LONDON_1',
    highlights: ['British Museum', 'West End', 'Buckingham Palace', 'Camden Market'],
    tags: ['Culturale', 'Famiglia', 'Lusso']
  },
  {
    id: 'paris',
    name: 'Parigi',
    country: 'Francia',
    coordinates: { lat: 48.8566, lng: 4.5 },
    archetype: 'chic',
    description: 'La ville lumière. Romanticismo, haute couture e gastronomia stellata nella capitale dell\'eleganza.',
    imageKey: 'PARIS_1',
    highlights: ['Torre Eiffel', 'Louvre', 'Champs-Élysées', 'Bistrot parigini'],
    tags: ['Romantico', 'Culturale', 'Lusso', 'Enogastronomico']
  },
  {
    id: 'crete',
    name: 'Creta',
    country: 'Grecia',
    coordinates: { lat: 34.5, lng: 25.5 },
    archetype: 'dreamer',
    description: 'Culla della civiltà minoica. Storia millenaria, spiagge cristalline e autenticità mediterranea.',
    imageKey: 'CRETE_1',
    highlights: ['Palazzo di Cnosso', 'Gole di Samaria', 'Cucina cretese', 'Villaggi tradizionali'],
    tags: ['Mare', 'Culturale', 'Relax', 'Enogastronomico', 'Famiglia']
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Marocco',
    coordinates: { lat: 31.6295, lng: -8.0 },
    archetype: 'adventurous',
    description: 'Magia dei souk e deserto del Sahara. Un\'avventura sensoriale tra colori, profumi e tradizioni berbere.',
    imageKey: 'MARRAKECH_1',
    highlights: ['Medina e souk', 'Giardini Majorelle', 'Deserto', 'Hammam tradizionali'],
    tags: ['Avventura', 'Culturale', 'Backpacking']
  },
  {
    id: 'cairo',
    name: 'Il Cairo',
    country: 'Egitto',
    coordinates: { lat: 30.5, lng: 29.5 },
    archetype: 'dreamer',
    description: 'Testimone di 5000 anni di storia. Piramidi, Sfinge e tesori faraonici per un viaggio nel tempo.',
    imageKey: 'CAIRO_1',
    highlights: ['Piramidi di Giza', 'Museo Egizio', 'Khan el-Khalili', 'Nilo'],
    tags: ['Culturale', 'Avventura', 'Famiglia']
  },
  {
    id: 'hurghada',
    name: 'Hurghada',
    country: 'Egitto',
    coordinates: { lat: 25.5, lng: 35.5 },
    archetype: 'adventurous',
    description: 'Paradiso del Mar Rosso. Diving tra coralli, relax in resort e avventure nel deserto orientale.',
    imageKey: 'HURGHADA_1',
    highlights: ['Diving e snorkeling', 'Isole Giftun', 'Safari nel deserto', 'Resort all-inclusive'],
    tags: ['Mare', 'Avventura', 'Relax', 'Famiglia']
  },
  {
    id: 'budapest',
    name: 'Budapest',
    country: 'Ungheria',
    coordinates: { lat: 47.4979, lng: 21.0 },
    archetype: 'strategist',
    description: 'La perla del Danubio. Terme storiche, architettura imperiale e vita notturna organizzata alla perfezione.',
    imageKey: 'BUDAPEST_1',
    highlights: ['Terme Széchenyi', 'Parlamento', 'Ruin bars', 'Castello di Buda'],
    tags: ['Culturale', 'Relax', 'Romantico', 'Backpacking']
  },
  {
    id: 'bucharest',
    name: 'Bucarest',
    country: 'Romania',
    coordinates: { lat: 44.4268, lng: 28.5 },
    archetype: 'strategist',
    description: 'La piccola Parigi dell\'Est. Belle époque, palazzi comunisti e rinascita culturale in un mix affascinante.',
    imageKey: 'BUCHAREST_1',
    highlights: ['Palazzo del Parlamento', 'Centro storico', 'Ateneo Romeno', 'Parchi urbani'],
    tags: ['Culturale', 'Backpacking']
  },
  {
    id: 'maldives',
    name: 'Maldive',
    country: 'Maldive',
    coordinates: { lat: 3.2028, lng: 73.2207 },
    archetype: 'chic',
    description: 'Lusso esclusivo su atolli paradisiaci. Ville overwater, spa di classe mondiale e privacy assoluta.',
    imageKey: 'MALDIVES_1',
    highlights: ['Resort di lusso', 'Diving', 'Spa overwater', 'Cene private in spiaggia'],
    tags: ['Mare', 'Lusso', 'Relax', 'Romantico']
  },
  {
    id: 'dublin',
    name: 'Dublino',
    country: 'Irlanda',
    coordinates: { lat: 53.3498, lng: -8.5 },
    archetype: 'dreamer',
    description: 'Tradizione letteraria e ospitalità irlandese. Pub storici, castelli e paesaggi verdi da scoprire con calma.',
    imageKey: 'DUBLIN_1',
    highlights: ['Temple Bar', 'Trinity College', 'Guinness Storehouse', 'Cliffs of Moher'],
    tags: ['Culturale', 'Enogastronomico', 'Famiglia', 'Backpacking']
  },
  {
    id: 'miami',
    name: 'Miami',
    country: 'USA',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    archetype: 'chic',
    description: 'Glamour tropicale. Art Déco, spiagge VIP e nightlife esclusiva nella capitale del lusso americano.',
    imageKey: 'MIAMI_1',
    highlights: ['South Beach', 'Art Déco District', 'Wynwood Walls', 'Beach clubs'],
    tags: ['Mare', 'Lusso', 'Famiglia']
  },
  {
    id: 'barcelona',
    name: 'Barcellona',
    country: 'Spagna',
    coordinates: { lat: 40.5, lng: 0.5 },
    archetype: 'adventurous',
    description: 'Gaudí, tapas e Mediterraneo. Architettura visionaria, vita di strada e cultura catalana in un mix esplosivo.',
    imageKey: 'BARCELONA_1',
    highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Spiagge urbane'],
    tags: ['Mare', 'Culturale', 'Avventura', 'Enogastronomico', 'Famiglia']
  },
  {
    id: 'tour-california',
    name: 'Tour della California',
    country: 'USA',
    coordinates: { lat: 36.7783, lng: -119.4179 },
    archetype: 'adventurous',
    description: 'Da San Francisco a Los Angeles lungo la leggendaria Highway 1. Un viaggio on the road tra scogliere a picco sull’oceano, sequoie millenarie e tramonti che tingono il Pacifico di arancione. Fermati nei diner storici per un burger autentico, assaggia il vino nelle cantine di Napa Valley e respira l’aria salmastra di Big Sur. Qui ogni curva è una cartolina, ogni sosta un ricordo indelebile.',
    imageKey: 'CALIFORNIA_TOUR_1',
    highlights: [
      'Highway 1: la strada più panoramica del mondo',
      'Golden Gate Bridge al tramonto',
      'Big Sur: scogliere mozzafiato e natura selvaggia',
      'Napa Valley: degustazioni nelle migliori cantine',
      'Santa Monica Pier: l’icona della California del sud',
      'Sequoia National Park: alberi giganti millenari',
      'Venice Beach: street art, skater e atmosfera bohemien'
    ],
    tags: ['Avventura', 'On the road', 'Natura', 'Enogastronomico', 'Mare', 'Famiglia']
  },
  {
    id: 'tour-bali',
    name: 'Tour di Bali',
    country: 'Indonesia',
    coordinates: { lat: -8.4095, lng: 115.1889 },
    archetype: 'dreamer',
    description: 'L’isola degli dèi ti accoglie con il profumo di incenso e frangipani. Svegliati all’alba per vedere le risaie di Tegallalang illuminate dal sole, fai colazione con frutta tropicale appena raccolta e lasciati cullare dal suono dei gamelan nei templi sacri. Immergiti nelle acque cristalline di Nusa Penida, assaggia il nasi goreng preparato dalle mani esperte di una nonna balinese, e concediti un massaggio tradizionale mentre ascolti il canto delle cicale. Bali non è solo un viaggio, è un risveglio dei sensi.',
    imageKey: 'BALI_2',
    highlights: [
      'Risaie di Tegallalang: terrazze verdi a perdita d’occhio',
      'Tempio di Tanah Lot: sospeso tra cielo e mare',
      'Ubud: cuore spirituale e artistico dell’isola',
      'Nusa Penida: spiagge segrete e acque turchesi',
      'Cerimonie tradizionali: danze sacre e offerte floreali',
      'Cucina balinese autentica: dai warung locali ai ristoranti gourmet',
      'Monkey Forest: incontri ravvicinati con i macachi sacri',
      'Spa e wellness: massaggi balinesi e yoga al tramonto'
    ],
    tags: ['Relax', 'Spirituale', 'Mare', 'Culturale', 'Enogastronomico', 'Avventura', 'Natura']
  }
];

export interface TicketFormData {
  destination: string;
  travelType: 'private' | 'group_adhoc';
  departureDate: string;
  returnDate: string;
  passengers: number;
  preferences?: string;
}

export interface TravelQuizData {
  includesFlight: boolean;
  roomType: 'single' | 'double' | 'triple' | 'quad';
  travelStyle: 'adventure' | 'beach' | 'cultural' | 'relax' | 'mixed';
  budget: 'economy' | 'comfort' | 'luxury';
  duration: '3-5' | '6-9' | '10-14' | '15+';
  specialRequests?: string;
}

export const ROUTE_PATHS = {
  HOME: '/',
  PRIVACY: '/privacy',
  COOKIE: '/cookie-policy'
} as const;
