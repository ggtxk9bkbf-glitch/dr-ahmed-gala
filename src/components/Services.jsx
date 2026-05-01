import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL

const services = [
  { title: 'Advanced Fillers & Contouring', img: `${BASE}images/services/fillers.jpg`, emoji: '💉' },
  { title: 'Botox Techniques', img: `${BASE}images/services/antiaging.jpg`, emoji: '✨' },
  { title: 'Bio-stimulators', img: `${BASE}images/services/skin.jpg`, emoji: '🌱' },
  { title: 'Skin Boosters & Mesotherapy', img: `${BASE}images/services/facial.jpg`, emoji: '💧' },
  { title: 'Comprehensive Skin Treatments', img: `${BASE}images/services/laser.jpg`, emoji: '🔬' },
  { title: 'Hair & Scalp Treatments', img: `${BASE}images/services/hair.jpg`, emoji: '💆' },
]

function ServiceCard({ service }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('fade-in-up') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className="card-hover bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-4 flex items-center gap-3">
        <span className="text-xl">{service.emoji}</span>
        <p className="font-semibold text-sm text-[rgb(45,52,54)] leading-tight">{service.title}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-[#f9f7f4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] mb-4">
            Popular <span className="text-[#2d5a4e]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comprehensive aesthetic and dermatology services designed to enhance your natural beauty
            and confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
