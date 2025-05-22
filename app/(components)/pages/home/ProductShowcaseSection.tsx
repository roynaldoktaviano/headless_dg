// app/(components)/home/ProductShowcaseSection.tsx
"use client";
import Link from 'next/link';
import ProductCard from '../../product/ProductCard';
import { Produk } from '@/types/product';
import { useEffect, useState } from 'react';

// Asumsikan Product interface sama dengan yang di ProductCard
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  slug: string;
}

interface ProductShowcaseSectionProps {
  title: string;
  viewAllLink?: string;
  bgColor?: string; // Opsional untuk variasi background
}

export default function ProductShowcaseSection({
  title,
  viewAllLink,
  bgColor = 'bg-white',
}: ProductShowcaseSectionProps) {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      fetch('/api/produk-doran')
        .then(res => {
          if (!res.ok) throw new Error('Gagal fetch data');
          return res.json();
        })
        .then(data => setProduk(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
  
  if (!produk || produk.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`product-showcase-${title.toLowerCase().replace(/\s+/g, '-')}`} className={`py-12 md:py-16 ${bgColor}`}>
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 id={`product-showcase-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          {viewAllLink && (
            <Link href={viewAllLink} className="text-[#D61F31] hover:text-[#D61F31] font-semibold transition-colors">
              Lihat Semua &rarr;
            </Link>
          )}
        </div>
        {/* Untuk UI/UX yang lebih baik, gunakan carousel di mobile dan grid di desktop */}
        {/* Contoh sederhana menggunakan grid: */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {produk.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}