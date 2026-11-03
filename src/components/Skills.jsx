import { ArrowUpRight, Check } from 'lucide-react';
import { certifications, opsPrinciples, skills } from '../data/portfolioData.js';
import EditorialReveal from './EditorialReveal.jsx';

function Skills() {
  return (
    <section className="section approach-section" id="approach" aria-labelledby="approach-title">
      <EditorialReveal className="section-heading section-heading--compact">
        <div><p className="eyebrow">How I work <span>02 / 03</span></p><h2 id="approach-title">Good operations are<br /><em>designed in.</em></h2></div>
        <p className="section-heading__aside">I care about useful engineering habits: clear change history, scoped access, repeatable environments, and checks that provide confidence rather than ceremony.</p>
      </EditorialReveal>
      <div className="approach-layout">
        <div className="capability-list">
          {skills.map((category, index) => (
            <EditorialReveal as="article" className="capability-row" delay={index * 65} key={category.category}>
              <span className="capability-row__index">0{index + 1}</span><div><h3>{category.category}</h3><div className="capability-tags">{category.items.map((item) => <span key={item}>{item}</span>)}</div></div>
            </EditorialReveal>
          ))}
        </div>
        <EditorialReveal className="principles-panel" delay={100}>
          <p className="principles-panel__label">Working principles</p>
          {opsPrinciples.map((principle, index) => (
            <article className="principle-row" key={principle.title}><span className="principle-row__check"><Check size={14} aria-hidden="true" /></span><div><span className="principle-row__index">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.detail}</p></div></article>
          ))}
          <div className="credentials"><span className="credentials__label">Credentials</span>{certifications.map((cert, index) => <EditorialReveal as="a" className="credential-link" delay={index * 55} href={cert.url} target="_blank" rel="noreferrer" key={cert.name}>{cert.name}<ArrowUpRight size={13} aria-hidden="true" /></EditorialReveal>)}</div>
        </EditorialReveal>
      </div>
    </section>
  );
}

export default Skills;
