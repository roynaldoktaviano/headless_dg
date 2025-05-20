// app/(components)/home/FeaturedCategoriesSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
}

interface FeaturedCategoriesSectionProps {
  categories: Category[];
}

export default function FeaturedCategoriesSection({ categories }: FeaturedCategoriesSectionProps) {
  return (
    <section aria-labelledby="featured-categories-title" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 id="featured-categories-title" className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Jelajahi Kategori Unggulan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group block text-center p-3 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                    fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}