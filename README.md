# Sushi Zen - Restaurante Japonés Premium

Sitio web profesional para un restaurante de sushi japonés construido con React, TypeScript y Vite.

## 🚀 Características

- **Diseño Moderno y Premium**: Interfaz elegante con colores negro, blanco, rojo japonés y dorado
- **Responsive**: Optimizado para móviles, tablets y escritorio
- **Menú Interactivo**: Filtrado por categorías (Rolls Premium, Rolls Clásicos, Hot Rolls, Sashimi, Nigiri, Promociones, Bebidas)
- **Integración WhatsApp**: Botón flotante y botones de pedido que abren WhatsApp con mensaje predefinido
- **Galería Visual**: Galería de imágenes con efectos hover
- **Promociones**: Sección de ofertas especiales
- **Testimonios**: Opiniones de clientes satisfechos
- **Contacto**: Información de contacto con mapa de Google Maps
- **Animaciones**: Fade in, hover effects, scroll animations
- **SEO Optimizado**: Meta tags para mejor posicionamiento

## 🛠️ Tecnologías

- **React 18.3.1** - Framework UI
- **TypeScript** - Tipado estático
- **Vite 5.4.10** - Build tool
- **TailwindCSS 3.4.14** - Framework CSS
- **Lucide React** - Iconos

## 📦 Instalación

1. Clona el repositorio o descarga los archivos

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist`.

## 🚀 Despliegue en Vercel

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en "Deploy"

¡Listo! Tu sitio estará en línea en segundos.

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Menu.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Gallery.tsx
│   │   ├── Promotions.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── data/
│   │   └── products.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Cambiar Número de WhatsApp

Edita el número en los siguientes archivos:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/ProductCard.tsx`
- `src/components/Promotions.tsx`
- `src/components/WhatsAppButton.tsx`

Busca: `const whatsappNumber = '56912345678'` y reemplázalo con tu número.

### Modificar Productos

Edita `src/data/products.ts` para agregar, modificar o eliminar productos del menú.

### Cambiar Colores

Edita `tailwind.config.js` para personalizar los colores:

```javascript
theme: {
  extend: {
    colors: {
      'japanese-red': '#DC143C',
      'soft-gold': '#D4AF37',
      'elegant-black': '#1a1a1a',
    },
  },
}
```

### Actualizar Mapa de Google Maps

Edita `src/components/Contact.tsx` y reemplaza el `src` del iframe con tu mapa de Google Maps.

## 📱 Secciones

1. **Header**: Logo, navegación y botón de WhatsApp
2. **Hero**: Imagen de fondo, título impactante y botones CTA
3. **Menú**: Catálogo de productos con filtrado por categorías
4. **Promociones**: Ofertas especiales destacadas
5. **Galería**: Imágenes visuales de los platos
6. **Testimonios**: Opiniones de clientes
7. **Contacto**: Información de contacto y mapa
8. **Footer**: Redes sociales, horarios e información legal
9. **WhatsApp Button**: Botón flotante siempre visible

## 🌐 Imágenes

Las imágenes se cargan desde Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en `src/data/products.ts`

## 📄 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Build para producción
- `npm run lint` - Ejecuta ESLint
- `npm run preview` - Previa del build de producción

## 🎯 Optimizaciones

- **Lazy Loading**: Imágenes optimizadas
- **Code Splitting**: División automática de código
- **Tree Shaking**: Eliminación de código no utilizado
- **CSS Optimizado**: PurgeCSS automático con Tailwind

## 📝 Licencia

Este proyecto es de uso libre para fines comerciales y personales.

## 👨‍💻 Soporte

Para preguntas o soporte, contacta a: contacto@sushizen.cl

---

¡Disfruta tu nuevo sitio web de Sushi Zen! 🍣
