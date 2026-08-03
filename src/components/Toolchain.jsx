import { toolchain } from '../data/portfolioData.js';
import { useInView } from '../hooks/useInView.js';
import ToolIcon from './DevOpsIcons.jsx';

function Toolchain() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section className="section toolchain-section" id="stack">
      <div className="section-head reveal" data-anchor="stack">
        <p className="eyebrow">Toolchain</p>
        <h2>The tools used in the projects above.</h2>
        <p>This list stays close to what is actually present in the Terraform and Munch_Catering repositories.</p>
      </div>

      <div className={`toolchain-shell reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
        <div className="toolchain-intro">
          <h3>Practical, modern, and grounded in the repos.</h3>
          <p>
            The point is not to list everything possible. Each tool here is tied to a real workflow in the infrastructure and application projects.
          </p>
        </div>
        <div className="toolchain-grid">
          {toolchain.map((tool, index) => (
            <div className="tool-card" key={tool.name} style={{ '--tool-index': index }}>
              <div className="tool-icon">
                <ToolIcon name={tool.icon} size={24} />
              </div>
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolchain;
