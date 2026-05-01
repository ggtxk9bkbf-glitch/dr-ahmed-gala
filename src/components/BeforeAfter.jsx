import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL
const before = `${BASE}images/before-after/before1.jpg`
const after = `${BASE}images/before-after/after1.jpg`

const results = [
  { label: 'Lip Fillers — Natural Lip Enhancement', sub: 'Hyaluronic Acid Fillers · 2 Weeks', before, after },
  { label: 'Full Face Fillers — Facial Rejuvenation', sub: 'Multi-Area Dermal Fillers · Immediate', before, after },
  { label: 'Lip Fillers — Subtle Volume & Definition', sub: 'Lip Augmentation · Precision Placement', before, after },
  { label: 'Full Face Enhancement (Male)', sub: 'Natural Masculine Facial Contouring', before, after },
]

export default function BeforeAfter() {
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
    <section id="results" className="bg-[#f9f7f4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
            Real Transformations
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] mb-4">
            Before &amp; After{' '}
            <span className="text-[#2d5a4e]">Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See the real difference our treatments make — honest results from actual patients at
            Dr. Ahmed Gala Clinic.
          </p>
        </div>

        <div
          ref={ref}
          style={{ opacity: 0 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {results.map((r) => (
            <div key={r.label} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={r.before} alt={`Before — ${r.label}`} className="w-full object-cover" />
                  <span className="absolute top-2 left-2 bg-gray-700/80 text-white text-xs font-bold px-2 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <img src={r.after} alt={`After — ${r.label}`} className="w-full object-cover" />
                  <span className="absolute top-2 left-2 bg-[#2d5a4e]/90 text-white text-xs font-bold px-2 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="font-semibold text-sm text-[rgb(45,52,54)] leading-snug">{r.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{r.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
