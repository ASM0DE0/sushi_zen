import { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-japanese-red">Menú</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de rolls premium, sashimi fresco y especialidades
            japonesas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-japanese-red text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
