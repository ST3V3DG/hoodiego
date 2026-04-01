"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Established", value: "2024" },
  { label: "Colors", value: "12" },
  { label: "Sizes", value: "5" },
  { label: "Customers", value: "5000+" },
];

export function Stats() {
  return (
    <section className="py-32 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center ">
          <div className="space-y-10">
            <span className="inline-flex px-4 py-1.5 text-xs font-semibold border border-zinc-800 rounded-full text-zinc-500 uppercase tracking-[0.2em] bg-zinc-900/50">
              By the numbers
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-balance leading-none text-primary">
              HoodieGo <br />
              <span className="text-zinc-600">in numbers.</span>
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 pt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <div className="text-5xl font-semibold mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-8 relative z-10">
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-pretty font-medium">
                We identified a demand for hoodies that combine premium quality,
                optimal comfort and modern style at accessible prices.
              </p>
              <div className="h-px w-20 bg-zinc-800" />
              <p className="text-lg text-zinc-500 leading-relaxed text-pretty">
                By analyzing the market, we noticed a lack of truly qualitative
                hoodies. We created HoodieGo to meet this expectation with
                essential products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
