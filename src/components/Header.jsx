import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t('nav_about'),    href: '#about' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_gallery'),  href: '#gallery' },
    { label: t('nav_contact'),  href: '#contact' },
  ]

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

        {/* Right side: language switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLang('en')}
              aria-label="Switch to English"
              className={`text-base px-2 py-0.5 rounded-md transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-white shadow-sm ring-1 ring-[#2d5a4e]/30'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLang('ar')}
              aria-label="Switch to Arabic"
              className={`text-base px-2 py-0.5 rounded-md transition-all duration-200 ${
                lang === 'ar'
                  ? 'bg-white shadow-sm ring-1 ring-[#2d5a4e]/30'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              🇪🇬
            </button>
          </div>

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
            {t('nav_cta')}
          </a>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5">
            <button
              onClick={() => setLang('en')}
              aria-label="Switch to English"
              className={`text-sm px-1.5 py-0.5 rounded-md transition-all duration-200 ${
                lang === 'en' ? 'bg-white shadow-sm' : 'opacity-50'
              }`}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLang('ar')}
              aria-label="Switch to Arabic"
              className={`text-sm px-1.5 py-0.5 rounded-md transition-all duration-200 ${
                lang === 'ar' ? 'bg-white shadow-sm' : 'opacity-50'
              }`}
            >
              🇪🇬
            </button>
          </div>
          <button
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-[rgb(45,52,54)] mb-1.5"></div>
            <div className="w-5 h-0.5 bg-[rgb(45,52,54)] mb-1.5"></div>
            <div className="w-5 h-0.5 bg-[rgb(45,52,54)]"></div>
          </button>
        </div>
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
            {t('nav_cta')}
          </a>
        </div>
      )}
    </header>
  )
}
