import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Award, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { TicketForm } from '@/components/TicketForm';
import { WorldMap } from '@/components/WorldMap';
import { PassportBook } from '@/components/PassportBook';
import { Footer } from '@/components/Footer';
import { TicketFormData } from '@/lib/index';
import { springPresets } from '@/lib/motion';
import { useLanguage } from '@/lib/i18n';

export default function Home() {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(false);
  const [ticketData, setTicketData] = useState<TicketFormData | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);


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
      <Header />

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
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border-t-3 border-[#821d30] transition-all hover:shadow-md"
            >
              <Compass className="w-6 h-6 text-[#821d30] mb-3" />
              <h3 className="font-heading text-xl font-medium text-[#1A1A1A] mb-2">
                Venti destinazioni
              </h3>
              <p className="text-sm text-[#595142]">
                Mete che abbiamo testato di persona, mai per sentito dire.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border-t-3 border-[#ce5b20] transition-all hover:shadow-md"
            >
              <Award className="w-6 h-6 text-[#ce5b20] mb-3" />
              <h3 className="font-heading text-xl font-medium text-[#1A1A1A] mb-2">
                Dieci anni a Roma
              </h3>
              <p className="text-sm text-[#595142]">
                Costruiamo viaggi su misura da quando ne ricordiamo l'inizio.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border-t-3 border-[#237478] transition-all hover:shadow-md"
            >
              <Users className="w-6 h-6 text-[#237478] mb-3" />
              <h3 className="font-heading text-xl font-medium text-[#1A1A1A] mb-2">
                Sempre al telefono
              </h3>
              <p className="text-sm text-[#595142]">
                WhatsApp, telefono, email: rispondiamo davvero.
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

      {/* WhatsApp sticky — pulito, senza gimmick */}
      <a
        href="https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.40)] transition-transform hover:scale-105"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}