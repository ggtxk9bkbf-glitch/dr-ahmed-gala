import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('fade-in-up') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} style={{ opacity: 0 }} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor photo */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#2d5a4e]/8 rounded-2xl"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/team/doctor.jpeg`}
              alt="Dr. Ahmed Gala, MD — Dermatology & Aesthetic Medicine Specialist"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
            {/* Award badge */}
            <div className="absolute -right-4 top-8 bg-[#2d5a4e] text-white rounded-xl p-4 shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs font-medium opacity-90">Years of</p>
              <p className="text-xs font-medium opacity-90">Excellence</p>
            </div>
            {/* Name plate */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
              <p className="font-bold text-[rgb(45,52,54)]">Dr. Ahmed Gala, MD</p>
              <p className="text-sm text-[#2d5a4e] font-medium">Dermatology & Aesthetic Medicine Specialist</p>
              <p className="text-xs text-gray-400 mt-0.5">Member — Egyptian Dermatology Society</p>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
              About the Clinic
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] leading-tight mb-6">
              Dedicated to Your{' '}
              <span className="text-[#2d5a4e] italic">Skin Health</span>{' '}
              &amp; Beauty
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              At Dr. Ahmed Gala Clinic, we believe that looking and feeling your best is a fundamental
              right. Dr. Gala combines deep medical expertise with a genuine passion for aesthetic
              excellence, delivering transformative results across every treatment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong className="text-[rgb(45,52,54)]">Proven Experience:</strong> With over 15 years
              of clinical practice in dermatology and aesthetic medicine, Dr. Gala has helped thousands
              of patients across Cairo achieve radiant, healthy skin.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              <strong className="text-[rgb(45,52,54)]">Comprehensive Care:</strong> From your first
              consultation through every follow-up, our team provides personalized attention and
              evidence-based treatments tailored to your unique skin profile.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🏆', title: 'Board Certified', desc: 'Dermatology & Aesthetic Medicine' },
                { icon: '🔬', title: 'Advanced Tech', desc: 'Medical-grade equipment' },
                { icon: '🌿', title: 'Natural Results', desc: 'Subtle, lasting improvements' },
                { icon: '🤝', title: 'Full Aftercare', desc: 'Ongoing support & follow-up' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-[#f9f7f4] rounded-xl">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[rgb(45,52,54)]">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#2d5a4e] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#234840] transition-colors duration-200"
            >
              Book a Consultation
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
