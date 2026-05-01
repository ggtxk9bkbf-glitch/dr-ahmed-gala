import { useState, useEffect, useRef } from 'react'

const treatments = [
  'Facial Aesthetic Treatments',
  'Skin Rejuvenation',
  'Hair Restoration',
  'Anti-Aging Treatments',
  'Acne & Scar Treatment',
  'Fillers & Botox',
  'Laser & Light Therapy',
  'Body Contouring',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a87c] text-xs font-bold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(45,52,54)] mb-4">
            Let's Start Your{' '}
            <span className="text-[#2d5a4e] italic">Transformation</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Book a consultation or reach out directly — our team will get back to you promptly.
          </p>
        </div>

        <div ref={ref} style={{ opacity: 0 }} className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[#f9f7f4] rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#2d5a4e] mb-2">Request Received!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#2d5a4e] underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a4e]/30 focus:border-[#2d5a4e] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+20 XXX XXX XXXX"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a4e]/30 focus:border-[#2d5a4e] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a4e]/30 focus:border-[#2d5a4e] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Treatment</label>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a4e]/30 focus:border-[#2d5a4e] transition-all text-gray-600"
                  >
                    <option value="">Select a treatment...</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message / Notes</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your concerns or questions..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a4e]/30 focus:border-[#2d5a4e] transition-all resize-none"
                  />
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#2d5a4e] text-white font-semibold py-3.5 rounded-xl hover:bg-[#234840] transition-colors duration-200"
                  >
                    Book Consultation
                  </button>
                  <a
                    href="tel:+20XXXXXXXXXX"
                    className="flex-1 border border-[#2d5a4e] text-[#2d5a4e] font-semibold py-3.5 rounded-xl text-center hover:bg-[#f0f7f4] transition-colors duration-200 text-sm"
                  >
                    📞 Call Now
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-xl text-[rgb(45,52,54)] mb-2">Get in Touch</h3>
              <p className="text-gray-500 text-sm">
                We'd love to hear from you. Our friendly team is available during clinic hours to answer
                all your questions.
              </p>
            </div>

            {[
              {
                icon: '📍',
                title: 'Clinic Address',
                lines: ['Dr. Ahmed Gala Clinic', '15 Tahrir Square, Dokki', 'Cairo, Egypt'],
              },
              {
                icon: '📞',
                title: 'Phone',
                lines: ['+20 10 XXXX XXXX', '+20 2 XXXX XXXX'],
              },
              {
                icon: '✉️',
                title: 'Email',
                lines: ['info@drahemedgala.com', 'appointments@drahemedgala.com'],
              },
              {
                icon: '🕐',
                title: 'Opening Hours',
                lines: ['Saturday – Thursday: 10:00am – 8:00pm', 'Friday: Closed'],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-[#f9f7f4] rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-[#2d5a4e] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[rgb(45,52,54)] mb-1">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              <p className="text-sm font-semibold text-gray-600">Follow Us:</p>
              {['📘 Facebook', '📸 Instagram', '🐦 Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-medium text-[#2d5a4e] bg-[#f0f7f4] px-3 py-1.5 rounded-lg hover:bg-[#d4e8e0] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
