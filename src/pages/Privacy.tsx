import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { springPresets } from '@/lib/motion'

export default function Privacy() {
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
            Privacy Policy
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Introduzione</h2>
              <p>
                MAIA 4.0 SRL (di seguito "MAIA Viaggi") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa ti spiega come trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informa sui tuoi diritti in materia di privacy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Titolare del trattamento</h2>
              <div className="p-4 bg-[#F5EFE1] rounded-lg text-sm space-y-1">
                <p><strong>MAIA 4.0 SRL</strong></p>
                <p>Via Antonio Bertoloni 44, 00197 Roma</p>
                <p>P.IVA: 18332251000</p>
                <p>Email: info@maiaviaggi.it</p>
                <p>Telefono: +39 06 40089596</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Dati che raccogliamo</h2>
              <p className="mb-3">Possiamo raccogliere i seguenti dati personali:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dati di contatto:</strong> nome, email, numero di telefono (quando ci contatti via WhatsApp o email)</li>
                <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, sistema operativo</li>
                <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web</li>
                <li><strong>Preferenze di viaggio:</strong> periodo, tipologia, destinazioni di interesse</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Come utilizziamo i tuoi dati</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Per rispondere alle tue richieste di informazioni</li>
                <li>Per fornirti preventivi e proposte di viaggio personalizzate</li>
                <li>Per migliorare il nostro sito web e i nostri servizi</li>
                <li>Per adempiere agli obblighi legali</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Condivisione dei dati</h2>
              <p>
                Non vendiamo i tuoi dati personali a terzi. Potremmo condividerli con fornitori di servizi (tour operator, compagnie aeree, hotel) esclusivamente per fornirti il servizio richiesto.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. I tuoi diritti (GDPR)</h2>
              <p className="mb-3">Ai sensi del Regolamento UE 2016/679, hai diritto a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare dati inesatti</li>
                <li>Cancellare i tuoi dati</li>
                <li>Limitare il trattamento</li>
                <li>Portabilita' dei dati</li>
                <li>Opporti al trattamento</li>
              </ul>
              <p className="mt-3">Per esercitare questi diritti, contattaci a info@maiaviaggi.it.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Cookie</h2>
              <p>
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o tracciamento. Per maggiori dettagli, consulta la nostra <a href="/cookie-policy" className="text-[#821D30] hover:underline font-medium">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Contatti</h2>
              <p>Per domande sulla privacy:</p>
              <div className="mt-3 p-4 bg-[#F5EFE1] rounded-lg text-sm">
                <p><strong>Email:</strong> info@maiaviaggi.it</p>
                <p><strong>Telefono:</strong> +39 06 40089596</p>
                <p><strong>Indirizzo:</strong> Via Antonio Bertoloni 44, 00197 Roma</p>
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
