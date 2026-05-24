import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { springPresets } from '@/lib/motion'
import { ROUTE_PATHS } from '@/lib/index'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
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
          <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden">
            <div className="relative p-6 md:p-8">
              {/* Icona Cookie */}
              <div className="absolute top-4 right-4">
                <Cookie className="w-8 h-8 text-primary/30" />
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Testo */}
                <div className="flex-1 pr-8">
                  <h3 className="text-xl md:text-2xl font-heading font-medium text-primary mb-2">
                    Cookie tecnici, solo.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Usiamo solo archiviazione locale tecnica (localStorage) per ricordare la scelta su questo avviso e la lingua selezionata.
                    Nessun cookie HTTP di profilazione, analytics, marketing o tracciamento.{' '}
                    <Link to={ROUTE_PATHS.COOKIE} className="text-primary hover:underline font-semibold">
                      Leggi la Cookie Policy
                    </Link>
                  </p>
                </div>

                {/* Pulsanti */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={rejectCookies}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Rifiuta
                  </Button>
                  <Button
                    onClick={acceptCookies}
                    className="w-full sm:w-auto bg-[#821D30] hover:bg-[#6E182A] text-white"
                  >
                    Va bene
                  </Button>
                </div>
              </div>

              {/* Pulsante chiudi */}
              <button
                type="button"
                onClick={rejectCookies}
                className="absolute top-2 right-2 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
