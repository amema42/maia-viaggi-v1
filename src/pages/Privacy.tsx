import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { springPresets } from '@/lib/motion';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-cyan-50/30">
      <Header />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#8B1538] mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                1. Introduzione
              </h2>
              <p>
                MAIA Viaggi (di seguito "noi", "nostro" o "MAIA") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informerà su come trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informerà sui tuoi diritti in materia di privacy e su come la legge ti protegge.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                2. Dati che raccogliamo
              </h2>
              <p className="mb-3">Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te, tra cui:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dati di identità:</strong> nome, cognome, titolo</li>
                <li><strong>Dati di contatto:</strong> indirizzo email, numero di telefono, indirizzo postale</li>
                <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario, sistema operativo</li>
                <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web</li>
                <li><strong>Dati di marketing:</strong> le tue preferenze nel ricevere comunicazioni di marketing da noi</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                3. Come utilizziamo i tuoi dati
              </h2>
              <p className="mb-3">Utilizzeremo i tuoi dati personali solo quando la legge ce lo consente. Più comunemente, utilizzeremo i tuoi dati personali nelle seguenti circostanze:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Per fornirti i servizi richiesti</li>
                <li>Per gestire la nostra relazione con te</li>
                <li>Per migliorare il nostro sito web e i nostri servizi</li>
                <li>Per inviarti comunicazioni di marketing (solo con il tuo consenso)</li>
                <li>Per adempiere agli obblighi legali</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                4. Condivisione dei dati
              </h2>
              <p>
                Non vendiamo né affittiamo i tuoi dati personali a terzi. Potremmo condividere i tuoi dati con fornitori di servizi fidati che ci assistono nelle operazioni aziendali, a condizione che tali parti accettino di mantenere riservate queste informazioni.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                5. Sicurezza dei dati
              </h2>
              <p>
                Abbiamo implementato misure di sicurezza appropriate per prevenire che i tuoi dati personali vengano accidentalmente persi, utilizzati o accessibili in modo non autorizzato, alterati o divulgati.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                6. I tuoi diritti
              </h2>
              <p className="mb-3">In determinate circostanze, hai diritti ai sensi delle leggi sulla protezione dei dati in relazione ai tuoi dati personali:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Diritto di accesso ai tuoi dati personali</li>
                <li>Diritto di rettifica dei tuoi dati personali</li>
                <li>Diritto alla cancellazione dei tuoi dati personali</li>
                <li>Diritto di limitazione del trattamento</li>
                <li>Diritto alla portabilità dei dati</li>
                <li>Diritto di opposizione al trattamento</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                7. Cookie
              </h2>
              <p>
                Il nostro sito web utilizza cookie per distinguerti dagli altri utenti del nostro sito web. Questo ci aiuta a fornirti una buona esperienza quando navighi sul nostro sito web e ci consente anche di migliorare il nostro sito. Per informazioni dettagliate sui cookie che utilizziamo, consulta la nostra Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                8. Contatti
              </h2>
              <p>
                Se hai domande su questa informativa sulla privacy o sulle nostre pratiche di privacy, contattaci a:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p><strong>Email:</strong> privacy@maiaviaggi.it</p>
                <p><strong>Telefono:</strong> +39 06 40089596</p>
                <p><strong>Indirizzo:</strong> Via Antonio Bertoloni 44, Roma</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                9. Modifiche a questa policy
              </h2>
              <p>
                Ci riserviamo il diritto di aggiornare questa informativa sulla privacy in qualsiasi momento. Ti informeremo di eventuali modifiche pubblicando la nuova informativa sulla privacy su questa pagina.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Ultimo aggiornamento:</strong> Aprile 2026
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
