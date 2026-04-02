import { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-blush-light shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#topo" className="font-serif text-xl text-charcoal tracking-wide hover:text-blush-dark transition-colors">
          Leticia Batista
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm text-charcoal-soft tracking-wide hover:text-blush-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal-soft"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-px bg-charcoal-soft transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-5 h-px bg-charcoal-soft my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-charcoal-soft transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-blush-light px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-charcoal-soft tracking-wide hover:text-blush-dark transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
