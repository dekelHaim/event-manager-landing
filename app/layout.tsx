import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'

const heebo = Heebo({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'איתן - מתכנן אירועים',
  description: 'הפקת אירועים מושלמים עם איתן',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}