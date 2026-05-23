import { useState } from 'react';
import { Compass, Award, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { TicketForm } from '@/components/TicketForm';
import { WorldMap } from '@/components/WorldMap';
import { PassportBook } from '@/components/PassportBook';
import { Footer } from '@/components/Footer';
import { TicketFormData } from '@/lib/index';
import { useLanguage } from '@/lib/i18n';

export default function Home() {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(false);
  const [ticketData, setTicketData] = useState<TicketFormData | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);


  const handleTicketSubmit = (data: TicketFormData) => {
    setTicketData(data);
    setShowMap(true);
    
    // Estrai i tag dalle preferenze (tipologie selezionate)
    const tags = data.preferences ? data.preferences.split(', ') : [];
    setSelectedTags(tags);
    
    setTimeout(() => {
      const mapSection = document.getElementById('map-section');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen relative">
      <Header />

      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative snap-start pt-20 md:pt-24"
      >

        <div className="container mx-auto px-4 py-6 relative z-10 flex flex-col items-center">
          <div className="max-w-4xl w-full text-center mb-8">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-6 text-[#1A1A1A] leading-tight">
              {t('heroMainTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-[#595142] mb-8">
              {t('heroMainSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-3xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-6 border-t-[3px] border-[#821d30] transition-all duration-200 hover:shadow-md hover:-translate-y-1">
              <Compass className="w-6 h-6 text-[#821d30] mb-3" />
              <h3 className="font-heading text-lg font-medium text-[#1A1A1A] mb-2">
                Venti destinazioni
              </h3>
              <p className="text-sm text-[#595142] leading-relaxed">
                Mete che abbiamo testato di persona, mai per sentito dire.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-t-[3px] border-[#ce5b20] transition-all duration-200 hover:shadow-md hover:-translate-y-1">
              <Award className="w-6 h-6 text-[#ce5b20] mb-3" />
              <h3 className="font-heading text-lg font-medium text-[#1A1A1A] mb-2">
                Dieci anni a Roma
              </h3>
              <p className="text-sm text-[#595142] leading-relaxed">
                Costruiamo viaggi su misura da quando ne ricordiamo l'inizio.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-t-[3px] border-[#237478] transition-all duration-200 hover:shadow-md hover:-translate-y-1">
              <Users className="w-6 h-6 text-[#237478] mb-3" />
              <h3 className="font-heading text-lg font-medium text-[#1A1A1A] mb-2">
                Sempre al telefono
              </h3>
              <p className="text-sm text-[#595142] leading-relaxed">
                WhatsApp, telefono, email: rispondiamo davvero.
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <TicketForm onSubmit={handleTicketSubmit} />
          </div>

          {ticketData && (
            <div className="mt-8 text-center">
              <p className="text-lg text-[#595142]">
                Scorri per esplorare le destinazioni
              </p>
              <div className="mt-4 text-[#821D30] text-2xl animate-bounce">
                ↓
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-2 text-[#1A1A1A]">
            Chi siamo?
          </h2>
          <p className="font-heading text-lg md:text-2xl italic text-[#595142] mb-4">
            Scoprilo aprendo il nostro passaporto
          </p>
          <div className="text-3xl text-[#821D30] animate-bounce">↓</div>
        </div>
      </section>

      <section
        id="passport-section"
        className="flex items-start justify-center relative py-8 md:py-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <PassportBook />
            </div>
          </div>
        </div>
      </section>

      {showMap && (
        <section id="map-section" className="py-8 md:py-12 relative">
          <div className="container mx-auto px-4 relative z-10">
            <WorldMap visible={showMap} filterTags={selectedTags} />
          </div>
        </section>
      )}

      {/* Sezione Le Nostre Destinazioni - sempre visibile sotto il passaporto */}
      <section id="destinazioni" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-3">
              Le nostre destinazioni
            </h2>
            <p className="text-base md:text-lg text-[#595142]">
              Esplora tutte le mete e clicca per scoprire il tuo viaggio ideale
            </p>
          </div>
          <WorldMap visible={true} filterTags={[]} />
        </div>
      </section>

      {/* Footer con informazioni legali */}
      <Footer />

      {/* WhatsApp sticky — pulito, senza gimmick */}
      <a
        href="https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.40)] transition-transform hover:scale-105"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}