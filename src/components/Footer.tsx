import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CreditCard, Globe } from 'lucide-react'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { SiKlarna, SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/lib/index'
import { springPresets } from '@/lib/motion'
import { useLanguage, languageNames, type Language } from '@/lib/i18n'

function LanguageButton({ lang }: { lang: Language }) {
  const { language, setLanguage } = useLanguage();
  const isActive = language === lang;
  
  return (
    <motion.button
      onClick={() => setLanguage(lang)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
        isActive
          ? 'bg-white text-[#8B1538] shadow-lg'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      {languageNames[lang]}
    </motion.button>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#1A1A1A] text-white py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(130,29,48,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 mb-8">
          {/* Colonna 1: Info Agenzia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">{t('footerAbout')}</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {t('footerAboutDesc')}
            </p>
          </motion.div>

          {/* Colonna 2: Link Utili */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">{t('footerUsefulLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={ROUTE_PATHS.HOME} className="hover:text-white/80 transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#passport-section" className="hover:text-white/80 transition-colors">
                  {t('footerWhoWeAre')}
                </a>
              </li>
              <li>
                <a href="#map-section" className="hover:text-white/80 transition-colors">
                  Destinazioni
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Colonna 3: Contatti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">{t('footerContacts')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Via Antonio Bertoloni 44, Roma</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+390640089596" className="hover:text-white/80 transition-colors">
                  +39 06 40089596
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@maiaviaggi.it" className="hover:text-white/80 transition-colors">
                  info@maiaviaggi.it
                </a>
              </div>
            </div>
          </motion.div>

          {/* Colonna 4: Seguici */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">{t('footerFollowUs')}</h3>
            <div className="space-y-3 text-sm">
              <a href="https://instagram.com/maiaviaggi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors group">
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@maiaviaggi</span>
              </a>
              <a href="https://tiktok.com/@maiaviaggi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors group">
                <FaTiktok className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@maiaviaggi</span>
              </a>
              <a href="https://facebook.com/maiaviaggi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors group">
                <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>MAIA Viaggi</span>
              </a>
            </div>
          </motion.div>

          {/* Colonna 6: Pagamenti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">{t('footerPayments')}</h3>
            <div className="space-y-3">
              {/* Riga 1: Klarna, Scalapay */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs">
                  <SiKlarna className="w-5 h-5" />
                  <span>Klarna</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <CreditCard className="w-4 h-4" />
                  <span>Scalapay</span>
                </div>
              </div>
              
              {/* Riga 2: Carte */}
              <div className="flex items-center gap-2 flex-wrap">
                <SiMastercard className="w-8 h-8" title="Mastercard" />
                <SiVisa className="w-8 h-8" title="Visa" />
                <SiAmericanexpress className="w-8 h-8" title="American Express" />
              </div>
              
              {/* Riga 3: PayPal, Satispay */}
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span className="font-semibold">PayPal</span>
                <span className="font-semibold">Satispay</span>
              </div>
            </div>
          </motion.div>

          {/* Colonna 7: Informazioni Legali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-xl font-bold mb-4">Informazioni Legali</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={ROUTE_PATHS.PRIVACY} className="hover:text-white/80 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={ROUTE_PATHS.COOKIE} className="hover:text-white/80 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <span className="text-white/60">MAIA 4.0 SRL</span>
              </li>
              <li>
                <span className="text-white/60">P.IVA / C.F.: 18332251000</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springPresets.gentle, delay: 0.7 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-6 mb-6"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <h3 className="font-heading text-lg font-bold">Lingua / Language</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <LanguageButton key={lang} lang={lang} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>© {currentYear} {t('footerAbout')}. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  )
}
