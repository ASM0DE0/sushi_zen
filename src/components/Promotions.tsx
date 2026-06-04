import { promotions } from '../data/products'
import { ShoppingCart } from 'lucide-react'

const Promotions = () => {
  const whatsappNumber = '56912345678'

  return (
    <section id="promotions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Promociones <span className="text-japanese-red">Especiales</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y disfruta del mejor sushi al mejor precio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => {
            const message = encodeURIComponent(
              `Hola, quiero pedir la siguiente promoción: ${promo.title}`
            )
            return (
              <div
                key={promo.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover-scale border border-soft-gold/20"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-japanese-red text-white px-4 py-2 rounded-full font-bold">
                    OFERTA
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-gray-400 mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-soft-gold">
                      ${promo.price.toLocaleString()}
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-japanese-red hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center"
                    >
                      <ShoppingCart size={20} className="mr-2" />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Promotions
