import CopyButton from './CopyButton';

export default function PromptPanel({ promptText }) {
  return (
    <div className="glass panel">
      <h2>AI prompt</h2>
      <p className="out-desc">Paste into Claude (or any AI tool) to scaffold the project.</p>
      <div className="prompt-body">{promptText || 'Pick at least one layer to generate a prompt.'}</div>
      <div className="btn-row">
        <CopyButton label="Copy prompt" getText={() => promptText} disabled={!promptText} />
      </div>
    </div>
  );
}
