# TechStacker

**Pick a stack, not a headache.**

TechStacker is a quick, visual tool for choosing a tech stack for any new project. Select a technology for each layer — frontend, backend, database, styling, auth, hosting — and it shows you the trade-offs, flags anything that won't play well together, and hands you a ready-to-paste AI prompt and an install script so you can start building immediately.

Built for the **Kracked Devs 4-Day Vibe-a-thon**.

## The problem

Developers waste hours debating frameworks and tooling before writing a single line of their actual project. TechStacker turns that decision into a two-minute click-through instead of an afternoon of research.

## Features

- **Six-layer picker** — Frontend, Backend, Database, Styling, Auth, Hosting, each with several real-world options, shown with their technology logos.
- **Docker support** — generates a Dockerfile for your backend (or frontend, if you skip the backend), plus a docker-compose.yml that wires up Postgres or MongoDB when one is selected.
- **Dark mode** — toggle in the top right; follows your system preference by default and remembers your choice.
- **Performance / scalability / cost indicators** — every option shows three small bars (P / S / $) so you can compare trade-offs at a glance, with full detail on hover.
- **Popular stack presets** — one-click MERN, PERN, MEAN, React + Supabase, or Next.js Full Stack.
- **Compatibility flags** — a small rules engine warns about mismatches (e.g. a database with no backend, or a Python backend on Vercel).
- **AI prompt generator** — turns your picks into a prompt you can paste into Claude (or any AI tool) to scaffold the project.
- **Install script generator** — builds the actual terminal commands for your chosen stack, with an editable project folder name.
- **Shareable link & Markdown export** — copy a link that encodes your picks, or export your stack as Markdown for a README or build thread.
- **Surprise me** — generates a random combo if you're stuck for inspiration.

## Built with

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [react-icons](https://react-icons.github.io/react-icons) (Simple Icons set) for technology logos
- Plain CSS, no framework — design tokens (including the dark theme) live at the top of `src/index.css`
- [Claude](https://claude.ai) (Claude Code / claude.ai) — used to build this project itself

## Getting started

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Deploying

```
npm run build
```

This produces a static `dist/` folder you can deploy to:

- **Vercel** — `npx vercel`, or connect the repo (auto-detects Vite)
- **Netlify** — connect the repo, or drag `dist/` onto netlify.com/drop
- **GitHub Pages** — push `dist/` to a `gh-pages` branch

## Project structure

| Path | What's there |
|---|---|
| `src/data/stackData.js` | Every tech option (including its P/S/$ ratings) and the preset stacks |
| `src/data/icons.js` | Maps each option id to its logo icon — add a line here when you add a new tech option |
| `src/data/docker.js` | Dockerfile templates per option, and compose service definitions for self-hostable databases |
| `src/utils/warnings.js` | The compatibility rules engine |
| `src/hooks/useStackBuilder.js` | All app state and derived logic (selections, prompt/script/markdown text) |
| `src/hooks/useTheme.js` | Dark/light mode state, persisted to localStorage |
| `src/components/` | UI pieces — cards, panels, buttons — each one small and self-contained |
| `src/index.css` | Colors, fonts, layout — the Frosted Aura design tokens live at the top |

## Status

✅ **Complete** — every feature is built and verified working: the six-layer picker, presets, performance/scalability/cost ratings, technology icons, compatibility flags, AI prompt generator, install script generator, Docker support, and dark mode.

Vibe-a-thon submission checklist:

- [x] Project name
- [x] One-sentence problem statement
- [ ] Demo video (2–3 minutes)
- [x] Live product link or GitHub repository
- [x] Link to build thread
- [x] AI tools used (Claude)

## License

Built for a hackathon — use it, fork it, riff on it.
