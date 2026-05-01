import { useEffect, useRef } from 'react'
import { handleImageError } from '../utils/imageHelper'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('fade-in-up')
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#f9f7f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div ref={ref} style={{ opacity: 0 }}>
            <p className="text-[#c9a87c] text-sm font-semibold tracking-widest uppercase mb-4">
              Aesthetic Dermatologist &amp; Expert Injector
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              <span className="block font-bold text-[rgb(45,52,54)]">Medical Aesthetics,</span>
              <span className="block font-light italic text-[rgb(45,52,54)]">Precision.</span>
              <span className="block font-bold text-[rgb(45,52,54)]">Natural Results.</span>
            </h1>
            <p className="text-[rgb(100,115,120)] text-lg leading-relaxed mb-8 max-w-xl">
              Aesthetic Dermatology &amp; Advanced Injectables by Dr Ahmed Galal — combining medical
              expertise with artistic vision to enhance natural beauty while maintaining facial harmony.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#2d5a4e] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#234840] transition-colors duration-200 shadow-md"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="border border-[#2d5a4e] text-[#2d5a4e] font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2d5a4e] hover:text-white transition-colors duration-200"
              >
                Our Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-gray-200">
              {[
                { num: '5+', label: 'Years Experience' },
                { num: '5,000+', label: 'Patients Treated' },
                { num: '98%', label: 'Satisfaction Rate' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-[#2d5a4e]">{s.num}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#2d5a4e]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#c9a87c]/20 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/team/doctor.jpeg`}
                alt="Dr. Ahmed Galal — Aesthetic Dermatologist & Expert Injector"
                onError={(e) => handleImageError(e, 'Dr. Ahmed Galal')}
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-gray-500 font-medium">Specialist</p>
                <p className="text-sm font-bold text-[#2d5a4e]">Dr. Ahmed Galal</p>
                <p className="text-xs text-gray-400">Dermatology & Aesthetic Medicine</p>
              </div>
              {/* Floating rating */}
              <div className="absolute top-6 right-6 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs font-semibold text-gray-700">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
