// app/(components)/home/NewsletterSection.tsx
"use client"; // Karena ada form handling

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    // TODO: Implement newsletter subscription logic (e.g., call API route)
    if (!email || !email.includes('@')) {
        setMessage('Masukkan alamat email yang valid.');
        return;
    }
    console.log('Subscribing email:', email);
    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessage('Terima kasih telah berlangganan newsletter kami!');
    setEmail('');
  };

  return (
    <section aria-labelledby="newsletter-title" className="py-12 md:py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 id="newsletter-title" className="text-2xl md:text-3xl font-bold mb-3">
          Jangan Lewatkan Info & Promo Terbaru!
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-blue-100">
          Daftar untuk mendapatkan update mingguan, penawaran eksklusif, dan berita gadget terkini langsung ke inbox Anda.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
          <label htmlFor="email-newsletter" className="sr-only">Alamat Email</label>
          <input
            type="email"
            id="email-newsletter"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan alamat email Anda"
            required
            className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Berlangganan
          </button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </section>
  );
}