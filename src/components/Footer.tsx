import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-japanese-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SZ</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Sushi <span className="text-japanese-red">Zen</span>
              </span>
            </div>
            <p className="text-gray-400">
              El mejor sushi japonés con ingredientes frescos y recetas auténticas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-soft-gold" />
                <span>Lunes a Viernes: 12:00 - 22:00</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-soft-gold" />
                <span>Sábados: 12:00 - 23:00</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-soft-gold" />
                <span>Domingos: 13:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-soft-gold" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-soft-gold" />
                <span>contacto@sushifusion.cl</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-soft-gold" />
                <span>Av. Providencia 1234, Santiago</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-japanese-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-japanese-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-japanese-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sushi Zen. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
