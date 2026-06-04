import { galleryImages } from '../data/products'

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-elegant-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra <span className="text-japanese-red">Galería</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre la belleza y frescura de nuestros platos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl hover-scale cursor-pointer group"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
