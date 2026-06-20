import { ICONS } from '../data/icons';

const METRICS = [
  { key: 'performance', label: 'P', name: 'Performance' },
  { key: 'scalability', label: 'S', name: 'Scalability' },
  { key: 'cost', label: '$', name: 'Cost efficiency' },
];

function MetricBar({ value }) {
  return (
    <span className="metric-bar">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`metric-seg${i <= value ? ' filled' : ''}`} />
      ))}
    </span>
  );
}

export default function OptionCard({ option, selected, onSelect }) {
  const Icon = ICONS[option.id];

  return (
    <button type="button" className={`card${selected ? ' selected' : ''}`} onClick={onSelect}>
      <div className="card-check">✓</div>
      <div className="card-name">
        {Icon && <Icon className="tech-icon" aria-hidden="true" />}
        <span>{option.name}</span>
      </div>
      <div className="card-tag">{option.tag}</div>
      <div className="card-blurb">{option.pros[0]}</div>

      {option.ratings && (
        <div className="metric-row">
          {METRICS.map((m) => (
            <span className="metric-item" key={m.key} title={`${m.name}: ${option.ratings[m.key]}/5`}>
              <span className="metric-label">{m.label}</span>
              <MetricBar value={option.ratings[m.key]} />
            </span>
          ))}
        </div>
      )}
    </button>
  );
}
