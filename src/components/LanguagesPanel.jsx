export default function LanguagesPanel({ languages }) {
  return (
    <div className="glass panel">
      <h2>Languages you'll be writing</h2>

      {languages.length === 0 ? (
        <p className="review-empty">Pick a frontend, backend, or database to see which languages this stack puts you in.</p>
      ) : (
        <div className="lang-list">
          {languages.map((lang) => (
            <div className="lang-row" key={lang.name}>
              <span className="lang-pill">{lang.name}</span>
              <span className="lang-sources">{lang.sources.join(' · ')}</span>
            </div>
          ))}
        </div>
      )}

      <p className="out-desc" style={{ marginTop: 12, marginBottom: 0 }}>
        Every web stack also involves HTML and CSS for markup and styling, regardless of what's picked above.
      </p>
    </div>
  );
}
