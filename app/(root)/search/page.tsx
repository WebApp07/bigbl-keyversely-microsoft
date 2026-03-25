import ProductCard from "@/components/shared/product/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getAllProducts,
  getAllCategories,
} from "@/lib/actions/product.actions";
import { SearchIcon, FilterIcon, XIcon, StarIcon } from "lucide-react";
import Link from "next/link";

const sortOrders = [
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "lowest" },
  { name: "Price: High to Low", value: "highest" },
  { name: "Highest Rated", value: "rating" },
];

export async function generateMetadata(props: {
  searchParams: Promise<{
    q: string;
    category: string;
  }>;
}) {
  const { q = "all", category = "all" } = await props.searchParams;

  const isQuerySet = q && q !== "all" && q.trim() !== "";
  const isCategorySet =
    category && category !== "all" && category.trim() !== "";

  if (isQuerySet || isCategorySet) {
    return {
      title: `Search ${isQuerySet ? q : ""} ${
        isCategorySet ? `: Category ${category}` : ""
      }`,
    };
  } else {
    return {
      title: "Search Products",
    };
  }
}

const SearchPage = async (props: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const {
    q = "all",
    category = "all",
    sort = "newest",
    page = "1",
  } = await props.searchParams;

  // Construct filter URL
  const getFilterUrl = ({
    c,
    p,
    s,
    r,
    pg,
  }: {
    c?: string;
    p?: string;
    s?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, sort, page };

    if (c) params.category = c;
    if (s) params.sort = s;
    if (pg) params.page = pg;

    return `/search?${new URLSearchParams(params as any).toString()}`;
  };

  const products = await getAllProducts({
    query: q,
    category,
    sort,
    page: Number(page),
  });

  const activeFilters = [
    q !== "all" && q !== "" && `Search: "${q}"`,
    category !== "all" && category !== "" && `Category: ${category}`,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl xl:max-w-[1600px] mx-auto py-8 px-4">
        {/* Header could go here if needed */}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar — can be built later */}

          {/* Products Grid */}
          <div className="lg:col-span-4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-muted-foreground">
                  {products.data.length} products found
                </span>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {filter}
                        <Link
                          href={`/search?${new URLSearchParams({
                            q: q !== "all" ? q : "",
                            category: "all",
                            price: "all",
                            rating: "all",
                            sort,
                            page: "1",
                          } as any)}`}
                          className="hover:text-destructive"
                        >
                          <XIcon className="w-3 h-3" />
                        </Link>
                      </span>
                    ))}
                    <Link
                      href="/search"
                      className="text-sm text-muted-foreground hover:text-destructive"
                    >
                      Clear all
                    </Link>
                  </div>
                )}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <div className="flex gap-1 flex-wrap">
                  {sortOrders.map((s) => (
                    <Link
                      key={s.value}
                      href={getFilterUrl({ s: s.value })}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        sort === s.value
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {products.data.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search filters or browse all categories
                </p>
                <Link href="/search">
                  <Button variant="outline">Clear Filters</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {products.data.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
