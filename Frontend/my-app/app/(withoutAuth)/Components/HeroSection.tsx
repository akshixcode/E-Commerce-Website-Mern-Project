// src/components/customer/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Modern Ecommerce Platform
          </span>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Discover Your Perfect Shopping Experience
          </h1>

          <p className="max-w-lg text-lg text-gray-600">
            Explore premium products with seamless shopping, secure checkout,
            and fast delivery.
          </p>

          <div className="flex gap-4">
            <Link
              href="/"
              className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              Shop Now
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative h-[450px] w-[350px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="product"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}