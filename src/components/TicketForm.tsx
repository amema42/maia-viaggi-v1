import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plane, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type TicketFormData } from '@/lib/index'
import { springPresets } from '@/lib/motion'
import { IMAGES } from '@/assets/images'

interface TicketFormProps {
  onSubmit: (data: TicketFormData) => void
}

export function TicketForm({ onSubmit }: TicketFormProps) {
  const [formData, setFormData] = useState<TicketFormData>({
    destination: '',
    travelType: 'private',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    preferences: ''
  })
  
  const [travelMonth, setTravelMonth] = useState('')
  const [travelStyles, setTravelStyles] = useState<string[]>([])

  const travelStyleOptions = [
    'Enogastronomico', 'Avventura', 'Culturale', 'Relax', 'Mare',
    'Montagna', 'Romantico', 'Famiglia', 'Lusso', 'Religioso'
  ]

  const toggleTravelStyle = (style: string) => {
    setTravelStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (travelMonth && travelStyles.length > 0) {
      onSubmit({ ...formData, departureDate: travelMonth, returnDate: travelMonth, preferences: travelStyles.join(', ') })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springPresets.gentle}
      className="w-full max-w-4xl mx-auto"
    >
      {/* BOARDING PASS REALISTICO */}
      <form onSubmit={handleSubmit}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={springPresets.snappy}
          className="relative bg-white dark:bg-zinc-50 rounded-2xl overflow-hidden"
          style={{
            boxShadow: `
              0 20px 60px -10px rgba(130, 29, 48, 0.3),
              0 10px 30px -5px rgba(206, 91, 32, 0.2),
              0 0 0 1px rgba(0,0,0,0.05)
            `
          }}
        >
          {/* HEADER - Stile compagnia aerea */}
          <div className="bg-gradient-to-r from-[#821d30] via-[#ce5b20] to-[#237478] px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-initial">
                <div className="text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Boarding Pass</div>
                <div className="text-white text-lg md:text-2xl font-black tracking-tight leading-tight">CREA IL TUO VIAGGIO PERFETTO</div>
              </div>
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
              <div className="text-white/70 text-[9px] uppercase tracking-wider">Flight</div>
              <div className="text-white font-mono text-base md:text-lg font-black">VGG2026</div>
            </div>
          </div>

          {/* CORPO BIGLIETTO */}
          <div className="p-4 md:p-8 space-y-4 md:space-y-6">
            {/* Riga 1: Periodo e Passeggeri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-2 block">
                  Periodo di Viaggio
                </Label>
                <Select value={travelMonth} onValueChange={setTravelMonth}>
                  <SelectTrigger className="h-11 md:h-12 border-2 border-zinc-300 font-mono text-sm md:text-base font-semibold bg-white">
                    <SelectValue placeholder="Seleziona mese" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026-04">Aprile 2026</SelectItem>
                    <SelectItem value="2026-05">Maggio 2026</SelectItem>
                    <SelectItem value="2026-06">Giugno 2026</SelectItem>
                    <SelectItem value="2026-07">Luglio 2026</SelectItem>
                    <SelectItem value="2026-08">Agosto 2026</SelectItem>
                    <SelectItem value="2026-09">Settembre 2026</SelectItem>
                    <SelectItem value="2026-10">Ottobre 2026</SelectItem>
                    <SelectItem value="2026-11">Novembre 2026</SelectItem>
                    <SelectItem value="2026-12">Dicembre 2026</SelectItem>
                    <SelectItem value="2027-01">Gennaio 2027</SelectItem>
                    <SelectItem value="2027-02">Febbraio 2027</SelectItem>
                    <SelectItem value="2027-03">Marzo 2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <Label className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-2 block">
                    Passeggeri
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                    className="h-11 md:h-12 border-2 border-zinc-300 font-mono text-sm md:text-base font-semibold text-center"
                  />
                </div>
                <div>
                  <Label className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-2 block">
                    Tipo
                  </Label>
                  <Select
                    value={formData.travelType}
                    onValueChange={(value: 'private' | 'group_adhoc') => setFormData({ ...formData, travelType: value as any })}
                  >
                    <SelectTrigger className="h-11 md:h-12 border-2 border-zinc-300 font-mono text-xs md:text-sm font-semibold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Privato</SelectItem>
                      <SelectItem value="group_adhoc">Di Gruppo Ad Hoc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Linea separatrice */}
            <div className="border-t-2 border-dashed border-zinc-300" />

            {/* Tipologie di viaggio */}
            <div>
              <Label className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-2 md:mb-3 block">
                Tipologia Viaggio (seleziona tutto ciò che ti interessa)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                {travelStyleOptions.map((style) => (
                  <motion.button
                    key={style}
                    type="button"
                    onClick={() => toggleTravelStyle(style)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3 md:px-4 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all border-2 shadow-md ${
                      travelStyles.includes(style)
                        ? 'bg-gradient-to-r from-[#821d30] to-[#ce5b20] text-white border-transparent shadow-lg'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#ce5b20]'
                    }`}
                  >
                    {travelStyles.includes(style) && (
                      <Check className="w-4 h-4 md:w-5 md:h-5 absolute top-2 right-2" strokeWidth={3} />
                    )}
                    {style}
                  </motion.button>
                ))}
              </div>
              {travelStyles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 md:mt-3 text-[10px] md:text-xs text-zinc-600 font-mono bg-zinc-100 px-2 md:px-3 py-1.5 md:py-2 rounded"
                >
                  ✓ Selezionati: {travelStyles.join(', ')}
                </motion.div>
              )}
            </div>
          </div>

          {/* FOOTER - Barcode e pulsante */}
          <div className="bg-zinc-100 dark:bg-zinc-200 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between border-t-2 border-dashed border-zinc-300">
            <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto justify-center md:justify-start">
              {/* Barcode simulato */}
              <div className="flex gap-[2px] h-12 md:h-16 items-end">
                {[4,2,3,4,2,4,3,2,4,3,4,2,3,4,2,4,3,2,4,3,4,2,3,4,2,4,3,2,4,3].map((height, i) => (
                  <div
                    key={i}
                    className="bg-black"
                    style={{
                      width: i % 5 === 0 ? '2.5px' : '1.5px',
                      height: `${height * 20}%`
                    }}
                  />
                ))}
              </div>
              <div className="text-[9px] md:text-[10px] font-mono text-zinc-500 tracking-wider hidden md:block">
                ARCH2026-VGG-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={!travelMonth || travelStyles.length === 0}
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-black uppercase tracking-wider bg-gradient-to-r from-[#821d30] via-[#ce5b20] to-[#237478] hover:shadow-2xl transition-all disabled:opacity-50 w-full md:w-auto"
            >
              <Plane className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="hidden md:inline">Scopri la Destinazione per Te</span>
              <span className="md:hidden">Scopri Destinazione</span>
            </Button>
          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}
