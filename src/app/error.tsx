"use client";

// Root-level error boundary. Catches unhandled errors thrown during
// rendering in this segment and any nested segment that doesn't define
// its own error.tsx. Client Component is required by the App Router
// convention for error boundaries (see Next.js docs on error handling).
//
// Feature-level routes may add their own error.tsx for more specific
// recovery/messaging; this file is the fallback of last resort.

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Placeholder for error reporting. Replace with a real logging/
    // monitoring integration when one is chosen (not decided yet —
    // see DECISIONS.md for status).
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred. You can try again.</p>
      <button onClick={reset} style={{ marginTop: "1rem" }}>
        Try again
      </button>
    </div>
  );
}
