import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_HEIGHT = 72

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT
          window.scrollTo({ top, behavior: 'smooth' })
          return true
        }
        return false
      }
      if (!tryScroll()) {
        const timer = setTimeout(tryScroll, 400)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])

  return null
}
