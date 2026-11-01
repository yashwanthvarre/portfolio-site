import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { GitHubSection } from './components/sections/GitHubSection'
import { HeroSection } from './components/sections/HeroSection'
import { MetricsSection } from './components/sections/MetricsSection'
import { SummarySection } from './components/sections/SummarySection'
import {
  aiTools,
  contactDetails,
  experience,
  githubProfile,
  githubProjects,
  heroProfile,
  highlights,
  impactMetrics,
  skillGroups,
  summary,
} from './data/resumeData'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'Work' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const observedSections = ['hero', 'summary', ...navLinks.map((link) => link.id)]

const linkedInUrl = contactDetails.find((item) => item.title === 'LinkedIn').href

const App = () => {
  useRevealOnScroll()
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const sectionElements = observedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    // A thin band mid-viewport, so sections taller than the screen still register.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#hero" aria-label="Yashwanth Varre, back to top">
            <span className="brand__monogram" aria-hidden="true">
              YV
            </span>
            <span>Yashwanth Varre</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            ref={menuButtonRef}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav
            className={`topnav${menuOpen ? ' topnav--open' : ''}`}
            id="site-nav"
            aria-label="Section navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <HeroSection heroProfile={heroProfile} />

        <div className="chapter-bar">
          <p>What you&apos;ll find here</p>
          <ol className="chapter-bar__list">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <i>{`0${index + 1}`}</i> {link.label}
              </li>
            ))}
          </ol>
        </div>

        <SummarySection highlights={highlights} summary={summary} />
        <ExperienceSection experience={experience} />
        <MetricsSection impactMetrics={impactMetrics} />
        <GitHubSection githubProfile={githubProfile} githubProjects={githubProjects} />
        <ExpertiseSection aiTools={aiTools} skillGroups={skillGroups} />
        <EducationSection />
        <ContactSection contactDetails={contactDetails} />
      </main>

      <footer className="footer">
        <span className="footer__brand">Yashwanth Varre.</span>
        <div className="footer__links">
          <a href={githubProfile.url} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
