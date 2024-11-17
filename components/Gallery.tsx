'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Gallery() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const images = [
    { src: '/images/corporate-event.jpg', alt: 'אירוע עסקי מרשים' },
    { src: '/images/wedding-beach.jpg', alt: 'חתונה בחוף הים' },
    { src: '/images/birthday-party.jpg', alt: 'מסיבת יום הולדת צבעונית' },
    { src: '/images/romantic-wedding.jpg', alt: 'חתונה רומנטית בטבע' },
    { src: '/images/bar-mitzvah.jpg', alt: 'בר מצווה מסורתית' },
    { src: '/images/product-launch.jpg', alt: 'אירוע השקת מוצר יוקרתי' },
  ];

  const openFullscreen = useCallback((src: string) => {
    setFullscreenImage(src);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreenImage(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <section id="gallery" className="py-20 bg-soft-blue">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">גלריית תמונות</h2>

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={16}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              grid: { rows: 2 },
            },
            768: {
              slidesPerView: 3,
              grid: { rows: 1 },
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={() => openFullscreen(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="cursor-pointer object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full">
            <Image
              src={fullscreenImage}
              alt="Full screen image"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={closeFullscreen}
              aria-label="Close fullscreen image"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}