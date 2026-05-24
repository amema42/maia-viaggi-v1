export const ARCHETYPES = {
  DREAMER: {
    id: 'dreamer',
    name: 'Michele il Sognatore',
    color: '#237478',
    description: 'Esperienza e saggezza. Guide esperte per chi cerca consigli autentici e destinazioni significative.',
    role: 'il sognatore'
  },
  CHIC: {
    id: 'chic',
    name: 'Anna la Chic',
    color: '#821d30',
    description: 'Eleganza e raffinatezza in ogni dettaglio. Destinazioni esclusive per chi cerca il lusso autentico.',
    role: 'la chic'
  },
  STRATEGIST: {
    id: 'strategist',
    name: 'Isabel la Stratega',
    color: '#dcb38c',
    description: 'Pianificazione perfetta e attenzione ai dettagli. Viaggi su misura per chi ama l\'organizzazione.',
    role: 'la stratega'
  },
  ADVENTUROUS: {
    id: 'adventurous',
    name: 'Andrea l\'Avventuroso',
    color: '#ce5b20',
    description: 'Adrenalina e scoperta. Esperienze uniche per chi vuole vivere il viaggio come un\'avventura.',
    role: 'l\'avventuroso'
  }
} as const;

export type ArchetypeId = typeof ARCHETYPES[keyof typeof ARCHETYPES]['id'] | 'neutral';

export interface Destination {
  id: string;
  name: string;
  country: string;
  coordinates: { lat: number; lng: number };
  archetype: ArchetypeId;
  description: string;
  imageKey: string;
  highlights: string[];
  tags: string[];
  periodo: string;
  clima: string;
  valuta: string;
  lingua: string;
  fuso: string;
  volo: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'cairo',
    name: 'Cairo + Giza',
    country: 'Egitto',
    coordinates: { lat: 30.05, lng: 31.24 },
    archetype: 'dreamer',
    description: 'Testimone di 5000 anni di storia. Piramidi, Sfinge e tesori faraonici per un viaggio nel tempo.',
    imageKey: 'CAIRO_1',
    highlights: ['Piramidi di Giza', 'Sfinge', 'Museo Egizio'],
    tags: ['Culturale', 'Archeologica'],
    periodo: 'Ott-Apr',
    clima: 'Desertico',
    valuta: 'EGP',
    lingua: 'Arabo',
    fuso: '+2h',
    volo: '~3-4h'
  },
  {
    id: 'thailand',
    name: 'Thailandia',
    country: 'Thailandia',
    coordinates: { lat: 15.87, lng: 100.99 },
    archetype: 'dreamer',
    description: 'Templi dorati, isole da cartolina e una cucina che non dimentichi. Il sud-est asiatico nella sua forma migliore.',
    imageKey: 'THAILAND_1',
    highlights: ['Wat Phra Kaew', 'Isole Phi Phi', 'Chiang Mai'],
    tags: ['Balneare', 'Culturale'],
    periodo: 'Nov-Feb',
    clima: 'Tropicale monsonico',
    valuta: 'THB',
    lingua: 'Tailandese',
    fuso: '+6h',
    volo: '~11-12h (1 scalo)'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    coordinates: { lat: -8.34, lng: 115.09 },
    archetype: 'dreamer',
    description: 'Paradiso tropicale tra templi sacri, risaie terrazzate e spiagge da sogno. Un\'avventura spirituale e naturalistica.',
    imageKey: 'BALI_1',
    highlights: ['Tempio Tanah Lot', 'Ubud', 'Seminyak'],
    tags: ['Balneare', 'Spirituale'],
    periodo: 'Apr-Ott',
    clima: 'Tropicale',
    valuta: 'IDR',
    lingua: 'Indonesiano / Balinese',
    fuso: '+6h',
    volo: '~15-16h (1 scalo)'
  },
  {
    id: 'japan',
    name: 'Giappone',
    country: 'Giappone',
    coordinates: { lat: 35.68, lng: 139.69 },
    archetype: 'dreamer',
    description: 'Dove tradizione e futuro si toccano. Templi silenziosi, treni velocissimi, e una cultura che non finisci mai di scoprire.',
    imageKey: 'JAPAN_1',
    highlights: ['Tokyo', 'Monte Fuji', 'Kyoto / Nara'],
    tags: ['Culturale', 'Avventura'],
    periodo: 'Mar-Mag / Ott-Nov',
    clima: 'Temperato / Monsonico',
    valuta: 'JPY',
    lingua: 'Giapponese',
    fuso: '+8h',
    volo: '~12-13h (1 scalo)'
  },
  {
    id: 'hurghada',
    name: 'Hurghada + Luxor',
    country: 'Egitto',
    coordinates: { lat: 27.26, lng: 33.81 },
    archetype: 'chic',
    description: 'Mar Rosso e Valle dei Re in un solo viaggio. Diving tra coralli la mattina, templi faraonici il pomeriggio.',
    imageKey: 'HURGHADA_1',
    highlights: ['Mar Rosso', 'Valle dei Re', 'Tempio di Karnak'],
    tags: ['Balneare', 'Archeologica'],
    periodo: 'Ott-Apr',
    clima: 'Desertico / Arido',
    valuta: 'EGP',
    lingua: 'Arabo',
    fuso: '+2h',
    volo: '~3-4h'
  },
  {
    id: 'miami',
    name: 'Miami + Bahamas',
    country: 'USA / Bahamas',
    coordinates: { lat: 25.76, lng: -80.19 },
    archetype: 'chic',
    description: 'Glamour tropicale. Art Deco, spiagge VIP e nightlife esclusiva, con le Bahamas a un\'ora di volo.',
    imageKey: 'MIAMI_1',
    highlights: ['South Beach', 'Atlantis Paradise', 'Nassau'],
    tags: ['Balneare', 'Lusso'],
    periodo: 'Nov-Apr',
    clima: 'Subtropicale / Tropicale',
    valuta: 'USD',
    lingua: 'Inglese',
    fuso: '-6h',
    volo: '~10-11h'
  },
  {
    id: 'paris',
    name: 'Parigi',
    country: 'Francia',
    coordinates: { lat: 48.86, lng: 2.35 },
    archetype: 'chic',
    description: 'La ville lumiere. Romanticismo, haute couture e gastronomia stellata nella capitale dell\'eleganza.',
    imageKey: 'PARIS_1',
    highlights: ['Torre Eiffel', 'Louvre', 'Champs-Elysees'],
    tags: ['Romantica', 'City break', 'Lusso', 'Enogastronomico'],
    periodo: 'Apr-Giu / Set-Ott',
    clima: 'Oceanico',
    valuta: 'EUR',
    lingua: 'Francese',
    fuso: 'stesso',
    volo: '~2h'
  },
  {
    id: 'maldives',
    name: 'Maldive',
    country: 'Maldive',
    coordinates: { lat: 3.20, lng: 73.22 },
    archetype: 'chic',
    description: 'Lusso esclusivo su atolli paradisiaci. Ville overwater, spa di classe mondiale e privacy assoluta.',
    imageKey: 'MALDIVES_1',
    highlights: ['Snorkeling / Diving', 'Over-water bungalow', 'Lagune cristalline'],
    tags: ['Lusso', 'Balneare'],
    periodo: 'Nov-Apr',
    clima: 'Tropicale',
    valuta: 'MVR',
    lingua: 'Dhivehi / Inglese',
    fuso: '+4h',
    volo: '~9-10h (1 scalo)'
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turchia',
    coordinates: { lat: 41.01, lng: 28.97 },
    archetype: 'strategist',
    description: 'Dove Europa e Asia si toccano. Hagia Sophia, il Gran Bazar, e una cucina che vale il viaggio da sola.',
    imageKey: 'ISTANBUL_1',
    highlights: ['Hagia Sophia', 'Palazzo Topkapi', 'Gran Bazar'],
    tags: ['Culturale', 'City break'],
    periodo: 'Apr-Mag / Set-Ott',
    clima: 'Mediterraneo continentale',
    valuta: 'TRY',
    lingua: 'Turco',
    fuso: '+2h',
    volo: '~3h'
  },
  {
    id: 'barcelona',
    name: 'Barcellona',
    country: 'Spagna',
    coordinates: { lat: 41.39, lng: 2.17 },
    archetype: 'strategist',
    description: 'Gaudi, tapas e Mediterraneo. Architettura visionaria, vita di strada e cultura catalana in un mix esplosivo.',
    imageKey: 'BARCELONA_1',
    highlights: ['Sagrada Familia', 'Park Guell', 'Las Ramblas'],
    tags: ['City break', 'Balneare'],
    periodo: 'Apr-Giu / Set-Ott',
    clima: 'Mediterraneo',
    valuta: 'EUR',
    lingua: 'Spagnolo / Catalano',
    fuso: 'stesso',
    volo: '~2h'
  },
  {
    id: 'london',
    name: 'Londra',
    country: 'Regno Unito',
    coordinates: { lat: 51.51, lng: -0.12 },
    archetype: 'strategist',
    description: 'Tradizione e modernita si incontrano. Musei di classe mondiale, teatri storici e quartieri alla moda.',
    imageKey: 'LONDON_1',
    highlights: ['Tower of London', 'Buckingham Palace', 'British Museum'],
    tags: ['City break', 'Culturale'],
    periodo: 'Mag-Set',
    clima: 'Oceanico',
    valuta: 'GBP',
    lingua: 'Inglese',
    fuso: '-1h',
    volo: '~2-2,5h'
  },
  {
    id: 'bucharest',
    name: 'Bucarest',
    country: 'Romania',
    coordinates: { lat: 44.43, lng: 26.10 },
    archetype: 'strategist',
    description: 'La piccola Parigi dell\'Est. Belle epoque, palazzi comunisti e rinascita culturale in un mix affascinante.',
    imageKey: 'BUCHAREST_1',
    highlights: ['Palazzo del Parlamento', 'Citta Vecchia', 'Castello di Bran'],
    tags: ['City break', 'Low cost'],
    periodo: 'Apr-Giu / Set-Ott',
    clima: 'Continentale',
    valuta: 'RON',
    lingua: 'Romeno',
    fuso: '+1h',
    volo: '~2,5h'
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Marocco',
    coordinates: { lat: 31.63, lng: -8.00 },
    archetype: 'adventurous',
    description: 'Magia dei souk e deserto del Sahara. Un\'avventura sensoriale tra colori, profumi e tradizioni berbere.',
    imageKey: 'MARRAKECH_1',
    highlights: ['Djemaa el-Fna', 'Palazzo Bahia', 'Souq medina'],
    tags: ['Culturale', 'Esotica'],
    periodo: 'Mar-Apr / Ott-Nov',
    clima: 'Semiarido',
    valuta: 'MAD',
    lingua: 'Arabo / Francese',
    fuso: '-1h',
    volo: '~3,5h'
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'USA',
    coordinates: { lat: 40.71, lng: -74.01 },
    archetype: 'adventurous',
    description: 'La città che non dorme mai. Shopping, arte contemporanea e skyline iconico per un\'esperienza metropolitana.',
    imageKey: 'NEWYORK_1',
    highlights: ['Central Park', 'Times Square', 'Statua della Libertà],
    tags: ['City break', 'Shopping'],
    periodo: 'Apr-Giu / Set-Nov',
    clima: 'Continentale umido',
    valuta: 'USD',
    lingua: 'Inglese',
    fuso: '-6h',
    volo: '~9-10h'
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'Paesi Bassi',
    coordinates: { lat: 52.37, lng: 4.90 },
    archetype: 'adventurous',
    description: 'Canali, biciclette e musei di fama mondiale. Una città che si esplora meglio a piedi, senza fretta.',
    imageKey: 'AMSTERDAM_1',
    highlights: ['Canali', 'Rijksmuseum', 'Casa di Anne Frank'],
    tags: ['City break', 'Culturale'],
    periodo: 'Apr-Mag / Set',
    clima: 'Oceanico',
    valuta: 'EUR',
    lingua: 'Olandese',
    fuso: 'stesso',
    volo: '~2h'
  },
  {
    id: 'dublin',
    name: 'Dublino',
    country: 'Irlanda',
    coordinates: { lat: 53.35, lng: -6.27 },
    archetype: 'adventurous',
    description: 'Tradizione letteraria e ospitalita irlandese. Pub storici, castelli e paesaggi verdi da scoprire con calma.',
    imageKey: 'DUBLIN_1',
    highlights: ['Trinity College', 'Temple Bar', 'Guinness Storehouse'],
    tags: ['City break', 'Pub culture'],
    periodo: 'Mag-Set',
    clima: 'Oceanico',
    valuta: 'EUR',
    lingua: 'Inglese / Irlandese',
    fuso: '-1h',
    volo: '~2,5-3h'
  },
  {
    id: 'crete',
    name: 'Creta',
    country: 'Grecia',
    coordinates: { lat: 35.24, lng: 24.90 },
    archetype: 'neutral',
    description: 'Culla della civilta minoica. Storia millenaria, spiagge cristalline e autenticita mediterranea.',
    imageKey: 'CRETE_1',
    highlights: ['Palazzo di Cnosso', 'Spiaggia di Elafonissi', 'Chania'],
    tags: ['Balneare', 'Storica'],
    periodo: 'Mag-Ott',
    clima: 'Mediterraneo',
    valuta: 'EUR',
    lingua: 'Greco',
    fuso: '+1h',
    volo: '~2-3h'
  },
  {
    id: 'budapest',
    name: 'Budapest',
    country: 'Ungheria',
    coordinates: { lat: 47.50, lng: 19.04 },
    archetype: 'neutral',
    description: 'La perla del Danubio. Terme storiche, architettura imperiale e vita notturna organizzata alla perfezione.',
    imageKey: 'BUDAPEST_1',
    highlights: ['Terme Szechenyi', 'Parlamento', 'Bastione dei Pescatori'],
    tags: ['City break', 'Romantica'],
    periodo: 'Apr-Giu / Set-Ott',
    clima: 'Continentale',
    valuta: 'HUF',
    lingua: 'Ungherese',
    fuso: 'stesso',
    volo: '~2h'
  },
  {
    id: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    coordinates: { lat: 48.21, lng: 16.37 },
    archetype: 'neutral',
    description: 'Musica classica, caffè storici e architettura imperiale. Una città che si vive con eleganza, anche senza fretta.',
    imageKey: 'VIENNA_1',
    highlights: ['Palazzo di Schonbrunn', 'Stephansdom', 'Prater'],
    tags: ['Culturale', 'Romantica'],
    periodo: 'Apr-Ott / Dic',
    clima: 'Continentale',
    valuta: 'EUR',
    lingua: 'Tedesco',
    fuso: 'stesso',
    volo: '~1,5h'
  },
  {
    id: 'prague',
    name: 'Praga',
    country: 'Repubblica Ceca',
    coordinates: { lat: 50.08, lng: 14.42 },
    archetype: 'neutral',
    description: 'Ponte Carlo al tramonto, birra artigianale, e una città vecchia che sembra uscita da una fiaba gotica.',
    imageKey: 'PRAGUE_1',
    highlights: ['Castello di Praga', 'Ponte Carlo', 'Piazza della Citta Vecchia'],
    tags: ['City break', 'Culturale'],
    periodo: 'Apr-Giu / Set-Ott',
    clima: 'Continentale',
    valuta: 'CZK',
    lingua: 'Ceco',
    fuso: 'stesso',
    volo: '~1,5-2h'
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

export const TEAM_MEMBERS = {
  Michele: {
    archetype: 'DREAMER' as const,
    description: 'Professionista del marketing e content creator di successo, abituato a trasformare esperienze in storie da raccontare.',
    skills: ['Marketing digitale', 'Content creation', 'Comunicazione visiva', 'Storytelling', 'Social media strategy', 'Brand identity'],
  },
  Anna: {
    archetype: 'CHIC' as const,
    description: 'Agente di viaggio e accompagnatrice turistica con anni di esperienza in Italia e all\'estero. Esperta nel costruire itinerari autentici.',
    skills: ['Organizzazione viaggi', 'Accompagnamento turistico', 'Itinerari personalizzati', 'Logistica e pianificazione', 'Hotel di lusso', 'Problem solving'],
  },
  Isabel: {
    archetype: 'STRATEGIST' as const,
    description: 'Agente di viaggio e accompagnatrice turistica con anni di esperienza. Conosce la sottile arte di unire logistica e emozione, cultura e scoperta.',
    skills: ['Gestione documenti e visti', 'Assicurazioni di viaggio', 'Sicurezza e logistica', 'Viaggi con animali', 'Pianificazione dettagliata', 'Problem solving'],
  },
  Andrea: {
    archetype: 'ADVENTUROUS' as const,
    description: 'Professionista del marketing e content creator di successo. Specialista nella comunicazione visiva e digitale, porta creativita e innovazione.',
    skills: ['Content creation', 'Fotografia e video', 'Tecnologia di viaggio', 'App e strumenti digitali', 'Esplorazione luoghi insoliti', 'Innovazione'],
  },
} as const;

export const ROUTE_PATHS = {
  HOME: '/',
  PRIVACY: '/privacy',
  COOKIE: '/cookie-policy'
} as const;
