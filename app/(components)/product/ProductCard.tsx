// app/(components)/ui/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  slug: string; // Untuk URL detail produk
  // Tambahkan properti lain jika perlu (misal: rating, diskon persen)
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link href={`/products/${product.slug}`} className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative w-full aspect-[4/3] overflow-hidden"> {/* Rasio aspek untuk gambar konsisten */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill  // Mengisi parent container, pastikan parent punya 'position: relative'
          style={{ objectFit: 'contain' }} // 'cover' atau 'contain', sesuaikan
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi sizes
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline mb-3">
          <p className="text-xl font-bold text-blue-600">
            Rp{product.price.toLocaleString('id-ID')}
          </p>
          {hasDiscount && product.originalPrice && (
            <p className="ml-2 text-sm text-gray-500 line-through">
              Rp{product.originalPrice.toLocaleString('id-ID')}
            </p>
          )}
        </div>
        {/* Tambahkan info lain seperti rating, stok, dll jika perlu */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
          Lihat Detail
        </button>
      </div>
    </Link>
  );
}