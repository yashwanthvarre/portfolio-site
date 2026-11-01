export const ExpertiseSection = ({ aiTools, skillGroups }) => {
  return (
    <section className="chapter reveal" id="expertise">
      <div className="section-heading">
        <div>
          <span className="section-number">03 / Expertise</span>
          <h2>Technical Expertise</h2>
        </div>
        <p>
          A comprehensive toolkit for building scalable, modern applications
          from frontend systems to cloud infrastructure.
        </p>
      </div>

      <div className="expertise-grid">
        {skillGroups.map((group, index) => (
          <article
            className="expertise-item stagger"
            key={group.title}
            style={{ '--delay': `${index * 80}ms` }}
          >
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <p className="quiet-list">{group.items.join(' · ')}</p>
          </article>
        ))}
      </div>

      <div className="ai-note">
        <h3>AI-Enhanced Development</h3>
        <div>
          <p>
            Integrating cutting-edge AI tools to accelerate development and
            improve code quality.
          </p>
          <p className="quiet-list">{aiTools.join(' · ')}</p>
        </div>
      </div>
    </section>
  )
}
