import { ImageIcon } from "lucide-react";
import Image from "next/image";

import type { HomepageProduct } from "../types/homepage";

type ProductCardProps = { product: HomepageProduct };

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      <div className="flex aspect-square items-center justify-center bg-background">
        {product.imageSrc ? (
          <div className="relative w-full h-full">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : (
          <ImageIcon
            className="size-8 text-muted"
            aria-label={product.imageAlt}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold">{product.name}</h3>
        {product.price !== undefined && (
          <p className="mt-2 text-sm font-medium">${product.price}</p>
        )}
        <p className="mt-2 text-sm text-muted">{product.details}</p>
      </div>
    </article>
  );
}
