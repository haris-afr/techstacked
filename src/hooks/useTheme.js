import { useEffect, useState } from 'react';

const STORAGE_KEY = 'techstacker-theme';

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (err) {
    // localStorage can be unavailable (privacy mode, sandboxed preview, etc.)
  }
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (err) {
    // ignore
  }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      // theme just won't persist across reloads here — not fatal
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
