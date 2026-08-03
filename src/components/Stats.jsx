import { stats } from '../data/portfolioData.js';
import { useInView } from '../hooks/useInView.js';
import { useCountUp } from '../hooks/useCountUp.js';

function StatItem({ stat, index }) {
  const { ref, value } = useCountUp(stat.value, { duration: 1400 + index * 180 });

  return (
    <div className="stat" ref={ref}>
      <strong className="stat-value">
        {value}
        <span className="stat-suffix">{stat.suffix}</span>
      </strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="stats-section" aria-label="Key numbers">
      <div className={`stats-strip reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.label}>
            <StatItem stat={stat} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
