import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const whatsappNumber = '56912345678'

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-elegant-black/70" />
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sushi <span className="text-japanese-red">Zen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Descubre la auténtica experiencia japonesa con nuestros rolls premium, sashimi fresco y
            sabores únicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-soft-gold hover:bg-yellow-600 text-elegant-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Ver Menú
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-japanese-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Pedir Ahora
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero
