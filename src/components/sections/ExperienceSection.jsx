import { useState } from 'react'

const visiblePoints = 3

const JobHighlights = ({ points }) => {
  const [expanded, setExpanded] = useState(false)
  const hiddenCount = points.length - visiblePoints
  const shownPoints = expanded ? points : points.slice(0, visiblePoints)

  return (
    <>
      <ul>
        {shownPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {hiddenCount > 0 ? (
        <button
          className="journey-more"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
        >
          {expanded
            ? 'Show less'
            : `Show ${hiddenCount} more ${hiddenCount === 1 ? 'highlight' : 'highlights'}`}
        </button>
      ) : null}
    </>
  )
}

export const ExperienceSection = ({ experience }) => {
  return (
    <section className="chapter reveal" id="experience">
      <div className="section-heading">
        <div>
          <span className="section-number">01 / Experience</span>
          <h2>Professional Journey</h2>
        </div>
        <p>
          From Software Developer to Senior Engineer, here&apos;s my path of
          continuous growth and product impact.
        </p>
      </div>

      <div>
        {experience.map((job, index) => (
          <article
            className="journey-item stagger"
            key={`${job.company}-${job.period}`}
            style={{ '--delay': `${index * 120}ms` }}
          >
            <p className="journey-item__when">
              <strong>{job.company}</strong>
              {job.period}
            </p>

            <div>
              <h3>{job.role}</h3>
              <p className="quiet-list">{job.tags.join(' · ')}</p>
              <JobHighlights points={job.points} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
