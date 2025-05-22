// app/(components)/layout/Footer.tsx
import Link from 'next/link';
import NewsletterSection from '../pages/home/NewsletterSection';

export default function Footer() {
  return (
    <>
    <NewsletterSection />
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Kolom 1: Tentang Kami */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Doran Gadget</h5>
            <p className="text-sm mb-3">
              Toko online gadget terlengkap dan terpercaya di Indonesia.
            </p>
            <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">Tentang Kami</Link>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Link Cepat</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">Semua Produk</Link></li>
              <li><Link href="/categories" className="hover:text-blue-400 transition-colors">Kategori</Link></li>
              <li><Link href="/promo" className="hover:text-blue-400 transition-colors">Promo Spesial</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Hubungi Kami</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Pelanggan */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Layanan</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping" className="hover:text-blue-400 transition-colors">Info Pengiriman</Link></li>
              <li><Link href="/returns" className="hover:text-blue-400 transition-colors">Kebijakan Retur</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Media Sosial */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Hubungi Kami</h5>
            <p className="text-sm mb-1">Email: support@dorangadget.com</p>
            <p className="text-sm mb-3">Telepon: (021) 123-4567</p>
            <h5 className="text-lg font-semibold text-white mb-2 mt-4">Ikuti Kami</h5>
            <div className="flex space-x-3">
              {/* Ganti dengan ikon media sosial Anda */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">FB</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">IG</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">TW</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Doran Gadget. All rights reserved.</p>
        </div>
      </div>
    </footer></>
  );
}