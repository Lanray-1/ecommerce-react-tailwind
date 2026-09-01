import { Grid2X2 } from "lucide-react";
import Image from "next/image";

import type { HomepageCategory } from "../types/homepage";

type CategoryCardProps = { category: HomepageCategory };

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="flex min-h-52 flex-col justify-between rounded-md border border-border bg-surface p-6 shadow-sm">
      {category.imageSrc ? (
        <div className="relative h-24 w-full overflow-hidden rounded-sm">
          <Image
            src={category.imageSrc}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <Grid2X2 className="size-6 text-accent" aria-hidden="true" />
      )}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">{category.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          {category.description}
        </p>
      </div>
    </article>
  );
}
