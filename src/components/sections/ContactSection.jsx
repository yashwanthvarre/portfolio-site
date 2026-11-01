export const ContactSection = ({ contactDetails }) => {
  return (
    <section className="chapter reveal" id="contact">
      <div className="section-heading">
        <div>
          <span className="section-number">05 / Contact</span>
          <h2>Let's Connect</h2>
        </div>
        <p>
          Ready to discuss opportunities, collaborate on projects, or just have
          a tech conversation? I&apos;m always open to connecting with teams and
          fellow builders.
        </p>
      </div>

      <div className="contact-grid">
        <div>
          {contactDetails.map((item) => (
            <a
              className="contact-row"
              href={item.href}
              key={item.title}
              target={item.title === 'LinkedIn' ? '_blank' : undefined}
              rel={item.title === 'LinkedIn' ? 'noreferrer' : undefined}
            >
              <span className="contact-row__label">{item.title}</span>
              <span className="contact-row__value">{item.value}</span>
              {item.title === 'LinkedIn' ? <span aria-hidden="true">↗</span> : null}
            </a>
          ))}
        </div>

        <div className="contact-note">
          <h3>Ready to Work Together?</h3>
          <p>
            Whether you&apos;re looking for a senior engineer to lead complex
            projects, scale your systems, or bring clarity to ambitious product
            work, I&apos;d love to hear about your needs.
          </p>
          <a className="text-link" href={contactDetails[0].href}>
            Start a Conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
