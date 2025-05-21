// src/app/page.tsx (atau index.tsx)
'use client';

import { useProducts } from '@/hooks/useProduct';
import ProductList from '../(components)/product/ProductList';

export default function Product() {
  const { products, isLoading } = useProducts();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Katalog Produk</h1>
      {isLoading ? <p>Loading...</p> : <ProductList products={products} />}
    </main>
  );
}
