import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Menú', href: '#menu' },
    { name: 'Promociones', href: '#promotions' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' }
  ]

  const whatsappNumber = '56912345678'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-elegant-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-japanese-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SZ</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Sushi <span className="text-japanese-red">Zen</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-soft-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-japanese-red hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-soft-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-japanese-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-center transition-all duration-300"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
