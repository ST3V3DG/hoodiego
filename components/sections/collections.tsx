"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { type Product2, ProductCard2 } from "@/components/product-card-2";
import { Button } from "../ui/button";

const products: Product2[] = [
  {
    title: "Classic Black Hoodie",
    image: "/images/hoodie.webp",
    price: "25 000 XAF",
    badge: "Best Seller",
    rating: 5,
    colors: ["#000000", "#ffffff", "#cc0000"],
  },
  {
    title: "Urban Grey Hoodie",
    image: "/images/hoodie-on-model.webp",
    price: "22 000 XAF",
    badge: "New Season",
    rating: 4,
    colors: ["#808080", "#000000", "#1a3a5c"],
  },
  {
    title: "Navy Blue Crewneck",
    image: "/images/hoodie.webp",
    price: "20 000 XAF",
    badge: "Sale",
    rating: 4,
    colors: ["#1a3a5c", "#ffffff"],
  },
  {
    title: "White Premium Hoodie",
    image: "/images/hoodie-on-model.webp",
    price: "28 000 XAF",
    badge: "Premium",
    rating: 5,
    colors: ["#ffffff", "#000000", "#cc0000"],
  },
  {
    title: "Olive Green Zip-Up",
    image: "/images/hoodie.webp",
    price: "26 000 XAF",
    badge: "New Season",
    rating: 4,
    colors: ["#556b2f", "#000000"],
  },
  {
    title: "Burgundy Pullover",
    image: "/images/hoodie-on-model.webp",
    price: "23 000 XAF",
    badge: "Trending",
    rating: 5,
    colors: ["#800020", "#ffffff", "#000000"],
  },
  {
    title: "Charcoal Heavy Knit",
    image: "/images/hoodie.webp",
    price: "27 000 XAF",
    badge: "Best Seller",
    rating: 4,
    colors: ["#36454f", "#808080"],
  },
  {
    title: "Cream Oversized Hoodie",
    image: "/images/hoodie-on-model.webp",
    price: "24 000 XAF",
    badge: "Limited",
    rating: 5,
    colors: ["#f5f5dc", "#000000"],
  },
];

const categories = ["All", "Hoodies", "Crewnecks", "Zip-Ups", "Limited"];

export function Collections() {
  return (
    <section className="py-32 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Explore
            </span>
            <div className="h-px w-12 bg-zinc-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              Collection
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none text-balance text-primary">
            Our Latest <br />
            <span className="italic">Collection</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-zinc-800"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                type="button"
                variant="ghost"
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm border border-zinc-800 text-zinc-400 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="relative">
            <select className="appearance-none bg-zinc-900 border border-zinc-800 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 pr-8 rounded-sm cursor-pointer focus-visible:border-primary focus-visible:outline-none">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
            </select>
            <ChevronDown className="size-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard2 product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
