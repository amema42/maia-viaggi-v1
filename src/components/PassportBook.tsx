import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stamp } from 'lucide-react';
import { ARCHETYPES } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets } from '@/lib/motion';
export function PassportBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  
  const memberDetails: Record<string, { description: string; skills: string[] }> = {
    Michele: {
      description: 'Professionista del marketing e content creator di successo, abituato a trasformare esperienze in storie da raccontare.',
      skills: [
        'Marketing digitale',
        'Content creation',
        'Comunicazione visiva',
        'Storytelling',
        'Social media strategy',
        'Brand identity'
      ]
    },
    Anna: {
      description: 'Agente di viaggio e accompagnatrice turistica con anni di esperienza in Italia e all\'estero. Esperta nel costruire itinerari autentici.',
      skills: [
        'Organizzazione viaggi',
        'Accompagnamento turistico',
        'Itinerari personalizzati',
        'Logistica e pianificazione',
        'Hotel di lusso',
        'Lounge aeroportuali',
        'Problem solving',
        'Hotel relax e comfort'
      ]
    },
    Isabel: {
      description: 'Agente di viaggio e accompagnatrice turistica con anni di esperienza. Conosce la sottile arte di unire logistica e emozione, cultura e scoperta.',
      skills: [
        'Gestione documenti e visti',
        'Assicurazioni di viaggio',
        'Sicurezza e logistica',
        'Viaggi con animali',
        'Pianificazione dettagliata',
        'Problem solving'
      ]
    },
    Andrea: {
      description: 'Professionista del marketing e content creator di successo. Specialista nella comunicazione visiva e digitale, porta creatività e innovazione.',
      skills: [
        'Content creation',
        'Fotografia e video',
        'Tecnologia di viaggio',
        'App e strumenti digitali',
        'Esplorazione luoghi insoliti',
        'Innovazione'
      ]
    }
  };
  
  const archetypesList = [{
    ...ARCHETYPES.DREAMER,
    memberName: 'Michele',
    photo: IMAGES.IMG_4115_172
    // Usa il colore di ARCHETYPES.DREAMER: #237478
  }, {
    ...ARCHETYPES.CHIC,
    memberName: 'Anna',
    photo: IMAGES.IMG_4101_171
    // Usa il colore di ARCHETYPES.CHIC: #821d30
  }, {
    ...ARCHETYPES.STRATEGIST,
    memberName: 'Isabel',
    photo: IMAGES.IMG_4092_170
    // Usa il colore di ARCHETYPES.STRATEGIST: #dcb38c
  }, {
    ...ARCHETYPES.ADVENTUROUS,
    memberName: 'Andrea',
    photo: IMAGES.IMG_4082_173
    // Usa il colore di ARCHETYPES.ADVENTUROUS: #ce5b20
  }];
  return <div className="relative w-full mx-auto px-4 py-4" style={{
    perspective: '2000px',
    maxWidth: isOpen ? 'min(95vw, 1000px)' : 'min(85vw, 400px)',
    transition: 'max-width 0.8s ease'
  }}>

      <motion.div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)} whileHover={{
      scale: 1.02,
      y: -8
    }} transition={springPresets.snappy}>
        <motion.div className="relative w-full" style={{
        minHeight: isOpen ? (isMobile ? '900px' : '700px') : (isMobile ? '450px' : '550px'),
        height: 'auto',
        transformStyle: 'preserve-3d'
      }} animate={{
        rotateY: isOpen ? -15 : 0
      }} transition={{
        ...springPresets.gentle,
        duration: 0.8
      }}>
          {/* Copertina passaporto italiano */}
          <div className="absolute inset-0" style={{
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}>
            <div className="relative w-full h-full rounded-lg overflow-hidden" style={{
            background: 'linear-gradient(135deg, #8B1538 0%, #A01D48 50%, #8B1538 100%)',
            boxShadow: `
                  0 30px 90px -20px rgba(139, 21, 56, 0.6),
                  0 15px 50px -15px rgba(0,0,0,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.1),
                  inset 0 -1px 0 rgba(0,0,0,0.3)
                `
          }}>
              {/* Texture pelle */}
              <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
            }} />

              <div className="relative w-full h-full p-6 md:p-8 flex flex-col items-center justify-between">
                {/* Header */}
                <div className="text-center space-y-1">
                  <div className="text-[#D4AF37] font-serif text-[10px] md:text-xs tracking-[0.2em]">
                    Unione Europea
                  </div>
                  <div className="text-[#D4AF37] font-serif text-xs md:text-sm tracking-[0.15em] font-semibold">
                    Repubblica Italiana
                  </div>
                </div>
                
                {/* Globo del Mondo */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37]/40">
                      {/* Globo 3D */}
                      <svg className="w-20 h-20 md:w-24 md:h-24 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Cerchio esterno */}
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
                        
                        {/* Meridiani */}
                        <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <ellipse cx="50" cy="50" rx="45" ry="35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <ellipse cx="50" cy="50" rx="30" ry="45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <ellipse cx="50" cy="50" rx="15" ry="45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                        
                        {/* Paralleli */}
                        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                        <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                        <ellipse cx="50" cy="50" rx="45" ry="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                        
                        {/* Continenti stilizzati */}
                        <path d="M 30 25 Q 35 20 40 25 L 45 30 Q 50 28 55 32 L 60 28 Q 65 30 68 35 L 65 40 Q 60 42 55 40 L 50 45 Q 45 43 40 45 L 35 42 Q 32 38 30 35 Z" fill="currentColor" opacity="0.4" />
                        <path d="M 25 55 Q 30 52 35 55 L 40 60 Q 42 65 38 68 L 32 65 Q 28 62 25 58 Z" fill="currentColor" opacity="0.4" />
                        <path d="M 55 58 Q 60 55 65 58 L 70 63 Q 72 68 68 72 L 62 70 Q 58 67 55 63 Z" fill="currentColor" opacity="0.4" />
                        
                        {/* Cerchio principale */}
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2.5" fill="none" />
                      </svg>
                    </div>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-medium text-[#D4AF37] tracking-[0.05em]">
                    Passaporto
                  </h2>

                  <div className="text-center space-y-1">
                    <p className="font-heading text-[#D4AF37]/90 text-sm md:text-base italic">
                      i nostri consulenti
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 text-[#D4AF37]/60">
                  <motion.div animate={{
                  scale: [1, 1.1, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <Stamp className="w-4 h-4" />
                  </motion.div>
                  <span className="text-[11px] font-mono text-[#D4AF37]/60">apri il passaporto</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagine interne passaporto */}
          <div className="absolute inset-0" style={{
          backfaceVisibility: 'hidden',
          transform: isOpen ? 'rotateY(0deg) translateZ(20px)' : 'rotateY(180deg) translateZ(20px)',
          transformOrigin: 'left center'
        }}>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#F5F1E8] dark:bg-zinc-800 rounded-lg overflow-hidden shadow-2xl">
              
              {/* PAGINA SINISTRA - La Nostra Filosofia */}
              <div className="relative border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-300 dark:border-zinc-700 p-6 md:p-8 overflow-y-auto">
                {/* Texture carta */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.15'/%3E%3C/svg%3E")`
                }} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative space-y-6"
                >
                  {/* Titolo */}
                  <div className="text-center mb-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#237478] mb-2">
                      Benvenuti in MAIA
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  </div>

                  {/* Testo filosofia */}
                  <div className="space-y-4 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p className="font-semibold">
                      Il progetto che trasforma il viaggio da semplice spostamento a un'esperienza costruita intorno alla tua identità.
                    </p>
                    
                    <p>
                      Non siamo la solita agenzia: siamo quattro anime diverse — <span className="font-bold text-[#237478]">Michele</span>, <span className="font-bold text-[#821d30]">Anna</span>, <span className="font-bold text-[#dcb38c]">Isabel</span> e <span className="font-bold text-[#ce5b20]">Andrea</span> — unite per guidarti verso la tua prossima destinazione partendo da una domanda fondamentale: <span className="italic font-semibold">chi sei quando viaggi?</span>
                    </p>

                    <div className="bg-white/60 dark:bg-zinc-900/40 p-4 rounded-lg border-l-4 border-[#237478]">
                      <h3 className="font-heading text-lg font-bold text-[#237478] mb-2">
                        La nostra Filosofia: Prima la Persona, poi la Meta
                      </h3>
                      <p className="text-sm">
                        Crediamo che un viaggio riuscito non dipenda solo dal luogo, ma dalla sintonia tra la tua personalità e l'esperienza vissuta. Il nostro obiettivo è ascoltare il tuo racconto per decodificare il tuo stile di viaggiatore e consigliarti la meta perfetta.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#237478] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#237478]">L'Anima Riflessiva (Michele):</span> Per chi cerca la connessione profonda con la natura, la meditazione e l'arte. Ci occupiamo di trovare l'equilibrio tra nostalgia e scoperta, fuggendo dall'overtourism per abbracciare mete silenziose.
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#821d30] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#821d30]">L'Amante del Comfort (Anna):</span> Perché il viaggio è anche coccola e stile. Ti guidiamo nella scelta tra i migliori hotel, l'accesso alle lounge aeroportuali e i momenti di puro relax in spa.
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#dcb38c] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#dcb38c]">Il Viaggiatore Consapevole (Isabel):</span> La nostra bussola per la sicurezza e la logistica. Dai visti ai documenti, dalle assicurazioni sanitarie alla gestione degli imprevisti e dei voli con i tuoi amici a quattro zampe.
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#ce5b20] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#ce5b20]">L'Esploratore Curioso (Andrea):</span> Per chi non teme i luoghi inospitali o i sapori insoliti. Ti forniamo gli strumenti tecnologici e le app giuste per muoverti ovunque, dalla Cina ai confini del mondo.
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#237478]/10 to-[#ce5b20]/10 p-4 rounded-lg border border-[#237478]/20">
                      <h3 className="font-heading text-base font-bold text-[#237478] mb-2">
                        Cosa vogliamo trasmetterti
                      </h3>
                      <p className="text-sm">
                        Vogliamo che tu ti senta compreso prima ancora di fare i bagagli. Che tu sia un tipo da zaino in spalla tecnico o da business class impeccabile, il nostro impegno è offrirti una consulenza che parta dalla tua essenza.
                      </p>
                      <p className="text-sm font-bold text-[#237478] mt-2 italic">
                        Raccontaci chi sei: al resto pensiamo noi.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Pagina destra */}
              <div className="relative p-6 md:p-8 overflow-y-auto">
                {/* Texture carta */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.15'/%3E%3C/svg%3E")`
                }} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  {/* Titolo */}
                  <div className="text-center mb-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#237478] mb-2">
                      Il nostro team
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  </div>

                  {/* Team members */}
                  <div className="space-y-3">
                    {archetypesList.map((archetype, index) => (
                      <motion.div
                        key={archetype.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="cursor-pointer group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMember(archetype.memberName);
                        }}
                      >
                        <div
                          className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/80 dark:hover:bg-zinc-800/60"
                          style={{ borderLeft: `3px solid ${archetype.color}` }}
                        >
                          <div className="relative flex-shrink-0">
                            <div
                              className="w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-white"
                            >
                              <img
                                src={archetype.photo}
                                alt={`${archetype.memberName}, ${archetype.role}`}
                                className="w-full h-full object-cover" loading="lazy" decoding="async"
                              />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4
                              className="font-heading text-lg font-medium leading-tight"
                              style={{ color: archetype.color }}
                            >
                              {archetype.memberName}
                            </h4>
                            <p className="text-sm font-heading italic text-zinc-600 dark:text-zinc-400">
                              {archetype.role}
                            </p>
                          </div>

                          <span className="text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">→</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm text-muted-foreground">
              Clicca di nuovo per chiudere
            </p>
          </motion.div>}
      </AnimatePresence>

      {/* Modal dettagli membro */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={springPresets.gentle}
              className="relative bg-[#F5F1E8] dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con foto e nome */}
              {(() => {
                const member = archetypesList.find(a => a.memberName === selectedMember);
                const color = member?.color || '#821D30';
                return (
                  <>
                    <div className="relative">
                      <div className="h-48 md:h-56 overflow-hidden rounded-t-2xl">
                        <img
                          src={member?.photo}
                          alt={`${selectedMember}, ${member?.role}`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>
                      <button
                        onClick={() => setSelectedMember(null)}
                        aria-label="Chiudi"
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-zinc-700 hover:bg-white shadow-lg text-xl"
                      >
                        &times;
                      </button>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-heading text-3xl md:text-4xl font-medium text-white">
                          {selectedMember}
                        </h3>
                        <p className="font-heading italic text-lg" style={{ color }}>
                          {member?.role}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                      <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {memberDetails[selectedMember]?.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {memberDetails[selectedMember]?.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border"
                            style={{ borderColor: `${color}40`, color }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedMember(null)}
                        className="w-full py-3 text-white font-medium rounded-full hover:shadow-lg transition-all"
                        style={{ backgroundColor: color }}
                      >
                        Chiudi
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>;
}