"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  createSerializer,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import type { ReactNode } from "react";
import { RadioColorSelector } from "@/components/radio-color-selector";
import { RadioSizeSelector } from "@/components/radio-size-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function OrderConfigPanel({
  children,
}: {
  children: ReactNode;
}) {
  const [color, setColor] = useQueryState(
    "color",
    parseAsString.withDefault("#ff6c00"),
  );
  const [size, setSize] = useQueryState("size", parseAsString.withDefault("l"));
  const [quantity, setQuantity] = useQueryState(
    "quantity",
    parseAsInteger.withDefault(1),
  );
  const serializer = createSerializer({
    color: parseAsString,
    size: parseAsString,
    quantity: parseAsInteger,
  });

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="rounded-l-lg">
        <SheetHeader>
          <SheetTitle className="text-4xl text-primary font-bold">
            Order Options
          </SheetTitle>
          <SheetDescription>what will fit your need?</SheetDescription>
        </SheetHeader>
        <div className="grow flex flex-col gap-6 overflow-y-scroll">
          <figure className="flex flex-col h-3/4 px-4">
            <Image
              src="/images/hoodie.webp"
              className="sise-full rounded-lg object-cover grow"
              alt="preview"
              width={400}
              height={600}
            />
            <figcaption className="sr-only">Preview</figcaption>
          </figure>
          <div className="flex flex-col gap-4 p-4">
            <div className="space-y-1">
              <h2 className="text-sm text-zinc-400">Color</h2>
              <div className="flex gap-4">
                <RadioColorSelector
                  id="black"
                  name="color"
                  color="#000000"
                  onClick={setColor}
                  label="Black"
                  matchColor="#000000"
                  className="size-11"
                />
                <RadioColorSelector
                  id="orange"
                  name="color"
                  color="#ff6c00"
                  onClick={setColor}
                  label="Orange"
                  matchColor="#ff6c00"
                  className="size-11"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-zinc-400">Size</h2>
              <div className="flex gap-4">
                <RadioSizeSelector
                  id="l"
                  name="size"
                  size="l"
                  matchSize={size}
                  onClick={setSize}
                  label="L"
                  className="size-11"
                />
                <RadioSizeSelector
                  id="xl"
                  name="size"
                  size="xl"
                  matchSize={size}
                  onClick={setSize}
                  label="XL"
                  className="size-11"
                />
                <RadioSizeSelector
                  id="xxl"
                  name="size"
                  size="xxl"
                  matchSize={size}
                  onClick={setSize}
                  label="XXL"
                  className="size-11"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-zinc-400">Quantity Input</h2>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  size="icon-lg"
                  variant="outline"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                  disabled={quantity === 1}
                  className="rounded-full aspect-square size-11"
                >
                  <Minus className="size-6" />
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  min={1}
                  value={quantity}
                  readOnly
                  className="text-center w-20 border-none"
                />
                <Button
                  type="button"
                  size="icon-lg"
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full aspect-square size-11"
                >
                  <Plus className="size-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Link href={`/checkout${serializer({ color, size, quantity })}`}>
            <Button
              type="button"
              size="lg"
              className="w-full text-xs font-bold rounded-full uppercase tracking-[0.2em] py-6"
            >
              <span className="text-white">Place Order</span>
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
