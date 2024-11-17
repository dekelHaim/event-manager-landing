'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Gallery() {

  const images = [
    { src: '/images/corporate-event.jpg', alt: 'אירוע עסקי מרשים' },
    { src: '/images/wedding-beach.jpg', alt: 'חתונה בחוף הים' },
    { src: '/images/birthday-party.jpg', alt: 'מסיבת יום הולדת צבעונית' },
    { src: '/images/romantic-wedding.jpg', alt: 'חתונה רומנטית בטבע' },
    { src: '/images/bar-mitzvah.jpg', alt: 'בר מצווה מסורתית' },
    { src: '/images/product-launch.jpg', alt: 'אירוע השקת מוצר יוקרתי' },
  ]

  return (
    <section id="gallery" className="py-20 bg-soft-blue">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">גלריית תמונות</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="cursor-pointer object-cover"  // Use object-cover here for styling
                  placeholder="blur"  // Keep the placeholder as is
                  blurDataURL="/placeholder.svg"  // Correct SVG path for placeholder
                />
              </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="mt-4 text-center">{image.alt}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
