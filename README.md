# SKY LUXE — Sonic Stratosphere ✨

> *A digital sanctuary where high-fidelity sound meets celestial luxury. Press play and drift.*

A single-page marketing site for **Sky Luxe** — an artist storefront for selling tracks, albums, and an ebook, plus a "guest list" invite form for spotlighting other creators. Pure HTML/CSS/JS, no build step, no dependencies. Open it and it plays.

```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   ▂▃▅▇█▇▅▃▂  SKY LUXE · SONIC STRATOSPHERE  ▂▃▅▇█▇▅▃▂
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

## 🎧 Now Spinning

| Section | What it does |
|---|---|
| **Hero** | Full-bleed cosmic hero with gradient/vignette, "Enter the Soundscape" CTA that smooth-scrolls into the catalog |
| **New Releases** | Four-up grid of album/single cards with price + buy button |
| **The Luxe Vault** | Curated catalog cards with descriptions, tags, and quick play/download actions |
| **The Ebook** | Standalone feature panel for the *Sky Luxe AI Blueprint* guide |
| **Showcase** | Spotlight grid for featured TikTok artists, plus a CTA card into the guest list |
| **Guest List** | An "invitation" style contact form for artists applying to be featured |
| **Footer** | Sign-off, nav recap, copyright |

---

## 💿 Track Listing (file structure)

```
skyluxe_com/
├─ index.html     Side A — all markup, single page
├─ styles.css     The mix — theme tokens, layout, components
├─ script.js      The rig — mobile nav, scroll CTA, form handling
└─ img/           The liner art — real release/ebook cover images
```

No `package.json`, no bundler, no framework. It's a three-track EP with cover art.

---

## ▶️ Spin It Up

This is a static site — no install, no build.

**Fastest:** double-click [index.html](index.html), or drag it into a browser tab.

**With a local server** (recommended, avoids relative-path/CORS quirks):

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

**Deploy:** ship the three files as-is to any static host — GitHub Pages, Cloudflare Pages, Netlify, Vercel. No environment variables, no server needed for the site itself.

---

## 🎛️ The Mixing Board (theming)

All colors and typography run through CSS custom properties at the top of [styles.css](styles.css#L1):

```css
:root{
  --background: 240 14% 3.1%;   /* near-black stage */
  --foreground: 213 36% 92%;    /* off-white type */
  --primary:    262 83% 58%;    /* signature violet */
  --accent:     262 60% 20%;
  --secondary:  240 10% 12%;
  --muted:      240 10% 12%;
  --border:     240 10% 16%;
  --card:       240 12% 6%;
}
```

Retune the palette by editing these HSL triplets — everything (buttons, badges, gradients, footer glow) inherits from them.

Type pairing:
- **Cormorant Garamond** (italic serif) — display headings, card titles, the script line
- **Inter** — body copy, nav, UI chrome

Both are pulled from Google Fonts in [index.html](index.html#L7-8).

---

## 🎙️ Session Notes (known state / B-sides)

This build was diffed line-for-line against the live `skyluxemusic.base44.app` (DOM, computed styles, network requests) via Chrome DevTools/Playwright, so it now matches the source: fixed nav that glasses-over on scroll, the centered orbiting hero, the horizontal-scroll Vault "shelf," and the on-hover Showcase bios all mirror the original markup and CSS values pulled straight from base44's stylesheet.

Liner notes for whoever picks this up next:

- **Guest list form is a stub.** [script.js](script.js) intercepts the submit, shows a confirmation message, and resets the form — it does **not** send anywhere yet. Wire it to a real endpoint (a Cloudflare Pages Function, Netlify Form, or any small API) before relying on it to capture invitations. (The live base44 site has the same limitation server-side — it's their auth-gated backend, not something to port.)
- **Showcase artwork is still hot-linked** to `media.base44.com` URLs (see [index.html](index.html)). Those load fine today but the host is base44's — vendor those three images locally before cutting base44 loose entirely. (This is the last hot-linked art on the site — release/vault/ebook art is now local, see below.)
- **Real cover art is wired up.** The four release covers and the ebook cover live in [img/](img/) (`jazz-therapy.jpg`, `sum-a-rayne.jpg`, `four-season-one-vibe.jpg`, `body-collision.jpg`, `e-book.jpg` — all artist-supplied, 800×800 for releases / 1200×1200 for the ebook) and are wired into every release card, vault card, and the ebook cover via `<img>` with `object-fit:cover`. **`.placeholder-art`** in [styles.css](styles.css) is no longer used anywhere but is kept as a fallback gradient class in case a future art slot ships without a real cover.
- **Catalog was swapped to the current DistroKid releases** (replacing the earlier Relax with Jazz / Soul Snatcher / Wet-Wet lineup — that content is still in git history). Each release/vault card now has two actions:
  - **Buy** → `https://paypal.me/ckjkretail/<amount>USD` (confirmed live PayPal.me handle)
  - **Listen** → the release's DistroKid Hyperfollow page (aggregates Spotify/Apple Music/iTunes)

  | Release | Type | Price | Hyperfollow |
  |---|---|---|---|
  | Jazz Therapy | Album | $7.99 | `distrokid.com/hyperfollow/skyluxe/jazz-therapy` |
  | Sum'a Rayne | Single | $1.99 | `distrokid.com/hyperfollow/skyluxe/suma-rayne` |
  | Four Seasons, One Vibe | EP | $7.99 | `distrokid.com/hyperfollow/skyluxe/four-seasons-one-vibe` |
  | Body Collision | Album | $7.99 | `distrokid.com/hyperfollow/skyluxe/body-collision` |

  Vault card blurbs for the three new releases are drafted copy (no editorial description exists on Spotify/Apple Music for any of them) — approved as-is by the artist, but worth revisiting if official liner notes ever show up.
- **Ebook download link is resolved.** The button in [index.html](index.html) points to the correct Gumroad URL (`https://ckjkretail.gumroad.com/l/qsnmvh`) — the live site's own link is corrupted (missing protocol, mystery `Ckjkretail` prefix), but the working checkout page lives at that path. Unlike the tracks, the ebook stays on Gumroad rather than PayPal for now.
- **No checkout backend.** base44's "Buy"/"Download" buttons open a proprietary **Concierge Checkout** drawer that posts to base44's own Payments API (confirmed by clicking through — it renders a cart summary and a "Pay $X" button backed by their infra). That can't be ported as-is. This build instead links Buy straight to PayPal (business email `ckjkretail@gmail.com`) and Download to Gumroad — the honest static-site equivalent. If you want an in-page cart experience on Cloudflare, that's a Worker + Stripe Payment Links / Checkout Sessions project, not a copy-paste.
- Play/preview buttons across the catalog are visual only — no audio player is wired up (the live site doesn't appear to have real preview clips either).

---

## 🌌 Credits

**Sky Luxe** — © 2026. All frequencies reserved.
