import { useState, useMemo } from 'react'
import { Plane, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type TicketFormData } from '@/lib/index'
import { useLanguage } from '@/lib/i18n'

const LOCALE_MAP: Record<string, string> = {
  it: 'it-IT', en: 'en-GB', es: 'es-ES', fr: 'fr-FR', de: 'de-DE',
}

function getNextMonths(count: number): string[] {
  const now = new Date()
  const result: string[] = []
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + 1 + i, 1)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    result.push(`${y}-${m}`)
  }
  return result
}

function formatMonth(value: string, locale: string): string {
  const [year, month] = value.split('-').map(Number)
  const date = new Date(year, month - 1)
  const formatted = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

const TRAVEL_STYLES = [
  { key: 'styleFood', tags: ['Enogastronomico'] },
  { key: 'styleAdventure', tags: ['Avventura'] },
  { key: 'styleCultural', tags: ['Culturale', 'Storica', 'Archeologica'] },
  { key: 'styleRelax', tags: ['Balneare', 'Spirituale'] },
  { key: 'styleBeach', tags: ['Balneare'] },
  { key: 'styleMountain', tags: ['Avventura'] },
  { key: 'styleRomantic', tags: ['Romantica'] },
  { key: 'styleFamily', tags: ['City break', 'Balneare'] },
  { key: 'styleLuxury', tags: ['Lusso'] },
  { key: 'styleReligious', tags: ['Spirituale', 'Culturale'] },
] as const

interface TicketFormProps {
  onSubmit: (data: TicketFormData) => void
}

export function TicketForm({ onSubmit }: TicketFormProps) {
  const { t, language } = useLanguage()
  const locale = LOCALE_MAP[language] || 'it-IT'

  const monthValues = useMemo(() => getNextMonths(12), [])
  const months = useMemo(() =>
    monthValues.map(v => ({ value: v, label: formatMonth(v, locale) })),
    [locale, monthValues]
  )

  const [formData, setFormData] = useState<TicketFormData>({
    destination: '',
    travelType: 'private',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    preferences: ''
  })

  const [travelMonth, setTravelMonth] = useState('')
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const toggleStyle = (key: string) => {
    setSelectedKeys(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (travelMonth && selectedKeys.length > 0) {
      const allTags = selectedKeys.flatMap(key => {
        const style = TRAVEL_STYLES.find(s => s.key === key)
        return style ? [...style.tags] : []
      })
      const uniqueTags = [...new Set(allTags)]
      onSubmit({ ...formData, departureDate: travelMonth, returnDate: travelMonth, preferences: uniqueTags.join(', ') })
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <Label htmlFor="travel-period" className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">
                  {t('formPeriod')}
                </Label>
                <Select value={travelMonth} onValueChange={setTravelMonth}>
                  <SelectTrigger id="travel-period" className="h-11 border border-zinc-200 text-sm bg-white rounded-xl">
                    <SelectValue placeholder={t('formSelectMonth')} />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map(m => (
                      <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="passengers" className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">{t('formPassengers')}</Label>
                  <Input
                    id="passengers"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                    className="h-11 border border-zinc-200 text-sm text-center rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="travel-type" className="text-xs text-[#595142] font-medium mb-2 block font-mono lowercase">{t('formType')}</Label>
                  <Select
                    value={formData.travelType}
                    onValueChange={(value) => setFormData({ ...formData, travelType: value as 'private' | 'group_adhoc' })}
                  >
                    <SelectTrigger id="travel-type" className="h-11 border border-zinc-200 text-xs rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">{t('formPrivate')}</SelectItem>
                      <SelectItem value="group_adhoc">{t('formGroup')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <Label id="travel-styles-label" className="text-xs text-[#595142] font-medium mb-3 block font-mono lowercase">
                {t('formTravelType')}
              </Label>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="travel-styles-label">
                {TRAVEL_STYLES.map(({ key }) => {
                  const label = t(key as any)
                  const selected = selectedKeys.includes(key)
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleStyle(key)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-all duration-200 ${
                        selected
                          ? 'bg-[#821d30] text-white border-[#821d30]'
                          : 'bg-transparent text-[#595142] border-zinc-200 hover:border-[#821d30] hover:text-[#821d30]'
                      }`}
                    >
                      {selected && <Check className="w-3 h-3" strokeWidth={2.5} />}
                      {label}
                    </button>
                  )
                })}
              </div>
              {selectedKeys.length > 0 && (
                <p className="mt-2 text-[11px] text-zinc-400 font-mono">
                  {selectedKeys.length} {t('formSelected')}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={!travelMonth || selectedKeys.length === 0}
              className="h-12 px-8 text-sm font-medium bg-[#821d30] hover:bg-[#6E182A] transition-all disabled:opacity-40 w-full rounded-full"
            >
              <Plane className="w-4 h-4 mr-2" />
              {t('formSubmit')}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
