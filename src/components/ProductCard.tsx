import { Product } from '../data/products'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappNumber = '56912345678'
  const message = encodeURIComponent(
    `Hola, quiero pedir el siguiente producto: ${product.name}`
  )

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover-scale transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-japanese-red text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-soft-gold">${product.price.toLocaleString()}</span>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-japanese-red hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center text-sm"
          >
            <ShoppingCart size={16} className="mr-2" />
            Pedir
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
