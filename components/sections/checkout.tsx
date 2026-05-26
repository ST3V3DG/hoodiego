"use client";

import { CheckCircle, CreditCard, Landmark } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function Checkout() {
  const searchParams = useSearchParams();

  const quantity = searchParams.get('quantity');
  const size = searchParams.get('size');
  const color = searchParams.get('color');
  
  const cartItems = [
    {
      name: "HoodieGo Premium Hoodie",
      price: 25000,
      image: "/images/hoodie.webp",
    },
  ];
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * parseInt(quantity ?? "1", 10),
    0,
  );
  const shipping = 2500;
  const total = subtotal + shipping;
  
  function formatXAF(amount: number) {
    return `${amount.toLocaleString()} XAF`;
  }
  
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
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Secure Checkout
            </span>
            <div className="h-px w-12 bg-zinc-200" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Payment
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none text-balance text-primary">
            Finalize Your <br />
            <span className="italic">Order</span>.
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-primary mb-8 flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Shipping Information
              </h2>

              <form onSubmit={(event) => event.preventDefault()} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="city"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="Douala"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="zip"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Zip Code
                    </Label>
                    <Input
                      id="zip"
                      placeholder="BP 1234"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Country
                    </Label>
                    <Input
                      id="country"
                      placeholder="Cameroon"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                    />
                  </div>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-primary mb-8 flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Payment Method
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 rounded-sm border border-border bg-zinc-900 cursor-pointer hover:border-primary transition-colors has-checked:border-primary has-checked:bg-primary/10"
                  htmlFor="credit-card">
                  <Input
                    type="radio"
                    name="payment"
                    id="credit-card"
                    defaultChecked
                    className="size-4 accent-primary"
                  />
                  <CreditCard className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Credit Card
                    </p>
                    <p className="text-xs text-zinc-400">
                      Visa, Mastercard, American Express
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 rounded-sm border border-border bg-zinc-900 cursor-pointer hover:border-primary transition-colors has-checked:border-primary has-checked:bg-primary/10"
                  htmlFor="mobile-money">
                  <Input
                    type="radio"
                    name="payment"
                    id="mobile-money"
                    className="size-4 accent-primary"
                  />
                  <Landmark className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Mobile Money
                    </p>
                    <p className="text-xs text-zinc-400">
                      MTN Mobile Money, Orange Money
                    </p>
                  </div>
                </label>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                type="button"
                size="lg"
                popoverTarget="order-placed-feedback"
                className="w-full text-xs font-bold rounded-full uppercase tracking-[0.2em] py-6"
              >
                Place Order — {formatXAF(total)}
              </Button>
              <p className="text-[10px] text-zinc-500 mt-3 text-center">
                By placing this order, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-32 bg-zinc-900/50 border border-border rounded-sm p-8 space-y-6"
            >
              <h2 className="text-lg font-bold tracking-tight text-primary">
                Order Summary
              </h2>

              {cartItems.map((item) => (
                <div key={item.name} className="flex gap-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-sm bg-zinc-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover size-full"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1 uppercase">
                      {color ?? "orange"} / {size ?? "l"}
                    </p>
                    <p className="text-xs text-zinc-400">
                      Qty: {parseInt(quantity ?? "1", 10)}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-white shrink-0">
                    {formatXAF(item.price * parseInt(quantity ?? "1", 10))}
                  </p>
                </div>
              ))}

              <Separator className="border-zinc-800" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>{formatXAF(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Shipping</span>
                  <span>{formatXAF(shipping)}</span>
                </div>
              </div>

              <Separator className="border-zinc-800" />

              <div className="flex justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span className="text-primary">{formatXAF(total)}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="order-placed-feedback" popover="auto" className="bg-zinc-900 border border-border rounded-sm p-8 gap-6 open:backdrop-blur-2xl backdrop:bg-black/80 open:top-1/2 open:left-1/2 transform open:-translate-x-1/2 open:-translate-y-1/2 w-full max-w-120 open:flex open:flex-col open:items-center">
        <CheckCircle className="text-primary size-32" />
        <h2 className="text-2xl font-bold text-primary tracking-tight">Order Placed Successfully!</h2>
        <p className="text-sm text-zinc-400">Your order has been placed successfully. Thank you for shopping with us!</p>
        <Link className="text-sm self-end underline text-white mt-8" href = '/'>
          Go to Home
        </Link>
      </div>
    </section>
  );
}
