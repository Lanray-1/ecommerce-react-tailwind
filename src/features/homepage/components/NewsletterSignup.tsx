import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type NewsletterSignupProps = {
  content: { title: string; description: string };
};

export function NewsletterSignup({ content }: NewsletterSignupProps) {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-8 sm:p-12">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-3 leading-7 text-muted">{content.description}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="w-full">
            <Input
              label="Email address"
              type="email"
              placeholder="[EMAIL ADDRESS]"
              autoComplete="email"
            />
          </div>
          <Button type="button" size="lg" className="whitespace-nowrap">
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
}
