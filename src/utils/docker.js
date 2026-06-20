import { DOCKERFILES, DB_SERVICES } from '../data/docker';

// Decides which option actually gets containerized: the backend if one is
// selected and has a Dockerfile, otherwise the frontend (for a backend-less
// static/SPA project). Returns null if neither has a Docker template.
function pickApp(selections) {
  const backendTemplate = DOCKERFILES[selections.backend];
  if (selections.backend && selections.backend !== 'none-backend' && backendTemplate) {
    return { source: 'backend', ...backendTemplate };
  }
  const frontendTemplate = DOCKERFILES[selections.frontend];
  if (selections.frontend && frontendTemplate) {
    return { source: 'frontend', ...frontendTemplate };
  }
  return null;
}

export function buildDocker(selections) {
  const app = pickApp(selections);
  if (!app) {
    return { dockerfile: null, compose: null, note: null };
  }

  const db = DB_SERVICES[selections.database] || null;

  if (!db) {
    return {
      dockerfile: app.content,
      compose: null,
      note:
        selections.database && selections.database !== 'none-db'
          ? `Your database choice isn't self-hosted via Docker here, so this Dockerfile just covers the ${app.source}. Connect to it the same way you would outside Docker.`
          : null,
    };
  }

  const envLines = Object.entries(db.env)
    .map(([key, value]) => `      ${key}: ${value}`)
    .join('\n');

  const compose = `services:
  app:
    build: .
    ports:
      - "${app.port}:${app.port}"
    environment:
      ${db.connectionEnvVar}: ${db.connectionValue}
    depends_on:
      - db

  db:
    image: ${db.image}
    restart: unless-stopped
${envLines ? `    environment:\n${envLines}\n` : ''}    ports:
      - "${db.port}:${db.port}"
    volumes:
      - db-data:${db.volumePath}

volumes:
  db-data:`;

  return { dockerfile: app.content, compose, note: null };
}
