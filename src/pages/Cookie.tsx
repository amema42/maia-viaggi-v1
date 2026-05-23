import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { springPresets } from '@/lib/motion';

export default function Cookie() {
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
            Cookie Policy
          </h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                1. Cosa sono i cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Vengono ampiamente utilizzati per far funzionare i siti web, o per farli funzionare in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                2. Come utilizziamo i cookie
              </h2>
              <p className="mb-3">Utilizziamo i cookie per diversi motivi dettagliati di seguito. Purtroppo, nella maggior parte dei casi non ci sono opzioni standard del settore per disabilitare i cookie senza disabilitare completamente la funzionalità e le caratteristiche che aggiungono a questo sito.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                3. Tipi di cookie che utilizziamo
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-lg text-[#8B1538] mb-2">Cookie Essenziali</h3>
                  <p>
                    Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, come l'impostazione delle tue preferenze sulla privacy, l'accesso o la compilazione di moduli.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-lg text-[#8B1538] mb-2">Cookie di Prestazione</h3>
                  <p>
                    Questi cookie ci consentono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e vedere come i visitatori si muovono intorno al sito.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-bold text-lg text-[#8B1538] mb-2">Cookie Funzionali</h3>
                  <p>
                    Questi cookie consentono al sito web di fornire funzionalità e personalizzazione migliorate. Possono essere impostati da noi o da fornitori di terze parti i cui servizi abbiamo aggiunto alle nostre pagine.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-lg text-[#8B1538] mb-2">Cookie di Targeting</h3>
                  <p>
                    Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da tali società per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                4. Cookie di terze parti
              </h2>
              <p className="mb-3">In alcuni casi speciali utilizziamo anche cookie forniti da terze parti fidate. La seguente sezione dettaglia quali cookie di terze parti potresti incontrare attraverso questo sito:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Uno degli strumenti di analisi più diffusi e affidabili sul web per aiutarci a capire come utilizzi il sito e come possiamo migliorare la tua esperienza.</li>
                <li><strong>Social Media:</strong> Cookie relativi alle funzionalità di condivisione sui social media.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                5. Come gestire i cookie
              </h2>
              <p className="mb-3">
                Puoi impedire l'impostazione dei cookie regolando le impostazioni sul tuo browser (consulta la guida del tuo browser per sapere come farlo). Tieni presente che la disabilitazione dei cookie influenzerà la funzionalità di questo e di molti altri siti web che visiti.
              </p>
              <p>
                La disabilitazione dei cookie di solito comporta anche la disabilitazione di alcune funzionalità e caratteristiche di questo sito. Pertanto, si consiglia di non disabilitare i cookie.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                6. Il tuo consenso
              </h2>
              <p>
                Utilizzando il nostro sito web, acconsenti all'uso dei cookie in conformità con questa Cookie Policy. Se non acconsenti all'uso dei cookie, dovresti disabilitarli seguendo le istruzioni del tuo browser o astenerti dall'utilizzare il sito.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                7. Maggiori informazioni
              </h2>
              <p>
                Se hai domande sui cookie o su come li utilizziamo, non esitare a contattarci:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p><strong>Email:</strong> privacy@maiaviaggi.it</p>
                <p><strong>Telefono:</strong> +39 06 40089596</p>
                <p><strong>Indirizzo:</strong> Via Antonio Bertoloni 44, Roma</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#8B1538] mb-4">
                8. Modifiche a questa policy
              </h2>
              <p>
                Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina con una data di "ultimo aggiornamento" rivista.
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
