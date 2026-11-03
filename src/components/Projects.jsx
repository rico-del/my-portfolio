import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../data/featuredProjects.js';

function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Recent public projects across application delivery and infrastructure.</h2>
        <p>
          A snapshot of my public work: a collaborative marketplace, a client website, and the Terraform
          infrastructure repository that supports my cloud engineering practice.
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <article
            className="project-card project-card--animated"
            key={project.id}
            style={{ '--card-index': index }}
          >
            <div
              className="project-card__glow"
              style={{ background: `linear-gradient(135deg, ${project.gradFrom}, ${project.gradVia}, ${project.gradTo})` }}
            />
            <div className="project-body">
              <div className="project-topline">
                <div>
                  <p className="mini-label">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                </div>
                <a
                  className="icon-link"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} repository`}
                >
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
                Explore project <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
