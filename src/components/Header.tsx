import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Destinazioni', href: '#destinazioni' },
    { label: 'Chi siamo', href: '#passport-section' },
    { label: 'Contatti', href: '#footer' }
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
            ? 'bg-[#F5EFE1]/90 backdrop-blur-md border-b border-[#D8CDB5]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hero')
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10"
            >
              <img
                src="/images/maia-logo-nero.png"
                alt="MAIA Viaggi"
                className="h-12 md:h-14 w-auto"
              />
            </motion.a>

            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="relative text-sm font-medium text-[#1A1A1A] py-2 transition-colors hover:text-[#821D30] group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#821D30] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2.5 bg-[#1A1A1A] text-[#F5EFE1] rounded-full transition-all hover:bg-[#821D30] hover:-translate-y-px"
              >
                Scrivici
              </a>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-[#1A1A1A] hover:bg-[#ECE3CF]"
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
              className="absolute top-0 right-0 bottom-0 w-80 bg-[#F5EFE1] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#D8CDB5]">
                  <img
                    src="/images/maia-logo-nero.png"
                    alt="MAIA Viaggi"
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-[#ECE3CF] rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-[#1A1A1A]" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="block px-4 py-3 text-[#1A1A1A] font-medium text-base rounded-lg hover:bg-[#ECE3CF] transition-colors"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D8CDB5]">
                    <a
                      href="https://wa.me/390640089596?text=Ciao%20MAIA%20Viaggi!%20Vorrei%20informazioni"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-5 py-3 bg-[#821D30] text-white rounded-full font-medium transition-colors hover:bg-[#6E182A]"
                    >
                      Scrivici su WhatsApp
                    </a>
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
