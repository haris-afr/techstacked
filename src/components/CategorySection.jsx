import OptionCard from './OptionCard';

export default function CategorySection({ categoryKey, category, selectedId, onSelect }) {
  return (
    <div className="category">
      <div className="cat-head">
        <span className="dot-accent" />
        <span className="cat-name">{category.label}</span>
      </div>
      <div className="card-grid">
        {category.options.map((opt) => (
          <OptionCard
            key={opt.id}
            option={opt}
            selected={selectedId === opt.id}
            onSelect={() => onSelect(categoryKey, opt.id)}
          />
        ))}
      </div>
    </div>
  );
}
