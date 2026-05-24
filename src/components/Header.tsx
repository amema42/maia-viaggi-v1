import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { IMAGES } from '@/assets/images'
import { useLanguage, languageNames, type Language } from '@/lib/i18n'

const WA_URL = 'https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni%20sui%20vostri%20servizi'

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
        <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-zinc-100 py-1 min-w-[140px] z-50">
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button type="button"
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang
                  ? 'text-[#821D30] font-medium bg-[#F5EFE1]'
                  : 'text-zinc-600 hover:bg-zinc-50'
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
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Crea il tuo viaggio', href: '#hero' },
    { label: 'Destinazioni', href: '#destinazioni-section' },
    { label: 'Chi siamo', href: '#passport-section' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 72
      const elementTop = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: elementTop, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center h-[72px] max-w-7xl mx-auto">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
              className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              <img
                src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE}
                alt="MAIA Viaggi"
                className="h-12 md:h-14 w-auto"
              />
            </a>

            {/* Desktop nav -- centered */}
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className={`flex items-center rounded-full px-1.5 py-1 transition-all duration-300 ${
                isScrolled
                  ? 'bg-white shadow-sm border border-zinc-100'
                  : 'bg-white/80 backdrop-blur-sm shadow-sm border border-white/40'
              }`}>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                    className="px-4 py-2 rounded-full text-[13px] font-medium text-zinc-600 transition-all duration-200 hover:bg-[#821D30]/8 hover:text-[#821D30] whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-[13px] font-medium text-zinc-600 transition-all duration-200 hover:bg-[#821D30]/8 hover:text-[#821D30] whitespace-nowrap"
                >
                  Contattaci
                </a>
              </nav>
            </div>

            {/* Right: language dropdown */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <LanguageDropdown />
            </div>

            {/* Mobile hamburger */}
            <button type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-auto p-2 rounded-lg transition-colors text-zinc-800 hover:bg-black/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-[72px] border-b border-zinc-100">
                  <img
                    src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE}
                    alt="MAIA Viaggi"
                    className="h-10 w-auto"
                  />
                  <button type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-zinc-50 rounded-lg transition-colors"
                    aria-label="Chiudi menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto py-4 px-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                      className="block px-4 py-3 text-zinc-700 font-medium text-[15px] rounded-lg hover:bg-[#F5EFE1] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-[#25D366] font-medium text-[15px] rounded-lg hover:bg-[#F5EFE1] transition-colors"
                  >
                    Contattaci su WhatsApp
                  </a>
                </nav>

                {/* Mobile language selector */}
                <div className="border-t border-zinc-100 p-4">
                  <p className="font-mono text-xs text-zinc-400 lowercase mb-2 px-4">lingua</p>
                  <div className="flex flex-wrap gap-1 px-2">
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button type="button"
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          language === lang
                            ? 'bg-[#821D30] text-white'
                            : 'text-zinc-500 hover:bg-zinc-100'
                        }`}
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
