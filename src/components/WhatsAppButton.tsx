import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const whatsappNumber = '56912345678'
  const message = encodeURIComponent('Hola, quiero hacer un pedido')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}

export default WhatsAppButton
