import { testimonials } from '../data/products'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className="py-20 bg-elegant-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen <span className="text-japanese-red">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya han disfrutado de nuestro sushi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-xl hover-scale border border-gray-800"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-soft-gold fill-soft-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              <p className="text-white font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
