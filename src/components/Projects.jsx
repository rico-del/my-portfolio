import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData.js';

function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Two grounded projects from my infrastructure and application work.</h2>
        <p>
          These are the builds I can speak to directly: one application delivery project and one AWS-focused infrastructure project.
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card__glow" style={{ background: `linear-gradient(135deg, ${project.gradFrom}, ${project.gradVia}, ${project.gradTo})` }} />
            <div className="project-body">
              <div className="project-topline">
                <div>
                  <p className="mini-label">Featured build</p>
                  <h3>{project.title}</h3>
                </div>
                <a className="icon-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                  <Github size={16} aria-hidden="true" />
                </a>
              </div>

              <p className="project-problem">{project.description}</p>
              <div className="pill-row compact">
                {project.techStack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <ul>
                {project.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">
                View repository <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
