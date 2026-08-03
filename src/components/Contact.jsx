import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact } from '../data/portfolioData.js';
import { useInView } from '../hooks/useInView.js';

function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="section contact-section" id="contact">
      <div className={`contact-card reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Looking for someone to own a practical DevOps workflow?</h2>
          <p>
            I am interested in roles where I can contribute to infrastructure, deployment automation, and reliable application delivery with clear evidence behind the work.
          </p>
          <div className="contact-meta">
            <span><MapPin size={15} aria-hidden="true" /> {contact.location}</span>
            <span><Mail size={15} aria-hidden="true" /> {contact.email}</span>
          </div>
        </div>

        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={17} aria-hidden="true" /> Email me
          </a>
          <a className="button" href={contact.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a className="button" href={contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
          <a className="button" href={contact.resume} target="_blank" rel="noreferrer">
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
