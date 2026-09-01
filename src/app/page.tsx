import { BrandStory } from "@/features/homepage/components/BrandStory";
import { HeroBanner } from "@/features/homepage/components/HeroBanner";
import { NewsletterSignup } from "@/features/homepage/components/NewsletterSignup";
import { PromotionalBanner } from "@/features/homepage/components/PromotionalBanner";
import { SectionHeading } from "@/features/homepage/components/SectionHeading";
import {
  brandStoryContent,
  categorySection,
  featuredProductsSection,
  heroContent,
  newArrivalsSection,
  newsletterContent,
  promotionalBannerContent,
} from "@/features/homepage/data/homepageContent";
import { CategoryCard } from "@/features/products/components/CategoryCard";
import { ProductCard } from "@/features/products/components/ProductCard";
import {
  categories,
  featuredProducts,
  newArrivals,
} from "@/features/products/data/catalogData";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroBanner content={heroContent} />
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <SectionHeading {...categorySection} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="bg-surface px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading {...featuredProductsSection} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <SectionHeading {...newArrivalsSection} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <PromotionalBanner content={promotionalBannerContent} />
      <BrandStory content={brandStoryContent} />
      <NewsletterSignup content={newsletterContent} />
    </div>
  );
}
