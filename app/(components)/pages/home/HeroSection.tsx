// app/(components)/home/HeroSection.tsx
"use client"; // Jika menggunakan interaksi client-side seperti carousel

import Image from 'next/image';
import Link from 'next/link';
// Anda mungkin butuh library carousel seperti 'swiper' atau 'embla-carousel-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation'; // Jika menggunakan navigation
import 'swiper/css/pagination'; // <--- TAMBAHKAN ATAU PASTIKAN BARIS INI ADA
interface Banner {
  id: number;
  imageUrl: string;
  alt: string;
  link: string;
}



interface HeroSectionProps {
  banners: Banner[];
}


export default function HeroSection({ banners }: HeroSectionProps) {
    
  

  if (!banners || banners.length === 0) {
    return null; // Atau tampilkan placeholder jika tidak ada banner
  }

  return (
    <section aria-label="Promosi Utama" className="relative w-full h-[300px] md:h-[400px] lg:h-fit overflow-hidden">
      {/* Jika menggunakan Swiper: */}
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        // className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link} className="block w-full h-full relative">
              <Image
                src={banner.imageUrl}
                alt={banner.alt}
                fill={false}
                width={1920} // Atur sesuai ukuran gambar asli
                height={1080} // Atur sesuai ukuran gambar asli
                style={{ objectFit: 'contain', position: 'static' }}
                priority={banner.id === banners[0].id} // Prioritaskan gambar pertama
                sizes="100vw"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-bold text-white max-w-xl">
                  {banner.alt} 
                </h2>
              </div> */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> 

      {/* Alternatif: Banner Statis (jika hanya satu atau tanpa carousel) */}
      {/* <Link href={banners[0].link} className="block w-full h-full relative">
        <Image
          src={banners[0].imageUrl}
          alt={banners[0].alt}
          width={1920} // Atur sesuai ukuran gambar asli
          height={1080} // Atur sesuai ukuran gambar asli
            fill={false}
          style={{ objectFit: 'contain', position: 'static' }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
        
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-2xl leading-tight">
        
            {banners[0].alt}
          </h2>
          <p className="mt-2 text-lg text-gray-200 drop-shadow-md max-w-xl hidden md:block">
            Dapatkan penawaran eksklusif untuk gadget impianmu.
          </p>
          <div className="mt-6">
            <span className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors">
              Lihat Promo
            </span>
          </div>
        </div>
      </Link> */}
    </section>
  );
}