import { DESTINATIONS } from '@/lib/index'
import { IMAGES } from '@/assets/images'

export function DestinationsMarquee() {
  const items = DESTINATIONS.map((dest) => ({
    id: dest.id,
    name: dest.name,
    image: IMAGES[dest.imageKey as keyof typeof IMAGES],
  }))

  const scrollToDestinations = () => {
    const section = document.getElementById('destinazioni-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderStrip = () =>
    items.map((item) => (
      <button type="button"
        key={item.id}
        onClick={scrollToDestinations}
        className="relative flex-shrink-0 w-[160px] h-[100px] rounded-lg overflow-hidden group cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover photo-editorial transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-2 left-3 right-3 font-heading text-sm font-medium text-white leading-tight">
          {item.name}
        </span>
      </button>
    ))

  return (
    <div className="section-cream-deep py-8 overflow-hidden">
      <div className="animate-marquee flex gap-4 w-max">
        {renderStrip()}
        {renderStrip()}
      </div>
    </div>
  )
}
