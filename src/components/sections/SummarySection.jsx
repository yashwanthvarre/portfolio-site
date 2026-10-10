export const SummarySection = ({ highlights, summary }) => {
  return (
    <section className="chapter summary-band reveal" id="summary">
      <div className="section-intro summary-intro">
        <p className="kicker">Snapshot</p>
        <h2>Banking and payments platforms, built to scale.</h2>
        <p>{summary}</p>
      </div>

      <div className="stat-grid">
        {highlights.map((item, index) => (
          <article
            className="stat-card content-card stagger"
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
