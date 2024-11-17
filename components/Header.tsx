import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white bg-opacity-90 shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-semibold">אירועים מושלמים</div>
        <ul className="flex space-x-4 space-x-reverse">
          <li><Link href="#about" className="hover:text-primary transition-colors">עלי</Link></li>
          <li><Link href="#events" className="hover:text-primary transition-colors">האירועים שלי</Link></li>
          <li><Link href="#gallery" className="hover:text-primary transition-colors">גלריית תמונות</Link></li>
          <li><Link href="#testimonials" className="hover:text-primary transition-colors">ממליצים</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition-colors">יצירת קשר</Link></li>
        </ul>
        <Button asChild>
          <Link href="#contact">צור קשר</Link>
        </Button>
      </nav>
    </header>
  )
}