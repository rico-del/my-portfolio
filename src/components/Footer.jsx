import { ArrowUpRight } from 'lucide-react';
import { contact } from '../data/portfolioData.js';

function Footer() {
  return (
    <footer className="site-footer">
      <a className="site-footer__name" href="#top">{contact.name}<span> · Nairobi, Kenya</span></a>
      <span className="site-footer__note">Built with care. Shipped with intent.</span>
      <a className="site-footer__top" href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
    </footer>
  );
}

export default Footer;
