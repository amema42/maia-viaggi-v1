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
          <div className="bg-[#821d30] px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-initial">
                <div className="text-white/80 text-xs font-heading italic">il tuo biglietto</div>
                <div className="text-white text-lg md:text-2xl font-heading font-medium tracking-tight leading-tight">Crea il tuo viaggio.</div>
              </div>
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
              <div className="text-white/70 font-mono text-xs">ed. primavera</div>
              <div className="text-white font-mono text-sm font-medium">n. 001</div>
            </div>
          </div>

          {/* CORPO BIGLIETTO */}
          <div className="p-4 md:p-8 space-y-4 md:space-y-6">
            {/* Riga 1: Periodo e Passeggeri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label className="text-xs text-[#595142] font-medium mb-2 block">
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
                  <Label className="text-xs text-[#595142] font-medium mb-2 block">
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
                  <Label className="text-xs text-[#595142] font-medium mb-2 block">
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
              <Label className="text-xs text-[#595142] font-medium mb-2 md:mb-3 block">
                Tipologia Viaggio (seleziona tutto ciò che ti interessa)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                {travelStyleOptions.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => toggleTravelStyle(style)}
                    className={`relative px-3 md:px-4 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 border-2 shadow-md hover:scale-[1.03] active:scale-[0.97] ${
                      travelStyles.includes(style)
                        ? 'bg-[#1A1A1A] text-[#F5EFE1] border-transparent'
                        : 'bg-white text-[#595142] border-[#D8CDB5] hover:border-[#821d30] hover:text-[#821d30]'
                    }`}
                  >
                    {travelStyles.includes(style) && (
                      <Check className="w-4 h-4 md:w-5 md:h-5 absolute top-2 right-2" strokeWidth={3} />
                    )}
                    {style}
                  </button>
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

          <div className="px-4 md:px-8 py-4 md:py-6 border-t border-[#D8CDB5]">
            <Button
              type="submit"
              size="lg"
              disabled={!travelMonth || travelStyles.length === 0}
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-medium bg-[#821d30] hover:bg-[#6E182A] hover:shadow-lg transition-all disabled:opacity-50 w-full rounded-full"
            >
              <Plane className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Trova la destinazione per me
            </Button>
          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}
