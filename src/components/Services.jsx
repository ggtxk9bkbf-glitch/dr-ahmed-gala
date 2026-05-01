import { useEffect, useRef } from 'react'

const services = [
  { title: 'Facial Aesthetic Treatments', img: 'https://placehold.co/400x300/d4e8e0/2d5a4e?text=Facial+Aesthetics', emoji: '✨' },
  { title: 'Skin Rejuvenation', img: 'https://placehold.co/400x300/e0d4e8/5a2d5a?text=Skin+Rejuvenation', emoji: '🌟' },
  { title: 'Hair Restoration', img: 'https://placehold.co/400x300/d4dce8/2d405a?text=Hair+Restoration', emoji: '💆' },
  { title: 'Anti-Aging Treatments', img: 'https://placehold.co/400x300/e8e0d4/5a4e2d?text=Anti-Aging', emoji: '⏳' },
  { title: 'Acne & Scar Treatment', img: 'https://placehold.co/400x300/e8d4d4/5a2d2d?text=Acne+%26+Scar', emoji: '🩹' },
  { title: 'Fillers & Botox', img: 'https://placehold.co/400x300/d4e8e8/2d5a5a?text=Fillers+%26+Botox', emoji: '💉' },
  { title: 'Laser & Light Therapy', img: 'https://placehold.co/400x300/e8e8d4/5a5a2d?text=Laser+Therapy', emoji: '💡' },
  { title: 'Body Contouring', img: 'https://placehold.co/400x300/e4d4e8/4e2d5a?text=Body+Contouring', emoji: '🏃' },
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
