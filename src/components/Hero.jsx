import { ArrowDownRight, ArrowUpRight, Github, MapPin } from 'lucide-react';
import { about, contact, terminalLines } from '../data/portfolioData.js';
import EditorialReveal from './EditorialReveal.jsx';

function Hero() {
  return (
    <section className="hero section" id="intro" aria-labelledby="hero-title">
      <div className="hero__inner">
        <EditorialReveal className="hero__copy">
          <div className="availability"><span className="availability__dot" /> Cloud & platform engineering <span className="availability__divider">/</span> Nairobi, Kenya</div>
          <p className="eyebrow hero__eyebrow">Thoughtful infrastructure. Dependable delivery.</p>
          <h1 id="hero-title">I build the systems<br />that help software <span>ship with confidence.</span></h1>
          <p className="hero__summary">{about.summary}</p>
          <div className="hero__actions">
            <a className="action-primary" href="#work">Explore selected work <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="action-text" href={contact.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub profile <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="hero__note"><span>FOCUS</span> AWS · Terraform · CI/CD · Containers</div>
        </EditorialReveal>

        <EditorialReveal as="aside" className="build-card" delay={120} aria-label="Engineering principles and sample workflow">
          <div className="build-card__top"><span>ENGINEERING NOTES</span><span className="build-card__index">01 — 03</span></div>
          <p className="build-card__statement">Make the safe path<br />the <em>easy path.</em></p>
          <div className="build-card__rule" />
          <div className="build-card__list">
            <div><span className="build-card__number">01</span><span>Infrastructure defined and reviewed as code.</span></div>
            <div><span className="build-card__number">02</span><span>Automated checks before anything ships.</span></div>
            <div><span className="build-card__number">03</span><span>Access scoped; operations kept observable.</span></div>
          </div>
          <div className="build-card__terminal" aria-label="Sample delivery workflow">
            <div className="build-card__terminal-head"><span><i /> DELIVERY FLOW</span><span>REPEATABLE BY DESIGN</span></div>
            <div className="build-card__terminal-lines">
              {terminalLines.slice(0, 3).map((line, index) => (
                <div className="build-card__terminal-line" key={line.prompt}>
                  <span className="build-card__step">0{index + 1}</span><code>{line.command}</code><span className="build-card__check">✓</span>
                </div>
              ))}
            </div>
          </div>
          <div className="build-card__foot"><MapPin size={13} aria-hidden="true" /> Based in {contact.location}</div>
        </EditorialReveal>
      </div>
      <a className="hero__scroll" href="#work"><span>Scroll to selected work</span><ArrowDownRight size={15} aria-hidden="true" /></a>
    </section>
  );
}

export default Hero;
