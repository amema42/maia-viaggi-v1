import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ROUTE_PATHS } from '@/lib/index'
import { springPresets } from '@/lib/motion'
import { IMAGES } from '@/assets/images'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen relative">
      {/* Sfondo mappa vintage */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.VINTAGE_MAP_BG_8} 
            alt="Vintage World Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#821d30]/20 via-[#ce5b20]/15 to-[#237478]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Pulsante torna indietro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springPresets.snappy}
          className="mb-8"
        >
          <Button
            variant="outline"
            onClick={() => window.location.href = ROUTE_PATHS.HOME}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Button>
        </motion.div>

        {/* Contenuto Cookie Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: 1 Aprile 2026</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Cosa sono i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Vengono utilizzati per migliorare l'esperienza di navigazione e per fornire funzionalità essenziali.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Tipologie di Cookie Utilizzati</h2>
              
              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Cookie Tecnici (Necessari)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>cookie-consent</strong>: Memorizza la tua preferenza sui cookie (durata: 1 anno)</li>
                <li><strong>Session cookies</strong>: Mantengono la sessione di navigazione attiva</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Cookie di Terze Parti</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Non utilizziamo cookie di terze parti</strong> per tracciamento, profilazione o pubblicità.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Finalità dei Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie tecnici che utilizziamo servono esclusivamente a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Garantire il corretto funzionamento del sito</li>
                <li>Memorizzare le tue preferenze sui cookie</li>
                <li>Mantenere la sessione di navigazione</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Durata dei Cookie</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-300 mt-4">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-zinc-300 p-3 text-left">Nome Cookie</th>
                      <th className="border border-zinc-300 p-3 text-left">Tipo</th>
                      <th className="border border-zinc-300 p-3 text-left">Durata</th>
                      <th className="border border-zinc-300 p-3 text-left">Finalità</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-zinc-300 p-3">cookie-consent</td>
                      <td className="border border-zinc-300 p-3">Tecnico</td>
                      <td className="border border-zinc-300 p-3">1 anno</td>
                      <td className="border border-zinc-300 p-3">Memorizza preferenze cookie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Come Gestire i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Puoi gestire o eliminare i cookie in qualsiasi momento attraverso:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Banner Cookie</strong>: Alla prima visita, puoi accettare o rifiutare i cookie</li>
                <li><strong>Impostazioni Browser</strong>: Puoi configurare il tuo browser per bloccare o eliminare i cookie</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Istruzioni per Browser</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Chrome</strong>: Impostazioni → Privacy e sicurezza → Cookie</li>
                <li><strong>Firefox</strong>: Opzioni → Privacy e sicurezza → Cookie e dati dei siti</li>
                <li><strong>Safari</strong>: Preferenze → Privacy → Gestisci dati siti web</li>
                <li><strong>Edge</strong>: Impostazioni → Cookie e autorizzazioni sito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Conseguenze del Rifiuto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il rifiuto dei cookie tecnici potrebbe compromettere alcune funzionalità del sito. 
                Tuttavia, potrai comunque navigare e visualizzare i contenuti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Aggiornamenti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questa Cookie Policy può essere aggiornata periodicamente. 
                Ti invitiamo a consultarla regolarmente per essere informato su eventuali modifiche.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Contatti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per domande sulla nostra Cookie Policy:
                <br /><strong>Email:</strong> info@maiatravel.it
                <br /><strong>Tel:</strong> +39 06 40089596
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
