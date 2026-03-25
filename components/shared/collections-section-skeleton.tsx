// components/shared/collections-skeleton.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCardSkeleton from "@/components/shared/product/product-card-skeleton";

const CollectionsSkeleton = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-8 w-32 mx-auto mb-6 rounded-full" />
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        {/* Collections Skeleton */}
        <div className="space-y-20">
          {Array.from({ length: 4 }).map((_, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Collection Header Skeleton */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-xl" />
                  <div>
                    <Skeleton className="h-8 w-40 mb-2" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </div>
                <Skeleton className="h-10 w-24" />
              </div>

              {/* Products Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, productIndex) => (
                  <ProductCardSkeleton key={productIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="text-center mt-20">
          <Skeleton className="h-14 w-48 mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSkeleton;
