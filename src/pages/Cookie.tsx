import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { COMPANY_LEGAL } from '@/lib/legal'
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Premessa</h2>
              <p>
                Questa Cookie Policy descrive gli strumenti di memorizzazione utilizzati dal sito {COMPANY_LEGAL.site},
                gestito da {COMPANY_LEGAL.name}. Il sito non utilizza cookie di profilazione, analytics, marketing o
                tracciamento e non installa cookie di terze parti.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Cookie e localStorage</h2>
              <p>
                Tecnicamente gli strumenti usati dal sito sono valori salvati nel <strong>localStorage</strong> del
                browser, non cookie HTTP inviati al server a ogni richiesta. In questa informativa li descriviamo insieme
                agli strumenti analoghi ai cookie, per trasparenza verso l'utente.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Strumenti tecnici utilizzati</h2>
              <p className="mb-4">
                Il sito utilizza esclusivamente due strumenti tecnici locali, necessari a ricordare preferenze espresse
                dall'utente e a migliorare l'esperienza di navigazione.
              </p>

              <div className="p-4 bg-[#F5EFE1] rounded-lg">
                <h3 className="font-heading font-semibold text-base text-foreground mb-3">Tabella localStorage</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left py-2 pr-4 font-medium">Nome</th>
                        <th className="text-left py-2 pr-4 font-medium">Tipologia</th>
                        <th className="text-left py-2 pr-4 font-medium">Scopo</th>
                        <th className="text-left py-2 font-medium">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 pr-4 font-mono text-xs">cookie-consent</td>
                        <td className="py-3 pr-4">Tecnico locale</td>
                        <td className="py-3 pr-4">Memorizza la scelta sul banner informativo cookie/localStorage con valore "accepted" o "rejected".</td>
                        <td className="py-3">Fino a cancellazione dei dati del browser o nuova scelta dell'utente.</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-mono text-xs">maia-language</td>
                        <td className="py-3 pr-4">Tecnico locale</td>
                        <td className="py-3 pr-4">Memorizza la lingua selezionata con valore "it", "en", "es", "fr" o "de".</td>
                        <td className="py-3">Fino a cancellazione dei dati del browser o modifica della lingua.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Cookie di profilazione e terze parti</h2>
              <p>
                Non utilizziamo cookie di profilazione, strumenti di analytics, pixel di marketing, sistemi di
                tracciamento pubblicitario o cookie di terze parti. Non sono presenti Google Analytics o strumenti
                analoghi.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Consenso</h2>
              <p>
                Gli strumenti indicati sono tecnici e funzionali alla navigazione; per questa tipologia non è richiesto
                il consenso preventivo. Il banner serve a informarti in modo chiaro e a registrare la tua preferenza
                locale. Se scegli "Rifiuta", il sito salva solo tale scelta tecnica per non mostrarti nuovamente il
                banner.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Come gestire o cancellare i dati locali</h2>
              <p>
                Puoi cancellare i dati salvati nel localStorage dalle impostazioni del browser, eliminando i dati del
                sito {COMPANY_LEGAL.site}. Dopo la cancellazione, il banner potrà ricomparire e la lingua potrà tornare
                alla selezione predefinita.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Contatti</h2>
              <div className="p-4 bg-[#F5EFE1] rounded-lg text-sm space-y-1">
                <p><strong>{COMPANY_LEGAL.name}</strong></p>
                <p>{COMPANY_LEGAL.address}</p>
                <p>P.IVA / C.F.: {COMPANY_LEGAL.vat}</p>
                <p>Email: <a href={COMPANY_LEGAL.emailHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.email}</a></p>
                <p>Telefono: <a href={COMPANY_LEGAL.phoneHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.phone}</a></p>
                <p>Sito: {COMPANY_LEGAL.site}</p>
              </div>
            </section>

            <p className="text-sm text-foreground/50">
              Ultimo aggiornamento: maggio 2026
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
