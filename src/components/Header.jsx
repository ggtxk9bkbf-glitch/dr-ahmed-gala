import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottomWidth: '1px',
        borderColor: 'rgb(243 244 246)',
        backgroundColor: 'rgb(248 250 249 / 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 16px rgba(45,90,78,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#2d5a4e] flex items-center justify-center">
            <span className="text-white font-bold text-sm">AG</span>
          </div>
          <span className="font-bold text-[#2d5a4e] text-lg tracking-tight">Dr. Ahmed Galal</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[rgb(45,52,54)] hover:text-[#2d5a4e] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+20111333472"
            className="text-sm font-medium text-[#2d5a4e] hover:underline hidden lg:block"
          >
            +20 111 333 7472
          </a>
          <a
            href="#contact"
            className="bg-[#2d5a4e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#234840] transition-colors duration-200"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[rgb(45,52,54)] mb-1.5"></div>
          <div className="w-5 h-0.5 bg-[rgb(45,52,54)] mb-1.5"></div>
          <div className="w-5 h-0.5 bg-[rgb(45,52,54)]"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-[rgb(45,52,54)] hover:text-[#2d5a4e] border-b border-gray-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 bg-[#2d5a4e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  )
}
