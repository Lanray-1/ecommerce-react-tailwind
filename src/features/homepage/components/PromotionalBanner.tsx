type PromotionalBannerProps = {
  content: { eyebrow: string; message: string };
};

export function PromotionalBanner({ content }: PromotionalBannerProps) {
  return (
    <section className="bg-accent px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-foreground">
          {content.eyebrow}
        </p>
        <p className="mt-4 max-w-2xl text-2xl font-semibold leading-9">
          {content.message}
        </p>
      </div>
    </section>
  );
}
