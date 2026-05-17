
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="mt-1 text-xl font-bold text-indigo-600">
            ₹{price.toLocaleString()}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl bg-black py-3 text-white transition hover:bg-gray-800">
            Add To Cart
          </button>

          <Link
            href={`/`}
            className="rounded-xl border px-4 py-3 transition hover:bg-gray-100"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}