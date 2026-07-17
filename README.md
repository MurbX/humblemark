# HumbleMark

Ecommerce platform for **HumbleMark** — fresh, natural, non-alcoholic drinks.
_Fresh. Natural. Refreshing._

## Architecture

| Piece      | Tech                                   | Lives in             |
| ---------- | -------------------------------------- | -------------------- |
| Storefront | Next.js 16 + TypeScript + Tailwind v4  | `web/`               |
| CMS & API  | Strapi v5 (TypeScript)                 | `cms/`               |
| Database   | SQLite for local dev, Postgres in prod | `docker-compose.yml` |
| Hosting    | Docker + [Coolify](https://coolify.io) | any VPS              |

Everything ships as Docker containers, so the local stack and the future VPS
run identically — migration is "install Coolify, connect repo, deploy".

## Local development (fast loop)

Run the two apps directly for the quickest feedback:

```bash
# Terminal 1 — Strapi CMS → http://localhost:1337
cd cms
npm run develop

# Terminal 2 — storefront → http://localhost:3000
cd web
npm run dev
```

- First Strapi run: create your admin user at http://localhost:1337/admin.
- Local Strapi uses SQLite (`cms/.tmp/data.db`) — no database setup needed.
  Production switches to Postgres purely via environment variables.
- Storefront env: copy `web/.env.example` → `web/.env.local` (defaults already
  point at local Strapi).

## Full-stack run with Docker

Mirrors production: Postgres + Strapi + Next.js standalone.

```bash
cp .env.example .env   # fill in secrets — see comments inside
docker compose up --build
```

Storefront on http://localhost:3000, CMS on http://localhost:1337.

## Coolify — local "VPS" now, real VPS later

A test Coolify instance lives outside this repo at `C:\Development\coolify`:

```bash
cd C:\Development\coolify
docker compose up -d      # dashboard → http://localhost:8000
```

First visit: register the admin account. **Windows caveat:** Coolify's proxy
doesn't run on Windows, so locally apps are reached via mapped ports instead
of domains. On a Linux VPS the proxy (and HTTPS domains) work normally.

To deploy HumbleMark inside Coolify: push this repo to GitHub, then either

1. **One resource:** New Resource → *Docker Compose* → this repo — Coolify
   reads `docker-compose.yml`; set the variables from `.env.example` in the
   UI, or
2. **Split resources:** a Postgres database resource + two *Dockerfile* apps
   with base directories `web/` and `cms/` (enables per-app deploy hooks).

Migrating to a real VPS later: install Coolify there
(`curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash`), connect the
same repo, set the same env vars, deploy. Move data with a Postgres dump and
a copy of the `cms-uploads` volume.

## Project structure

- `web/src/app/` — routes, layout, global styles, brand theme
- `web/src/components/` — landing page sections
- `web/src/lib/strapi.ts` — typed fetch helper for the Strapi REST API
- `cms/` — Strapi app (content types, admin, media library)
- `docker-compose.yml` — full production-style stack
- `web/Dockerfile`, `cms/Dockerfile` — per-app builds used by compose/Coolify

## Roadmap

- [x] Landing page
- [x] Self-hosted architecture (Docker + Coolify)
- [ ] Product content types in Strapi + storefront wiring
- [ ] Cart & checkout (Stripe)
- [ ] Customer accounts
- [ ] Orders & fulfillment, admin workflows

> **Note:** products, prices and marketing copy on the landing page are sample
> placeholders — they'll be replaced by real content from Strapi.
