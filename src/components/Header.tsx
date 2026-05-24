import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IMAGES } from '@/assets/images'
import { useLanguage, languageNames, type Language } from '@/lib/i18n'

const WA_URL = 'https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi'

const SECTIONS = ['hero', 'marocco-section', 'passport-section', 'destinazioni-section'] as const

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium text-zinc-600 hover:text-[#821D30] transition-colors"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{languageNames[language]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-zinc-100 py-1 min-w-[140px] z-[55]">
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button type="button"
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang ? 'text-[#821D30] font-medium bg-[#F5EFE1]' : 'text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section tracking via IntersectionObserver (only on home)
  useEffect(() => {
    if (!isHome) { setActiveSection(''); return }
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [isHome, location.pathname])

  // Mobile menu: ESC + scroll lock + focus trap
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !menuRef.current) return
      const focusable = menuRef.current.querySelectorAll<HTMLElement>('a,button,[tabindex]:not([tabindex="-1"])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    const trigger = triggerRef.current
    document.addEventListener('keydown', handleEsc)
    document.addEventListener('keydown', handleTab)
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLElement>('a,button')?.focus()
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = ''
      trigger?.focus()
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: t('home'), sectionId: 'hero' },
    { label: t('destinations'), sectionId: 'destinazioni-section' },
    { label: t('about'), sectionId: 'passport-section' },
  ]

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMobileMenuOpen(false)
    const hash = `#${sectionId}`
    if (!isHome) {
      navigate(`/${hash}`)
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [isHome, navigate])

  const isActive = (sectionId: string) => isHome && activeSection === sectionId

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5EFE1]/90 backdrop-blur-lg shadow-sm border-b border-[#DCB38C]/15'
            : 'bg-[#F5EFE1]/40 backdrop-blur-sm'
        }`}
      >
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center h-[72px] max-w-7xl mx-auto">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
              className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              <img src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE} alt="MAIA Viaggi" className="h-12 md:h-14 w-auto" />
            </a>

            <div className="hidden lg:flex flex-1 justify-center">
              <nav className={`flex items-center rounded-full px-1.5 py-1 transition-all duration-300 ${
                isScrolled
                  ? 'bg-white/80 backdrop-blur-md shadow-sm border border-[#DCB38C]/20'
                  : 'bg-white/60 backdrop-blur-sm border border-white/30'
              }`} aria-label="Navigazione principale">
                {navItems.map((item) => (
                  <a
                    key={item.sectionId}
                    href={`#${item.sectionId}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId) }}
                    aria-current={isActive(item.sectionId) ? 'true' : undefined}
                    className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive(item.sectionId)
                        ? 'bg-[#821D30]/10 text-[#821D30]'
                        : 'text-zinc-600 hover:bg-[#821D30]/5 hover:text-[#821D30]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-[13px] font-medium text-zinc-600 transition-all duration-200 hover:bg-[#821D30]/5 hover:text-[#821D30] whitespace-nowrap"
                >
                  {t('navContact')}
                </a>
              </nav>
            </div>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <LanguageDropdown />
            </div>

            <button type="button"
              ref={triggerRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Menu navigazione"
              className="lg:hidden ml-auto p-2 rounded-lg transition-colors text-zinc-800 hover:bg-black/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              ref={menuRef}
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigazione"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-[72px] border-b border-zinc-100">
                  <img src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE} alt="MAIA Viaggi" className="h-10 w-auto" />
                  <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-zinc-50 rounded-lg transition-colors" aria-label="Chiudi menu">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Navigazione principale">
                  {navItems.map((item) => (
                    <a
                      key={item.sectionId}
                      href={`#${item.sectionId}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId) }}
                      aria-current={isActive(item.sectionId) ? 'true' : undefined}
                      className={`block px-4 py-3 font-medium text-[15px] rounded-lg transition-colors ${
                        isActive(item.sectionId) ? 'bg-[#F5EFE1] text-[#821D30]' : 'text-zinc-700 hover:bg-[#F5EFE1]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-[#25D366] font-medium text-[15px] rounded-lg hover:bg-[#F5EFE1] transition-colors">
                    {t('navContactWhatsApp')}
                  </a>
                </nav>
                <div className="border-t border-zinc-100 p-4">
                  <p className="font-mono text-xs text-zinc-400 lowercase mb-2 px-4">{t('navLanguage')}</p>
                  <div className="flex flex-wrap gap-1 px-2">
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button type="button" key={lang} onClick={() => setLanguage(lang)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${language === lang ? 'bg-[#821D30] text-white' : 'text-zinc-500 hover:bg-zinc-100'}`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
