// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Pastikan ini 'http' atau 'https' sesuai URL LocalWP Anda
        hostname: 'lean-act.localsite.io',
        port: '', // Kosongkan jika tidak ada port spesifik (biasanya untuk http/https standar)
        pathname: '/wp-content/uploads/**', // Opsional, untuk lebih spesifik path gambarnya
      },
      {
        protocol: 'https', // Pastikan ini 'http' atau 'https' sesuai URL LocalWP Anda
        hostname: 'picsum.photos',
        port: '', // Kosongkan jika tidak ada port spesifik (biasanya untuk http/https standar)
        
      },
    ],

  },

};

export default nextConfig; 