// app/(components)/home/ProductShowcaseSection.tsx
import Link from 'next/link';
import ProductCard from '../../product/ProductCard';

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
  products: Product[];
  viewAllLink?: string;
  bgColor?: string; // Opsional untuk variasi background
}

export default function ProductShowcaseSection({
  title,
  products,
  viewAllLink,
  bgColor = 'bg-white',
}: ProductShowcaseSectionProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`product-showcase-${title.toLowerCase().replace(/\s+/g, '-')}`} className={`py-12 md:py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 id={`product-showcase-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          {viewAllLink && (
            <Link href={viewAllLink} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Lihat Semua &rarr;
            </Link>
          )}
        </div>
        {/* Untuk UI/UX yang lebih baik, gunakan carousel di mobile dan grid di desktop */}
        {/* Contoh sederhana menggunakan grid: */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}