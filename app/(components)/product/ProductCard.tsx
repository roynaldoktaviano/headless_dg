// app/(components)/ui/ProductCard.tsx
import { Produk } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Produk;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.harga && product.harga > product.harga_diskon;
  console.log(product);
  return (
    <Link href={`/products/${product.slug}`} className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative w-full aspect-[4/3] overflow-hidden"> 
        <img
          src={product._embedded?.['wp:featuredmedia']?.[0]?.source_url ? product._embedded['wp:featuredmedia'][0].source_url : 'https://picsum.photos/200'}
          alt={product._embedded?.['wp:featuredmedia']?.[0]?.source_url}
        
          style={{ objectFit: 'cover' }} // 'cover' atau 'contain', sesuaikan
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi sizes
        />
      </div>
      <div className="p-4">
        <h3 className=" text-gray-800 mb-1  group-hover:text-[#D61F31] transition-colors">
          {product.title.rendered}
        </h3>
        <div className="flex flex-col items-baseline mb-3 h-12">
          {hasDiscount && product.harga && (
            <p className=" text-sm text-gray-500 line-through">
              Rp{Number(product.harga).toLocaleString('id-ID')}
            </p>
          )}
          <p className="text-lg  mt-auto text-[#D61F31]">
            Rp{Number(product.harga_diskon).toLocaleString('id-ID')}
          </p>
          
        </div>
        {/* Tambahkan info lain seperti rating, stok, dll jika perlu */}
        <button className="w-full bg-[#D61F31] text-white py-2 px-4 rounded-md hover:bg-[#D61F31] transition-colors text-sm font-medium">
          Lihat Detail
        </button>
      </div>
    </Link>
  );
}