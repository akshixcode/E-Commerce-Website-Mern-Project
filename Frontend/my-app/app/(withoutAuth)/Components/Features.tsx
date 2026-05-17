// src/components/customer/Features.tsx

import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    icon: Truck,
  },
  {
    title: "Secure Payments",
    icon: ShieldCheck,
  },
  {
    title: "Premium Quality",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Support",
    icon: Headphones,
  },
];

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <Icon className="mb-5 h-10 w-10 text-indigo-600" />

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-2 text-gray-600">
                Experience premium service with our platform.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}