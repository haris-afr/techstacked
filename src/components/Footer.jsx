import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-text">Built with Claude for the Kracked Devs Vibe-a-thon.</p>
      <div className="footer-links">
        <a
          href="https://github.com/haris-afr"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FiGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/haris-afr"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FiLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}
