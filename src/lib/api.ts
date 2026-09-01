/**
 * Minimal API client foundation.
 *
 * This is infrastructure only, matching the backend's TASK-001 scope:
 * a single, typed place to read the API base URL and issue requests.
 * No endpoint-specific functions (login, products, cart, etc.) belong
 * here yet — those arrive alongside the corresponding backend tasks
 * (TASK-002 auth, TASK-003 catalog, and so on).
 */

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// Env validation is deliberately lazy (checked here, not at module
// load) so importing this module never fails a build or SSR render on
// its own — only an actual request without a configured API base URL
// fails, and it fails with a clear error at the point of use.
function getApiBaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not set. Copy .env.local.example to " +
        ".env.local and set it before making API requests.",
    );
  }

  return baseUrl;
}

/**
 * Thin fetch wrapper. Prepends the API base URL and normalizes error
 * handling. Deliberately has no knowledge of specific endpoints or
 * request/response shapes — those belong in feature-specific service
 * modules built alongside the backend tasks that expose them.
 */
export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new ApiError(response.status, body || response.statusText);
  }

  return response.json() as Promise<T>;
}
