// Docker templates, kept separate from stackData.js so they're easy to find.
// DOCKERFILES is keyed by option id (frontend or backend) — only options that
// make sense to containerize have an entry; e.g. "None / BaaS only" doesn't.
// DB_SERVICES only covers self-hostable databases (Postgres, Mongo) — SQLite
// needs no container and Supabase/None aren't self-hosted via Docker.

export const DOCKERFILES = {
  // --- frontend (used only when no backend is selected) ---
  'react-vite': {
    port: 80,
    content: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80`,
  },
  vue: {
    port: 80,
    content: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80`,
  },
  angular: {
    port: 80,
    content: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Angular's build output path varies by version — check dist/ and adjust this line if needed
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
EXPOSE 80`,
  },
  sveltekit: {
    port: 3000,
    content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "build"]`,
  },
  vanilla: {
    port: 80,
    content: `FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80`,
  },
  nextjs: {
    port: 3000,
    content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`,
  },

  // --- backend ---
  express: {
    port: 3000,
    content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`,
  },
  fastapi: {
    port: 8000,
    content: `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
  },
  django: {
    port: 8000,
    content: `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]`,
  },
  nextapi: {
    port: 3000,
    content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`,
  },
};

export const DB_SERVICES = {
  postgres: {
    image: 'postgres:16-alpine',
    port: 5432,
    volumePath: '/var/lib/postgresql/data',
    env: { POSTGRES_USER: 'app', POSTGRES_PASSWORD: 'app', POSTGRES_DB: 'app' },
    connectionEnvVar: 'DATABASE_URL',
    connectionValue: 'postgresql://app:app@db:5432/app',
  },
  mongo: {
    image: 'mongo:7',
    port: 27017,
    volumePath: '/data/db',
    env: {},
    connectionEnvVar: 'MONGODB_URI',
    connectionValue: 'mongodb://db:27017/app',
  },
};
