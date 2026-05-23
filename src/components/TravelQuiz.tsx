import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Plane, Bed, Compass, Wallet, Calendar, Send, ChevronRight, ChevronLeft } from 'lucide-react'
import { TravelQuizData, ARCHETYPES } from '@/lib/index'
import { springPresets } from '@/lib/motion'

const STEPS = [
  { id: 1, title: 'Volo', icon: Plane },
  { id: 2, title: 'Camera', icon: Bed },
  { id: 3, title: 'Stile', icon: Compass },
  { id: 4, title: 'Budget', icon: Wallet },
  { id: 5, title: 'Durata', icon: Calendar }
]

export function TravelQuiz() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Partial<TravelQuizData>>({})
  const [submitted, setSubmitted] = useState(false)

  const progress = (currentStep / STEPS.length) * 100

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    if (isStepComplete(currentStep)) {
      setSubmitted(true)
    }
  }

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.includesFlight !== undefined
      case 2:
        return !!formData.roomType
      case 3:
        return !!formData.travelStyle
      case 4:
        return !!formData.budget
      case 5:
        return !!formData.duration
      default:
        return false
    }
  }

  const getRecommendedArchetype = (): typeof ARCHETYPES[keyof typeof ARCHETYPES] => {
    const { travelStyle, budget } = formData
    
    if (budget === 'luxury') return ARCHETYPES.CHIC
    if (travelStyle === 'adventure') return ARCHETYPES.ADVENTUROUS
    if (travelStyle === 'cultural') return ARCHETYPES.DREAMER
    return ARCHETYPES.STRATEGIST
  }

  if (submitted) {
    const archetype = getRecommendedArchetype()
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={springPresets.gentle}
        className="w-full max-w-2xl mx-auto"
      >
        <Card className="p-8 md:p-12 text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ background: `linear-gradient(135deg, ${archetype.color} 0%, transparent 100%)` }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ...springPresets.bouncy, delay: 0.2 }}
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
            style={{ backgroundColor: `${archetype.color}20`, color: archetype.color }}
          >
            ✓
          </motion.div>
          <h3 className="text-3xl font-bold mb-4">Il Tuo Viaggio Ideale!</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Basandoci sulle tue preferenze, ti consigliamo di parlare con:
          </p>
          <div 
            className="inline-block px-6 py-3 rounded-full text-white font-semibold text-xl mb-4"
            style={{ backgroundColor: archetype.color }}
          >
            {archetype.name}
          </div>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {archetype.description}
          </p>
          <Button
            size="lg"
            onClick={() => {
              setSubmitted(false)
              setCurrentStep(1)
              setFormData({})
            }}
            className="gap-2"
          >
            Ricomincia il Quiz
          </Button>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id
            
            return (
              <div key={step.id} className="flex items-center">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isCompleted ? 'var(--primary)' : isActive ? 'var(--accent)' : 'var(--muted)'
                  }}
                  transition={springPresets.snappy}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white relative z-10"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                {index < STEPS.length - 1 && (
                  <div className="w-12 md:w-20 h-1 bg-muted mx-2">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: isCompleted ? '100%' : '0%' }}
                      transition={springPresets.gentle}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={springPresets.gentle}
        >
          <Card className="p-8 md:p-12">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Plane className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Volo Incluso?</h3>
                  <p className="text-muted-foreground">Vuoi che organizziamo anche il volo?</p>
                </div>
                <RadioGroup
                  value={formData.includesFlight?.toString()}
                  onValueChange={(value) => setFormData({ ...formData, includesFlight: value === 'true' })}
                  className="space-y-4"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor="flight-yes"
                      className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                      style={{
                        borderColor: formData.includesFlight === true ? 'var(--accent)' : 'var(--border)',
                        backgroundColor: formData.includesFlight === true ? 'var(--accent)/5' : 'transparent'
                      }}
                    >
                      <RadioGroupItem value="true" id="flight-yes" />
                      <span className="text-lg font-medium">Sì, volo incluso</span>
                    </Label>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor="flight-no"
                      className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                      style={{
                        borderColor: formData.includesFlight === false ? 'var(--accent)' : 'var(--border)',
                        backgroundColor: formData.includesFlight === false ? 'var(--accent)/5' : 'transparent'
                      }}
                    >
                      <RadioGroupItem value="false" id="flight-no" />
                      <span className="text-lg font-medium">No, solo destinazione</span>
                    </Label>
                  </motion.div>
                </RadioGroup>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Bed className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Tipo di Camera</h3>
                  <p className="text-muted-foreground">Quale sistemazione preferisci?</p>
                </div>
                <RadioGroup
                  value={formData.roomType}
                  onValueChange={(value) => setFormData({ ...formData, roomType: value as TravelQuizData['roomType'] })}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {[
                    { value: 'single', label: 'Singola' },
                    { value: 'double', label: 'Matrimoniale' },
                    { value: 'triple', label: 'Tripla' },
                    { value: 'quad', label: 'Quadrupla' }
                  ].map((option) => (
                    <motion.div key={option.value} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Label
                        htmlFor={`room-${option.value}`}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                        style={{
                          borderColor: formData.roomType === option.value ? 'var(--accent)' : 'var(--border)',
                          backgroundColor: formData.roomType === option.value ? 'var(--accent)/5' : 'transparent'
                        }}
                      >
                        <RadioGroupItem value={option.value} id={`room-${option.value}`} />
                        <span className="text-lg font-medium">{option.label}</span>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Compass className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Stile di Viaggio</h3>
                  <p className="text-muted-foreground">Cosa ami di più?</p>
                </div>
                <RadioGroup
                  value={formData.travelStyle}
                  onValueChange={(value) => setFormData({ ...formData, travelStyle: value as TravelQuizData['travelStyle'] })}
                  className="space-y-4"
                >
                  {[
                    { value: 'adventure', label: 'Avventura', emoji: '🏔️' },
                    { value: 'beach', label: 'Mare e Relax', emoji: '🏖️' },
                    { value: 'cultural', label: 'Culturale', emoji: '🏛️' },
                    { value: 'relax', label: 'Benessere', emoji: '🧘' },
                    { value: 'mixed', label: 'Mix di Tutto', emoji: '🌍' }
                  ].map((option) => (
                    <motion.div key={option.value} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Label
                        htmlFor={`style-${option.value}`}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                        style={{
                          borderColor: formData.travelStyle === option.value ? 'var(--accent)' : 'var(--border)',
                          backgroundColor: formData.travelStyle === option.value ? 'var(--accent)/5' : 'transparent'
                        }}
                      >
                        <RadioGroupItem value={option.value} id={`style-${option.value}`} />
                        <span className="text-2xl mr-2">{option.emoji}</span>
                        <span className="text-lg font-medium">{option.label}</span>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Wallet className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Budget</h3>
                  <p className="text-muted-foreground">Quanto vuoi investire?</p>
                </div>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value as TravelQuizData['budget'] })}
                  className="space-y-4"
                >
                  {[
                    { value: 'economy', label: 'Economy', desc: 'Ottimo rapporto qualità-prezzo' },
                    { value: 'comfort', label: 'Comfort', desc: 'Equilibrio tra comfort e costo' },
                    { value: 'luxury', label: 'Luxury', desc: 'Esperienza premium senza limiti' }
                  ].map((option) => (
                    <motion.div key={option.value} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Label
                        htmlFor={`budget-${option.value}`}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                        style={{
                          borderColor: formData.budget === option.value ? 'var(--accent)' : 'var(--border)',
                          backgroundColor: formData.budget === option.value ? 'var(--accent)/5' : 'transparent'
                        }}
                      >
                        <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                        <div className="flex-1">
                          <div className="text-lg font-medium">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </div>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Durata</h3>
                  <p className="text-muted-foreground">Quanto tempo hai a disposizione?</p>
                </div>
                <RadioGroup
                  value={formData.duration}
                  onValueChange={(value) => setFormData({ ...formData, duration: value as TravelQuizData['duration'] })}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {[
                    { value: '3-5', label: '3-5 giorni', desc: 'Weekend lungo' },
                    { value: '6-9', label: '6-9 giorni', desc: 'Una settimana' },
                    { value: '10-14', label: '10-14 giorni', desc: 'Due settimane' },
                    { value: '15+', label: '15+ giorni', desc: 'Viaggio esteso' }
                  ].map((option) => (
                    <motion.div key={option.value} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Label
                        htmlFor={`duration-${option.value}`}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
                        style={{
                          borderColor: formData.duration === option.value ? 'var(--accent)' : 'var(--border)',
                          backgroundColor: formData.duration === option.value ? 'var(--accent)/5' : 'transparent'
                        }}
                      >
                        <RadioGroupItem value={option.value} id={`duration-${option.value}`} />
                        <div className="flex-1">
                          <div className="text-lg font-medium">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </div>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
                <div className="mt-6">
                  <Label htmlFor="special-requests" className="text-base mb-2 block">
                    Richieste Speciali (opzionale)
                  </Label>
                  <Textarea
                    id="special-requests"
                    placeholder="Hai esigenze particolari? Dicci di più..."
                    value={formData.specialRequests || ''}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="min-h-24 resize-none"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Indietro
              </Button>
              
              {currentStep < STEPS.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete(currentStep)}
                  className="gap-2"
                >
                  Avanti
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepComplete(currentStep)}
                  className="gap-2"
                >
                  Invia
                  <Send className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}