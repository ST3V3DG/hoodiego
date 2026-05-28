import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Product2 = {
  title: string;
  image: string;
  price: string;
  badge: string;
  rating: number;
  colors?: string[];
};

export function ProductCard2({ product }: { product: Product2 }) {
  return (
    <Link href="#" className="group">
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
          {product.colors?.map((color, i) => (
            <span
              key={i}
              className="block size-3 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </figure>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between gap-1">
          <p className="font-medium">{product.title}</p>
          <p className="text-muted-foreground">{product.price}</p>
        </div>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill("")
            .map((_, i) =>
              i < product.rating ? (
                <Star
                  key={i}
                  className="size-4 fill-amber-500 text-amber-500"
                />
              ) : (
                <Star key={i} className="text-muted-foreground size-4" />
              ),
            )}
          <span className="text-muted-foreground ms-1 text-xs">
            (4.5 out of 5)
          </span>
        </div>
      </div>
      <Button className="mt-4 w-full rounded-full">Add to Cart</Button>
    </Link>
  );
}
