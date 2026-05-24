import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { springPresets } from '@/lib/motion'
import { ROUTE_PATHS } from '@/lib/index'
import { useLanguage } from '@/lib/i18n'

export function CookieBanner() {
  const { t } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setShowBanner(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={springPresets.snappy}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#DCB38C]/20 overflow-hidden">
            <div className="relative p-5 md:p-6">
              <button
                type="button"
                onClick={rejectCookies}
                className="absolute top-3 right-3 p-1.5 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>

              <div className="pr-8">
                <h3 className="text-base font-heading font-medium text-[#821D30] mb-1.5">
                  {t('cookieBannerTitle')}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-1">
                  {t('cookieBannerDesc')}
                </p>
                <p className="text-xs text-foreground/40 leading-relaxed mb-4">
                  Il sito carica font da Google Fonts e alcune immagini da servizi esterni; queste risorse possono comportare richieste tecniche verso fornitori terzi, come dichiarato nella{' '}
                  <Link to={ROUTE_PATHS.PRIVACY} className="text-[#821D30] hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={rejectCookies}
                  variant="outline"
                  className="text-sm h-9 px-4"
                >
                  {t('cookieBannerReject')}
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="text-sm h-9 px-4 bg-[#821D30] hover:bg-[#6E182A] text-white"
                >
                  {t('cookieBannerAccept')}
                </Button>
                <Link
                  to={ROUTE_PATHS.COOKIE}
                  className="text-sm text-[#821D30] hover:underline self-center ml-auto hidden sm:block"
                >
                  {t('cookieBannerLink')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
