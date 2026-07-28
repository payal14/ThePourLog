import ProductCard from "./ProductCard";
import { products } from "../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-4">
            Hand-picked products with the best ratings and value.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;