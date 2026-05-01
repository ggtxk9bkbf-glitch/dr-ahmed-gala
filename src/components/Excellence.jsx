import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '👨‍⚕️',
    title: 'Expert Doctor',
    desc: 'Dr. Ahmed Gala brings 15+ years of specialised experience in dermatology and aesthetic medicine, with hundreds of successful treatments.',
  },
  {
    icon: '🔬',
    title: 'Advanced Technology',
    desc: 'We invest in the latest medical-grade equipment and clinically proven technologies to deliver superior, lasting results.',
  },
  {
    icon: '🩺',
    title: 'Comprehensive Care',
    desc: 'From detailed initial consultation through treatment and full aftercare follow-up — we are with you at every step of your journey.',
  },
  {
    icon: '💊',
    title: 'Personalised Treatments',
    desc: 'No two patients are alike. Every treatment plan is tailored specifically to your skin profile, goals, and lifestyle.',
  },
]

export default function Excellence() {
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
    <section className="bg-[#f9f7f4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
            Our Difference
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] mb-4">
            Excellence in <span className="text-[#2d5a4e]">Every Aspect</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We hold ourselves to the highest standards so that every patient experiences the best
            possible care and outcomes.
          </p>
        </div>

        <div
          ref={ref}
          style={{ opacity: 0 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-[#f0f7f4] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                {f.icon}
              </div>
              <h3 className="font-bold text-[rgb(45,52,54)] mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
