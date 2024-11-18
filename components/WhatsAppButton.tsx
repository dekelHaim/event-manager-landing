'use client';

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/972522442349"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 flex items-center gap-2"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline-block">צור קשר</span>
    </a>
  )
}
