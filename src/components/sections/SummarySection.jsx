export const SummarySection = ({ highlights, summary }) => {
  return (
    <section className="chapter reveal" id="summary">
      <div className="summary-intro">
        <div>
          <span className="section-number">Snapshot</span>
          <h2>Banking and payments platforms, built to scale.</h2>
        </div>
        <p>{summary}</p>
      </div>

      <div className="stat-grid">
        {highlights.map((item, index) => (
          <article
            className="stat-card stagger"
            key={item.label}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <span className="stat-value">{item.value}</span>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
