import { ArrowUpRight, Check } from 'lucide-react';
import { certifications, opsPrinciples, skills } from '../data/portfolioData.js';

function Skills() {
  return (
    <section className="section approach-section" id="approach" aria-labelledby="approach-title">
      <div className="section-heading section-heading--compact">
        <div><p className="eyebrow">How I work <span>02 / 03</span></p><h2 id="approach-title">Good operations are<br /><em>designed in.</em></h2></div>
        <p className="section-heading__aside">I care about useful engineering habits: clear change history, scoped access, repeatable environments, and checks that provide confidence rather than ceremony.</p>
      </div>
      <div className="approach-layout">
        <div className="capability-list">
          {skills.map((category, index) => (
            <article className="capability-row" key={category.category}>
              <span className="capability-row__index">0{index + 1}</span><div><h3>{category.category}</h3><div className="capability-tags">{category.items.map((item) => <span key={item}>{item}</span>)}</div></div>
            </article>
          ))}
        </div>
        <div className="principles-panel">
          <p className="principles-panel__label">Working principles</p>
          {opsPrinciples.map((principle, index) => (
            <article className="principle-row" key={principle.title}><span className="principle-row__check"><Check size={14} aria-hidden="true" /></span><div><span className="principle-row__index">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.detail}</p></div></article>
          ))}
          <div className="credentials"><span className="credentials__label">Credentials</span>{certifications.map((cert) => <a href={cert.url} target="_blank" rel="noreferrer" key={cert.name}>{cert.name}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
