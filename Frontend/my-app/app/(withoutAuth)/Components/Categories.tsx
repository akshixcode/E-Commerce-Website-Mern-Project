// src/components/customer/Categories.tsx

const categories = [
  "Electronics",
  "Fashion",
  "Shoes",
  "Accessories",
];

export default function Categories() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Categories</h2>

        <p className="mt-2 text-gray-600">
          Browse products by category.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="flex h-40 cursor-pointer items-center justify-center rounded-3xl border bg-gradient-to-br from-indigo-50 to-white text-2xl font-semibold shadow-sm transition hover:shadow-xl"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}