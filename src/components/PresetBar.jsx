import { PRESETS } from '../data/stackData';

export default function PresetBar({ onApply }) {
  return (
    <div className="preset-bar">
      <span className="preset-label">Quick start:</span>
      <div className="preset-chips">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            className="preset-chip"
            title={preset.description}
            onClick={() => onApply(preset)}
          >
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
}
