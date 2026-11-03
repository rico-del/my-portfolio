import { ArrowUpRight } from 'lucide-react';
import { contact } from '../data/portfolioData.js';

const links = [
  { href: '#work', label: 'Selected work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#top" aria-label={`${contact.name} — home`}>
          <span className="wordmark__symbol" aria-hidden="true">D.</span>
          <span className="wordmark__name">{contact.name}</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${contact.email}`}>
          <span>Start a conversation</span><ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
