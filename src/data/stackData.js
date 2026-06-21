// All the layers, options, and ready-made presets live here.
// To add a new tech option: copy an entry inside the relevant category's
// `options` array and edit the fields. `blurb` is the short description
// shown on the card itself. `ratings` are 1-5 and drive the little
// indicator bars (performance / scalability / cost, where a higher cost
// score means more cost-efficient / cheaper).
// To add a whole new category: add a key here, then add it to STACK_ORDER.
// To add a new popular-stack preset: add an entry to PRESETS at the bottom.

export const STACK_ORDER = ['frontend', 'backend', 'database', 'styling', 'auth', 'hosting'];

export const STACK = {
  frontend: {
    label: 'Frontend',
    options: [
      { id: 'react-vite', name: 'React + Vite', tag: 'SPA', language: 'JavaScript', blurb: "A fast, component-based UI library paired with Vite's near-instant dev server and build tooling.", pros: ['Huge ecosystem & community', 'Fast dev reload'], cons: ['No built-in routing or SSR'], install: ['npm create vite@latest {dir} -- --template react'], promptBit: 'a React (Vite) single-page frontend', ratings: { performance: 4, scalability: 4, cost: 5 } },
      { id: 'nextjs', name: 'Next.js', tag: 'SSR / fullstack', language: 'JavaScript', blurb: "React's most popular framework, adding server rendering, file-based routing, and API endpoints out of the box.", pros: ['File-based routing', 'SSR/SSG and API routes built in'], cons: ['More opinionated, slightly heavier'], install: ['npx create-next-app@latest {dir}'], promptBit: 'a Next.js frontend with SSR support', ratings: { performance: 4, scalability: 5, cost: 4 } },
      { id: 'sveltekit', name: 'SvelteKit', tag: 'SPA / SSR', language: 'JavaScript', blurb: 'Compiles away at build time for a tiny runtime, with file-based routing and SSR built in.', pros: ['Very little boilerplate', 'Small bundle size'], cons: ['Smaller ecosystem than React'], install: ['npx sv create {dir}'], promptBit: 'a SvelteKit frontend', ratings: { performance: 5, scalability: 4, cost: 5 } },
      { id: 'vue', name: 'Vue 3', tag: 'SPA', language: 'JavaScript', blurb: 'An approachable, well-documented framework that scales from small widgets to full single-page apps.', pros: ['Gentle learning curve', 'Clear documentation'], cons: ['Smaller hiring pool than React'], install: ['npm create vue@latest {dir}'], promptBit: 'a Vue 3 frontend', ratings: { performance: 4, scalability: 4, cost: 5 } },
      { id: 'angular', name: 'Angular', tag: 'SPA, full framework', language: 'TypeScript', blurb: "Google's full-featured framework, with routing, forms, and dependency injection built in from day one.", pros: ['Routing, forms & DI included', 'TypeScript by default'], cons: ['Steeper learning curve'], install: ['npm install -g @angular/cli && ng new {dir}'], promptBit: 'an Angular frontend', ratings: { performance: 3, scalability: 5, cost: 5 } },
      { id: 'vanilla', name: 'Plain HTML/JS', tag: 'No framework', language: 'JavaScript', blurb: 'No framework and no build tools — just HTML, CSS, and JavaScript running directly in the browser.', pros: ['Zero build step', 'Deploys anywhere instantly'], cons: ['Manual DOM work as it grows'], install: ['mkdir {dir} && cd {dir} && touch index.html style.css script.js'], promptBit: 'a plain HTML/CSS/JS frontend with no framework', ratings: { performance: 5, scalability: 2, cost: 5 } },
    ],
  },
  backend: {
    label: 'Backend',
    options: [
      { id: 'express', name: 'Node + Express', tag: 'REST API', language: 'JavaScript', blurb: 'A minimal, unopinionated Node.js framework — you bring your own structure and middleware.', pros: ['Minimal and flexible', 'Same language as the frontend'], cons: ['You wire up the structure yourself'], install: ['npm install express'], promptBit: 'a Node.js + Express REST API backend', ratings: { performance: 4, scalability: 4, cost: 5 } },
      { id: 'fastapi', name: 'FastAPI', tag: 'REST API', language: 'Python', blurb: 'A modern Python framework built for speed, with automatic interactive API documentation included.', pros: ['Auto-generated API docs', 'Async by default'], cons: ['Python packaging can be fiddly'], install: ['pip install fastapi uvicorn'], promptBit: 'a Python FastAPI backend', ratings: { performance: 5, scalability: 4, cost: 5 } },
      { id: 'django', name: 'Django', tag: 'Batteries-included', language: 'Python', blurb: 'A mature Python framework that bundles an ORM, an admin panel, and an auth system together.', pros: ['Admin panel for free', 'Auth and ORM built in'], cons: ['Heavier than most hackathons need'], install: ['pip install django && django-admin startproject {dir}'], promptBit: 'a Django backend', ratings: { performance: 3, scalability: 4, cost: 5 } },
      { id: 'nextapi', name: 'Next.js API routes', tag: 'Fullstack', language: 'JavaScript', blurb: 'Server-side routes that live inside your Next.js app, sharing code and types with the frontend.', pros: ['Nothing extra to deploy', 'Shares types with the frontend'], cons: ['Tied to the Next.js app'], install: ["echo 'Add route files under /app/api in your Next.js project'"], promptBit: 'Next.js API routes as the backend', ratings: { performance: 4, scalability: 3, cost: 4 } },
      { id: 'none-backend', name: 'None / BaaS only', tag: 'Serverless', blurb: 'Skip a custom server entirely and lean on a backend-as-a-service for data and logic instead.', pros: ['Nothing to deploy or scale yourself'], cons: ['Less control over custom logic'], install: ["echo 'No custom backend needed'"], promptBit: 'no custom backend, relying on a backend-as-a-service instead', ratings: { performance: 5, scalability: 3, cost: 5 } },
    ],
  },
  database: {
    label: 'Database',
    options: [
      { id: 'postgres', name: 'PostgreSQL', tag: 'SQL', language: 'SQL', blurb: 'A powerful open-source relational database known for reliability and strict data integrity.', pros: ['Rock-solid and ACID compliant', 'Wide hosting support'], cons: ['Needs a schema and migrations'], install: ['npm install pg'], promptBit: 'a PostgreSQL database', ratings: { performance: 4, scalability: 5, cost: 4 } },
      { id: 'mongo', name: 'MongoDB', tag: 'NoSQL', blurb: 'A document-based NoSQL database that stores flexible, JSON-like records instead of rigid tables.', pros: ['Flexible, schema-less documents'], cons: ['Easy to end up with inconsistent shapes'], install: ['npm install mongoose'], promptBit: 'a MongoDB database', ratings: { performance: 4, scalability: 4, cost: 4 } },
      { id: 'sqlite', name: 'SQLite', tag: 'SQL, file-based', language: 'SQL', blurb: 'A lightweight, file-based SQL database with no separate server to set up or manage.', pros: ['Zero setup, single file'], cons: ['Not built for concurrent multi-user load'], install: ['npm install better-sqlite3'], promptBit: 'a local SQLite database', ratings: { performance: 5, scalability: 1, cost: 5 } },
      { id: 'supabase', name: 'Supabase', tag: 'Postgres + BaaS', language: 'SQL', blurb: 'An open-source Firebase alternative built on Postgres, bundling auth, storage, and realtime data.', pros: ['Postgres with auth & storage included'], cons: ["You're tied to their platform conventions"], install: ['npm install @supabase/supabase-js'], promptBit: 'Supabase as the database and backend layer', ratings: { performance: 4, scalability: 4, cost: 3 } },
      { id: 'none-db', name: 'None', tag: 'Stateless', blurb: "No database at all — the app doesn't need to persist anything between sessions.", pros: ['Nothing to host or back up'], cons: ['No persistence between sessions'], install: ["echo 'No database needed'"], promptBit: 'no database, the app is stateless', ratings: { performance: 5, scalability: 1, cost: 5 } },
    ],
  },
  styling: {
    label: 'Styling',
    options: [
      { id: 'tailwind', name: 'Tailwind CSS', tag: 'Utility-first', blurb: 'A utility-first CSS framework where you compose designs directly in your markup, no separate stylesheet.', pros: ['Fast to build with, no context switching'], cons: ['Markup can get verbose'], install: ['npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p'], promptBit: 'Tailwind CSS for styling', ratings: { performance: 4, scalability: 5, cost: 5 } },
      { id: 'css-modules', name: 'CSS Modules', tag: 'Scoped CSS', blurb: 'Plain CSS files that are automatically scoped to the component that imports them, no naming conventions needed.', pros: ['Plain CSS, scoped per component'], cons: ['No design system out of the box'], install: ["echo 'Most modern bundlers support CSS Modules out of the box'"], promptBit: 'CSS Modules for styling', ratings: { performance: 5, scalability: 4, cost: 5 } },
      { id: 'styled-components', name: 'styled-components', tag: 'CSS-in-JS', blurb: 'Write actual CSS inside your JavaScript, scoped per component, with dynamic theming support.', pros: ['Styles live next to components'], cons: ['Small runtime cost vs static CSS'], install: ['npm install styled-components'], promptBit: 'styled-components for styling', ratings: { performance: 3, scalability: 4, cost: 5 } },
      { id: 'plain-css', name: 'Plain CSS', tag: 'No tooling', blurb: 'Standard CSS with no extra tooling, build step, or library to learn — just stylesheets.', pros: ['No build step, no dependencies'], cons: ['You manage naming collisions yourself'], install: ["echo 'No styling install needed'"], promptBit: 'plain hand-written CSS', ratings: { performance: 5, scalability: 2, cost: 5 } },
    ],
  },
  auth: {
    label: 'Auth',
    options: [
      { id: 'clerk', name: 'Clerk', tag: 'Hosted', blurb: 'A drop-in authentication service with prebuilt UI for sign-up, login, and account management.', pros: ['Drop-in UI components', 'Handles social login & MFA'], cons: ['Paid past the free tier'], install: ['npm install @clerk/clerk-react'], promptBit: 'Clerk for authentication', ratings: { performance: 4, scalability: 5, cost: 2 } },
      { id: 'nextauth', name: 'NextAuth.js', tag: 'Self-hosted', blurb: 'An open-source authentication library for Next.js with built-in support for dozens of providers.', pros: ['Free and open source'], cons: ['More config than a hosted option'], install: ['npm install next-auth'], promptBit: 'NextAuth.js for authentication', ratings: { performance: 4, scalability: 4, cost: 5 } },
      { id: 'supabase-auth', name: 'Supabase Auth', tag: 'Hosted', blurb: 'Authentication that comes bundled with Supabase, sharing the same database and user records.', pros: ['Comes free with Supabase'], cons: ['Best when already using Supabase'], install: ["echo 'Included with @supabase/supabase-js'"], promptBit: 'Supabase Auth for authentication', ratings: { performance: 4, scalability: 4, cost: 4 } },
      { id: 'none-auth', name: 'None', tag: 'Public app', blurb: 'No accounts or sign-in — every visitor sees the same public, unauthenticated app.', pros: ['One less system to secure'], cons: ['No per-user accounts or data'], install: ["echo 'No auth needed'"], promptBit: 'no authentication layer', ratings: { performance: 5, scalability: 5, cost: 5 } },
    ],
  },
  hosting: {
    label: 'Hosting',
    options: [
      { id: 'vercel', name: 'Vercel', tag: 'Frontend / Next.js', blurb: 'The company behind Next.js, optimized for instant deploys and edge-rendered frontends.', pros: ['Zero-config for Next.js/React'], cons: ['Serverless limits on the free tier'], install: ['npm install -g vercel'], promptBit: 'deployment on Vercel', ratings: { performance: 5, scalability: 4, cost: 3 } },
      { id: 'railway', name: 'Railway', tag: 'Full backend', blurb: 'A developer-friendly platform for spinning up backends and databases without managing servers.', pros: ['Easy Postgres + backend together'], cons: ['Free tier has usage caps'], install: ['npm install -g @railway/cli'], promptBit: 'deployment on Railway', ratings: { performance: 4, scalability: 4, cost: 3 } },
      { id: 'netlify', name: 'Netlify', tag: 'Frontend / JAMstack', blurb: 'A popular host for static sites and JAMstack apps, with serverless functions built in.', pros: ['Great for static + serverless functions'], cons: ['Less ideal for long-running servers'], install: ['npm install -g netlify-cli'], promptBit: 'deployment on Netlify', ratings: { performance: 4, scalability: 4, cost: 3 } },
      { id: 'render', name: 'Render', tag: 'Full backend', blurb: 'A straightforward cloud platform for web services, databases, and background jobs.', pros: ['Free tier for small web services'], cons: ['Free services spin down when idle'], install: ["echo 'Deploy via the Render dashboard'"], promptBit: 'deployment on Render', ratings: { performance: 4, scalability: 3, cost: 4 } },
    ],
  },
};

export function getOption(categoryKey, id) {
  if (!id) return null;
  const category = STACK[categoryKey];
  return category ? category.options.find((o) => o.id === id) || null : null;
}

// Popular named stacks. `picks` only needs to cover the layers the acronym
// actually specifies — anything left out stays unselected so the user can
// fill it in themselves (e.g. styling/auth/hosting for MERN/PERN/MEAN).
export const PRESETS = [
  { id: 'mern', name: 'MERN', description: 'MongoDB, Express, React, Node', picks: { frontend: 'react-vite', backend: 'express', database: 'mongo' } },
  { id: 'pern', name: 'PERN', description: 'PostgreSQL, Express, React, Node', picks: { frontend: 'react-vite', backend: 'express', database: 'postgres' } },
  { id: 'mean', name: 'MEAN', description: 'MongoDB, Express, Angular, Node', picks: { frontend: 'angular', backend: 'express', database: 'mongo' } },
  { id: 'supabase-react', name: 'React + Supabase', description: 'A fast BaaS combo, popular for hackathons', picks: { frontend: 'react-vite', backend: 'none-backend', database: 'supabase', auth: 'supabase-auth', hosting: 'vercel' } },
  { id: 'next-full', name: 'Next.js Full Stack', description: 'Next.js API routes, Postgres, and Tailwind on Vercel', picks: { frontend: 'nextjs', backend: 'nextapi', database: 'postgres', styling: 'tailwind', hosting: 'vercel' } },
];
