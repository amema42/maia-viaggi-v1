import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { COMPANY_LEGAL } from '@/lib/legal'
import { ROUTE_PATHS } from '@/lib/index'
import { springPresets } from '@/lib/motion'
import { PageMeta } from '@/components/PageMeta'

export default function Terms() {
  return (
    <div className="min-h-screen section-cream">
      <PageMeta title="Termini e Condizioni" description="Termini e condizioni di utilizzo del sito MAIA Viaggi." path="/termini" />
      <Header />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#821D30] hover:underline mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" /> Torna alla home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <p className="font-heading italic text-sm text-[#DCB38C] mb-3">&mdash; informativa</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[#821D30] mb-8">
            Termini e Condizioni
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Titolare del sito</h2>
              <div className="p-4 bg-[#F5EFE1] rounded-lg text-sm space-y-1">
                <p><strong>{COMPANY_LEGAL.name}</strong></p>
                <p>{COMPANY_LEGAL.address}</p>
                <p>P.IVA / C.F.: {COMPANY_LEGAL.vat}</p>
                <p>Email: <a href={COMPANY_LEGAL.emailHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.email}</a></p>
                <p>Telefono: <a href={COMPANY_LEGAL.phoneHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.phone}</a></p>
                <p>Sito: {COMPANY_LEGAL.site}</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Oggetto del servizio online</h2>
              <p>
                Il sito {COMPANY_LEGAL.site} presenta i servizi di MAIA Viaggi e consente agli utenti di richiedere
                informazioni, consulenza e preventivi tramite canali di contatto esterni, in particolare WhatsApp, email
                e telefono. Il sito ha funzione informativa e di generazione contatto: non consente la conclusione
                automatica di contratti di viaggio, non gestisce account utente, non raccoglie pagamenti online e non
                contiene un sistema di vendita e-commerce.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Richieste, preventivi e disponibilità</h2>
              <p>
                L'invio di una richiesta tramite il sito o tramite WhatsApp non costituisce prenotazione, acquisto o
                accettazione di una proposta contrattuale. Eventuali preventivi, itinerari, prezzi, disponibilità e
                condizioni comunicati da MAIA Viaggi hanno valore informativo o precontrattuale fino a conferma espressa
                per iscritto e, se applicabile, fino alla sottoscrizione della documentazione contrattuale specifica.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Contratti di viaggio e condizioni specifiche</h2>
              <p>
                Questi Termini regolano l'uso del sito e dei relativi canali di contatto. Non sostituiscono e non
                includono condizioni generali di vendita di pacchetti turistici o servizi turistici collegati. Qualora
                una richiesta sfoci in una prenotazione o in un contratto di viaggio, saranno forniti separatamente le
                condizioni applicabili, le informazioni precontrattuali, le eventuali coperture assicurative, le garanzie
                previste dalla normativa di settore e ogni ulteriore documento richiesto dalla legge.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Diritto di recesso</h2>
              <p>
                La semplice navigazione del sito o l'invio di una richiesta di informazioni non comportano acquisto e
                quindi non generano un diritto di recesso da esercitare sul sito. Eventuali diritti di recesso,
                annullamento, modifica o rimborso relativi a servizi turistici acquistati successivamente saranno regolati
                dalle condizioni specifiche comunicate prima della conclusione del relativo contratto.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Obblighi dell'utente</h2>
              <p className="mb-3">L'utente si impegna a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>fornire informazioni corrette, aggiornate e pertinenti alla richiesta;</li>
                <li>non usare il sito o i canali di contatto per finalità illecite, abusive o lesive di terzi;</li>
                <li>verificare, con il supporto dell'agenzia quando richiesto, documenti di identita', passaporti, visti, requisiti sanitari e condizioni di ingresso nel Paese di destinazione;</li>
                <li>leggere con attenzione eventuali condizioni specifiche prima di confermare una prenotazione fuori dal sito.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Limitazione di responsabilità</h2>
              <p>
                MAIA Viaggi cura i contenuti del sito con attenzione, ma non garantisce che informazioni, immagini,
                disponibilità, prezzi o descrizioni siano sempre completi, aggiornati o privi di errori. I contenuti del
                sito non costituiscono offerta vincolante. MAIA Viaggi non è responsabile per disservizi, sospensioni,
                malfunzionamenti tecnici, uso improprio del sito, contenuti di siti o piattaforme esterne, ne' per
                circostanze non imputabili alla propria sfera di controllo.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Link e piattaforme esterne</h2>
              <p>
                Il sito può contenere collegamenti a piattaforme esterne, inclusi WhatsApp e social network. L'accesso
                a tali servizi è regolato dalle condizioni e dalle informative privacy dei rispettivi titolari. MAIA
                Viaggi non controlla e non risponde delle modalità di funzionamento di tali piattaforme.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. Proprieta' intellettuale</h2>
              <p>
                Marchi, loghi, testi, layout, elementi grafici, immagini e contenuti presenti sul sito sono di titolarita'
                di MAIA Viaggi o concessi in licenza dai rispettivi titolari. E' vietata la riproduzione, distribuzione,
                modifica o uso dei contenuti per finalità commerciali senza autorizzazione scritta.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Privacy e cookie</h2>
              <p>
                Il trattamento dei dati personali e l'uso degli strumenti tecnici locali sono descritti nella{' '}
                <Link to={ROUTE_PATHS.PRIVACY} className="text-[#821D30] hover:underline font-medium">Privacy Policy</Link>{' '}
                e nella <Link to={ROUTE_PATHS.COOKIE} className="text-[#821D30] hover:underline font-medium">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">11. Modifiche ai Termini</h2>
              <p>
                MAIA Viaggi può aggiornare questi Termini per esigenze organizzative, tecniche o normative. La versione
                applicabile è quella pubblicata sul sito al momento della consultazione.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">12. Legge applicabile e foro competente</h2>
              <p>
                I presenti Termini sono regolati dalla legge italiana. Per ogni controversia relativa all'uso del sito e
                dei servizi informativi online sarà competente il Foro di Roma, salvo eventuali fori inderogabili
                previsti dalla legge a tutela dei consumatori.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">13. Contatti</h2>
              <p>
                Per informazioni sui presenti Termini puoi contattare {COMPANY_LEGAL.name} a{' '}
                <a href={COMPANY_LEGAL.emailHref} className="text-[#821D30] hover:underline font-medium">{COMPANY_LEGAL.email}</a>{' '}
                o al numero <a href={COMPANY_LEGAL.phoneHref} className="text-[#821D30] hover:underline font-medium">{COMPANY_LEGAL.phone}</a>.
              </p>
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
