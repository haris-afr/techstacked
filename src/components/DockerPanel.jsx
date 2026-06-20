import CopyButton from './CopyButton';

export default function DockerPanel({ dockerfileText, composeText, dockerNote }) {
  return (
    <div className="glass panel">
      <h2>Docker</h2>
      <p className="out-desc">
        A Dockerfile for your stack{composeText ? ', plus a docker-compose.yml wiring it up to the database' : ''}.
      </p>

      <div className="dark-glass" style={{ marginBottom: composeText ? 14 : 0 }}>
        {dockerfileText || '# Pick a backend (or a frontend with no backend) to generate a Dockerfile.'}
      </div>
      {dockerfileText && (
        <div className="btn-row" style={{ marginBottom: composeText ? 14 : 0 }}>
          <CopyButton label="Copy Dockerfile" getText={() => dockerfileText} disabled={!dockerfileText} />
        </div>
      )}

      {composeText && (
        <>
          <div className="dark-glass">{composeText}</div>
          <div className="btn-row">
            <CopyButton label="Copy docker-compose.yml" getText={() => composeText} disabled={!composeText} />
          </div>
        </>
      )}

      {dockerNote && <p className="out-desc" style={{ marginTop: 12 }}>{dockerNote}</p>}
    </div>
  );
}
