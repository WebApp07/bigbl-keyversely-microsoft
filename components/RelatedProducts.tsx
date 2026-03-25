import ProductCard from "./shared/product/product-card";
import { Product } from "../types/index";

type RelatedProductsProps = {
  products: Product[];
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="mt-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Related Products
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
          {products.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p>No products found.</p>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;
