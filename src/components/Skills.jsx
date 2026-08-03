import { Award, ShieldCheck, TerminalSquare } from 'lucide-react';
import { certifications, opsPrinciples, skills } from '../data/portfolioData.js';
import { useInView } from '../hooks/useInView.js';

const principleIcons = [TerminalSquare, ShieldCheck, Award];

function SkillCategory({ category }) {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <div className={`skill-category reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
      <h3>{category.category}</h3>
      <div className="tag-row">
        {category.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Principle({ principle, index }) {
  const Icon = principleIcons[index % principleIcons.length];
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <article className={`principle-card reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="principle-icon">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3>{principle.title}</h3>
      <p>{principle.detail}</p>
    </article>
  );
}

function Skills() {
  const { ref: listRef, inView: listInView } = useInView({ threshold: 0.15 });
  const { ref: certRef, inView: certInView } = useInView({ threshold: 0.2 });

  return (
    <section className="section skills-section" id="skills">
      <div className="section-head reveal" data-anchor="skills">
        <p className="eyebrow">Capabilities</p>
        <h2>Concrete skills from the work above, not a generic stack list.</h2>
      </div>

      <div className="skills-layout">
        <div className={`skills-grid reveal ${listInView ? 'is-visible' : ''}`} ref={listRef}>
          {skills.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>

        <div className="skills-side">
          <div className={`principle-stack reveal ${certInView ? 'is-visible' : ''}`} ref={certRef}>
            {opsPrinciples.map((principle, index) => (
              <Principle key={principle.title} principle={principle} index={index} />
            ))}
          </div>

          <div className="cert-card reveal is-visible">
            <p className="eyebrow">Certifications</p>
            <div className="cert-list">
              {certifications.map((cert) => (
                <a className="cert-item" key={cert.name} href={cert.url} target="_blank" rel="noreferrer">
                  <img src={cert.image} alt={cert.name} />
                  <div>
                    <strong>{cert.name}</strong>
                    <span>{cert.issuer}</span>
                    <span>{cert.note}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
