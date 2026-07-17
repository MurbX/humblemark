/**
 * Minimal helper for the Strapi REST API.
 *
 * The browser talks to NEXT_PUBLIC_STRAPI_URL; server-side code prefers
 * STRAPI_INTERNAL_URL when set (e.g. the Docker network hostname `cms`).
 */
export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

const API_BASE =
  typeof window === "undefined"
    ? (process.env.STRAPI_INTERNAL_URL ?? STRAPI_URL)
    : STRAPI_URL;

type StrapiFetchOptions = RequestInit & {
  next?: { revalidate?: number | false; tags?: string[] };
};

export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {},
): Promise<T> {
  const res = await fetch(`${API_BASE}/api${path}`, {
    // CMS reads are cached for a minute by default; callers can override.
    next: { revalidate: 60 },
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(process.env.STRAPI_API_TOKEN
        ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
        : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(
      `Strapi request failed: ${res.status} ${res.statusText} (${path})`,
    );
  }

  return res.json() as Promise<T>;
}

/** Turn a relative Strapi media URL into an absolute one the browser can load. */
export function strapiMedia(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  return url.startsWith("/") ? `${STRAPI_URL}${url}` : url;
}
