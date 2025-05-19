"use client"

import { useEffect, useState } from 'react';

interface ProdukDoran {
  harga: string;
  _embedded: any;
  id: number;
  title: { rendered: string };
  slug: string;
  stok: string;
  description: string;
  short_description: string;
}

export default function ProdukList() {
  const [produk, setProduk] = useState<ProdukDoran[]>([]);
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

  const SkeletonCard = () => (
    <div className="space-y-2 animate-pulse">
      <div className="bg-gray-300 h-20 w-20 rounded" />
      <div className="bg-gray-300 h-4 w-3/4 rounded" />
      <div className="bg-gray-300 h-4 w-1/2 rounded" />
    </div>
  );

  const rupiah = (number: any) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className=" grid grid-cols-5 gap-x-5 gap-y-10 px-10">
      {loading ? (
        Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
      ) : (
        produk.map(p => {
          const featuredImage = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const linkSlug = `/${p.slug}`
          const harga = rupiah(p.harga);

          return (
            <div key={p.id} className="border border-gray-200 px-1 py-2 rounded">
              <div className="space-y-2">
                <div className='px-2 py-1.5 rounded-2xl'>
                  {featuredImage && <img src={featuredImage} alt={p.title.rendered} className="w-40 mx-auto" />}
                </div>
                <p className="font-semibold text-sm text-center">{p.title.rendered}</p>
                <p className="text-orange-500 text-sm mb-3 font-bold text-center">{p.harga == '' ? 'Rp. 0' : harga}</p>
                <a className="bg-orange-500 w-full block text-center text-sm px-3 py-1.5 rounded-sm text-white" href={linkSlug}>{p.stok === '0' ? 'Lihat Selengkapnya' : 'Beli Sekarang'}</a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
