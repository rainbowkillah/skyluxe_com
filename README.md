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
└─ script.js      The rig — mobile nav, scroll CTA, form handling
```

No `package.json`, no bundler, no framework. It's a three-track EP.

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

Liner notes for whoever picks this up next:

- **Guest list form is a stub.** [script.js](script.js#L21-28) intercepts the submit, shows a confirmation message, and resets the form — it does **not** send anywhere yet. Wire it to a real endpoint (a Cloudflare Pages Function, Netlify Form, or any small API) before relying on it to capture invitations.
- **Showcase artwork is hot-linked** to `media.base44.com` URLs (see [index.html](index.html#L163-179)). If that host goes away, those three cards go dark — worth vendoring the images locally.
- **`.placeholder-art`** in [styles.css](styles.css#L97-102) is the fallback gradient used anywhere art hasn't been supplied yet (release/vault/ebook art). Swap in real cover art by replacing those elements with `<img>`/background-image as assets become available.
- Play/download buttons across the catalog are visual only — no audio player or checkout is wired up yet.

---

## 🌌 Credits

**Sky Luxe** — © 2026. All frequencies reserved.
