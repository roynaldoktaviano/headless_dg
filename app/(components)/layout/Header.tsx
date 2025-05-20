// app/(components)/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image'; // Optimasi gambar Next.js

const MainNav = [
  { name: 'Home', href: '/' },
  { name: 'Produk', href: '/products' },
  { name: 'Promo', href: '/promo' },
  { name: 'Artikel', href: '/blog' },
  { name: 'Store Kami', href: '/stores' },
];

export default function Header() {
  return (
    <header className="bg-[#D61F31] shadow-md sticky top-0 z-50 py-2">
      <div className="container w-full min-w-full px-20 py-3 grid grid-cols-2 justify-between items-center">
        <div className='flex items-center space-x-4 w-full '>
            {/* Logo */}
            <Link href="/" className="flex items-center justify-between">
            <Image
                src="/images/logo_ww.png" // Ganti dengan path logo Anda
                alt="Doran Gadget Indonesia"
                width={150} // Sesuaikan ukuran
                height={40} // Sesuaikan ukuran
                priority // Prioritaskan load logo
            />
            </Link>
            <div className='ml-5'>
                <a href="/" className='text-white font-bold'>Kategori</a>
            </div>
        </div>

        {/* Navigasi Utama - Desktop */}
        {/* <nav className="hidden md:flex space-x-6 items-center">
          {MainNav.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav> */}

        

        {/* Ikon Akun & Keranjang + Search */}
        <div className="flex items-center space-x-4 ml-auto w-full">
        <div className='w-full'>
                <input type="text" className='bg-white bg-opacity-60 rounded text-sm px-4 py-3 w-full' placeholder='Cari JETE Smartwatch' />
            </div>
          <Link href="/cart" className="text-white hover:text-orange-200">
             {/* Ganti dengan ikon keranjang */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
          <Link href="/profile" className="text-white hover:text-orange-200">
            {/* Ganti dengan ikon profil */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-blue-600">
            {/* Ganti dengan ikon menu (hamburger) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Menu (bisa dibuat terpisah dan di-toggle) */}
    </header>
  );
}