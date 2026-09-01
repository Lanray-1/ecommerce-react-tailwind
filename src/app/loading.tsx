// Root-level loading UI. Shown automatically by the App Router while a
// route segment (and its data dependencies) are loading, and while
// streaming in Suspense boundaries below it.
//
// This is an intentionally minimal placeholder. Feature routes with
// their own meaningful loading states (e.g. product listing skeletons)
// should add a loading.tsx inside that route segment rather than
// customizing this one — this file is the generic fallback.

export default function Loading() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
      }}
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}
