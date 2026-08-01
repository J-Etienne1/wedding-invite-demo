# Moving this onto the Windows PC

This folder is a clean copy — no `node_modules`, no `dist`. Both get rebuilt on
the Windows side, and the macOS `node_modules` would not work there anyway.

---

## Step 1 — Copy the files over

Copy the **contents** of this folder into your existing repo folder on Windows,
overwriting when prompted.

Do **not** delete the whole repo folder first — you would lose the `.git`
directory and with it your history and the GitHub remote.

---

## Step 2 — Delete two files that no longer belong

**This is the step that copy-and-paste cannot do for you.** Overwriting adds and
replaces files, but it never removes ones that were deleted. The after-party page
is gone now that the invite is a single page, so delete both of these from your
repo:

```
src/pages/AfterPartyPage.jsx
src/pages/AfterPartyPage.module.css
```

Nothing imports them any more, so the site will build fine either way — but left
behind they are dead code that will confuse you in a year.

Check they are gone:

```powershell
dir src\pages
```

You should see only `WeddingPage.jsx`, `WeddingPage.module.css`, and the
`__tests__` folder.

---

## Step 3 — Reinstall dependencies

```powershell
npm install
```

`package.json` **and** `package-lock.json` both changed — make sure both came
across. The dependency fixes in there:

- `@vitejs/plugin-react` upgraded to v6 (v4 does not support Vite 8)
- `vitest` upgraded to v4 (v1 bundled its own Vite 5, so the React plugin never applied)
- `@testing-library/jest-dom` added (the DOM matchers the tests use)
- `react-router-dom` removed (the site is one page, no router)

If `npm install` fails with an `ERESOLVE` peer dependency error, the old
`package.json` is still in place — recopy it.

---

## Step 4 — Check it works

```powershell
npm test
```

Expect **21 passed**.

```powershell
npm run dev
```

Open http://localhost:5173/wedding-invite-demo/

Then the end-to-end tests, which could not run on the Mac:

```powershell
npm run build
npx vite preview --port 5174
```

and in a second terminal:

```powershell
npm run cypress:run
```

---

## Step 5 — Commit and deploy

```powershell
git status
```

You should see the two deleted `AfterPartyPage` files, the new `public/` folder,
new `src/content.js` and `src/test-setup.js`, and modifications to the rest.

```powershell
git add -A
git commit -m "Rebuild invite as a single page with portrait and link previews"
git push
npm run deploy
```

---

## Things to watch for

**The artwork filename.** `Jason&Debbie🖤Working_Sketch.jpg` contains an emoji and
an `&`. It should survive an exFAT or NTFS USB stick, but if it arrives mangled
or missing, it is only the source artwork — the web-sized copies the site
actually uses are in `public/` and are named plainly.

**Line endings.** Git on Windows may report every file as modified because of
CRLF vs LF. Harmless. If it is noisy:

```powershell
git config core.autocrlf true
```

**`.gitignore` is a hidden file.** It is in this folder and needs to come across.
If you copy by dragging in File Explorer, turn on "Hidden items" under the View
tab first, or you will silently miss it.
