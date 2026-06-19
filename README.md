# TechStacked

A tech stack builder: pick a technology for each layer of your project, see pros/cons and compatibility flags, and get a ready-to-paste AI prompt plus an install script. Includes one-click presets for popular stacks (MERN, PERN, MEAN, and a couple of modern BaaS combos).

## Run it locally

```
npm install
npm run dev
```

This starts a dev server (Vite will print the local URL, usually `http://localhost:5173`).

## Build for production

```
npm run build
```

Outputs static files to `dist/`. This is a plain static site — no server required.

## Deploy

Any static host works since this is just a Vite build:

- **Vercel** — run `npx vercel` in this folder, or connect the repo at vercel.com. It auto-detects Vite.
- **Netlify** — connect the repo at netlify.com, or run `npm run build` and drag the `dist/` folder onto netlify.com/drop.
- **GitHub Pages** — run `npm run build`, then deploy the `dist/` folder to the `gh-pages` branch (or use the `gh-pages` npm package to automate it).

## Where things live

- `src/data/stackData.js` — every tech option (name, pros/cons, install command, AI prompt phrasing) and the preset stacks (MERN, PERN, etc.). Add a new option by copying an existing entry in the right category's array. Add a new preset by adding an object to `PRESETS`.
- `src/utils/warnings.js` — the compatibility rules engine. Add a new rule as another `if` block that pushes a `{ level, msg }` object.
- `src/hooks/useStackBuilder.js` — all the app's state and logic (selections, presets, generated prompt/script/markdown text). The components below just render this.
- `src/components/` — one file per UI piece (cards, panels, buttons). Each is small and self-contained.
- `src/index.css` — all colors, fonts, and layout. The Frosted Aura palette and type choices are CSS variables at the top of the file — change them there to retheme everything at once.

## Notes

- No backend or database is used — everything (your picks, the generated prompt, the install script) is computed client-side from `stackData.js`.
- The "Copy share link" button encodes your picks into the URL hash so you can share a specific combo. This requires a normal browser tab; it's disabled gracefully in sandboxed preview environments.
