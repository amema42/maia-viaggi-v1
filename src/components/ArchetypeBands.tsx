import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { ARCHETYPES, TEAM_MEMBERS } from '@/lib/index'
import { IMAGES } from '@/assets/images'
import { modalOverlay, modalContent } from '@/lib/motion'

const bands = [
  { ...ARCHETYPES.DREAMER, memberName: 'Michele' as const, photo: IMAGES.IMG_4115_172 },
  { ...ARCHETYPES.CHIC, memberName: 'Anna' as const, photo: IMAGES.IMG_4101_171 },
  { ...ARCHETYPES.STRATEGIST, memberName: 'Isabel' as const, photo: IMAGES.IMG_4092_170 },
  { ...ARCHETYPES.ADVENTUROUS, memberName: 'Andrea' as const, photo: IMAGES.IMG_4082_173 },
]

export function ArchetypeBands() {
  const [activeBand, setActiveBand] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedMember) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null)
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [selectedMember])

  const getColumns = () => {
    if (activeBand === null) return 'repeat(4, 1fr)'
    return bands.map((_, i) => (i === activeBand ? '2.4fr' : '0.87fr')).join(' ')
  }

  return (
    <>
      {/* Desktop: expandable bands */}
      <div
        className="hidden md:grid h-[520px] rounded-2xl overflow-hidden"
        style={{
          gridTemplateColumns: getColumns(),
          transition: 'grid-template-columns 500ms cubic-bezier(.16,1,.3,1)',
        }}
      >
        {bands.map((band, i) => (
          <button
            type="button"
            key={band.id}
            className="relative cursor-pointer overflow-hidden group text-left"
            onMouseEnter={() => setActiveBand(i)}
            onMouseLeave={() => setActiveBand(null)}
            onClick={() => setSelectedMember(band.memberName)}
          >
            <img
              src={band.photo}
              alt={`${band.memberName}, ${band.role}`}
              className="absolute inset-0 w-full h-full object-cover photo-editorial transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, ${band.color}ee 0%, ${band.color}60 40%, transparent 100%)`,
                opacity: activeBand === i ? 1 : 0.7,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-heading text-2xl font-medium leading-tight mb-1">
                {band.memberName}
              </p>
              <p className="font-heading italic text-sm opacity-90">
                {band.role}
              </p>
              {activeBand === i && (
                <p className="mt-3 text-sm text-white/80 leading-relaxed line-clamp-3 transition-opacity duration-300">
                  {TEAM_MEMBERS[band.memberName].description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Mobile: horizontal scrollable cards */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-4 -mx-4">
        {bands.map((band) => (
          <button
            type="button"
            key={band.id}
            className="relative flex-shrink-0 w-[280px] h-[360px] rounded-xl overflow-hidden snap-center cursor-pointer text-left"
            onClick={() => setSelectedMember(band.memberName)}
          >
            <img
              src={band.photo}
              alt={`${band.memberName}, ${band.role}`}
              className="absolute inset-0 w-full h-full object-cover photo-editorial"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, ${band.color}dd 0%, ${band.color}40 50%, transparent 100%)` }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="font-heading text-xl font-medium">{band.memberName}</p>
              <p className="font-heading italic text-sm opacity-90">{band.role}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Detail modal -- generous sizing, full photo */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-title"
              className="relative bg-[#F5F1E8] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const band = bands.find((b) => b.memberName === selectedMember)
                if (!band) return null
                const member = TEAM_MEMBERS[band.memberName]
                return (
                  <>
                    {/* Photo -- generous height, good framing */}
                    <div className="relative h-72 md:h-96">
                      <img
                        src={band.photo}
                        alt={`${selectedMember}, ${band.role}`}
                        className="w-full h-full object-cover object-top rounded-t-2xl photo-editorial"
                      />
                      <div
                        className="absolute inset-0 rounded-t-2xl"
                        style={{
                          background: `linear-gradient(to top, #1A1A1Acc 0%, ${band.color}30 40%, transparent 70%)`,
                        }}
                      />
                      <button type="button"
                        onClick={() => setSelectedMember(null)}
                        aria-label="Chiudi"
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-zinc-700 hover:bg-white shadow-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-heading italic text-sm mb-1" style={{ color: band.color }}>
                          {band.role}
                        </p>
                        <h3 id="team-modal-title" className="font-heading text-4xl md:text-5xl font-medium text-white leading-tight">
                          {selectedMember}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 space-y-6">
                      <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                        {member.description}
                      </p>

                      <div>
                        <p className="font-mono text-xs text-zinc-400 lowercase mb-3">competenze</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border"
                              style={{ borderColor: `${band.color}30`, color: band.color }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: band.color }} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* WhatsApp CTA for this team member */}
                      <a
                        href={`https://wa.me/390640089596?text=${encodeURIComponent(`Ciao! Vorrei parlare con ${selectedMember} per organizzare il mio viaggio.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 rounded-full font-medium text-white text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
                        style={{ backgroundColor: band.color }}
                      >
                        Parla con {selectedMember}
                      </a>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
