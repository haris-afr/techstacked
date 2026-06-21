import { getOption } from '../data/stackData';

// Only frontend, backend, and database actually introduce a programming
// language — styling/auth/hosting choices don't change what you're coding
// in, so they're intentionally left out of this calculation.
export function getLanguages(selections) {
  const byLanguage = {};

  function add(layerLabel, option) {
    if (!option || !option.language) return;
    if (!byLanguage[option.language]) byLanguage[option.language] = [];
    byLanguage[option.language].push(`${layerLabel} (${option.name})`);
  }

  add('Frontend', getOption('frontend', selections.frontend));

  if (selections.backend && selections.backend !== 'none-backend') {
    add('Backend', getOption('backend', selections.backend));
  }

  if (selections.database && selections.database !== 'none-db') {
    add('Database', getOption('database', selections.database));
  }

  return Object.entries(byLanguage).map(([name, sources]) => ({ name, sources }));
}
