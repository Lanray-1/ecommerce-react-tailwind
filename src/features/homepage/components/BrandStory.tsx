type BrandStoryProps = {
  content: { eyebrow: string; title: string; body: string };
};

export function BrandStory({ content }: BrandStoryProps) {
  return (
    <section className="bg-surface px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-dark">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          {content.title}
        </h2>
        <p className="mt-5 leading-7 text-muted">{content.body}</p>
      </div>
    </section>
  );
}
