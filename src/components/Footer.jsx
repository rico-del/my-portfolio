import { contact } from '../data/portfolioData.js';

function Footer() {
  return (
    <footer className="footer">
      <span>{contact.name}</span>
      <span>Terraform • AWS • FastAPI • Docker Compose • GitHub Actions</span>
    </footer>
  );
}

export default Footer;
