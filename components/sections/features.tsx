"use client";

import {
  Heart,
  type LucideProps,
  Palette,
  Ruler,
  Shirt,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { cn } from "@/lib/utils";

type FeatureType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
  highlight?: boolean;
};

const features: FeatureType[] = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Premium fabrics selected for exceptional durability and a pleasant touch",
  },
  {
    icon: Heart,
    title: "Absolute Comfort",
    desc: "Relaxed fit and soft materials for optimal comfort every day",
    highlight: true,
  },
  {
    icon: Palette,
    title: "Various Colors",
    desc: "A wide palette of colors to match your style",
  },
  {
    icon: Ruler,
    title: "All Sizes",
    desc: "From XS to XL, find the perfect size for your body type",
  },
  {
    icon: Shirt,
    title: "Modern Style",
    desc: "Clean design and trends for a timeless streetwear look",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-black px-6 relative min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_50px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="px-6 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6 text-balance">
            Why choose <br /> our hoodies?
          </h1>
          <p className="text-lg text-primary-foreground max-w-2xl mx-auto mb-20 text-pretty">
            Discover what makes our hoodies unique. Quality, comfort and style
            for your everyday wardrobe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}

          <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-y-16 gap-x-12">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="md:w-1/3">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, highlight }: FeatureType) {
  return (
    <div
      className={cn(
        "flex flex-col items-center group transition-all duration-200",
        highlight && "md:scale-105",
      )}
    >
      <div
        className={cn(
          "size-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-200",
          highlight
            ? "bg-primary text-white shadow-xl shadow-primary"
            : "bg-secondary text-primary group-hover:bg-accent",
        )}
      >
        <Icon className="size-6" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary tracking-tight">
        {title}
      </h3>
      <p className="text-primary-foreground leading-relaxed text-sm max-w-xs mx-auto text-pretty">
        {desc}
      </p>
    </div>
  );
}
