import { Star } from "lucide-react";
import Image from "next/image";
import { RadioColorSelector } from "@/components/radio-color-selector";
import type { categories } from "@/components/sections/collections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatXAF } from "@/lib/utils";

export type Product2 = {
  title: string;
  image: string;
  price: number;
  badge: string;
  rating: number;
  type: (typeof categories)[number];
  colors?: string[];
};

export function ProductCard2({ product }: { product: Product2 }) {
  return (
    <Card className="group bg-transparent ring-0 p-0">
      <CardHeader className="sr-only">{product.title}</CardHeader>
      <CardContent className="p-0">
        <figure className="relative aspect-square w-full overflow-hidden rounded-sm object-cover">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
            src={product.image}
            alt={product.title}
          />
          <Badge
            variant="secondary"
            className="absolute inset-e-2 top-2 bg-white/30 dark:bg-black/30 text-white rounded-full"
          >
            {product.badge}
          </Badge>
          <div className="absolute inset-s-3 bottom-3 flex items-center justify-between gap-2">
            {product.colors?.map((color, _) => (
              <RadioColorSelector
                key={`${product.title.toLowerCase()}-${color}`}
                className="size-6"
                id={`${product.title.toLowerCase()}-${color}`}
                name={product.title.toLowerCase().replace(/\s+/g, "-")}
                color={color}
                label={`${product.title.toLowerCase()}-${color}`}
              />
            ))}
          </div>
        </figure>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between gap-1">
            <p className="font-medium">{product.title}</p>
            <p className="text-zinc-400">{formatXAF(product.price)}</p>
          </div>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill("")
              .map((_, index) =>
                index < product.rating ? (
                  <Star
                    key={index}
                    className="size-4 fill-amber-500 text-amber-500"
                  />
                ) : (
                  <Star key={index} className="text-zinc-400 size-4" />
                ),
              )}
            <span className="text-zinc-400 ms-1 text-xs">
              (4.5 out of 5)
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 border-0">
        <Button className="mt-4 w-full rounded-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
