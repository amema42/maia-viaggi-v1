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
    heroCard1Title: '30+ Destinazioni',
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
    heroDestinations: '50+ Destinazioni',
    heroDestinationsDesc: 'In tutto il mondo',
    heroSatisfaction: '98% Soddisfazione',
    heroSatisfactionDesc: 'Clienti felici',
    
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
    footerAddress: 'Via Roma 123, Milano',
    footerPhone: '+39 02 1234567',
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
    heroCard1Title: '30+ Destinations',
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
    heroDestinations: '50+ Destinations',
    heroDestinationsDesc: 'Around the world',
    heroSatisfaction: '98% Satisfaction',
    heroSatisfactionDesc: 'Happy customers',
    
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
    footerAddress: 'Via Roma 123, Milan',
    footerPhone: '+39 02 1234567',
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
    heroCard1Title: '30+ Destinos',
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
    heroDestinations: '50+ Destinos',
    heroDestinationsDesc: 'En todo el mundo',
    heroSatisfaction: '98% Satisfacción',
    heroSatisfactionDesc: 'Clientes felices',
    
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
    footerAddress: 'Via Roma 123, Milán',
    footerPhone: '+39 02 1234567',
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
    heroCard1Title: '30+ Destinations',
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
    heroDestinations: '50+ Destinations',
    heroDestinationsDesc: 'Dans le monde entier',
    heroSatisfaction: '98% Satisfaction',
    heroSatisfactionDesc: 'Clients satisfaits',
    
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
    footerAddress: 'Via Roma 123, Milan',
    footerPhone: '+39 02 1234567',
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
    heroCard1Title: '30+ Reiseziele',
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
    heroDestinations: '50+ Reiseziele',
    heroDestinationsDesc: 'Auf der ganzen Welt',
    heroSatisfaction: '98% Zufriedenheit',
    heroSatisfactionDesc: 'Glückliche Kunden',
    
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
    footerAddress: 'Via Roma 123, Mailand',
    footerPhone: '+39 02 1234567',
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
  },
};

export const languageNames: Record<Language, string> = {
  it: '🇮🇹 Italiano',
  en: '🇬🇧 English',
  es: '🇪🇸 Español',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
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
