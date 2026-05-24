// Sistema di internazionalizzazione per MAIA Viaggi

export type Language = 'it' | 'en' | 'es' | 'fr' | 'de';

export const translations = {
  it: {
    // Header
    home: 'Home',
    createTrip: 'Crea il Tuo Viaggio',
    destinations: 'Destinazioni',
    about: 'Chi Siamo',
    travelTips: 'Consigli di Viaggio',
    reviews: 'Recensioni',
    services: 'Servizi',
    contact: 'Contatti',
    
    // Hero Section
    heroMainTitle: 'Il Tuo Viaggio Inizia Qui',
    heroMainSubtitle: 'Compila il biglietto e scopri le destinazioni perfette per te',
    heroCard1Title: '20+ destinazioni selezionate',
    heroCard1Desc: 'Esplora il mondo con noi: dall\'Europa all\'Asia, dall\'Africa alle Americhe',
    heroCard2Title: '10 Anni di Esperienza',
    heroCard2Desc: 'La nostra passione per i viaggi si traduce in esperienze indimenticabili',
    heroCard3Title: 'Assistenza 24/7',
    heroCard3Desc: 'Siamo sempre al tuo fianco, prima, durante e dopo il viaggio',

    // Marrakech section
    marrakechGroupLabel: 'Viaggio di Gruppo Organizzato',
    marrakechTag2: 'Medina',
    marrakechTag3: 'Majorelle',
    marrakechCta: 'Richiedi Informazioni',

    // Passport / icons
    icon1Label: 'Chi Siamo',

    // Destinations section
    ourDestinationsTitle: 'Le Nostre Destinazioni',
    ourDestinationsSubtitle: 'Trova la tua prossima avventura',

    heroYearsExperience: '10 Anni di Esperienza',
    heroYearsDesc: 'Nel settore turistico',
    heroDestinations: '20+ destinazioni',
    heroDestinationsDesc: 'In tutto il mondo',
    heroSatisfaction: 'consulenza su misura',
    heroSatisfactionDesc: 'per ogni viaggiatore',
    
    // Gift Package
    giftTitle: 'Regala un Viaggio',
    giftSecret: 'Destinazione Segreta',
    giftCta: 'Scopri di Più',
    
    // Passport Section
    passportTitle: 'Il Nostro Passaporto',
    passportSubtitle: 'Scopri chi siamo e cosa facciamo',
    
    // Travel Tips
    travelTipsTitle: 'I Nostri Consigli di Viaggio',
    travelTipsSubtitle: 'Apri la valigia per scoprire di più',
    
    // Testimonials
    testimonialsTitle: 'Cosa Dicono di Noi',
    testimonialsSubtitle: 'Clicca sul binocolo e lo scoprirai',
    
    // Stamps
    stampsTitle: 'I Nostri Timbri',
    
    // WhatsApp
    whatsappChat: 'Chatta con noi',
    
    // Legal
    legalInfo: 'Informazioni Legali',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    
    // Footer
    footerAbout: 'MAIA Viaggi',
    footerAboutDesc: 'La tua agenzia di viaggi specializzata in esperienze uniche e personalizzate.',
    footerUsefulLinks: 'Link Utili',
    footerWhoWeAre: 'Chi Siamo',
    footerServices: 'Servizi',
    footerContact: 'Contatti',
    footerContacts: 'Contatti',
    footerAddress: 'Via Antonio Bertoloni 44, 00197 Roma',
    footerPhone: '+39 06 40089596',
    footerEmail: 'info@maiaviaggi.it',
    footerFollowUs: 'Seguici',
    footerPayments: 'Pagamenti',
    footerRights: 'Tutti i diritti riservati.',
    footerLanguage: 'Lingua',
    
    // Team
    teamDreamer: 'il Sognatore',
    teamChic: 'la Chic',
    teamStrategist: 'la Stratega',
    teamAdventurous: 'l\'Avventuroso',

    // Hero editorial
    heroEyebrow: 'il tuo viaggio',
    heroHeadline: 'La persona, prima della meta.',
    stat1: '20+ destinazioni',
    stat2: '10 anni di esperienza',
    stat3: 'assistenza 24/7',

    // Marrakech
    marrakechEyebrow: 'viaggio di gruppo',

    // Team section
    teamEyebrow: 'il nostro passaporto',
    teamTitle: 'Conosci il team',
    teamSkillsLabel: 'competenze',
    teamCta: 'Parla con',

    // Destinations
    destEyebrow: 'esplora il mondo',
    destTitle: 'Le nostre destinazioni',
    destLearnMore: 'Scopri di più',
    destNoResults: 'Nessuna destinazione trovata',
    destShowAll: 'Mostra tutte',
    destHighlights: 'Da non perdere',
    destPeriod: 'periodo',
    destFlight: 'volo',
    destTimezone: 'fuso',
    destWriteUs: 'Scrivici per',

    // Filters
    filterAll: 'Tutte',
    filterEurope: 'Europa',
    filterAfrica: 'Africa',
    filterAsia: 'Asia',
    filterAmericas: 'Americhe',
    filterMiddleEast: 'Medio Oriente',

    // Pre-footer CTA
    ctaEyebrow: 'non trovi quello che cerchi?',
    ctaTitle: 'Raccontaci il tuo viaggio ideale',
    ctaWhatsApp: 'Scrivici su WhatsApp',

    // Nav
    navContact: 'Contattaci',
    navContactWhatsApp: 'Contattaci su WhatsApp',
    navLanguage: 'lingua',

    // Form
    formPeriod: 'periodo di viaggio',
    formPassengers: 'passeggeri',
    formType: 'tipo',
    formTravelType: 'tipologia viaggio',
    formSelectMonth: 'Seleziona mese',
    formPrivate: 'Privato',
    formGroup: 'Di Gruppo',
    formSubmit: 'Trova la destinazione per me',
    formSelected: 'selezionati',

    // Travel styles
    styleFood: 'Enogastronomico',
    styleAdventure: 'Avventura',
    styleCultural: 'Culturale',
    styleRelax: 'Relax',
    styleBeach: 'Mare',
    styleMountain: 'Montagna',
    styleRomantic: 'Romantico',
    styleFamily: 'Famiglia',
    styleLuxury: 'Lusso',
    styleReligious: 'Religioso',

    // Cookie banner
    cookieBannerTitle: 'Cookie tecnici, solo.',
    cookieBannerDesc: 'Usiamo solo archiviazione locale tecnica (localStorage) per ricordare la scelta su questo avviso e la lingua selezionata. Nessun cookie HTTP di profilazione, analytics, marketing o tracciamento.',
    cookieBannerLink: 'Leggi la Cookie Policy',
    cookieBannerReject: 'Rifiuta',
    cookieBannerAccept: 'Va bene',
  },
  
  en: {
    // Header
    home: 'Home',
    createTrip: 'Create Your Trip',
    destinations: 'Destinations',
    about: 'About Us',
    travelTips: 'Travel Tips',
    reviews: 'Reviews',
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    heroMainTitle: 'Your Journey Starts Here',
    heroMainSubtitle: 'Fill in the ticket and discover the perfect destinations for you',
    heroCard1Title: '20+ curated destinations',
    heroCard1Desc: 'Explore the world with us: from Europe to Asia, from Africa to the Americas',
    heroCard2Title: '10 Years of Experience',
    heroCard2Desc: 'Our passion for travel translates into unforgettable experiences',
    heroCard3Title: '24/7 Support',
    heroCard3Desc: 'We are always by your side, before, during and after the trip',
    marrakechGroupLabel: 'Organized Group Trip',
    marrakechTag2: 'Medina',
    marrakechTag3: 'Majorelle',
    marrakechCta: 'Request Information',
    icon1Label: 'About Us',
    ourDestinationsTitle: 'Our Destinations',
    ourDestinationsSubtitle: 'Find your next adventure',
    heroYearsExperience: '10 Years of Experience',
    heroYearsDesc: 'In the tourism industry',
    heroDestinations: '20+ destinations',
    heroDestinationsDesc: 'Around the world',
    heroSatisfaction: 'tailored advice',
    heroSatisfactionDesc: 'for every traveller',
    
    // Gift Package
    giftTitle: 'Gift a Trip',
    giftSecret: 'Secret Destination',
    giftCta: 'Learn More',
    
    // Passport Section
    passportTitle: 'Our Passport',
    passportSubtitle: 'Discover who we are and what we do',
    
    // Travel Tips
    travelTipsTitle: 'Our Travel Tips',
    travelTipsSubtitle: 'Open the suitcase to discover more',
    
    // Testimonials
    testimonialsTitle: 'What They Say About Us',
    testimonialsSubtitle: 'Click on the binoculars and find out',
    
    // Stamps
    stampsTitle: 'Our Stamps',
    
    // WhatsApp
    whatsappChat: 'Chat with us',
    
    // Legal
    legalInfo: 'Legal Information',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    
    // Footer
    footerAbout: 'MAIA Travel',
    footerAboutDesc: 'Your travel agency specialized in unique and personalized experiences.',
    footerUsefulLinks: 'Useful Links',
    footerWhoWeAre: 'About Us',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerContacts: 'Contacts',
    footerAddress: 'Via Antonio Bertoloni 44, 00197 Roma',
    footerPhone: '+39 06 40089596',
    footerEmail: 'info@maiaviaggi.it',
    footerFollowUs: 'Follow Us',
    footerPayments: 'Payments',
    footerRights: 'All rights reserved.',
    footerLanguage: 'Language',
    
    // Team
    teamDreamer: 'the Dreamer',
    teamChic: 'the Chic',
    teamStrategist: 'the Strategist',
    teamAdventurous: 'the Adventurous',
    heroEyebrow: 'your journey',
    heroHeadline: 'The person, before the destination.',
    stat1: '20+ destinations',
    stat2: '10 years of experience',
    stat3: '24/7 support',
    marrakechEyebrow: 'group trip',
    teamEyebrow: 'our passport',
    teamTitle: 'Meet the team',
    teamSkillsLabel: 'skills',
    teamCta: 'Talk to',
    destEyebrow: 'explore the world',
    destTitle: 'Our destinations',
    destLearnMore: 'Learn more',
    destNoResults: 'No destinations found',
    destShowAll: 'Show all',
    destHighlights: 'Must see',
    destPeriod: 'season',
    destFlight: 'flight',
    destTimezone: 'timezone',
    destWriteUs: 'Write us about',
    filterAll: 'All',
    filterEurope: 'Europe',
    filterAfrica: 'Africa',
    filterAsia: 'Asia',
    filterAmericas: 'Americas',
    filterMiddleEast: 'Middle East',
    ctaEyebrow: 'can\'t find what you\'re looking for?',
    ctaTitle: 'Tell us about your ideal trip',
    ctaWhatsApp: 'Write us on WhatsApp',
    navContact: 'Contact us',
    navContactWhatsApp: 'Contact us on WhatsApp',
    navLanguage: 'language',
    formPeriod: 'travel period',
    formPassengers: 'passengers',
    formType: 'type',
    formTravelType: 'travel style',
    formSelectMonth: 'Select month',
    formPrivate: 'Private',
    formGroup: 'Group',
    formSubmit: 'Find the destination for me',
    formSelected: 'selected',
    styleFood: 'Food & wine',
    styleAdventure: 'Adventure',
    styleCultural: 'Cultural',
    styleRelax: 'Relax',
    styleBeach: 'Beach',
    styleMountain: 'Mountain',
    styleRomantic: 'Romantic',
    styleFamily: 'Family',
    styleLuxury: 'Luxury',
    styleReligious: 'Religious',
    cookieBannerTitle: 'Technical cookies only.',
    cookieBannerDesc: 'We only use technical local storage (localStorage) to remember this notice choice and the selected language. No HTTP profiling, analytics, marketing, or tracking cookies.',
    cookieBannerLink: 'Read the Cookie Policy',
    cookieBannerReject: 'Reject',
    cookieBannerAccept: 'OK',
  },
  
  es: {
    // Header
    home: 'Inicio',
    createTrip: 'Crea Tu Viaje',
    destinations: 'Destinos',
    about: 'Quiénes Somos',
    travelTips: 'Consejos de Viaje',
    reviews: 'Reseñas',
    services: 'Servicios',
    contact: 'Contacto',
    
    // Hero Section
    heroMainTitle: 'Tu Viaje Comienza Aquí',
    heroMainSubtitle: 'Completa el billete y descubre los destinos perfectos para ti',
    heroCard1Title: '20+ destinos seleccionados',
    heroCard1Desc: 'Explora el mundo con nosotros: de Europa a Asia, de África a las Américas',
    heroCard2Title: '10 Años de Experiencia',
    heroCard2Desc: 'Nuestra pasión por los viajes se traduce en experiencias inolvidables',
    heroCard3Title: 'Asistencia 24/7',
    heroCard3Desc: 'Siempre estamos a tu lado, antes, durante y después del viaje',
    marrakechGroupLabel: 'Viaje de Grupo Organizado',
    marrakechTag2: 'Medina',
    marrakechTag3: 'Majorelle',
    marrakechCta: 'Solicitar Información',
    icon1Label: 'Quiénes Somos',
    ourDestinationsTitle: 'Nuestros Destinos',
    ourDestinationsSubtitle: 'Encuentra tu próxima aventura',
    heroYearsExperience: '10 Años de Experiencia',
    heroYearsDesc: 'En el sector turístico',
    heroDestinations: '20+ destinos',
    heroDestinationsDesc: 'En todo el mundo',
    heroSatisfaction: 'asesoramiento a medida',
    heroSatisfactionDesc: 'para cada viajero',
    
    // Gift Package
    giftTitle: 'Regala un Viaje',
    giftSecret: 'Destino Secreto',
    giftCta: 'Descubre Más',
    
    // Passport Section
    passportTitle: 'Nuestro Pasaporte',
    passportSubtitle: 'Descubre quiénes somos y qué hacemos',
    
    // Travel Tips
    travelTipsTitle: 'Nuestros Consejos de Viaje',
    travelTipsSubtitle: 'Abre la maleta para descubrir más',
    
    // Testimonials
    testimonialsTitle: 'Qué Dicen de Nosotros',
    testimonialsSubtitle: 'Haz clic en los binoculares y descúbrelo',
    
    // Stamps
    stampsTitle: 'Nuestros Sellos',
    
    // WhatsApp
    whatsappChat: 'Chatea con nosotros',
    
    // Legal
    legalInfo: 'Información Legal',
    privacyPolicy: 'Política de Privacidad',
    cookiePolicy: 'Política de Cookies',
    
    // Footer
    footerAbout: 'MAIA Viajes',
    footerAboutDesc: 'Tu agencia de viajes especializada en experiencias únicas y personalizadas.',
    footerUsefulLinks: 'Enlaces Útiles',
    footerWhoWeAre: 'Quiénes Somos',
    footerServices: 'Servicios',
    footerContact: 'Contacto',
    footerContacts: 'Contactos',
    footerAddress: 'Via Antonio Bertoloni 44, 00197 Roma',
    footerPhone: '+39 06 40089596',
    footerEmail: 'info@maiaviaggi.it',
    footerFollowUs: 'Síguenos',
    footerPayments: 'Pagos',
    footerRights: 'Todos los derechos reservados.',
    footerLanguage: 'Idioma',
    
    // Team
    teamDreamer: 'el Soñador',
    teamChic: 'la Chic',
    teamStrategist: 'la Estratega',
    teamAdventurous: 'el Aventurero',
    heroEyebrow: 'tu viaje',
    heroHeadline: 'La persona, antes del destino.',
    stat1: '20+ destinos',
    stat2: '10 años de experiencia',
    stat3: 'asistencia 24/7',
    marrakechEyebrow: 'viaje de grupo',
    teamEyebrow: 'nuestro pasaporte',
    teamTitle: 'Conoce al equipo',
    teamSkillsLabel: 'habilidades',
    teamCta: 'Habla con',
    destEyebrow: 'explora el mundo',
    destTitle: 'Nuestros destinos',
    destLearnMore: 'Descubre más',
    destNoResults: 'No se encontraron destinos',
    destShowAll: 'Mostrar todos',
    destHighlights: 'Imperdible',
    destPeriod: 'temporada',
    destFlight: 'vuelo',
    destTimezone: 'huso',
    destWriteUs: 'Escríbenos sobre',
    filterAll: 'Todos',
    filterEurope: 'Europa',
    filterAfrica: 'África',
    filterAsia: 'Asia',
    filterAmericas: 'Américas',
    filterMiddleEast: 'Medio Oriente',
    ctaEyebrow: 'no encuentras lo que buscas?',
    ctaTitle: 'Cuéntanos tu viaje ideal',
    ctaWhatsApp: 'Escríbenos en WhatsApp',
    navContact: 'Contáctanos',
    navContactWhatsApp: 'Contáctanos en WhatsApp',
    navLanguage: 'idioma',
    formPeriod: 'período de viaje',
    formPassengers: 'pasajeros',
    formType: 'tipo',
    formTravelType: 'tipo de viaje',
    formSelectMonth: 'Selecciona mes',
    formPrivate: 'Privado',
    formGroup: 'De Grupo',
    formSubmit: 'Encuentra el destino para mí',
    formSelected: 'seleccionados',
    styleFood: 'Enogastronomia',
    styleAdventure: 'Aventura',
    styleCultural: 'Cultural',
    styleRelax: 'Relax',
    styleBeach: 'Playa',
    styleMountain: 'Montana',
    styleRomantic: 'Romantico',
    styleFamily: 'Familia',
    styleLuxury: 'Lujo',
    styleReligious: 'Religioso',
    cookieBannerTitle: 'Solo cookies técnicas.',
    cookieBannerDesc: 'Usamos solo almacenamiento local tecnico (localStorage) para recordar la eleccion de este aviso y el idioma seleccionado. No usamos cookies HTTP de perfilado, analytics, marketing o rastreo.',
    cookieBannerLink: 'Lee la Política de Cookies',
    cookieBannerReject: 'Rechazar',
    cookieBannerAccept: 'Aceptar',
  },
  
  fr: {
    // Header
    home: 'Accueil',
    createTrip: 'Créez Votre Voyage',
    destinations: 'Destinations',
    about: 'Qui Sommes-Nous',
    travelTips: 'Conseils de Voyage',
    reviews: 'Avis',
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    heroMainTitle: 'Votre Voyage Commence Ici',
    heroMainSubtitle: 'Remplissez le billet et découvrez les destinations parfaites pour vous',
    heroCard1Title: '20+ curated destinations',
    heroCard1Desc: 'Explorez le monde avec nous: de l\'Europe à l\'Asie, de l\'Afrique aux Amériques',
    heroCard2Title: '10 Ans d\'Expérience',
    heroCard2Desc: 'Notre passion pour les voyages se traduit par des expériences inoubliables',
    heroCard3Title: 'Assistance 24/7',
    heroCard3Desc: 'Nous sommes toujours à vos côtés, avant, pendant et après le voyage',
    marrakechGroupLabel: 'Voyage de Groupe Organisé',
    marrakechTag2: 'Médina',
    marrakechTag3: 'Majorelle',
    marrakechCta: 'Demander des Informations',
    icon1Label: 'Qui Sommes-Nous',
    ourDestinationsTitle: 'Nos Destinations',
    ourDestinationsSubtitle: 'Trouvez votre prochaine aventure',
    heroYearsExperience: '10 Ans d\'Expérience',
    heroYearsDesc: 'Dans le secteur touristique',
    heroDestinations: '20+ destinations',
    heroDestinationsDesc: 'Dans le monde entier',
    heroSatisfaction: 'tailored advice',
    heroSatisfactionDesc: 'pour chaque voyageur',
    
    // Gift Package
    giftTitle: 'Offrez un Voyage',
    giftSecret: 'Destination Secrète',
    giftCta: 'En Savoir Plus',
    
    // Passport Section
    passportTitle: 'Notre Passeport',
    passportSubtitle: 'Découvrez qui nous sommes et ce que nous faisons',
    
    // Travel Tips
    travelTipsTitle: 'Nos Conseils de Voyage',
    travelTipsSubtitle: 'Ouvrez la valise pour en savoir plus',
    
    // Testimonials
    testimonialsTitle: 'Ce Qu\'ils Disent de Nous',
    testimonialsSubtitle: 'Cliquez sur les jumelles et découvrez',
    
    // Stamps
    stampsTitle: 'Nos Tampons',
    
    // WhatsApp
    whatsappChat: 'Chattez avec nous',
    
    // Legal
    legalInfo: 'Informations Légales',
    privacyPolicy: 'Politique de Confidentialité',
    cookiePolicy: 'Politique des Cookies',
    
    // Footer
    footerAbout: 'MAIA Voyages',
    footerAboutDesc: 'Votre agence de voyages spécialisée dans les expériences uniques et personnalisées.',
    footerUsefulLinks: 'Liens Utiles',
    footerWhoWeAre: 'Qui Sommes-Nous',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerContacts: 'Contacts',
    footerAddress: 'Via Antonio Bertoloni 44, 00197 Roma',
    footerPhone: '+39 06 40089596',
    footerEmail: 'info@maiaviaggi.it',
    footerFollowUs: 'Suivez-Nous',
    footerPayments: 'Paiements',
    footerRights: 'Tous droits réservés.',
    footerLanguage: 'Langue',
    
    // Team
    teamDreamer: 'le Rêveur',
    teamChic: 'la Chic',
    teamStrategist: 'la Stratège',
    teamAdventurous: 'l\'Aventureux',
    heroEyebrow: 'votre voyage',
    heroHeadline: 'La personne, avant la destination.',
    stat1: '20+ destinations',
    stat2: '10 ans d\'expérience',
    stat3: 'assistance 24/7',
    marrakechEyebrow: 'voyage de groupe',
    teamEyebrow: 'notre passeport',
    teamTitle: 'Rencontrez l\'équipe',
    teamSkillsLabel: 'compétences',
    teamCta: 'Parler avec',
    destEyebrow: 'explorez le monde',
    destTitle: 'Nos destinations',
    destLearnMore: 'En savoir plus',
    destNoResults: 'Aucune destination trouvée',
    destShowAll: 'Afficher tout',
    destHighlights: 'A ne pas manquer',
    destPeriod: 'saison',
    destFlight: 'vol',
    destTimezone: 'décalage',
    destWriteUs: 'Écrivez-nous pour',
    filterAll: 'Toutes',
    filterEurope: 'Europe',
    filterAfrica: 'Afrique',
    filterAsia: 'Asie',
    filterAmericas: 'Amériques',
    filterMiddleEast: 'Moyen-Orient',
    ctaEyebrow: 'vous ne trouvez pas ce que vous cherchez?',
    ctaTitle: 'Racontez-nous votre voyage idéal',
    ctaWhatsApp: 'Écrivez-nous sur WhatsApp',
    navContact: 'Contactez-nous',
    navContactWhatsApp: 'Contactez-nous sur WhatsApp',
    navLanguage: 'langue',
    formPeriod: 'période de voyage',
    formPassengers: 'passagers',
    formType: 'type',
    formTravelType: 'type de voyage',
    formSelectMonth: 'Sélectionnez le mois',
    formPrivate: 'Privé',
    formGroup: 'De Groupe',
    formSubmit: 'Trouvez la destination pour moi',
    formSelected: 'sélectionnés',
    styleFood: 'Gastronomie',
    styleAdventure: 'Aventure',
    styleCultural: 'Culturel',
    styleRelax: 'Détente',
    styleBeach: 'Plage',
    styleMountain: 'Montagne',
    styleRomantic: 'Romantique',
    styleFamily: 'Famille',
    styleLuxury: 'Luxe',
    styleReligious: 'Religieux',
    cookieBannerTitle: 'Cookies techniques uniquement.',
    cookieBannerDesc: 'Nous utilisons uniquement un stockage local technique (localStorage) pour memoriser le choix de cet avis et la langue selectionnee. Aucun cookie HTTP de profilage, analytics, marketing ou suivi.',
    cookieBannerLink: 'Lire la Politique des Cookies',
    cookieBannerReject: 'Refuser',
    cookieBannerAccept: 'Accepter',
  },
  
  de: {
    // Header
    home: 'Startseite',
    createTrip: 'Erstellen Sie Ihre Reise',
    destinations: 'Reiseziele',
    about: 'Über Uns',
    travelTips: 'Reisetipps',
    reviews: 'Bewertungen',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
    
    // Hero Section
    heroMainTitle: 'Ihre Reise Beginnt Hier',
    heroMainSubtitle: 'Füllen Sie das Ticket aus und entdecken Sie die perfekten Reiseziele für Sie',
    heroCard1Title: '20+ ausgewählte Reiseziele',
    heroCard1Desc: 'Entdecken Sie die Welt mit uns: von Europa nach Asien, von Afrika nach Amerika',
    heroCard2Title: '10 Jahre Erfahrung',
    heroCard2Desc: 'Unsere Leidenschaft für Reisen wird zu unvergesslichen Erlebnissen',
    heroCard3Title: '24/7 Unterstützung',
    heroCard3Desc: 'Wir sind immer an Ihrer Seite, vor, während und nach der Reise',
    marrakechGroupLabel: 'Organisierte Gruppenreise',
    marrakechTag2: 'Medina',
    marrakechTag3: 'Majorelle',
    marrakechCta: 'Informationen anfordern',
    icon1Label: 'Über Uns',
    ourDestinationsTitle: 'Unsere Reiseziele',
    ourDestinationsSubtitle: 'Finden Sie Ihr nächstes Abenteuer',
    heroYearsExperience: '10 Jahre Erfahrung',
    heroYearsDesc: 'In der Tourismusbranche',
    heroDestinations: '20+ Reiseziele',
    heroDestinationsDesc: 'Auf der ganzen Welt',
    heroSatisfaction: 'individuelle Beratung',
    heroSatisfactionDesc: 'für jeden Reisenden',
    
    // Gift Package
    giftTitle: 'Schenken Sie eine Reise',
    giftSecret: 'Geheimes Ziel',
    giftCta: 'Mehr Erfahren',
    
    // Passport Section
    passportTitle: 'Unser Reisepass',
    passportSubtitle: 'Entdecken Sie, wer wir sind und was wir tun',
    
    // Travel Tips
    travelTipsTitle: 'Unsere Reisetipps',
    travelTipsSubtitle: 'Öffnen Sie den Koffer, um mehr zu erfahren',
    
    // Testimonials
    testimonialsTitle: 'Was Sie Über Uns Sagen',
    testimonialsSubtitle: 'Klicken Sie auf das Fernglas und finden Sie es heraus',
    
    // Stamps
    stampsTitle: 'Unsere Stempel',
    
    // WhatsApp
    whatsappChat: 'Chatten Sie mit uns',
    
    // Legal
    legalInfo: 'Rechtliche Informationen',
    privacyPolicy: 'Datenschutzrichtlinie',
    cookiePolicy: 'Cookie-Richtlinie',
    
    // Footer
    footerAbout: 'MAIA Reisen',
    footerAboutDesc: 'Ihre Reiseagentur spezialisiert auf einzigartige und personalisierte Erlebnisse.',
    footerUsefulLinks: 'Nützliche Links',
    footerWhoWeAre: 'Über Uns',
    footerServices: 'Dienstleistungen',
    footerContact: 'Kontakt',
    footerContacts: 'Kontakte',
    footerAddress: 'Via Antonio Bertoloni 44, 00197 Roma',
    footerPhone: '+39 06 40089596',
    footerEmail: 'info@maiaviaggi.it',
    footerFollowUs: 'Folgen Sie Uns',
    footerPayments: 'Zahlungen',
    footerRights: 'Alle Rechte vorbehalten.',
    footerLanguage: 'Sprache',
    
    // Team
    teamDreamer: 'der Träumer',
    teamChic: 'die Chic',
    teamStrategist: 'die Strategin',
    teamAdventurous: 'der Abenteurer',
    heroEyebrow: 'Ihre Reise',
    heroHeadline: 'Die Person, vor dem Ziel.',
    stat1: '20+ ausgewählte Reiseziele',
    stat2: '10 Jahre Erfahrung',
    stat3: '24/7 Unterstützung',
    marrakechEyebrow: 'Gruppenreise',
    teamEyebrow: 'unser Reisepass',
    teamTitle: 'Lernen Sie das Team kennen',
    teamSkillsLabel: 'Kompetenzen',
    teamCta: 'Sprechen Sie mit',
    destEyebrow: 'entdecken Sie die Welt',
    destTitle: 'Unsere Reiseziele',
    destLearnMore: 'Mehr erfahren',
    destNoResults: 'Keine Reiseziele gefunden',
    destShowAll: 'Alle anzeigen',
    destHighlights: 'Nicht verpassen',
    destPeriod: 'Saison',
    destFlight: 'Flug',
    destTimezone: 'Zeitzone',
    destWriteUs: 'Schreiben Sie uns zu',
    filterAll: 'Alle',
    filterEurope: 'Europa',
    filterAfrica: 'Afrika',
    filterAsia: 'Asien',
    filterAmericas: 'Amerika',
    filterMiddleEast: 'Naher Osten',
    ctaEyebrow: 'nicht gefunden, was Sie suchen?',
    ctaTitle: 'Erzählen Sie uns von Ihrer Traumreise',
    ctaWhatsApp: 'Schreiben Sie uns auf WhatsApp',
    navContact: 'Kontaktieren Sie uns',
    navContactWhatsApp: 'Kontaktieren Sie uns auf WhatsApp',
    navLanguage: 'Sprache',
    formPeriod: 'Reisezeitraum',
    formPassengers: 'Passagiere',
    formType: 'Typ',
    formTravelType: 'Reiseart',
    formSelectMonth: 'Monat wählen',
    formPrivate: 'Privat',
    formGroup: 'Gruppenreise',
    formSubmit: 'Finden Sie das Reiseziel für mich',
    formSelected: 'ausgewählt',
    styleFood: 'Kulinarik',
    styleAdventure: 'Abenteuer',
    styleCultural: 'Kultur',
    styleRelax: 'Entspannung',
    styleBeach: 'Strand',
    styleMountain: 'Berge',
    styleRomantic: 'Romantisch',
    styleFamily: 'Familie',
    styleLuxury: 'Luxus',
    styleReligious: 'Religiös',
    cookieBannerTitle: 'Nur technische Cookies.',
    cookieBannerDesc: 'Wir verwenden nur technischen lokalen Speicher (localStorage), um die Auswahl zu diesem Hinweis und die gewaehlte Sprache zu speichern. Keine HTTP-Cookies fuer Profiling, Analytics, Marketing oder Tracking.',
    cookieBannerLink: 'Cookie-Richtlinie lesen',
    cookieBannerReject: 'Ablehnen',
    cookieBannerAccept: 'Einverstanden',
  },
};

export const languageNames: Record<Language, string> = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
};

// Hook per usare le traduzioni
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.it) => string;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'it',
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (key: keyof typeof translations.it) => {
        const lang = get().language;
        return translations[lang][key] || translations.it[key] || key;
      },
    }),
    {
      name: 'maia-language',
    }
  )
);
