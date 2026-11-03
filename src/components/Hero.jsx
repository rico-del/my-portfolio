import { useState } from 'react';
import { ArrowRight, Download, Github, MapPin } from 'lucide-react';
import { about, contact, terminalLines } from '../data/portfolioData.js';
import { useTypewriter } from '../hooks/useTypewriter.js';
import ToolIcon from './DevOpsIcons.jsx';

const heroPills = [
  { icon: 'terraform', label: 'Terraform' },
  { icon: 'aws', label: 'AWS' },
  { icon: 'docker', label: 'Docker Compose' },
  { icon: 'github', label: 'GitHub Actions' },
  { icon: 'python', label: 'Python' },
  { icon: 'fastapi', label: 'FastAPI' },
];

const typewriterSource = [
  'Terraform that is easy to review.',
  'IAM and SSM access that stay scoped.',
  'Compose-based deployments with clear checks.',
  'CI pipelines that validate before deploy.',
];

function TerminalPanel() {
  const typed = useTypewriter(typewriterSource);
  const [visibleLines] = useState(() => Math.min(3, terminalLines.length));

  return (
    <div className="terminal" role="img" aria-label="Deployment terminal simulation">
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="terminal-title">devops@production: ~/deploy</span>
        <span className="terminal-status">
          <span className="pulse-dot" /> LIVE
        </span>
      </div>
      <div className="terminal-body">
        {terminalLines.slice(0, visibleLines).map((line) => (
          <p className="terminal-line" key={line.command}>
            <span className="terminal-prompt">{line.prompt}</span>
            <span className="terminal-dollar" aria-hidden="true">❯</span>
            <span className="terminal-command">{line.command}</span>
          </p>
        ))}
        <p className="terminal-line terminal-line--typing">
          <span className="terminal-prompt">intro</span>
          <span className="terminal-dollar" aria-hidden="true">❯</span>
          <span className="terminal-command terminal-command--typing">
            {typed}
            <span className="terminal-cursor" aria-hidden="true" />
          </span>
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">DevOps portfolio / infrastructure engineering</p>
        <h1>
          Practical DevOps work, grounded in <span className="gradient-text">real repos</span>.
        </h1>
        <p className="hero-subtitle">{about.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View my work <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a className="button" href={contact.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a className="button" href={contact.resume} download>
            <Download size={17} aria-hidden="true" /> Download Resume
          </a>
        </div>
        <div className="hero-meta">
          <div className="hero-pills">
            {heroPills.map((pill) => (
              <span key={pill.label}>
                <ToolIcon name={pill.icon} size={13} />
                {pill.label}
              </span>
            ))}
          </div>
          <div className="hero-note">
            <span className="signal-dot" />
            Terraform • AWS • Docker Compose • GitHub Actions
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__glow" />
        <div className="hero-panel__head">
          <span className="hero-panel__label">
            <img
              className="hero-avatar"
              src="/profile.jpg"
              alt={`${contact.name} profile photo`}
              width="44"
              height="44"
            />
            Live delivery view
          </span>
          <span className="hero-panel__status">
            <MapPin size={14} aria-hidden="true" /> {contact.location}
          </span>
        </div>
        <TerminalPanel />
        <div className="hero-panel__footer">
          <div>
            <strong>3</strong>
            <span>project repos</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Terraform modules</span>
          </div>
          <div>
            <strong>3</strong>
            <span>deployment tiers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
