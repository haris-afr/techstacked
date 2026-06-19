import { useCallback, useEffect, useMemo, useState } from 'react';
import { STACK, STACK_ORDER, getOption } from '../data/stackData';
import { buildWarnings } from '../utils/warnings';

const EMPTY = STACK_ORDER.reduce((acc, k) => ({ ...acc, [k]: null }), {});

function readHash() {
  const next = { ...EMPTY };
  try {
    if (!window.location.hash) return next;
    window.location.hash.slice(1).split('&').forEach((pair) => {
      const [k, v] = pair.split('=');
      if (STACK_ORDER.includes(k) && getOption(k, v)) next[k] = v;
    });
  } catch (err) {
    // ignore — reading location.hash should always be safe, but just in case
  }
  return next;
}

function writeHash(selections) {
  try {
    const parts = STACK_ORDER.filter((k) => selections[k]).map((k) => `${k}=${selections[k]}`);
    const hash = parts.join('&');
    window.history.replaceState(null, '', hash ? `#${hash}` : window.location.pathname + window.location.search);
  } catch (err) {
    // History API can be blocked in sandboxed preview contexts — share link
    // just won't encode picks there, but nothing should crash.
  }
}

export function useStackBuilder() {
  const [selections, setSelections] = useState(() => readHash());
  const [dir, setDir] = useState('my-app');

  useEffect(() => {
    writeHash(selections);
  }, [selections]);

  const toggleOption = useCallback((categoryKey, optionId) => {
    setSelections((prev) => ({
      ...prev,
      [categoryKey]: prev[categoryKey] === optionId ? null : optionId,
    }));
  }, []);

  const clearAll = useCallback(() => setSelections({ ...EMPTY }), []);

  const randomize = useCallback(() => {
    const next = {};
    STACK_ORDER.forEach((k) => {
      const opts = STACK[k].options;
      next[k] = opts[Math.floor(Math.random() * opts.length)].id;
    });
    setSelections(next);
  }, []);

  const applyPreset = useCallback((preset) => {
    setSelections({ ...EMPTY, ...preset.picks });
  }, []);

  const filledCount = STACK_ORDER.filter((k) => selections[k]).length;
  const flags = useMemo(() => buildWarnings(selections), [selections]);
  const warnCount = flags.filter((f) => f.level === 'warn').length;

  const promptText = useMemo(() => {
    const bits = STACK_ORDER.filter((k) => selections[k]).map((k) => getOption(k, selections[k]).promptBit);
    if (bits.length === 0) return null;
    return `I'm starting a new project using:\n- ${bits.join('\n- ')}\n\nPlease help me scaffold the project structure, wire these pieces together, and call out any compatibility issues or setup steps I might be missing.`;
  }, [selections]);

  const commandText = useMemo(() => {
    const lines = [];
    STACK_ORDER.forEach((k) => {
      const opt = getOption(k, selections[k]);
      if (!opt) return;
      lines.push(`# ${STACK[k].label}: ${opt.name}`);
      opt.install.forEach((c) => lines.push(c.replace(/\{dir\}/g, dir || 'my-app')));
    });
    return lines.length ? lines.join('\n') : null;
  }, [selections, dir]);

  const markdownText = useMemo(() => {
    const filled = STACK_ORDER.filter((k) => selections[k]);
    if (filled.length === 0) return null;
    const lines = ['# TechStacker — my stack', ''];
    filled.forEach((k) => {
      const opt = getOption(k, selections[k]);
      lines.push(`**${STACK[k].label}:** ${opt.name}`);
      lines.push(`- ${opt.pros[0]}`);
      lines.push(`- ${opt.cons[0]}`);
      lines.push('');
    });
    if (flags.length) {
      lines.push('## Notes');
      flags.forEach((f) => lines.push(`- ${f.msg}`));
    }
    return lines.join('\n');
  }, [selections, flags]);

  return {
    selections,
    toggleOption,
    clearAll,
    randomize,
    applyPreset,
    filledCount,
    flags,
    warnCount,
    promptText,
    commandText,
    markdownText,
    dir,
    setDir,
  };
}
