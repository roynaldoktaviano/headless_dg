// app/page.tsx (atau app/(marketing)/page.tsx)

import { Metadata } from 'next';

// Data dummy untuk banner, produk, kategori (gantilah dengan data asli Anda)
const DUMMY_BANNERS = [
  { id: 1, imageUrl: '/images/home/banner/banner_1.webp', alt: 'Promo Gadget Terbaru', link: '/promo/gadget-terbaru' },
  { id: 2, imageUrl: '/images/home/banner/banner_2.webp', alt: 'Gratis Ongkir Seluruh Indonesia', link: '/info/gratis-ongkir' },
];

const DUMMY_FEATURED_CATEGORIES = [
  { id: 1, name: 'Smartphone & Tablet', imageUrl: '/images/handphone.png', link: '/products/smartphone-tablet' },
  { id: 2, name: 'Audio Device', imageUrl: '/images/speaker.png', link: '/products/audio-device' },
  { id: 3, name: 'Wearables', imageUrl: '/images/smart-watch.png', link: '/products/wearables' },
  { id: 4, name: 'Aksesoris Komputer', imageUrl: '/images/com_acc.png', link: '/products/aksesoris-komputer' },
];



const DUMMY_BRANDS = [
    { id: 1, name: 'JETE', logoUrl: '/images/jete.png', link: '/brands/brand-a'},
    { id: 2, name: 'DJI', logoUrl: '/images/dji.png', link: '/brands/brand-b'},
    { id: 3, name: 'GARMIN', logoUrl: '/images/garmin.png', link: '/brand/garmin'},
    { id: 4, name: 'Insta360', logoUrl: '/images/insta360.svg', link: '/brands/brand-d'},
    { id: 5, name: 'Coros', logoUrl: '/images/coros.png', link: '/brands/brand-e'},
    { id: 6, name: 'GoPro', logoUrl: '/images/gopro.png', link: '/brands/brand-e'},
];

export const metadata: Metadata = {
  title: 'Doran Gadget: Toko Gadget Online Terlengkap & Terpercaya',
  description: 'Temukan berbagai gadget terbaru dan original dengan harga terbaik. Smartphone, Audio, Wearables, Aksesoris Komputer, dan lainnya. Garansi resmi, gratis ongkir, dan cicilan 0%.',
  keywords: 'gadget, smartphone, toko online gadget, audio, wearables, aksesoris komputer, promo gadget',
  openGraph: {
    title: 'Doran Gadget: Toko Gadget Online Terlengkap & Terpercaya',
    description: 'Belanja gadget mudah, aman, dan nyaman di Doran Gadget.',
    url: 'http://dorangadget.com/', // Ganti dengan URL website Anda
    siteName: 'Doran Gadget',
    images: [
      {
        url: 'http://dorangadget.com/images/og-image.jpg', // Ganti dengan URL gambar Open Graph Anda
        width: 1200,
        height: 630,
        alt: 'Doran Gadget - Toko Online Gadget',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doran Gadget: Toko Gadget Online Terlengkap & Terpercaya',
    description: 'Temukan berbagai gadget terbaru dan original dengan harga terbaik.',
    images: ['http://dorangadget.com/images/twitter-image.jpg'], // Ganti dengan URL gambar Twitter Anda
  },
};

// app/page.tsx (lanjutan)
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './(components)/product/ProductCard'; // Sesuaikan path jika berbeda

// Impor komponen-komponen section (akan kita buat di bawah)
import HeroSection from './(components)/pages/home/HeroSection';
import FeaturedCategoriesSection from './(components)/pages/home/FeaturedCategoriesSection';
import ProductShowcaseSection from './(components)/pages/home/ProductShowcaseSection';
import ValuePropositionSection from './(components)/pages/home/ValuePropositionSection';
import BrandShowcaseSection from './(components)/pages/home/BrandShowcaseSection';
import NewsletterSection from './(components)/pages/home/NewsletterSection';
// import TestimonialsSection from './(components)/home/TestimonialsSection'; // Opsional
// import BlogTeaserSection from './(components)/home/BlogTeaserSection'; // Opsional

export default  function HomePage() {
  


 
  // const brands = await fetchBrands();

  // Untuk sekarang, kita gunakan data dummy dari atas
  const banners = DUMMY_BANNERS;
  const featuredCategories = DUMMY_FEATURED_CATEGORIES;
  // const newArrivals = DUMMY_NEW_ARRIVALS;
  // const bestSellers = DUMMY_BEST_SELLERS;
  const brands = DUMMY_BRANDS;

  return (
    <main className="min-h-screen">
      {/* SEO: h1 utama sebaiknya ada di sini atau di HeroSection */}
      <h1 className="sr-only">
        Doran Gadget: Toko Gadget Online Terlengkap, Terbaru, dan Terpercaya di Indonesia
      </h1>

      <HeroSection banners={banners} />

      <FeaturedCategoriesSection categories={featuredCategories} />

      <ProductShowcaseSection
        title="Produk Terbaru Untukmu"
        viewAllLink="/products?sort=newest"
      />

      <ProductShowcaseSection
        title="Paling Laris Minggu Ini"
        viewAllLink="/products?sort=bestsellers"
        bgColor="bg-slate-50" // Contoh variasi background
      />

      <ValuePropositionSection />

      <BrandShowcaseSection brands={brands} />

      {/* <TestimonialsSection /> */}
      {/* <BlogTeaserSection /> */}

      {/* <NewsletterSection /> */}
    </main>
  );
}