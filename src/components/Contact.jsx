import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact } from '../data/portfolioData.js';
import EditorialReveal from './EditorialReveal.jsx';

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <EditorialReveal className="contact-panel">
        <div className="contact-panel__meta"><p className="eyebrow">Contact <span>03 / 03</span></p><span className="contact-panel__location"><MapPin size={14} aria-hidden="true" /> {contact.location}</span></div>
        <div className="contact-panel__main"><div><h2 id="contact-title">Let’s make the<br /><em>next release</em> better.</h2><p>Interested in infrastructure, automation, and reliable software delivery? I’d be glad to hear what your team is building.</p></div>
          <div className="contact-links"><a href={`mailto:${contact.email}`}><span><Mail size={17} aria-hidden="true" /> Email</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href={contact.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={17} aria-hidden="true" /> LinkedIn</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href={contact.github} target="_blank" rel="noreferrer"><span><Github size={17} aria-hidden="true" /> GitHub</span><ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <a className="contact-panel__email" href={`mailto:${contact.email}`}>{contact.email}</a>
      </EditorialReveal>
    </section>
  );
}

export default Contact;
