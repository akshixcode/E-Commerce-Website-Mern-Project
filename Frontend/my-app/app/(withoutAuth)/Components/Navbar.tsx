"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store/Hooks";
import { logout } from "@/app/store/Slices/authSlice";
import { ShoppingCart, Search, User, LogOut, LayoutDashboard } from "lucide-react";

export default function Navbar() {

  const dispatch = useAppDispatch();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { isAuthenticated, user } = useSelector(
    (state: any) => state.user
  );

  // ✅ FIX HYDRATION
  if (!mounted) {
    return <div className="h-16 border-b bg-white" />;
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <Link href="/" className="text-2xl font-bold">
          RoamCart
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="#featured-products">Products</Link>
          <Link href="#categories">Categories</Link>

           {/* <Link href="#hero">Home</Link>
  <Link href="#featured-products">Products</Link>
  <Link href="#categories">Categories</Link>
  <Link href="#features">Features</Link> */}
        </nav>

        <div className="flex items-center gap-4">

          <Search className="h-5 w-5" />

          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
          </Link>

          {/* AUTH */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{user?.name || "User"}</span>
              </div>

              {user?.role === "admin" && (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded bg-black px-3 py-1 text-white"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              )}

              <button
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 rounded bg-red-500 px-3 py-1 text-white"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login">Login</Link>
              <Link href="/register">Signup</Link>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}