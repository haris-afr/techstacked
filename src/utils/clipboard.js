function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (err) {
    return false;
  }
}

// Tries the modern Clipboard API first, and falls back to the classic
// execCommand trick if it's blocked (sandboxed iframes, insecure contexts,
// some browser permission policies). Always resolves — never throws.
export function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
    }
  } catch (err) {
    // fall through to the fallback below
  }
  return Promise.resolve(fallbackCopy(text));
}
