# Wedding Invite Site

A single-page wedding invite built with React + Vite, deployed to GitHub Pages at
**https://j-etienne1.github.io/wedding-invite-demo/**

---

## Editing the invite

**Almost everything you'll want to change lives in one file: [`src/content.js`](src/content.js).**

Names, date, venue, dress code, the evening timeline, RSVP details and the hotel
list are all plain text in there — no need to touch any component.

Anything still marked `PLACEHOLDER` needs real information before the invite goes out:

- RSVP reply-by date
- Both hotel names, phone numbers, booking references and walking distances

Times marked `tbc: true` render a small *"time to be confirmed"* note underneath.
Delete that flag once a time is locked in.

---

## Project Structure

```
wedding-invite/
├── index.html              ← Root HTML + link-preview (og:) meta tags
├── vite.config.js          ← Vite config (sets base path for GitHub Pages)
├── package.json
├── public/                 ← Copied to the site root as-is
│   ├── portrait-1200.jpg   ← Portrait artwork (desktop)
│   ├── portrait-800.jpg    ← Portrait artwork (mobile)
│   ├── og-image.jpg        ← 1200×630 crop used by WhatsApp / email previews
│   └── bat.svg             ← Favicon
└── src/
    ├── main.jsx            ← App entry point (mounts React)
    ├── App.jsx             ← Renders the single page
    ├── content.js          ← ALL EDITABLE WEDDING DETAILS
    ├── index.css           ← Global styles & CSS variables
    ├── test-setup.js       ← Registers DOM matchers for tests
    └── pages/
        ├── WeddingPage.jsx
        └── WeddingPage.module.css
```

### Why one page

The invite is short enough that scrolling beats navigating. Guests get the link
in WhatsApp, read it once, then come back later to look up a single fact — a
time, the address, which hotel. A second page adds a tap and, worse, a "which
screen was that on?" memory cost. The sticky nav bar (Details · Evening · RSVP ·
Stay) makes every section one tap away without a page load.

There is deliberately **no router**: the in-page `#details`-style anchors are
plain fragments, and the HashRouter this project used to have would swallow them
as route changes.

---

## 1. Initial Setup (do this once)

Make sure you have Node.js installed. Check with:
```bash
node --version   # should be v18 or higher
npm --version
```

Install dependencies:
```bash
npm install
```

---

## 2. Run Locally

```bash
npm run dev
```

Open http://localhost:5173/wedding-invite-demo/ in your browser.
Any changes you save will hot-reload automatically.

---

## 3. Run Tests

### Unit Tests (Vitest)

```bash
npm test              # run once
npm run test:watch    # re-run on file changes
```

Unit tests live in `src/**/__tests__/*.test.jsx`. They read their expected values
from `src/content.js`, so editing the invite text does **not** break them.

### End-to-End Tests (Cypress)

```bash
npm run cypress:open  # interactive
npm run cypress:run   # headless
```

The Cypress specs expect a preview server on port 5174:

```bash
npm run build
npx vite preview --port 5174
```

---

## 4. Link previews (WhatsApp / email)

The `og:` and `twitter:` meta tags in `index.html` control how the link looks
when pasted into WhatsApp, iMessage or an email.

**These URLs must be absolute.** If the repo is renamed or moved to a custom
domain you must update, in three places:

1. `base` in `vite.config.js`
2. `SITE_URL` in `src/content.js`
3. the `og:url`, `og:image` and `twitter:image` tags in `index.html`

To regenerate the preview image after the final artwork arrives (1200×630):

```bash
sips --cropToHeightWidth 1302 2480 --cropOffset 300 0 <final-artwork>.jpg --out /tmp/band.jpg
sips -s format jpeg -s formatOptions 85 --resampleHeightWidth 630 1200 /tmp/band.jpg --out public/og-image.jpg
```

WhatsApp caches previews aggressively. After changing the image, test with a
fresh URL (e.g. add `?v=2`) or use Facebook's Sharing Debugger to force a refetch.

---

## 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes `dist/` to the `gh-pages` branch. Live ~60
seconds later.

---

## Notes

- **Portrait**: `public/portrait-*.jpg` are resized exports of the working sketch
  in the repo root. When the final artwork lands, re-export at the same sizes:
  ```bash
  sips -s format jpeg -s formatOptions 82 --resampleWidth 1200 <final>.jpg --out public/portrait-1200.jpg
  sips -s format jpeg -s formatOptions 80 --resampleWidth 800  <final>.jpg --out public/portrait-800.jpg
  ```
  If the final ever arrives with a **transparent** background, the framed cream
  mat in `.portraitFrame` can be dropped so the line-work floats on the dark page.
- **Fonts**: Loaded from Google Fonts — requires an internet connection.
- **Easter eggs**: Tapping the names triggers blood rain (keyboard users get a
  "Summon the bats" button that appears on focus); the headstone in the corner
  releases bats.
