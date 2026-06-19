import { getOption } from '../data/stackData';

// Add new compatibility checks here. Each rule just inspects the current
// selections and pushes a { level, msg } object if it applies.
// level is one of: 'warn' | 'info' | 'ok'
export function buildWarnings(selections) {
  const f = getOption('frontend', selections.frontend);
  const b = getOption('backend', selections.backend);
  const d = getOption('database', selections.database);
  const s = getOption('styling', selections.styling);
  const a = getOption('auth', selections.auth);
  const h = getOption('hosting', selections.hosting);
  const flags = [];

  if (b && b.id === 'none-backend' && d && !['none-db', 'supabase'].includes(d.id)) {
    flags.push({ level: 'warn', msg: `${d.name} usually needs a backend (or a BaaS like Supabase) to be queried securely from the browser.` });
  }
  if (h && h.id === 'vercel' && b && ['fastapi', 'django'].includes(b.id)) {
    flags.push({ level: 'warn', msg: `Vercel's serverless functions aren't built for long-running Python servers — Railway or Render will be smoother for ${b.name}.` });
  }
  if (a && a.id !== 'none-auth' && b && b.id === 'none-backend' && !['clerk', 'supabase-auth'].includes(a.id)) {
    flags.push({ level: 'warn', msg: `${a.name} usually needs a backend to verify sessions — pair it with one, or switch to a hosted option like Clerk or Supabase Auth.` });
  }
  if (f && f.id === 'vanilla' && s && s.id === 'tailwind') {
    flags.push({ level: 'info', msg: "Plain HTML/JS + Tailwind works, but you'll want the Tailwind CLI or CDN build step since there's no bundler here." });
  }
  if (d && d.id === 'mongo' && b && b.id === 'fastapi') {
    flags.push({ level: 'info', msg: 'FastAPI leans SQL by convention — for Mongo, the Motor or Beanie libraries are the usual pick over a plain driver.' });
  }
  if (h && h.id === 'netlify' && b && ['express', 'fastapi', 'django'].includes(b.id)) {
    flags.push({ level: 'info', msg: `Netlify functions suit light, short-lived requests — an always-on server like ${b.name} usually fits Railway or Render better.` });
  }

  const filledCount = Object.values(selections).filter(Boolean).length;
  const warnCount = flags.filter((fl) => fl.level === 'warn').length;
  if (filledCount >= 3 && warnCount === 0) {
    flags.push({ level: 'ok', msg: 'This combination looks coherent — a solid foundation to start building on.' });
  }
  return flags;
}
