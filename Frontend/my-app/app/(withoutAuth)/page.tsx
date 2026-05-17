import Image from "next/image";
import Hero from "./Components/HeroSection";
import Categories from "./Components/Categories";
import FeaturedProducts from "./Components/FeaturedProducts";
import Features from "./Components/Features";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      {/* <Hero />
      <Categories />
      <FeaturedProducts />
      <Features /> */}
      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="featured-products">
        <FeaturedProducts />
      </section>

      <section id="features">
        <Features />
      </section>
    </main>
  );
}
