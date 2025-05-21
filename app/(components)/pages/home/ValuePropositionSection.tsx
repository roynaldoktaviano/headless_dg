// app/(components)/home/ValuePropositionSection.tsx
// Impor SVG ikon Anda atau gunakan library ikon
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#D61F31]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>;
const TruckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#D61F31]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V15M5.25 18.75m0-10.5H18M5.25 8.25V5.25a2.25 2.25 0 0 1 2.25-2.25h5.25a2.25 2.25 0 0 1 2.25 2.25v3m-9 0h9" /></svg>;
const ChatBubbleLeftRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#D61F31]"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a1.993 1.993 0 0 0-1.055-.318H8.25c-.935 0-1.75-.59-1.998-1.407L5.58 13.549a1.993 1.993 0 0 1-.01-.175V8.511c0-.97.616-1.813 1.5-2.097L6.75 6.25m13.5 2.261V6.25a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v2.261m13.5 0V15M6.75 8.511V15m0 0V8.511" /></svg>;
const TagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#D61F31]"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" /></svg>;


const propositions = [
  { icon: <TruckIcon />, title: 'Gratis Ongkir', description: 'Nikmati pengiriman gratis ke seluruh Indonesia.' },
  { icon: <ShieldCheckIcon />, title: 'Garansi Resmi', description: 'Semua produk dijamin original dan bergaransi resmi.' },
  { icon: <TagIcon />, title: 'Harga Terbaik', description: 'Penawaran harga kompetitif untuk semua gadget.' },
  { icon: <ChatBubbleLeftRightIcon />, title: 'Layanan Pelanggan', description: 'Tim support kami siap membantu Anda 24/7.' },
];

export default function ValuePropositionSection() {
  return (
    <section aria-label="Keunggulan Layanan Kami" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {propositions.map((prop, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{prop.title}</h3>
              <p className="text-sm text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}