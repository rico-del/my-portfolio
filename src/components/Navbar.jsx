import { Mail } from 'lucide-react';
import { contact } from '../data/portfolioData.js';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label={`${contact.name} — back to top`}>
        <span className="brand-mark" aria-hidden="true">DO</span>
        <div className="brand-copy">
          <span className="brand-name">{contact.name}</span>
          <span className="brand-tag">Platform / DevOps builder</span>
        </div>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-cta secondary" href={contact.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a className="nav-cta" href={`mailto:${contact.email}`}>
          <Mail size={15} aria-hidden="true" />
          <span>Hire me</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
