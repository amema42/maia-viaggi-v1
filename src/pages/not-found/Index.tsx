import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col section-cream">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-lg">
          <p className="font-mono text-xs text-[#DCB38C] mb-4 lowercase">errore 404</p>
          <h1
            className="font-heading font-semibold tracking-tight leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Pagina non trovata
          </h1>
          <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
            La pagina che cerchi non esiste o e' stata spostata.
          </p>
          <a
            href="/"
            className="inline-block bg-[#821D30] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
          >
            Torna alla home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
