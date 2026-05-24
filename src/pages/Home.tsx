import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Award, Users } from 'lucide-react';
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
  const [passportOpen, setPassportOpen] = useState(false);

  useEffect(() => {
    const openDestinations = () => {
      setShowMap(true);
      setTimeout(() => {
        const mapSection = document.getElementById('destinazioni-section');
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    };
    window.addEventListener('open-destinations', openDestinations);
    return () => window.removeEventListener('open-destinations', openDestinations);
  }, []);

  const handleTicketSubmit = (data: TicketFormData) => {
    setTicketData(data);
    setShowMap(true);

    const tags = data.preferences ? data.preferences.split(', ') : [];
    setSelectedTags(tags);

    setTimeout(() => {
      const mapSection = document.getElementById('destinazioni-section');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen relative">
      <Header />

      {/* Background mappa vintage */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <img
            src={IMAGES.MAPPA_ANTICA_CHIARA}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#821d30]/20 via-[#ce5b20]/15 to-[#237478]/20 mix-blend-multiply" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-orange-400/30 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-400/20 via-amber-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-rose-100/40 to-sky-100/60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative snap-start pt-20 md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="container mx-auto px-4 py-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mb-6">
            <motion.h1
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springPresets.bouncy, delay: 0.2 }}
            >
              {t('heroMainTitle')}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springPresets.gentle, delay: 0.4 }}
            >
              {t('heroMainSubtitle')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <TicketForm onSubmit={handleTicketSubmit} />
          </motion.div>

          {/* Stats strip — sotto il form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto mt-8"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#821d30]" />
              <span className="text-xs md:text-sm font-medium text-[#1A1A1A]">{t('heroCard1Title')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ce5b20]" />
              <span className="text-xs md:text-sm font-medium text-[#1A1A1A]">{t('heroCard2Title')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#237478]" />
              <span className="text-xs md:text-sm font-medium text-[#1A1A1A]">{t('heroCard3Title')}</span>
            </div>
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
              <div className="mt-4 text-accent text-4xl animate-bounce">↓</div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Sezione Marrakech */}
      <section
        id="marocco-section"
        className="relative snap-start overflow-hidden"
        style={{ height: '100svh' }}
      >
        <div className="absolute inset-0">
          <img
            src={IMAGES.MARRAKECH_GROUP_REALISTIC_20260401_225943_169}
            alt="Gruppo a Marrakech"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        </div>

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-12 h-full"
          style={{ paddingTop: '72px', paddingBottom: '24px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springPresets.gentle, delay: 0.1 }}
            className="max-w-4xl mx-auto w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 md:mb-4 border border-white/30"
            >
              <Globe className="w-4 h-4 text-white" />
              <p className="text-[10px] md:text-sm font-bold text-white tracking-wider">
                {t('marrakechGroupLabel')}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-sm md:text-2xl font-medium mb-2 md:mb-3"
            >
              {t('heroMainSubtitle')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springPresets.bouncy, delay: 0.35 }}
              className="font-heading font-black leading-none mb-2 md:mb-4"
              style={{
                fontSize: 'clamp(3rem, 15vw, 8rem)',
                background: 'linear-gradient(135deg, #ce5b20 0%, #D4AF37 50%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 20px rgba(206,91,32,0.6))'
              }}
            >
              Marrakech
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-5 md:mb-7"
            >
              {[t('marrakechTag2'), 'Sahara', 'Hammam', t('marrakechTag3')].map((tag) => (
                <span key={tag} className="text-[10px] md:text-sm font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30">{tag}</span>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const msg = 'Ciao MAIA! Sono interessato al viaggio di gruppo in Marocco a Marrakech. Potete darmi maggiori informazioni?';
                window.open(`https://wa.me/390640089596?text=${encodeURIComponent(msg)}`, '_blank');
              }}
              className="bg-gradient-to-r from-[#ce5b20] to-[#821d30] text-white px-7 py-2.5 md:px-14 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-2xl border border-white/20 transition-all duration-300"
            >
              {t('marrakechCta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Passaporto — icona cliccabile che apre il modale */}
      <section
        id="passport-section"
        className="flex items-center justify-center relative snap-start py-12 md:py-16"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springPresets.bouncy, delay: 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setPassportOpen(true)}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-64 md:w-80 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#821d30]/20 group-hover:border-[#821d30] transition-all p-6 md:p-8 flex flex-col items-center">
                <svg viewBox="0 0 200 150" className="w-full h-auto max-h-32 md:max-h-40 drop-shadow-lg">
                  <defs>
                    <linearGradient id="pg1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4a1942" />
                      <stop offset="100%" stopColor="#2a0e25" />
                    </linearGradient>
                    <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B6914" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8B6914" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="100" cy="143" rx="65" ry="5" fill="#000" opacity="0.15"/>
                  <rect x="35" y="8" width="130" height="128" rx="8" fill="url(#pg1)" stroke="#D4AF37" strokeWidth="2.5"/>
                  <rect x="35" y="8" width="16" height="128" rx="8" fill="#2a0e25" stroke="#D4AF37" strokeWidth="2"/>
                  <rect x="163" y="8" width="2" height="128" fill="#f5f0e8" opacity="0.8"/>
                  <rect x="160" y="8" width="2" height="128" fill="#e8e0d0" opacity="0.5"/>
                  <rect x="53" y="14" width="106" height="116" rx="4" fill="#f5f0e8" opacity="0.97"/>
                  <circle cx="106" cy="55" r="28" fill="none" stroke="#821d30" strokeWidth="2" strokeDasharray="4 2"/>
                  <circle cx="106" cy="55" r="22" fill="none" stroke="#821d30" strokeWidth="1.2"/>
                  <text x="106" y="50" fontSize="9" fontWeight="900" fill="#821d30" textAnchor="middle" fontFamily="serif" letterSpacing="1">MAIA</text>
                  <text x="106" y="62" fontSize="6.5" fontWeight="bold" fill="#821d30" textAnchor="middle" letterSpacing="2">VIAGGI</text>
                  <rect x="60" y="88" width="28" height="34" rx="3" fill="#d4b896" stroke="#aaa" strokeWidth="1"/>
                  <circle cx="74" cy="98" r="7" fill="#c8956c"/>
                  <rect x="63" y="107" width="22" height="12" rx="2" fill="#c8956c" opacity="0.7"/>
                  <rect x="96" y="90" width="55" height="4" rx="2" fill="#821d30" opacity="0.5"/>
                  <rect x="96" y="98" width="42" height="3" rx="1" fill="#aaa" opacity="0.6"/>
                  <rect x="96" y="104" width="48" height="3" rx="1" fill="#aaa" opacity="0.6"/>
                  <rect x="96" y="110" width="35" height="3" rx="1" fill="#aaa" opacity="0.6"/>
                  <circle cx="138" cy="118" r="10" fill="none" stroke="#821d30" strokeWidth="1.5" opacity="0.7"/>
                  <text x="138" y="121" fontSize="5" fontWeight="bold" fill="#821d30" textAnchor="middle" opacity="0.7">VISA</text>
                </svg>
              </div>
              <span className="font-heading font-bold text-base md:text-lg text-[#821d30] text-center mt-2">{t('icon1Label')}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinazioni */}
      <section
        id="destinazioni-section"
        className="relative py-16 md:py-24"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#821d30] via-[#ce5b20] to-[#237478] bg-clip-text text-transparent mb-3">
              {t('ourDestinationsTitle')}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 font-medium">
              {t('ourDestinationsSubtitle')}
            </p>
          </motion.div>
          <WorldMap visible={true} filterTags={selectedTags} />
        </div>
      </section>

      <Footer />

      {/* Modale Passaporto */}
      <AnimatePresence>
        {passportOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPassportOpen(false)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={springPresets.bouncy}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPassportOpen(false)}
                aria-label="Chiudi passaporto"
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white shadow-lg text-xl font-bold"
              >
                &times;
              </button>
              <PassportBook />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp sticky — struttura template ma senza mouseY e badge */}
      <a
        href="https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-24 right-4 md:right-6 z-40 w-11 h-11 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
