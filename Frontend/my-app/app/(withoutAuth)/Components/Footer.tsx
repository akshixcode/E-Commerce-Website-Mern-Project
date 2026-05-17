// src/components/shared/Footer.tsx

import Link from "next/link";


export default function Footer() {
    return (
        <footer className="mt-20 border-t bg-gray-50">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold">RoamCart</h2>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                        Modern ecommerce experience with premium products and
                        seamless shopping.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <div className="flex flex-col gap-3 text-sm text-gray-600">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/categories">Categories</Link>
                        <Link href="/orders">Orders</Link>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Support</h3>

                    <div className="flex flex-col gap-3 text-sm text-gray-600">
                        <button className="text-left">Privacy Policy</button>
                        <button className="text-left">Terms & Conditions</button>
                        <button className="text-left">Help Center</button>
                        <button className="text-left">Contact Us</button>
                    </div>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

                    <div className="flex items-center gap-4">
                        <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
                            {/* <Facebook className="h-5 w-5" /> */}
                        </button>

                        <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
                            {/* <Instagram className="h-5 w-5" /> */}
                        </button>

                        <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
                            {/* <Twitter className="h-5 w-5" /> */}
                        </button>

                        <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
                            {/* <Linkedin className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-gray-600 md:flex-row">
                    <p>© 2026 RoamCart. All rights reserved.</p>

                    <p>Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}