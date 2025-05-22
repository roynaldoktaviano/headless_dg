import ProductCard from "./ProductCard";
import { Produk } from "@/types/product";

export default function ProductList({ products }: { products: Produk[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
