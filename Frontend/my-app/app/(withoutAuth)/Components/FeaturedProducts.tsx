// src/components/customer/FeaturedProducts.tsx

import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    title: "Premium Watch",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    title: "Modern Headphones",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    title: "Stylish Shoes",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "Smartphone",
    price: 25999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Featured Products</h2>

          <p className="mt-2 text-gray-600">
            Explore our most popular products.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}