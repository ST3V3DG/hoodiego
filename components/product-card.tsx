import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const product = {
  title: "White T-Shirt",
  image: "/images/hoodie.webp",
  price: "$29.99",
  badge: "New Season"
};

export type Product = typeof product;

export function ProductCard({ product }: { product: Product }) {
  return (<Link href="#" className="group">
    <figure className="relative aspect-square w-full overflow-hidden rounded-md object-cover">
      <Image
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
      />
      <Badge variant="secondary" className="absolute inset-e-2 top-2 bg-white/30 dark:bg-black/30">
        {product.badge}
      </Badge>
    </figure>
    <div className="mt-3 space-y-0.5">
      <p className="font-medium">{product.title}</p>
      <p className="text-muted-foreground">{product.price}</p>
    </div>
  </Link>)
};
