export const HeroSection = ({ heroProfile }) => {
  return (
    <section className="hero chapter reveal is-visible" id="hero">
      <div>
        <p className="eyebrow">{heroProfile.location}</p>
        <h1 className="name-title">
          {heroProfile.firstName}
          <span className="name-title__last">
            {heroProfile.lastName}
            <span className="name-title__period">.</span>
          </span>
        </h1>
        <p className="hero-tagline">{heroProfile.headline}</p>
        <p className="quiet-list">{heroProfile.tech.join(' · ')}</p>

        <div className="hero-actions">
          <a className="text-link" href="#github">
            See my work <span aria-hidden="true">→</span>
          </a>
          <a className="text-link" href="#contact">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-art__halo" />
        <div className="hero-art__card">
          <svg viewBox="0 0 300 340" fill="none">
            <path fill="#e7dfce" d="M0 0h300v340H0z" />
            <circle cx="206" cy="112" r="42" fill="#a9573c" />
            <path
              fill="#acb098"
              d="M0 270V196h34v-30h30v22h26V120h10V92h4v28h10v68h24v-44h32v60h26v-82h28v56h40v72Z"
            />
            <path
              fill="#71806a"
              d="M0 270v-44h26v-24h36v38h30v-54h34v66h40v-30h30v-26h28v40h40v30Z"
            />
            <path fill="#344e3f" d="M0 270h300v70H0z" />
            <path
              stroke="#e6d9bb"
              strokeWidth="1.5"
              strokeLinecap="round"
              d="M36 292h70M150 306h96M58 322h54"
            />
          </svg>
          <div className="hero-art__caption">
            <span>New York City</span>
            <span>Banking &amp; payments</span>
          </div>
        </div>
      </div>
    </section>
  )
}
