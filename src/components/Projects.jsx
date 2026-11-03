import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../data/featuredProjects.js';

function Projects() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="eyebrow">Selected work <span>01 / 03</span></p><h2 id="work-title">Built, shipped<br />and <em>learned from.</em></h2></div>
        <p className="section-heading__aside">A few public projects showing how I approach application delivery, cloud infrastructure, and the details that make systems dependable.</p>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <article className={`project-card${index === 0 ? ' project-card--featured' : ''}`} key={project.id}>
            <div className="project-card__top"><span className="project-card__eyebrow">{project.eyebrow}</span><span className="project-card__number">0{index + 1}</span></div>
            <div className="project-card__main">
              <div className="project-card__title-row"><h3>{project.title}</h3><a className="project-card__icon" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Github size={17} aria-hidden="true" /></a></div>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__highlights">{project.achievements.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-card__bottom"><div className="project-tags">{project.techStack.slice(0, 6).map((tool) => <span key={tool}>{tool}</span>)}</div><a className="project-card__link" href={project.repository} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15} aria-hidden="true" /></a></div>
            </div>
          </article>
        ))}
      </div>
      <a className="all-work-link" href="https://github.com/rico-del?tab=repositories" target="_blank" rel="noreferrer">Browse all public repositories <ArrowUpRight size={16} aria-hidden="true" /></a>
    </section>
  );
}

export default Projects;
