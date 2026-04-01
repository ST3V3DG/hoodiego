"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function About() {
  return (
    <section className="py-32 px-6 bg-black overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                Established 2024
              </span>
              <div className="h-px w-12 bg-zinc-200" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                About Us
              </span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-spaceGrotesk font-bold tracking-tighter leading-none text-balance text-primary">
              Confort <br /> <span className="italic">Premium</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-zinc-500 text-lg text-pretty leading-relaxed">
              We specialize in creating hoodies that combine exceptional comfort
              and modern style, for garments that accompany you every day.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="aspect-3/4 overflow-hidden rounded-sm group relative">
              <Image
                src="/images/hoodie.webp"
                className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                alt="Hoodie detail"
                width={2000}
                height={2000}
              />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-xs font-mono">01 / QUALITY</span>
              </div>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2 font-spaceGrotesk text-primary">
                Premium Fabrics
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-pretty">
                Our approach starts with the best materials. Organic cotton,
                soft fleece and careful finishes. We believe every hoodie should
                be as comfortable as it is stylish.
              </p>
            </div>
          </div>

          <div className="space-y-12 pt-24">
            <div className="max-w-md ml-auto text-right">
              <h3 className="text-2xl font-bold mb-2 font-spaceGrotesk text-primary">
                Urban Style
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-pretty">
                Streetwear is not just a style, it's a lifestyle. Every design
                is thought to adapt to your everyday life and all your outfits.
              </p>
            </div>
            <div className="aspect-3/4 overflow-hidden rounded-sm group relative">
              <Image
                src="/images/hoodie-on-model.webp"
                className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                alt="Hoodie style"
                width={2000}
                height={2000}
              />
              <div className="absolute bottom-8 right-8 text-white">
                <span className="text-xs font-mono">02 / STYLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
