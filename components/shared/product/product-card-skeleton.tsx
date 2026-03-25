// components/shared/product/product-card-skeleton.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        {/* Image Skeleton */}
        <Skeleton className="aspect-video w-full rounded-t-lg" />
        
        {/* Content Skeleton */}
        <div className="p-4 space-y-3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-4/5" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
