export const MetricsSection = ({ impactMetrics }) => {
  return (
    <section className="chapter reveal">
      <div className="impact-band">
        <span className="section-number">Impact</span>
        <h2>Key Impact Metrics</h2>
        <div className="stat-grid">
          {impactMetrics.map((metric, index) => (
            <article
              className="stat-card stagger"
              key={metric.label}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span className="stat-value">{metric.value}</span>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
