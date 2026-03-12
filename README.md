# Wedding Invite Site

A two-page wedding invite built with React + Vite, deployable to GitHub Pages.

---

## Project Structure

```
wedding-invite/
├── index.html              ← Root HTML file (Vite entry point)
├── vite.config.js          ← Vite config (sets base path for GitHub Pages)
├── package.json            ← Dependencies and scripts
└── src/
    ├── main.jsx            ← App entry point (mounts React)
    ├── App.jsx             ← Route definitions
    ├── index.css           ← Global styles & CSS variables
    └── pages/
        ├── WeddingPage.jsx            ← Page 1: invite + RSVP
        ├── WeddingPage.module.css
        ├── AfterPartyPage.jsx         ← Page 2: after party + accommodation
        └── AfterPartyPage.module.css
```

---

## 1. Initial Setup (do this once)

Make sure you have Node.js installed. Check with:
```bash
node --version   # should be v18 or higher
npm --version
```

Install dependencies:
```bash
cd wedding-invite
npm install
```

---

## 2. Run Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.
Any changes you save will hot-reload automatically.

---

## 3. Add Your Google Form URL

In `src/pages/WeddingPage.jsx`, find this line near the top:

```js
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-here'
```

Replace with your actual Google Form URL. The RSVP button will open it in a new tab.

---

## 4. Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
Go to github.com → New repository → name it `wedding-invite` (or whatever you like).

### Step 2 — Update vite.config.js
Open `vite.config.js` and change the base to match your repo name:
```js
base: '/your-repo-name/',
```
If you're deploying to a custom domain or a user/org root page (username.github.io),
set base to:
```js
base: '/',
```

### Step 3 — Update package.json homepage (optional but recommended)
Add a homepage field to package.json:
```json
"homepage": "https://yourusername.github.io/wedding-invite"
```

### Step 4 — Push your code
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/wedding-invite.git
git push -u origin main
```

### Step 5 — Deploy
```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to a `gh-pages` branch.

### Step 6 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Under "Branch", select `gh-pages` and click Save
4. Wait ~60 seconds, then visit: `https://yourusername.github.io/wedding-invite`

### Re-deploying after changes
Whenever you make changes:
```bash
npm run deploy
```
That's it — it rebuilds and pushes automatically.

---

## Notes

- **Routing**: The app uses hash-based routing (`/#/afterparty`) which works perfectly
  with GitHub Pages without any server configuration needed.
- **Google Form**: The RSVP button opens the form in a new tab. See step 3 above.
- **Fonts**: Loaded from Google Fonts — requires an internet connection to display correctly.
