import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { COMPANY_LEGAL } from '@/lib/legal'
import { ROUTE_PATHS } from '@/lib/index'
import { springPresets } from '@/lib/motion'
import { PageMeta } from '@/components/PageMeta'

export default function Privacy() {
  return (
    <div className="min-h-screen section-cream">
      <PageMeta title="Privacy Policy" description="Informativa privacy MAIA Viaggi ai sensi del GDPR." path="/privacy" />
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Premessa</h2>
              <p>
                La presente informativa descrive come {COMPANY_LEGAL.name}, titolare del sito {COMPANY_LEGAL.site},
                tratta i dati personali degli utenti che visitano il sito o contattano MAIA Viaggi per ricevere
                informazioni, consulenza o preventivi di viaggio. L'informativa è resa ai sensi del Regolamento
                UE 2016/679 ("GDPR") e del D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Titolare del trattamento</h2>
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Dati trattati</h2>
              <p className="mb-3">
                Il sito non prevede account utente, database clienti, pagamenti online o form server-side. I dati
                trattati dipendono dalle azioni dell'utente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dati di navigazione:</strong> informazioni tecniche generate dall'uso del sito, come indirizzo IP, log tecnici, tipo di browser, dispositivo e sistema operativo, nei limiti necessari a erogare e proteggere il sito.</li>
                <li><strong>Dati forniti volontariamente:</strong> nome, contatti, contenuto del messaggio e preferenze di viaggio comunicati via WhatsApp, email o telefono.</li>
                <li><strong>Preferenze tecniche locali:</strong> scelta sul banner cookie e lingua selezionata, salvate nel localStorage del browser.</li>
              </ul>
              <p className="mt-3">
                Ti invitiamo a non comunicare dati particolari ai sensi dell'art. 9 GDPR, salvo che siano necessari
                alla richiesta e liberamente forniti da te.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Finalità e basi giuridiche</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-2 pr-4 font-medium">Finalità</th>
                      <th className="text-left py-2 pr-4 font-medium">Base giuridica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-100">
                      <td className="py-3 pr-4">Rispondere a richieste di informazioni, consulenza e preventivi</td>
                      <td className="py-3 pr-4">Misure precontrattuali richieste dall'interessato, art. 6.1.b GDPR</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-3 pr-4">Gestire comunicazioni via WhatsApp, email o telefono</td>
                      <td className="py-3 pr-4">Misure precontrattuali e legittimo interesse alla gestione dei contatti, art. 6.1.b e 6.1.f GDPR</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-3 pr-4">Garantire sicurezza, manutenzione e corretto funzionamento del sito</td>
                      <td className="py-3 pr-4">Legittimo interesse, art. 6.1.f GDPR</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Adempiere a obblighi di legge o richieste delle autorità</td>
                      <td className="py-3 pr-4">Obbligo legale, art. 6.1.c GDPR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Modalita' del trattamento</h2>
              <p>
                I dati sono trattati con strumenti informatici e organizzativi adeguati, nel rispetto dei principi di
                liceità, correttezza, trasparenza, minimizzazione, esattezza, limitazione della conservazione,
                integrità e riservatezza. Non utilizziamo processi decisionali automatizzati, profilazione, analytics
                o strumenti di marketing tracking.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Destinatari e fornitori</h2>
              <p className="mb-3">
                I dati possono essere trattati da personale autorizzato e da fornitori tecnici necessari al funzionamento
                del sito e delle comunicazioni. In particolare:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>il sito è ospitato su <strong>Vercel</strong> (Vercel Inc., USA), che può trattare log tecnici per erogazione, sicurezza e manutenzione;</li>
                <li>i font del sito sono caricati da <strong>Google Fonts</strong> (Google LLC): il browser dell'utente effettua richieste ai server Google, che possono registrare indirizzo IP e dati tecnici secondo la propria informativa;</li>
                <li>alcune immagini possono essere servite da <strong>Unsplash</strong> (Unsplash Inc.): anche in questo caso il browser effettua richieste dirette ai loro server;</li>
                <li>se scegli di contattarci tramite <strong>WhatsApp</strong>, la comunicazione avviene sulla piattaforma WhatsApp (Meta Platforms) e secondo le relative condizioni e informative;</li>
                <li>eventuali fornitori di servizi turistici possono ricevere dati solo quando necessario per predisporre una proposta richiesta dall'utente.</li>
              </ul>
              <p className="mt-3">
                Non vendiamo dati personali a terzi e non utilizziamo i dati per profilazione pubblicitaria.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Trasferimenti extra UE</h2>
              <p>
                Alcuni fornitori tecnici o servizi di comunicazione potrebbero trattare dati al di fuori dello Spazio
                Economico Europeo. In tali casi il trattamento avviene sulla base di garanzie previste dal GDPR, come
                decisioni di adeguatezza, clausole contrattuali standard o altre misure applicabili.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Tempi di conservazione</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Richieste e conversazioni commerciali:</strong> per il tempo necessario a rispondere, predisporre proposte e gestire eventuali seguiti, di norma non oltre 24 mesi dall'ultimo contatto, salvo obblighi di legge o necessità di tutela dei diritti.</li>
                <li><strong>Dati tecnici di navigazione:</strong> per i tempi strettamente necessari alla sicurezza e al funzionamento del sito, secondo le policy dei fornitori tecnici.</li>
                <li><strong>Preferenze localStorage:</strong> fino a cancellazione da parte dell'utente, modifica della preferenza o svuotamento dei dati del browser.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. Diritti dell'interessato</h2>
              <p className="mb-3">
                Ai sensi degli artt. 15-22 GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione,
                portabilita' dei dati, opposizione al trattamento e revoca del consenso, ove il trattamento si basi sul
                consenso. Puoi esercitare i tuoi diritti scrivendo a{' '}
                <a href={COMPANY_LEGAL.emailHref} className="text-[#821D30] hover:underline font-medium">{COMPANY_LEGAL.email}</a>.
              </p>
              <p>
                Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
                (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#821D30] hover:underline font-medium">www.garanteprivacy.it</a>).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Cookie e localStorage</h2>
              <p>
                Il sito utilizza solo strumenti tecnici locali: <span className="font-mono text-xs">cookie-consent</span>{' '}
                e <span className="font-mono text-xs">maia-language</span>, salvati nel localStorage del browser. Non
                usiamo cookie HTTP di profilazione, analytics, marketing o tracciamento. Per maggiori dettagli consulta
                la <Link to={ROUTE_PATHS.COOKIE} className="text-[#821D30] hover:underline font-medium">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">11. Contatti privacy</h2>
              <div className="p-4 bg-[#F5EFE1] rounded-lg text-sm space-y-1">
                <p><strong>{COMPANY_LEGAL.name}</strong></p>
                <p>{COMPANY_LEGAL.address}</p>
                <p>P.IVA / C.F.: {COMPANY_LEGAL.vat}</p>
                <p>Email: <a href={COMPANY_LEGAL.emailHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.email}</a></p>
                <p>Telefono: <a href={COMPANY_LEGAL.phoneHref} className="text-[#821D30] hover:underline">{COMPANY_LEGAL.phone}</a></p>
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
