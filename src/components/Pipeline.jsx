import { pipelineStages } from '../data/portfolioData.js';
import { useInView } from '../hooks/useInView.js';
import ToolIcon from './DevOpsIcons.jsx';

function Pipeline() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <section className="section pipeline-section" id="pipeline">
      <div className="section-head reveal" data-anchor="pipeline">
        <p className="eyebrow">Delivery pipeline</p>
        <h2>How I build systems that feel <span className="gradient-text">intentional</span>.</h2>
        <p>Every stage is reproducible, observable, and gated by checks that actually catch problems.</p>
      </div>

      <div className={`workflow-grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
        {pipelineStages.map((stage, index) => (
          <article className="workflow-card" key={stage.name}>
            <div className="workflow-number">0{index + 1}</div>
            <div className="workflow-icon">
              <ToolIcon name={stage.icon} size={20} />
            </div>
            <h3>{stage.name}</h3>
            <p>{stage.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pipeline;
