import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { TicketForm } from '@/components/TicketForm'
import { WorldMap } from '@/components/WorldMap'
import { ArchetypeBands } from '@/components/ArchetypeBands'
import { DestinationsMarquee } from '@/components/DestinationsMarquee'
import { BrushDivider } from '@/components/BrushDivider'
import { PostalStamp } from '@/components/PostalStamp'
import { EditorialHeading } from '@/components/EditorialHeading'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Footer } from '@/components/Footer'
import { PageMeta } from '@/components/PageMeta'
import { TicketFormData } from '@/lib/index'
import { IMAGES } from '@/assets/images'
import { useLanguage } from '@/lib/i18n'
import { springPresets } from '@/lib/motion'

const WA_GENERIC = 'https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi'

export default function Home() {
  const { t } = useLanguage()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [heroVisible, setHeroVisible] = useState(false)
  const [cookieDismissed, setCookieDismissed] = useState(() => !!localStorage.getItem('cookie-consent'))

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const check = () => setCookieDismissed(!!localStorage.getItem('cookie-consent'))
    window.addEventListener('storage', check)
    const interval = setInterval(check, 1000)
    return () => { window.removeEventListener('storage', check); clearInterval(interval) }
  }, [])

  useEffect(() => {
    const openDestinations = () => {
      setTimeout(() => {
        const el = document.getElementById('destinazioni-section')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
    window.addEventListener('open-destinations', openDestinations)
    return () => window.removeEventListener('open-destinations', openDestinations)
  }, [])

  const [lastSubmit, setLastSubmit] = useState<TicketFormData | null>(null)

  const handleTicketSubmit = (data: TicketFormData) => {
    const tags = data.preferences ? data.preferences.split(', ') : []
    setSelectedTags(tags)
    setLastSubmit(data)
    setTimeout(() => {
      const el = document.getElementById('destinazioni-section')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 500)
  }

  const buildFormWhatsAppUrl = (data: TicketFormData) => {
    const parts = [
      `Ciao MAIA Viaggi!`,
      data.departureDate ? `Periodo: ${data.departureDate}` : '',
      `Viaggiatori: ${data.passengers}`,
      data.travelType === 'group_adhoc' ? 'Tipo: viaggio di gruppo' : 'Tipo: privato',
      data.preferences ? `Stili: ${data.preferences}` : '',
      `Potete aiutarmi a trovare la destinazione giusta?`,
    ].filter(Boolean).join('\n')
    return `https://wa.me/390640089596?text=${encodeURIComponent(parts)}`
  }

  return (
    <div className="min-h-screen">
      <PageMeta
        title="MAIA Viaggi — La persona, prima della meta"
        description="Agenzia di viaggi a Roma. 20 destinazioni, 4 consulenti, un viaggio costruito attorno a te."
        path="/"
      />
      <Header />

      {/* Hero -- editorial split 60/40 */}
      <section id="hero" className="min-h-screen flex items-center relative pt-20 pb-16 section-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: typography + form (3/5) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
            >
              <p className="font-heading italic text-sm md:text-base text-[#DCB38C] mb-4">
                &mdash; {t('heroEyebrow')}
              </p>
              <h1
                className={`font-heading font-semibold tracking-tight leading-[1.05] mb-6 ${heroVisible ? 'visible' : ''}`}
                style={{ fontSize: 'clamp(2.75rem, 6vw + 1rem, 7rem)' }}
              >
                La <em className="accent-underline not-italic text-[#821D30]">persona</em>, prima della meta.
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-8 leading-relaxed">
                {t('heroMainSubtitle')}
              </p>

              <TicketForm onSubmit={handleTicketSubmit} />

              {/* Stats strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                <span className="font-mono text-xs text-foreground/60 lowercase">{t('stat1')}</span>
                <span className="w-1 h-1 rounded-full bg-[#DCB38C]" />
                <span className="font-mono text-xs text-foreground/60 lowercase">{t('stat2')}</span>
                <span className="w-1 h-1 rounded-full bg-[#DCB38C]" />
                <span className="font-mono text-xs text-foreground/60 lowercase">{t('stat3')}</span>
              </div>
            </motion.div>

            {/* Right: cinematic photo + postal stamp (2/5) */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springPresets.gentle, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src={IMAGES.BALI_1}
                  alt="Viaggio cinematico"
                  className="w-full h-full object-cover photo-editorial"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <PostalStamp className="absolute -top-4 -right-4 md:top-4 md:right-[-2rem] z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <BrushDivider />

      {/* Marrakech -- full-bleed cinematic */}
      <section id="marocco-section" className="relative overflow-hidden" style={{ height: '100svh' }}>
        <div className="absolute inset-0">
          <img
            src={IMAGES.MARRAKECH_GROUP_REALISTIC_20260401_225943_169}
            alt="Gruppo a Marrakech"
            className="w-full h-full object-cover object-center photo-editorial"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-12 h-full pt-20 pb-8">
          <ScrollReveal className="max-w-4xl mx-auto w-full">
            <p className="font-heading italic text-sm md:text-base text-white/80 mb-4">
              &mdash; {t('marrakechEyebrow')}
            </p>
            <h2
              className="font-heading font-semibold text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(3rem, 12vw, 7rem)' }}
            >
              Marrakech
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-4 leading-relaxed">
              Stiamo organizzando un viaggio di gruppo a Marrakech. Date, itinerario e dettagli in definizione. Scrivici per saperne di più e riservare il tuo posto.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[t('marrakechTag2'), 'Sahara', 'Hammam', t('marrakechTag3')].map((tag) => (
                <span key={tag} className="text-sm px-3 py-1.5 rounded-full bg-white/15 text-white">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/390640089596?text=Ciao%20MAIA!%20Sono%20interessato%20al%20viaggio%20di%20gruppo%20a%20Marrakech.%20Potete%20darmi%20maggiori%20informazioni%20su%20date%20e%20programma%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#CE5B20] text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-medium shadow-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
            >
              Scrivici per date e dettagli
            </a>
          </ScrollReveal>
        </div>
      </section>

      <BrushDivider flip color="#821D30" />

      {/* Team -- archetype bands */}
      <section id="passport-section" className="section-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <EditorialHeading
            eyebrow={t('teamEyebrow')}
            accentWord="team"
            align="center"
            className="mb-12"
          >
            {t('teamTitle')}
          </EditorialHeading>
          <ArchetypeBands />
        </div>
      </section>

      {/* Destinations marquee strip */}
      <DestinationsMarquee />

      {/* Destinations grid */}
      <section id="destinazioni-section" className="section-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <EditorialHeading
            eyebrow={t('destEyebrow')}
            accentWord={t('destinations').toLowerCase()}
            align="center"
            className="mb-10"
          >
            {t('destTitle')}
          </EditorialHeading>
          <WorldMap filterTags={selectedTags} />

          {lastSubmit && (
            <div className="mt-10 text-center">
              <a
                href={buildFormWhatsAppUrl(lastSubmit)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Richiedi un preventivo su WhatsApp
              </a>
              <p className="text-[11px] text-foreground/40 mt-2">
                I dati selezionati verranno inseriti nel messaggio WhatsApp e gestiti sulla piattaforma WhatsApp/Meta.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="section-cream-deep py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-heading italic text-sm text-[#DCB38C] mb-3">&mdash; {t('ctaEyebrow')}</p>
            <h2 className="font-heading font-semibold text-2xl md:text-4xl mb-6 leading-tight">
              {t('ctaTitle')}
            </h2>
            <a
              href={WA_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full text-base font-medium shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t('ctaWhatsApp')}
            </a>
          </ScrollReveal>
        </div>
      </section>

      <BrushDivider color="#237478" />

      <Footer />

      {/* WhatsApp sticky */}
      <a
        href={WA_GENERIC}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className={`fixed right-4 md:right-6 z-30 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] ${cookieDismissed ? 'bottom-6' : 'bottom-28 md:bottom-32'}`}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
