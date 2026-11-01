export const GitHubSection = ({ githubProfile, githubProjects }) => {
  return (
    <section className="chapter reveal" id="github">
      <div className="section-heading">
        <div>
          <span className="section-number">02 / Work</span>
          <h2>Projects from my public GitHub profile.</h2>
        </div>
        <p>
          See everything at{' '}
          <a href={githubProfile.url} target="_blank" rel="noreferrer">
            github.com/{githubProfile.handle}
          </a>
        </p>
      </div>

      <div className="project-grid">
        {githubProjects.map((project, index) => (
          <article
            className={`project-card stagger${index === 0 ? ' project-card--featured' : ''}`}
            key={project.name}
            style={{ '--delay': `${index * 70}ms` }}
          >
            <div className="project-card__meta">
              <span>{project.language}</span>
              <span>{project.updated}</span>
            </div>

            <div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>

              {project.highlights ? (
                <p className="quiet-list">{project.highlights.join(' · ')}</p>
              ) : null}

              {project.image ? (
                <div className="project-card__preview">
                  <img src={project.image} alt={project.imageAlt || `${project.name} preview`} />
                </div>
              ) : null}
            </div>

            <div className="project-card__actions">
              <a href={project.url} target="_blank" rel="noreferrer">
                View repository
              </a>
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Open live demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
