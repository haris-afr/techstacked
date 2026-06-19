// All the layers, options, and ready-made presets live here.
// To add a new tech option: copy an entry inside the relevant category's
// `options` array and edit the fields.
// To add a whole new category: add a key here, then add it to STACK_ORDER.
// To add a new popular-stack preset: add an entry to PRESETS at the bottom.

export const STACK_ORDER = ['frontend', 'backend', 'database', 'styling', 'auth', 'hosting'];

export const STACK = {
  frontend: {
    label: 'Frontend',
    options: [
      { id: 'react-vite', name: 'React + Vite', tag: 'SPA', pros: ['Huge ecosystem & community', 'Fast dev reload'], cons: ['No built-in routing or SSR'], install: ['npm create vite@latest {dir} -- --template react'], promptBit: 'a React (Vite) single-page frontend' },
      { id: 'nextjs', name: 'Next.js', tag: 'SSR / fullstack', pros: ['File-based routing', 'SSR/SSG and API routes built in'], cons: ['More opinionated, slightly heavier'], install: ['npx create-next-app@latest {dir}'], promptBit: 'a Next.js frontend with SSR support' },
      { id: 'sveltekit', name: 'SvelteKit', tag: 'SPA / SSR', pros: ['Very little boilerplate', 'Small bundle size'], cons: ['Smaller ecosystem than React'], install: ['npx sv create {dir}'], promptBit: 'a SvelteKit frontend' },
      { id: 'vue', name: 'Vue 3', tag: 'SPA', pros: ['Gentle learning curve', 'Clear documentation'], cons: ['Smaller hiring pool than React'], install: ['npm create vue@latest {dir}'], promptBit: 'a Vue 3 frontend' },
      { id: 'angular', name: 'Angular', tag: 'SPA, full framework', pros: ['Routing, forms & DI included', 'TypeScript by default'], cons: ['Steeper learning curve'], install: ['npm install -g @angular/cli && ng new {dir}'], promptBit: 'an Angular frontend' },
      { id: 'vanilla', name: 'Plain HTML/JS', tag: 'No framework', pros: ['Zero build step', 'Deploys anywhere instantly'], cons: ['Manual DOM work as it grows'], install: ['mkdir {dir} && cd {dir} && touch index.html style.css script.js'], promptBit: 'a plain HTML/CSS/JS frontend with no framework' },
    ],
  },
  backend: {
    label: 'Backend',
    options: [
      { id: 'express', name: 'Node + Express', tag: 'REST API', pros: ['Minimal and flexible', 'Same language as the frontend'], cons: ['You wire up the structure yourself'], install: ['npm install express'], promptBit: 'a Node.js + Express REST API backend' },
      { id: 'fastapi', name: 'FastAPI', tag: 'REST API', pros: ['Auto-generated API docs', 'Async by default'], cons: ['Python packaging can be fiddly'], install: ['pip install fastapi uvicorn'], promptBit: 'a Python FastAPI backend' },
      { id: 'django', name: 'Django', tag: 'Batteries-included', pros: ['Admin panel for free', 'Auth and ORM built in'], cons: ['Heavier than most hackathons need'], install: ['pip install django && django-admin startproject {dir}'], promptBit: 'a Django backend' },
      { id: 'nextapi', name: 'Next.js API routes', tag: 'Fullstack', pros: ['Nothing extra to deploy', 'Shares types with the frontend'], cons: ['Tied to the Next.js app'], install: ["echo 'Add route files under /app/api in your Next.js project'"], promptBit: 'Next.js API routes as the backend' },
      { id: 'none-backend', name: 'None / BaaS only', tag: 'Serverless', pros: ['Nothing to deploy or scale yourself'], cons: ['Less control over custom logic'], install: ["echo 'No custom backend needed'"], promptBit: 'no custom backend, relying on a backend-as-a-service instead' },
    ],
  },
  database: {
    label: 'Database',
    options: [
      { id: 'postgres', name: 'PostgreSQL', tag: 'SQL', pros: ['Rock-solid and ACID compliant', 'Wide hosting support'], cons: ['Needs a schema and migrations'], install: ['npm install pg'], promptBit: 'a PostgreSQL database' },
      { id: 'mongo', name: 'MongoDB', tag: 'NoSQL', pros: ['Flexible, schema-less documents'], cons: ['Easy to end up with inconsistent shapes'], install: ['npm install mongoose'], promptBit: 'a MongoDB database' },
      { id: 'sqlite', name: 'SQLite', tag: 'SQL, file-based', pros: ['Zero setup, single file'], cons: ['Not built for concurrent multi-user load'], install: ['npm install better-sqlite3'], promptBit: 'a local SQLite database' },
      { id: 'supabase', name: 'Supabase', tag: 'Postgres + BaaS', pros: ['Postgres with auth & storage included'], cons: ["You're tied to their platform conventions"], install: ['npm install @supabase/supabase-js'], promptBit: 'Supabase as the database and backend layer' },
      { id: 'none-db', name: 'None', tag: 'Stateless', pros: ['Nothing to host or back up'], cons: ['No persistence between sessions'], install: ["echo 'No database needed'"], promptBit: 'no database, the app is stateless' },
    ],
  },
  styling: {
    label: 'Styling',
    options: [
      { id: 'tailwind', name: 'Tailwind CSS', tag: 'Utility-first', pros: ['Fast to build with, no context switching'], cons: ['Markup can get verbose'], install: ['npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p'], promptBit: 'Tailwind CSS for styling' },
      { id: 'css-modules', name: 'CSS Modules', tag: 'Scoped CSS', pros: ['Plain CSS, scoped per component'], cons: ['No design system out of the box'], install: ["echo 'Most modern bundlers support CSS Modules out of the box'"], promptBit: 'CSS Modules for styling' },
      { id: 'styled-components', name: 'styled-components', tag: 'CSS-in-JS', pros: ['Styles live next to components'], cons: ['Small runtime cost vs static CSS'], install: ['npm install styled-components'], promptBit: 'styled-components for styling' },
      { id: 'plain-css', name: 'Plain CSS', tag: 'No tooling', pros: ['No build step, no dependencies'], cons: ['You manage naming collisions yourself'], install: ["echo 'No styling install needed'"], promptBit: 'plain hand-written CSS' },
    ],
  },
  auth: {
    label: 'Auth',
    options: [
      { id: 'clerk', name: 'Clerk', tag: 'Hosted', pros: ['Drop-in UI components', 'Handles social login & MFA'], cons: ['Paid past the free tier'], install: ['npm install @clerk/clerk-react'], promptBit: 'Clerk for authentication' },
      { id: 'nextauth', name: 'NextAuth.js', tag: 'Self-hosted', pros: ['Free and open source'], cons: ['More config than a hosted option'], install: ['npm install next-auth'], promptBit: 'NextAuth.js for authentication' },
      { id: 'supabase-auth', name: 'Supabase Auth', tag: 'Hosted', pros: ['Comes free with Supabase'], cons: ['Best when already using Supabase'], install: ["echo 'Included with @supabase/supabase-js'"], promptBit: 'Supabase Auth for authentication' },
      { id: 'none-auth', name: 'None', tag: 'Public app', pros: ['One less system to secure'], cons: ['No per-user accounts or data'], install: ["echo 'No auth needed'"], promptBit: 'no authentication layer' },
    ],
  },
  hosting: {
    label: 'Hosting',
    options: [
      { id: 'vercel', name: 'Vercel', tag: 'Frontend / Next.js', pros: ['Zero-config for Next.js/React'], cons: ['Serverless limits on the free tier'], install: ['npm install -g vercel'], promptBit: 'deployment on Vercel' },
      { id: 'railway', name: 'Railway', tag: 'Full backend', pros: ['Easy Postgres + backend together'], cons: ['Free tier has usage caps'], install: ['npm install -g @railway/cli'], promptBit: 'deployment on Railway' },
      { id: 'netlify', name: 'Netlify', tag: 'Frontend / JAMstack', pros: ['Great for static + serverless functions'], cons: ['Less ideal for long-running servers'], install: ['npm install -g netlify-cli'], promptBit: 'deployment on Netlify' },
      { id: 'render', name: 'Render', tag: 'Full backend', pros: ['Free tier for small web services'], cons: ['Free services spin down when idle'], install: ["echo 'Deploy via the Render dashboard'"], promptBit: 'deployment on Render' },
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
