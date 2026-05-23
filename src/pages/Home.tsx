import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { TicketForm } from '@/components/TicketForm';
import { WorldMap } from '@/components/WorldMap';
import { PassportBook } from '@/components/PassportBook';
import { Footer } from '@/components/Footer';
import { TicketFormData } from '@/lib/index';
import { springPresets } from '@/lib/motion';
import { IMAGES } from '@/assets/images';
import { useLanguage } from '@/lib/i18n';

export default function Home() {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(false);
  const [ticketData, setTicketData] = useState<TicketFormData | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [mouseY, setMouseY] = useState(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const handleTicketSubmit = (data: TicketFormData) => {
    setTicketData(data);
    setShowMap(true);
    
    // Estrai i tag dalle preferenze (tipologie selezionate)
    const tags = data.preferences ? data.preferences.split(', ') : [];
    setSelectedTags(tags);
    
    setTimeout(() => {
      const mapSection = document.getElementById('map-section');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen relative">
      {/* Header Navigation */}
      <Header />
      {/* Sfondo mappa vintage pop per tutta la pagina */}
      <div className="fixed inset-0 -z-10">
          {/* Mappa vintage come base */}
          <div className="absolute inset-0">
            <img 
              src={IMAGES.MAPPA_ANTICA_CHIARA}
              alt="Vintage World Map" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay colorato pop con colori archetipi */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#821d30]/20 via-[#ce5b20]/15 to-[#237478]/20 mix-blend-multiply" />
          
          {/* Blob colorati vibranti */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-orange-400/30 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-400/20 via-amber-400/20 to-transparent rounded-full blur-3xl" />
          
          {/* Overlay per aumentare saturazione e contrasto */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-rose-100/40 to-sky-100/60 mix-blend-overlay" />
          
          {/* Vignette per focus centrale */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
          
          {/* Overlay finale per leggibilità */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>
      
      {/* Logo MAIA in alto a sinistra */}

      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative snap-start pt-20 md:pt-24"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="container mx-auto px-4 py-6 relative z-10 flex flex-col items-center"
        >
          <div className="max-w-4xl w-full text-center mb-6">
            
            <motion.h1
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springPresets.bouncy, delay: 0.2 }}
            >
              {t('heroMainTitle')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springPresets.gentle, delay: 0.4 }}
            >
              {t('heroMainSubtitle')}
            </motion.p>
          </div>

          {/* Card informative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mb-8"
          >
            {/* Card 1: Destinazioni */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#821d30]/20 hover:border-[#821d30] transition-all"
            >
              <div className="text-4xl mb-3 text-center">🌍</div>
              <h3 className="font-heading text-xl font-bold text-[#821d30] mb-2 text-center">
                {t('heroCard1Title')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('heroCard1Desc')}
              </p>
            </motion.div>

            {/* Card 2: Esperienza */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#ce5b20]/20 hover:border-[#ce5b20] transition-all"
            >
              <div className="text-4xl mb-3 text-center">⭐</div>
              <h3 className="font-heading text-xl font-bold text-[#ce5b20] mb-2 text-center">
                {t('heroCard2Title')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('heroCard2Desc')}
              </p>
            </motion.div>

            {/* Card 3: Assistenza */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#237478]/20 hover:border-[#237478] transition-all"
            >
              <div className="text-4xl mb-3 text-center">👥</div>
              <h3 className="font-heading text-xl font-bold text-[#237478] mb-2 text-center">
                {t('heroCard3Title')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('heroCard3Desc')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.7 }}
            className="w-full max-w-2xl mx-auto"
          >
            <TicketForm onSubmit={handleTicketSubmit} />
          </motion.div>

          {ticketData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.snappy}
              className="mt-8 text-center"
            >
              <p className="text-lg text-muted-foreground">
                Biglietto confermato! Scorri per esplorare le destinazioni
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-4 text-accent text-4xl"
              >
                ↓
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Sezione Chi Siamo */}
      <section className="py-4 md:py-6 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-[#821d30] via-[#ce5b20] to-[#237478] bg-clip-text text-transparent">
              Chi Siamo?
            </h2>
            <p className="font-heading text-2xl md:text-4xl font-semibold text-foreground/80 mb-3">
              Scoprilo aprendo il nostro passaporto
            </p>
            
            {/* Freccia animata che punta al passaporto */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-6xl md:text-8xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sezione Passaporto */}
      <section 
        id="passport-section" 
        className="min-h-screen flex items-start justify-center relative snap-start pt-2 md:pt-4 pb-2 md:pb-3"
      >
        {/* Sfondo con pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,179,140,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(206,91,32,0.08),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-8">
            {/* Passaporto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springPresets.bouncy, delay: 0.4 }}
              className="w-full max-w-4xl"
            >
              <PassportBook />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showMap && (
          <motion.section
            id="map-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={springPresets.smooth}
            className="min-h-screen flex items-center justify-center relative snap-start py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
            
            <div className="container mx-auto px-4 relative z-10">
              <WorldMap visible={showMap} filterTags={selectedTags} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Sezione Le Nostre Destinazioni - sempre visibile sotto il passaporto */}
      <section id="destinazioni" className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#821d30] via-[#ce5b20] to-[#237478] bg-clip-text text-transparent mb-3">
              Le Nostre Destinazioni
            </h2>
            <p className="text-base md:text-lg text-foreground/70 font-medium">
              Esplora tutte le mete e clicca per scoprire il tuo viaggio ideale
            </p>
          </motion.div>
          <WorldMap visible={true} filterTags={[]} />
        </div>
      </section>

      {/* Footer con informazioni legali */}
      <Footer />

      {/* Widget WhatsApp che segue il cursore */}
      <motion.a
        href="https://wa.me/393123456789?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: -(mouseY * 0.15) // Si muove in base alla posizione Y del mouse
        }}
        transition={{ 
          delay: 1, 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          y: { type: "spring", stiffness: 150, damping: 25 }
        }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-32 right-6 z-40 group"
      >
        {/* Tooltip "Chatta con noi" */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
            💬 Chatta con noi
          </span>
          {/* Freccia */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white dark:border-l-zinc-800" />
        </motion.div>

        {/* Bottone WhatsApp */}
        <div className="relative">
          {/* Badge notifica animato */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"
          />

          {/* Icona WhatsApp */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              transition: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
            className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow"
          >
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </motion.div>
        </div>
      </motion.a>
    </div>
  );
}