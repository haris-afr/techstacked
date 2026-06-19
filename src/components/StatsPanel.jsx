import CopyButton from './CopyButton';

export default function StatsPanel({ filledCount, warnCount, onRandomize, onClear }) {
  const total = 6;
  const pct = (filledCount / total) * 100;

  let badgeClass = 'neutral';
  let badgeText = 'Pick a layer';
  if (filledCount > 0) {
    if (warnCount > 0) {
      badgeClass = 'warn';
      badgeText = `${warnCount} flag${warnCount > 1 ? 's' : ''}`;
    } else {
      badgeClass = 'ok';
      badgeText = 'Looks solid';
    }
  }

  return (
    <div className="glass panel">
      <div className="stat-row">
        <div className="stat-block">
          <div className="num">{filledCount}/{total}</div>
          <div className="label">layers selected</div>
        </div>
        <div className={`badge ${badgeClass}`}>{badgeText}</div>
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="btn-row">
        <button type="button" className="ghost-btn" onClick={onRandomize}>Surprise me</button>
        <CopyButton label="Copy share link" getText={() => window.location.href} />
        <button type="button" className="ghost-btn" onClick={onClear}>Clear all</button>
      </div>
    </div>
  );
}
