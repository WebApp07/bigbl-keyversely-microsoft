// components/shared/collections-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/lib/actions/product.actions";
import { getProductsByCategory } from "@/lib/actions/product.actions";
import ProductCard from "@/components/shared/product/product-card";
import { TagsIcon, ArrowRightIcon, StarIcon, ZapIcon } from "lucide-react";

const CollectionsSection = async () => {
  const categories = await getAllCategories();
  const topCategories = categories.slice(0, 15);

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <ZapIcon className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Popular Collections
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated digital products across different categories
          </p>
        </div>

        {/* Collections with Products */}
        <div className="space-y-20">
          {topCategories.map(async (category) => {
            const products = await getProductsByCategory(category.category, 8);

            return (
              <div key={category.category} className="space-y-8">
                {/* Collection Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-lg">
                      <TagsIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-gray-600 bg-clip-text text-transparent">
                        {category.category}
                      </h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <span className="flex items-center">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {products.length}+ products
                        </span>
                        • {category._count} total items
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/search?category=${encodeURIComponent(category.category)}`}
                  >
                    <Button variant="outline" className="gap-2 group" size="lg">
                      View All
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
