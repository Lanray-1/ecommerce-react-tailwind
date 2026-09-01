type SectionHeadingProps = { title: string; description: string };

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </header>
  );
}
