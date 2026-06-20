import { STACK, STACK_ORDER, getOption } from '../data/stackData';
import { ICONS } from '../data/icons';
import CopyButton from './CopyButton';

export default function ReviewPanel({ selections, flags, markdownText }) {
  const filled = STACK_ORDER.filter((k) => selections[k]);

  return (
    <div className="glass panel">
      <h2>Stack review</h2>

      {filled.length === 0 ? (
        <p className="review-empty">Select a layer and your picks will show up here, along with anything worth double-checking.</p>
      ) : (
        <>
          {filled.map((key) => {
            const opt = getOption(key, selections[key]);
            const Icon = ICONS[opt.id];
            return (
              <div className="review-row" key={key}>
                <span className="layer">{STACK[key].label}</span>
                <span className="review-name">
                  {Icon && <Icon className="tech-icon-sm" aria-hidden="true" />}
                  {opt.name}
                </span>
                <span className="review-pro">✓ {opt.pros[0]}</span>
                <span className="review-con">— {opt.cons[0]}</span>
              </div>
            );
          })}

          {flags.length > 0 && (
            <div className="flags">
              {flags.map((f, i) => (
                <div className={`flag ${f.level}`} key={i}>
                  <span className="flag-icon">{f.level === 'warn' ? '!' : f.level === 'ok' ? '✓' : 'i'}</span>
                  <span>{f.msg}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className="btn-row">
        <CopyButton label="Copy as Markdown" getText={() => markdownText} disabled={!markdownText} />
      </div>
    </div>
  );
}
