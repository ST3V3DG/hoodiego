"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Loyal Customer",
    company: "Paris",
    text: "The most comfortable hoodie I've ever worn. The quality is exceptional and the style is perfect.",
    avatar: "ML",
    rating: 5,
  },
  {
    name: "Thomas B.",
    role: "Satisfied Customer",
    company: "Lyon",
    text: "Ordered multiple times, always delighted. The fabrics are soft and the fit is perfect.",
    avatar: "TB",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Loyal Customer",
    company: "Marseille",
    text: "My favorite for autumn evenings. Warm, soft and so stylish. Highly recommend!",
    avatar: "SM",
    rating: 5,
  },
  {
    name: "Lucas R.",
    role: "Satisfied Customer",
    company: "Bordeaux",
    text: "First purchase and I'm coming back for a second. The quality fully justifies the price.",
    avatar: "LR",
    rating: 5,
  },
  {
    name: "Emma K.",
    role: "Loyal Customer",
    company: "Nantes",
    text: "Perfect for everyday. The design is modern and the colors are gorgeous.",
    avatar: "EK",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-primary mb-4">
          They Trust Us
        </h2>
        <p className="text-lg text-primary-foreground max-w-2xl mx-auto">
          Discover what our customers say about their HoodieGo hoodies
        </p>
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-6 px-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="w-96 shrink-0 p-8 bg-primary/20 border rounded-sm border-primary shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <div className="absolute top-4 right-4">
              <Quote className="size-12 fill-primary stroke-primary" />
            </div>

            {/* Rating */}
            <div className="flex ">
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-primary-foreground leading-relaxed text-pretty font-medium">
              {testimonial.text}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="size-12 rounded-full bg-linear-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {testimonial.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-zinc-200">{testimonial.role}</p>
                <p className="text-xs text-zinc-400">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row with opposite direction */}
      <motion.div
        className="flex gap-6 px-6 w-max mt-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`second-${index}`}
            className="w-96 shrink-0 p-8 bg-primary/20 border rounded-sm border-primary shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <div className="absolute top-4 left-4 rotate-180">
              <Quote className="size-12 fill-primary stroke-primary" />
            </div>

            {/* Rating */}
            <div className="flex justify-end">
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-primary-foreground leading-relaxed text-pretty font-medium">
              {testimonial.text}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="size-12 rounded-full bg-linear-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {testimonial.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-zinc-200">{testimonial.role}</p>
                <p className="text-xs text-zinc-400">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
