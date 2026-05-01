const footerLinks = {
  Treatments: [
    'Facial Aesthetics',
    'Skin Rejuvenation',
    'Hair Restoration',
    'Anti-Aging',
    'Fillers & Botox',
    'Laser Therapy',
  ],
  'Quick Links': [
    'About Dr. Gala',
    'Our Services',
    'Before & After',
    'Patient Stories',
    'Contact Us',
    'Book Appointment',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[rgb(45,52,54)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2d5a4e] flex items-center justify-center">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <span className="font-bold text-white text-lg">Dr. Ahmed Gala</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Advanced Aesthetic & Skin Care Clinic in Cairo. Helping patients achieve their best
              appearance through science, expertise, and personalised care since 2010.
            </p>
            <div className="flex items-center gap-3">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-sm hover:bg-[#2d5a4e] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white text-sm mb-5">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Dr. Ahmed Gala Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
