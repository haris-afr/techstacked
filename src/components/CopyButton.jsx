import { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

export default function CopyButton({ label, getText, disabled }) {
  const [status, setStatus] = useState('idle'); // idle | success | failed

  async function handleClick() {
    const text = getText();
    if (!text) return;
    const ok = await copyToClipboard(text);
    setStatus(ok ? 'success' : 'failed');
    setTimeout(() => setStatus('idle'), 1800);
  }

  const className = `ghost-btn${status === 'success' ? ' copied' : ''}${status === 'failed' ? ' copy-failed' : ''}`;
  const text = status === 'success' ? 'Copied!' : status === 'failed' ? 'Select manually' : label;

  return (
    <button type="button" className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
}
