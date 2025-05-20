// app/(components/home/BrandShowcaseSection.tsx)
import Image from 'next/image';
import Link from 'next/link';

interface Brand {
    id: number;
    name: string;
    logoUrl: string;
    link: string;
}

interface BrandShowcaseSectionProps {
    brands: Brand[];
}

export default function BrandShowcaseSection({ brands }: BrandShowcaseSectionProps) {
    if (!brands || brands.length === 0) {
        return null;
    }

    return (
        <section aria-labelledby="featured-brands-title" className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 id="featured-brands-title" className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                    Brand Terkemuka
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 items-center">
                    {brands.map((brand) => (
                        <Link key={brand.id} href={brand.link} className="group flex justify-center items-center p-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                            <div className="relative h-12 w-24 md:h-16 md:w-32"> {/* Sesuaikan ukuran logo */}
                                <Image
                                    src={brand.logoUrl}
                                    alt={`${brand.name} logo`}
                                    fill    
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 640px) 20vw, 15vw"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}