"use client";

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6">

        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-4">

          <Link href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>

          {/* <Link href="/dashboard/products" className="hover:text-gray-300">
            Products
          </Link>

          <Link href="/dashboard/orders" className="hover:text-gray-300">
            Orders
          </Link> */}

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 bg-gray-100">
        {children}
      </main>

    </div>
  );
}