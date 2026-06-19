import { useEffect, useRef, useState } from 'react';
import CopyButton from './CopyButton';

export default function ScriptPanel({ commandText, dir, onDirChange }) {
  const [typed, setTyped] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!commandText) {
      setTyped('');
      return undefined;
    }

    const full = `$ ${commandText}`;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setTyped(full);
      return undefined;
    }

    let i = 0;
    setTyped('');
    intervalRef.current = setInterval(() => {
      i += 3;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(intervalRef.current);
    }, 8);

    return () => clearInterval(intervalRef.current);
  }, [commandText]);

  return (
    <div className="glass panel">
      <h2>Install script</h2>
      <p className="out-desc">Commands to scaffold the project in a new directory.</p>
      <div className="dir-input-row">
        <label htmlFor="dirInput">Folder:</label>
        <input
          id="dirInput"
          type="text"
          value={dir}
          maxLength={40}
          onChange={(e) => onDirChange(e.target.value)}
        />
      </div>
      <div className="dark-glass">
        {typed || '$ '}
        <span className="cursor" />
      </div>
      <div className="btn-row">
        <CopyButton label="Copy script" getText={() => commandText} disabled={!commandText} />
      </div>
    </div>
  );
}
