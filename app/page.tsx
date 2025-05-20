// app/page.tsx (atau app/(marketing)/page.tsx)
import { Metadata } from 'next';

// Data dummy untuk banner, produk, kategori (gantilah dengan data asli Anda)
const DUMMY_BANNERS = [
  { id: 1, imageUrl: '/images/home/banner/banner_1.webp', alt: 'Promo Gadget Terbaru', link: '/promo/gadget-terbaru' },
  { id: 2, imageUrl: '/images/home/banner/banner_2.webp', alt: 'Gratis Ongkir Seluruh Indonesia', link: '/info/gratis-ongkir' },
];

const DUMMY_FEATURED_CATEGORIES = [
  { id: 1, name: 'Smartphone & Tablet', imageUrl: '/images/categories/smartphone.png', link: '/products/smartphone-tablet' },
  { id: 2, name: 'Audio Device', imageUrl: '/images/categories/audio.png', link: '/products/audio-device' },
  { id: 3, name: 'Wearables', imageUrl: '/images/categories/wearables.png', link: '/products/wearables' },
  { id: 4, name: 'Aksesoris Komputer', imageUrl: '/images/categories/computer-acc.png', link: '/products/aksesoris-komputer' },
];

// Contoh produk (gunakan struktur ProductCard dari jawaban sebelumnya)
const DUMMY_NEW_ARRIVALS = [
  { id: 'p1', name: 'Smartphone Canggih X1', imageUrl: '/images/products/smartphone-x1.jpg', price: 7999000, originalPrice: 8500000, slug: 'smartphone-canggih-x1' },
  { id: 'p2', name: 'Headphone Pro Sound', imageUrl: '/images/products/headphone-pro.jpg', price: 1250000, slug: 'headphone-pro-sound' },
  { id: 'p3', name: 'Smartwatch Active Gen 5', imageUrl: '/images/products/smartwatch-g5.jpg', price: 2899000, slug: 'smartwatch-active-gen-5' },
  { id: 'p4', name: 'Mechanical Keyboard RGB', imageUrl: '/images/products/keyboard-rgb.jpg', price: 950000, originalPrice: 1100000, slug: 'mechanical-keyboard-rgb' },
];

const DUMMY_BEST_SELLERS = [...DUMMY_NEW_ARRIVALS].reverse(); // Contoh saja

const DUMMY_BRANDS = [
    { id: 1, name: 'Brand A', logoUrl: '/images/brands/brand-a.svg', link: '/brands/brand-a'},
    { id: 2, name: 'Brand B', logoUrl: '/images/brands/brand-b.svg', link: '/brands/brand-b'},
    { id: 3, name: 'Brand C', logoUrl: '/images/brands/brand-c.svg', link: '/brands/brand-c'},
    { id: 4, name: 'Brand D', logoUrl: '/images/brands/brand-d.svg', link: '/brands/brand-d'},
    { id: 5, name: 'Brand E', logoUrl: '/images/brands/brand-e.svg', link: '/brands/brand-e'},
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
  // canonical: 'http://dorangadget.com/', // Jika perlu
  // alternates: { // Jika ada versi bahasa lain
  //   languages: {
  //     'en-US': 'http://dorangadget.com/en',
  //   },
  // },
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

export default async function HomePage() {
  // Di dunia nyata, Anda akan fetch data di sini:
  // const banners = await fetchBanners();
  // const featuredCategories = await fetchFeaturedCategories();
  // const newArrivals = await fetchNewArrivals();
  // const bestSellers = await fetchBestSellers();
  // const brands = await fetchBrands();

  // Untuk sekarang, kita gunakan data dummy dari atas
  const banners = DUMMY_BANNERS;
  const featuredCategories = DUMMY_FEATURED_CATEGORIES;
  const newArrivals = DUMMY_NEW_ARRIVALS;
  const bestSellers = DUMMY_BEST_SELLERS;
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
        products={newArrivals}
        viewAllLink="/products?sort=newest"
      />

      <ProductShowcaseSection
        title="Paling Laris Minggu Ini"
        products={bestSellers}
        viewAllLink="/products?sort=bestsellers"
        bgColor="bg-slate-50" // Contoh variasi background
      />

      <ValuePropositionSection />

      <BrandShowcaseSection brands={brands} />

      {/* <TestimonialsSection /> */}
      {/* <BlogTeaserSection /> */}

      <NewsletterSection />
    </main>
  );
}