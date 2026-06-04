import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos <span className="text-japanese-red">Hoy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aquí para atenderte. ¡Pide tu sushi favorito ahora!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-japanese-red rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                <p className="text-gray-400">Av. Providencia 1234, Santiago, Chile</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-japanese-red rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                <p className="text-gray-400">+56 9 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-japanese-red rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Correo</h3>
                <p className="text-gray-400">contacto@sushizen.cl</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-japanese-red rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Horario</h3>
                <p className="text-gray-400">
                  Lunes a Viernes: 12:00 - 22:00
                  <br />
                  Sábados: 12:00 - 23:00
                  <br />
                  Domingos: 13:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1234567890123!2d-70.65000000000001!3d-33.45000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiUyA3MMKwMzknMDAuMCJX!5e0!3m2!1sen!2scl!4v1234567890123!5m2!1sen!2scl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sushi Fusion Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
