import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { springPresets } from '@/lib/motion'

export default function Cookie() {
  return (
    <div className="min-h-screen section-cream">
      <Header />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <p className="font-heading italic text-sm text-[#DCB38C] mb-3">&mdash; informativa</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[#821D30] mb-8">
            Cookie Policy
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Servono a far funzionare i siti in modo corretto e a ricordare le tue preferenze.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Cookie che utilizziamo</h2>
              <p className="mb-4">
                Il sito maiaviaggi.it utilizza <strong>esclusivamente cookie tecnici</strong> necessari al funzionamento. Non utilizziamo cookie di profilazione, tracciamento o marketing.
              </p>

              <div className="p-4 bg-[#F5EFE1] rounded-lg">
                <h3 className="font-heading font-semibold text-base text-foreground mb-2">Cookie tecnici essenziali</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-2 font-medium">Nome</th>
                      <th className="text-left py-2 font-medium">Scopo</th>
                      <th className="text-left py-2 font-medium">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-100">
                      <td className="py-2 font-mono text-xs">cookie-consent</td>
                      <td className="py-2">Ricorda la tua scelta sul banner cookie</td>
                      <td className="py-2">Persistente</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono text-xs">maia-language</td>
                      <td className="py-2">Ricorda la lingua selezionata</td>
                      <td className="py-2">Persistente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Cookie di terze parti</h2>
              <p>
                Al momento non utilizziamo servizi di terze parti che installano cookie sul tuo dispositivo. Qualora in futuro dovessimo integrare strumenti di analisi o social media, aggiorneremo questa policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Come gestire i cookie</h2>
              <p>
                Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser. Tieni presente che disabilitare i cookie tecnici potrebbe compromettere alcune funzionalita' del sito (ad esempio, la scelta della lingua non verra' ricordata).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Contatti</h2>
              <p>Per domande sui cookie:</p>
              <div className="mt-3 p-4 bg-[#F5EFE1] rounded-lg text-sm">
                <p><strong>MAIA 4.0 SRL</strong></p>
                <p>Email: info@maiaviaggi.it</p>
                <p>Telefono: +39 06 40089596</p>
                <p>Via Antonio Bertoloni 44, 00197 Roma</p>
              </div>
            </section>

            <p className="text-sm text-foreground/50 pt-4 border-t border-zinc-100">
              Ultimo aggiornamento: maggio 2026
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
