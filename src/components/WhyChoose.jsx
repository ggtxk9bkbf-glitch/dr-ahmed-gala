import { useState, useEffect, useRef } from 'react'

const tabs = [
  {
    label: 'Aesthetic Treatments',
    cards: [
      {
        icon: '✨',
        title: 'Anti-Aging Treatments',
        desc: 'Reduce wrinkles and fine lines with advanced botulinum toxin and collagen stimulators.',
        price: 'From 800 EGP',
        tag: 'Popular',
      },
      {
        icon: '🎨',
        title: 'Pigmentation & Tone Correction',
        desc: 'Even skin tone and correct dark spots using laser and chemical peel protocols.',
        price: 'From 600 EGP',
        tag: 'Recommended',
      },
      {
        icon: '💫',
        title: 'Face Rejuvenation',
        desc: 'Restore youthful glow through PRP, micro-needling, and bio-revitalisation.',
        price: 'From 1,200 EGP',
        tag: '',
      },
      {
        icon: '💉',
        title: 'Facial Contouring & Non-Surgical Enhancements',
        desc: 'Sculpt and define facial features with precision dermal filler placement.',
        price: 'From 1,500 EGP',
        tag: '',
      },
      {
        icon: '💋',
        title: 'Lip Enhancement',
        desc: 'Achieve natural-looking volume and definition with hyaluronic acid lip fillers.',
        price: 'From 900 EGP',
        tag: 'New',
      },
      {
        icon: '🌿',
        title: 'Acne Scar Treatment',
        desc: 'Laser resurfacing and micro-needling to significantly reduce acne scarring.',
        price: 'From 1,000 EGP',
        tag: '',
      },
    ],
  },
  {
    label: 'Hair Restoration',
    cards: [
      {
        icon: '💆',
        title: 'Hair Restoration — PRP',
        desc: 'Platelet-Rich Plasma therapy to stimulate natural hair regrowth and thickness.',
        price: 'From 1,800 EGP',
        tag: 'Popular',
      },
      {
        icon: '🌱',
        title: 'Scalp Treatment',
        desc: 'Deep nourishment and medical-grade scalp therapy for healthier hair follicles.',
        price: 'From 700 EGP',
        tag: '',
      },
      {
        icon: '💊',
        title: 'Hair Loss Consultation',
        desc: 'Comprehensive diagnosis and personalised treatment plan for hair loss conditions.',
        price: 'From 400 EGP',
        tag: 'Recommended',
      },
    ],
  },
  {
    label: 'Skin Care',
    cards: [
      {
        icon: '🔬',
        title: 'Laser & Light Therapy',
        desc: 'Advanced laser treatments targeting pigmentation, vascular lesions, and texture.',
        price: 'From 1,100 EGP',
        tag: 'Popular',
      },
      {
        icon: '🩹',
        title: 'Acne Management',
        desc: 'Medical-grade acne treatment combining chemical peels and topical protocols.',
        price: 'From 500 EGP',
        tag: '',
      },
      {
        icon: '🌟',
        title: 'HydraFacial & Deep Cleansing',
        desc: 'Deeply cleanse, exfoliate, and hydrate your skin in a single relaxing session.',
        price: 'From 800 EGP',
        tag: 'New',
      },
    ],
  },
]

const tagColors = {
  Popular: 'bg-[#2d5a4e] text-white',
  Recommended: 'bg-[#c9a87c] text-white',
  New: 'bg-blue-500 text-white',
}

function ServiceCard({ card }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('fade-in-up') },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
    >
      <div className="w-12 h-12 bg-[#f0f7f4] rounded-xl flex items-center justify-center text-2xl">
        {card.icon}
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-[rgb(45,52,54)] text-sm leading-snug">{card.title}</h3>
        {card.tag && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${tagColors[card.tag] || 'bg-gray-100 text-gray-600'}`}>
            {card.tag}
          </span>
        )}
      </div>
      <p className="text-gray-500 text-xs leading-relaxed flex-1">{card.desc}</p>
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="text-xs font-semibold text-[#2d5a4e]">{card.price}</span>
        <button className="text-xs font-semibold text-[#2d5a4e] border border-[#2d5a4e] px-3 py-1.5 rounded-lg hover:bg-[#2d5a4e] hover:text-white transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
            Our Treatments
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] mb-4">
            Why Choose <span className="text-[#2d5a4e] italic">Dr. Ahmed Gala</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every treatment is crafted around your goals — from the first consultation to your final result.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? 'bg-[#2d5a4e] text-white shadow-md'
                  : 'bg-[#f0f7f4] text-[#2d5a4e] hover:bg-[#d4e8e0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          key={activeTab}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {tabs[activeTab].cards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
