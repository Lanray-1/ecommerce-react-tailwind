import Link from "next/link";

// Root-level not-found UI. Rendered for unmatched routes anywhere in
// the app, and whenever a route segment calls next/navigation's
// notFound(). Feature routes (e.g. a specific product ID that doesn't
// exist) may add their own not-found.tsx for more specific messaging.

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Return home</Link>
    </div>
  );
}
