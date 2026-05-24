import { useState } from 'react'
import { Plane, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type TicketFormData } from '@/lib/index'

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
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div
          className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
          style={{
            boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',
          }}
        >
          <div className="p-5 md:p-7 space-y-5">
            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <Label className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">
                  periodo di viaggio
                </Label>
                <Select value={travelMonth} onValueChange={setTravelMonth}>
                  <SelectTrigger className="h-11 border border-zinc-200 text-sm bg-white rounded-xl">
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">passeggeri</Label>
                  <Input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                    className="h-11 border border-zinc-200 text-sm text-center rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">tipo</Label>
                  <Select
                    value={formData.travelType}
                    onValueChange={(value) => setFormData({ ...formData, travelType: value as 'private' | 'group_adhoc' })}
                  >
                    <SelectTrigger className="h-11 border border-zinc-200 text-xs rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Privato</SelectItem>
                      <SelectItem value="group_adhoc">Di Gruppo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Travel styles */}
            <div>
              <Label className="text-xs text-[#595142] font-medium mb-3 block font-mono lowercase">
                tipologia viaggio
              </Label>
              <div className="flex flex-wrap gap-2">
                {travelStyleOptions.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => toggleTravelStyle(style)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-all duration-200 ${
                      travelStyles.includes(style)
                        ? 'bg-[#821d30] text-white border-[#821d30]'
                        : 'bg-transparent text-[#595142] border-zinc-200 hover:border-[#821d30] hover:text-[#821d30]'
                    }`}
                  >
                    {travelStyles.includes(style) && <Check className="w-3 h-3" strokeWidth={2.5} />}
                    {style}
                  </button>
                ))}
              </div>
              {travelStyles.length > 0 && (
                <p className="mt-2 text-[11px] text-zinc-400 font-mono">
                  {travelStyles.length} selezionat{travelStyles.length === 1 ? 'o' : 'i'}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={!travelMonth || travelStyles.length === 0}
              className="h-12 px-8 text-sm font-medium bg-[#821d30] hover:bg-[#6E182A] transition-all disabled:opacity-40 w-full rounded-full"
            >
              <Plane className="w-4 h-4 mr-2" />
              Trova la destinazione per me
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
