export default function OptionCard({ option, selected, onSelect }) {
  return (
    <button type="button" className={`card${selected ? ' selected' : ''}`} onClick={onSelect}>
      <div className="card-check">✓</div>
      <div className="card-name">{option.name}</div>
      <div className="card-tag">{option.tag}</div>
      <div className="card-blurb">{option.pros[0]}</div>
    </button>
  );
}
