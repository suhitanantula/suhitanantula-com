# Helix website ship checklist — suhitanantula.com

Audit of the Next.js founder repo (`suhitanantula/suhitanantula-com`) plus the currently live site at https://www.suhitanantula.com/.

**Important:** live production is still a Hostinger Horizons Vite SPA. This repo is the Next.js rebuild. Scores below are for **this repo after the hardening PR**, with a live-site note on each item.

Helix MCP was unavailable during this audit, so the 20 items were applied from the brief.

## The 20

| # | Item | Repo (after this PR) | Live site today |
|---|---|---|---|
| 1 | Custom 404 (and branded 500) | **PASS** — `not-found.tsx`, `error.tsx` | **FAIL** — SPA returns 200 + homepage for unknown URLs |
| 2 | Unique meta title every public page | **PASS** | **FAIL** — one `index.html` title for all client routes |
| 3 | Unique meta description every public page | **PASS** | **FAIL** — same as titles |
| 4 | CTA above the fold on marketing pages | **PASS** — existing page CTAs lifted into heroes | **N/A / unverified** — SPA bundle not mapped page-by-page |
| 5 | Favicon (+ apple-touch-icon) | **PASS** — live `favicon.svg` + generated apple icon | **FAIL** (partial) — favicon.svg exists; no apple-touch-icon |
| 6 | robots.txt | **PASS** — allow `/`; disallow `/api/`, `/admin/`, `/preview/` | **FAIL** — `/robots.txt` serves the HTML app |
| 7 | sitemap.xml | **PASS** — all public pages | **FAIL** — `/sitemap.xml` serves the HTML app |
| 8 | Open Graph (title, description, url, image) | **PASS** | **PASS** on homepage only |
| 9 | Twitter/X card tags | **PASS** | **PASS** on homepage only |
| 10 | Canonical absolute https URL per page | **PASS** — `https://www.suhitanantula.com` | **FAIL** — no `rel=canonical`; og:url is apex while apex 307s to www |
| 11 | Brand og:image / share preview | **PASS** — existing live `og-image.png` (1200×630) | **PASS** |
| 12 | Working contact path (+ spam protection if form) | **PASS** — form + honeypot + rate limit + visible `hello@` mailto | **N/A / unverified** in the SPA bundle |
| 13 | Privacy page if analytics/cookies/leads | **PASS** — `/privacy` factual page; legal review still needed | **FAIL** — GA + Brevo, no privacy page |
| 14 | Helix Lab naming (never Helix Labs) | **PASS** — no “Helix Labs” in repo | **PASS** — no “Helix Labs” in homepage/main bundle |
| 15 | Alt text on content images | **N/A** — no content `<img>` in this repo | **N/A / unverified** |
| 16 | Mobile layout sanity | **PASS** — existing breakpoints; stage navs now scroll | Unverified in browser for the SPA |
| 17 | Basic performance (huge unoptimized heroes) | **PASS** — no hero image files | **FAIL-ish** — many webfonts, gtag, Brevo |
| 18 | No client secrets; HTTPS; headers if host config in repo | **PASS** — placeholders only; security headers in `next.config.ts` | **PASS** (partial) — HTTPS + HSTS; no secrets seen |
| 19 | Forms have success/error states | **PASS** — subscribe + contact | Unverified (Brevo embed present) |
| 20 | Analytics only if intentional — no broken trackers | **PASS** — `@vercel/analytics` only; no new SDK | **PASS** — GA `G-G558PZ9VJX` looks intentional |

## What this PR changed

- Custom branded 404 and 500 pages.
- `metadataBase`, per-page unique title/description, canonical, Open Graph, and Twitter tags.
- `robots.ts` and `sitemap.ts`.
- Existing production `favicon.svg` and `og-image.png` copied from the live site; apple-touch-icon generated.
- Hero CTAs on About, Journey, Methodology, Products, Books, and Case Studies using **existing** button labels from those pages.
- Contact form is a real POST (`/api/contact`) with honeypot, KV rate limit, Resend, and success/error states. Visible mailto remains as a fallback.
- Factual `/privacy` page + footer link. Copy is implementation-true, not legal advice.
- Share URLs and OG image references now use www + `/og-image.png` (the old `/og/lap-N.png` files do not exist).
- Security headers in `next.config.ts`.
- Stage nav overflow-x on Journey and Products.

## What still needs Suhit

1. **Privacy content** — review `/privacy`. Add retention, subprocessors, and any legal wording a founder is willing to stand behind. The page says this is a factual account, not a full policy.
2. **Contact email via Resend** — confirm `suhitanantula.com` is a verified Resend domain, and that `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` are set on Vercel. Until then the form will error and point people to `hello@suhitanantula.com`.
3. **Analytics choice** — this repo uses Vercel Analytics. Live still has Google Analytics `G-G558PZ9VJX`. Do not add gtag here unless you want both after cutover. Decide which stays.
4. **Ship this Next.js app** — live is still Horizons. robots, sitemap, 404 status codes, and per-page meta only take effect after this repo is production.
5. **Copy** — no positioning copy was invented. If you want different titles/descriptions than the existing page lines, say so.
6. **Chapter OG art** — lap share cards now use the brand `og-image.png`. Per-lap images were referenced but never existed.

## What did not happen

- No redesign, no new marketing voice, no GA/gtag added to this repo.
- Live Horizons site was not modified.
- PR is not merged.
- Contact form was not end-to-end tested against a live Resend inbox (no production secrets in this environment).
