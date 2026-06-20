// Maps each option id (from stackData.js) to an icon component.
// Brand logos come from Simple Icons via react-icons/si — verified against
// the installed package so every import below actually exists.
// Options with no official logo (a "None" choice, or a tool without a
// brand mark in Simple Icons) fall back to a generic icon instead.

import {
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiVuedotjs,
  SiAngular,
  SiHtml5,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiCssmodules,
  SiStyledcomponents,
  SiCss,
  SiClerk,
  SiVercel,
  SiRailway,
  SiNetlify,
  SiRender,
} from 'react-icons/si';
import { FiSlash, FiKey } from 'react-icons/fi';

export const ICONS = {
  'react-vite': SiReact,
  nextjs: SiNextdotjs,
  sveltekit: SiSvelte,
  vue: SiVuedotjs,
  angular: SiAngular,
  vanilla: SiHtml5,

  express: SiExpress,
  fastapi: SiFastapi,
  django: SiDjango,
  nextapi: SiNextdotjs,
  'none-backend': FiSlash,

  postgres: SiPostgresql,
  mongo: SiMongodb,
  sqlite: SiSqlite,
  supabase: SiSupabase,
  'none-db': FiSlash,

  tailwind: SiTailwindcss,
  'css-modules': SiCssmodules,
  'styled-components': SiStyledcomponents,
  'plain-css': SiCss,

  clerk: SiClerk,
  nextauth: FiKey, // no official NextAuth mark in Simple Icons — generic key icon instead
  'supabase-auth': SiSupabase,
  'none-auth': FiSlash,

  vercel: SiVercel,
  railway: SiRailway,
  netlify: SiNetlify,
  render: SiRender,
};
