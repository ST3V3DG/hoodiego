"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    parseAsString.withDefault("orange"),
  );
  const [size, setSize] = useQueryState("size", parseAsString.withDefault("l"));
  const [quantity, setQuantity] = useQueryState(
    "quantity",
    parseAsInteger.withDefault(1),
  );
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="rounded-l-lg">
        <SheetHeader>
          <SheetTitle className="text-4xl text-primary font-bold">
            Order Options
          </SheetTitle>
          <SheetDescription>what will fit your need?</SheetDescription>
        </SheetHeader>
        <div className="grow flex flex-col gap-6">
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
              <h2 className="text-sm text-muted-foreground">Color</h2>
              <div className="flex gap-4">
                <div className="size-11 rounded-full overflow-hidden relative transition-colors duration-300">
                  <Label className="bg-orange-600 size-full" htmlFor="orange">
                    <span className="sr-only">Orange</span>
                  </Label>
                  <Input
                    id="orange"
                    type="radio"
                    name="color"
                    value="orange"
                    checked={color === "orange"}
                    onChange={() => setColor("orange")}
                    className="accent-orange-600 not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="size-11 rounded-full overflow-hidden relative transition-colors duration-300">
                  <Label className="bg-black size-full" htmlFor="black">
                    <span className="sr-only">Black</span>
                  </Label>
                  <Input
                    id="black"
                    type="radio"
                    name="color"
                    value="black"
                    checked={color === "black"}
                    onChange={() => setColor("black")}
                    className="accent-black not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-muted-foreground">Size</h2>
              <div className="flex gap-4">
                <div className="size-11 rounded-lg overflow-hidden relative transition-colors duration-300 has-checked:border has-checked:bg-primary/20 border-primary">
                  <Label
                    className="size-full flex place-items-center"
                    htmlFor="l"
                  >
                    <span className="mx-auto">L</span>
                  </Label>
                  <Input
                    id="l"
                    type="radio"
                    name="size"
                    value="l"
                    checked={size === "l"}
                    onChange={() => setSize("l")}
                    className="opacity-0 not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="size-11 rounded-lg overflow-hidden relative transition-colors duration-300 has-checked:border has-checked:bg-primary/20 border-primary">
                  <Label
                    className="size-full flex place-items-center"
                    htmlFor="xl"
                  >
                    <span className="mx-auto">XL</span>
                  </Label>
                  <Input
                    id="xl"
                    type="radio"
                    name="size"
                    value="xl"
                    checked={size === "xl"}
                    onChange={() => setSize("xl")}
                    className="opacity-0 not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="size-11 rounded-lg overflow-hidden relative transition-colors duration-300 has-checked:border has-checked:bg-primary/20 border-primary">
                  <Label
                    className="size-full flex place-items-center"
                    htmlFor="xxl"
                  >
                    <span className="mx-auto">XXL</span>
                  </Label>
                  <Input
                    id="xxl"
                    type="radio"
                    name="size"
                    value="xxl"
                    checked={size === "xxl"}
                    onChange={() => setSize("xxl")}
                    className="opacity-0 not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <Label
                htmlFor="quantity"
                className="text-sm text-muted-foreground"
              >
                Quantity Input
              </Label>
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
                  defaultValue={quantity}
                  min={1}
                  value={quantity}
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
          <Link
            href={`/checkout?color=${color}&size=${size}&quantity=${quantity}`}
          >
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
