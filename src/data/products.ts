export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

export interface Promotion {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Philadelphia Roll',
    description: 'Salmón, queso crema y palta',
    price: 7990,
    category: 'Rolls Premium',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'California Roll',
    description: 'Cangrejo, palta y pepino',
    price: 6990,
    category: 'Rolls Clásicos',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Spicy Tuna Roll',
    description: 'Atún picante, sriracha y sésamo',
    price: 8490,
    category: 'Hot Rolls',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Dragon Roll',
    description: 'Eel, palta y pepino con salsa teriyaki',
    price: 9990,
    category: 'Rolls Premium',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Salmon Sashimi',
    description: '8 piezas de salmón fresco',
    price: 8990,
    category: 'Sashimi',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Tuna Sashimi',
    description: '8 piezas de atún rojo',
    price: 9490,
    category: 'Sashimi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: 'Salmon Nigiri',
    description: '4 piezas de salmón sobre arroz',
    price: 5990,
    category: 'Nigiri',
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Tuna Nigiri',
    description: '4 piezas de atún sobre arroz',
    price: 6490,
    category: 'Nigiri',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop'
  },
  {
    id: 9,
    name: 'Rainbow Roll',
    description: 'Salmón, atún, palta y camarón',
    price: 10990,
    category: 'Rolls Premium',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 10,
    name: 'Volcano Roll',
    description: 'Salmón, palta y salsa picante',
    price: 9490,
    category: 'Hot Rolls',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop'
  },
  {
    id: 11,
    name: 'Coca Cola',
    description: 'Bebida 500ml',
    price: 1500,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop'
  },
  {
    id: 12,
    name: 'Jugo de Naranja',
    description: 'Jugo natural 500ml',
    price: 2000,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop'
  }
]

export const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Promo Duo',
    description: '40 piezas + 2 bebidas',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Promo Premium',
    description: '60 piezas premium',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Promo Familiar',
    description: '80 piezas + 4 bebidas',
    price: 39990,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop'
  }
]

export const categories = [
  'Todos',
  'Rolls Premium',
  'Rolls Clásicos',
  'Hot Rolls',
  'Sashimi',
  'Nigiri',
  'Promociones',
  'Bebidas'
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=400&fit=crop'
]

export const testimonials = [
  {
    id: 1,
    name: 'María González',
    comment: 'El mejor sushi de la ciudad. Fresco y delicioso, ¡siempre pido aquí!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    comment: 'Excelente servicio y calidad. Los rolls premium son increíbles.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Martínez',
    comment: 'Rápida entrega por WhatsApp. El sashimi es super fresco.',
    rating: 5
  },
  {
    id: 4,
    name: 'Pedro Sánchez',
    comment: 'Las promociones son muy buenas. Ideal para compartir en familia.',
    rating: 4
  }
]
