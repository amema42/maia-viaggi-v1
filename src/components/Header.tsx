import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { IMAGES } from '@/assets/images'
import { useLanguage } from '@/lib/i18n'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: t('home').toUpperCase(), href: '#hero' },
    { label: t('createTrip').toUpperCase(), href: '#hero' },
    { label: t('destinations').toUpperCase(), href: '#destinazioni' },
    { label: t('about').toUpperCase(), href: '#passport-section' },
    { label: t('contact').toUpperCase(), href: '#footer' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8 h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hero')
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 -ml-4"
            >
              <img 
                src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE}
                alt="MAIA Viaggi" 
                className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-lg"
              />
            </motion.a>

            {/* Desktop Menu - Unico riquadro con divisori */}
            <nav className={`hidden lg:flex items-center rounded-xl border-2 shadow-lg overflow-hidden mx-auto ${
              isScrolled 
                ? 'bg-white border-gray-300' 
                : 'bg-white/90 border-gray-300'
            }`}>
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: '#ce5b20', color: '#ffffff' }}
                  className={`px-3 py-2 text-sm font-black tracking-[0.08em] uppercase transition-all font-heading text-gray-800 hover:text-white ${
                    index < menuItems.length - 1 ? 'border-r-2 border-gray-300' : ''
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ml-auto ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <img 
                    src={IMAGES.MAIA_CLASSICO_LOGO_SFONDO_TRASPARENTE}
                    alt="MAIA Viaggi" 
                    className="h-16 md:h-20 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block px-4 py-3 text-gray-800 font-black text-base tracking-[0.1em] uppercase border-2 border-gray-300 rounded-lg hover:bg-[#ce5b20] hover:text-white hover:border-[#ce5b20] transition-all shadow-md font-heading"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
