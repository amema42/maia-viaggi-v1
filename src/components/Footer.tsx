import { Mail, Phone, MapPin } from 'lucide-react'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { SiKlarna, SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si'
import { CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/lib/index'
import { useLanguage } from '@/lib/i18n'

const WA_URL = 'https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer id="footer" className="relative section-ink py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(130,29,48,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* About + Links */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg italic text-[#DCB38C] mb-3 font-normal">{t('footerAbout')}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{t('footerAboutDesc')}</p>
            </div>
            <div>
              <h3 className="font-heading text-lg italic text-[#DCB38C] mb-3 font-normal">Link</h3>
              <ul className="space-y-2 text-sm">
                <li><a href={ROUTE_PATHS.HOME} className="text-white/70 hover:text-white transition-colors">{t('home')}</a></li>
                <li><a href="#passport-section" className="text-white/70 hover:text-white transition-colors">{t('footerWhoWeAre')}</a></li>
                <li><a href="#destinazioni-section" className="text-white/70 hover:text-white transition-colors">Destinazioni</a></li>
                <li><Link to={ROUTE_PATHS.PRIVACY} className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to={ROUTE_PATHS.COOKIE} className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Contacts + WhatsApp CTA */}
          <div>
            <h3 className="font-heading text-lg italic text-[#DCB38C] mb-3 font-normal">{t('footerContacts')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Via Antonio Bertoloni 44, Roma</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-white/70" />
                <a href="tel:+390640089596" className="text-white/70 hover:text-white transition-colors">+39 06 40089596</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-white/70" />
                <a href="mailto:info@maiaviaggi.it" className="text-white/70 hover:text-white transition-colors">info@maiaviaggi.it</a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Scrivici su WhatsApp
            </a>

            <h3 className="font-heading text-lg italic text-[#DCB38C] mt-8 mb-3 font-normal">{t('footerFollowUs')}</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/maiaviaggi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="https://tiktok.com/@maiaviaggi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors"><FaTiktok className="w-5 h-5" /></a>
              <a href="https://facebook.com/maiaviaggi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors"><FaFacebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Payments + Legal */}
          <div>
            <h3 className="font-heading text-lg italic text-[#DCB38C] mb-3 font-normal">{t('footerPayments')}</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <SiKlarna className="w-5 h-5" /><span>Klarna</span>
                <CreditCard className="w-4 h-4" /><span>Scalapay</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <SiMastercard className="w-7 h-7" />
                <SiVisa className="w-7 h-7" />
                <SiAmericanexpress className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-3 text-white/60 text-xs font-medium">
                <span>PayPal</span><span>Satispay</span>
              </div>
            </div>

            <div className="text-sm text-white/50 space-y-1">
              <p>MAIA 4.0 SRL</p>
              <p>P.IVA / C.F.: 18332251000</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>&copy; {currentYear} {t('footerAbout')}. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  )
}
