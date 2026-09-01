type HeroBannerProps = {
  content: { eyebrow: string; title: string; description: string };
};

export function HeroBanner({ content }: HeroBannerProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto flex min-h-96 max-w-7xl items-end px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-dark">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
