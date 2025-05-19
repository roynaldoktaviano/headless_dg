import { Product } from "@/types/product";
import { link } from "fs";

const rupiah = (number: any) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

export default function ProductCard({ product }: { product: Product }) {
    const featuredImage = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const linkSlug = `/product/${product.slug}`
    const harga = rupiah(product.harga);
  return (
    <div className="rounded-xl border border-gray-200 p-4 transition">
      <img src={featuredImage} alt={product.title.rendered} className="w-full h-48 object-cover rounded-md" />
      <h2 className="font-semibold text-center mt-2">{product.title.rendered}</h2>
      <p className="text-sm text-center text-amber-500 mb-3 mt-2">{harga}</p>
      <a className="bg-orange-500 shadow hover:shadow-md transition-all w-full block text-center text-sm px-3 py-1.5 rounded-sm text-white" href={linkSlug}>{product.stok === '0' ? 'Lihat Selengkapnya' : 'Beli Sekarang'}</a>
    </div>
  );
}

