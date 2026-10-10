export const summary =
  'Senior Software Engineer with 4+ years architecting high-availability banking and payments platforms for 750K+ users, using React, Next.js, TypeScript, and Node.js/PostgreSQL, with additional experience building business management platforms for hospitality and ecommerce clients. Proven track record of technical leadership — mentoring engineers, driving cross-team adoption of shared tooling, and owning features end-to-end — alongside measurable delivery impact (reduced duplicate transfers by 25%, zero-vulnerability production releases). Thrives in fast-paced, agile environments balancing hands-on engineering with team-level influence.'

export const heroProfile = {
  location: 'New York City, New York',
  firstName: 'Yashwanth',
  lastName: 'Varre',
  headline:
    'Senior Software Engineer | React, Next.js & Node.js | Building high-availability banking and payments platforms',
  tech: ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  notes: [
    '4+ years building banking, payments, and business platforms',
    '750K+ users supported on high-stakes transaction workflows',
    'Technical leadership, mentoring, and end-to-end ownership',
  ],
}

export const highlights = [
  { value: '4+', label: 'Years building production software' },
  { value: '750K+', label: 'Users on banking and payments platforms' },
  { value: '25%', label: 'Fewer duplicate transfers after API v2 migration' },
  { value: '32%', label: 'Faster page loads through SSR/ISR and code-splitting' },
]

export const impactMetrics = [
  {
    value: '20%',
    label: 'Team velocity gain while mentoring 3 junior engineers',
  },
  {
    value: '55→85%',
    label: 'Test coverage raised with TDD and code reviews',
  },
  {
    value: '30%',
    label: 'Faster data fetching with Apollo batching and caching',
  },
  {
    value: '0',
    label: 'Outstanding vulnerabilities across production artifacts',
  },
]

export const experience = [
  {
    company: 'US Bank',
    role: 'Senior Software Developer',
    period: 'October 2025 - Present',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux', 'AWS', 'Jenkins', 'Kibana'],
    points: [
      'Migrated the duplicate transfer detection module from API v1 to v2 within the legacy Node.js/PostgreSQL codebase, rolling out the change behind feature flags to control exposure — reducing duplicate transfers by 25% for a platform supporting 750K+ users.',
      'Architected payment and transaction execution workflows using React state management (Redux, ContextAPI), implementing global state and centralized error handling to keep review, edit, and confirmation steps consistent and resilient across high-stakes financial transactions.',
      'Built a Node.js-based feature flag service backed by PostgreSQL, exposing REST endpoints for real-time flag evaluation and enabling safe, incremental rollout of high-risk backend changes without redeployments.',
      'Instrumented Node.js middleware to log and audit feature-flag evaluations per request, giving engineering and fraud teams visibility into which users hit which flag variants during sensitive transaction flows.',
      'Delivered production features across two codebases with end-to-end ownership, mentoring 3 junior engineers on best practices and collaborating with product and design in sprint planning — improving team velocity by 20% (tracked via Jira sprint metrics).',
      'Designed and shipped a customer-facing REST API (Third-Party Account Acknowledgement) using Node.js and PostgreSQL transactions to identify existing bank customers from third-party account data, enabling personalized features and targeted offers.',
      'Built a real-time fraud-awareness banner (Scam Banner) in React and TypeScript to surface risk alerts to customers during sensitive transactions, with underlying risk signals indexed and visualized in Kibana dashboards for engineering and fraud-monitoring teams.',
      'Implemented server-side PDF generation using Puppeteer to render transaction receipts from HTML templates, storing them in S3 with server-side encryption at rest — enabling users to securely download their transaction history.',
      'Owned production deployment verification for AWS (EC2/ECS)-hosted services via Jenkins CI/CD pipelines, clearing Akamai CDN cache and validating deployment versions to ensure new releases took effect reliably — maintaining platform uptime and SLA compliance.',
      'Conducted bi-weekly dependency audits via Black Duck scanning, upgrading npm packages to patched/stable versions and adapting affected code to maintain compatibility — sustaining zero outstanding vulnerabilities across production artifacts.',
    ],
  },
  {
    company: 'IT Resources INC',
    role: 'Software Developer',
    period: 'March 2024 - October 2025',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Jest', 'Playwright', 'Docker', 'Kubernetes'],
    points: [
      'Built a business management application for restaurant, hotel, and ecommerce owners using React, Next.js, TypeScript, and TailwindCSS, developing Chart.js-powered dashboards for profit/loss and sales analytics, REST API-integrated inventory and item management, and S3-based storage for images and documents.',
      'Improved frontend performance using SSR/ISR, code-splitting, and lazy loading — reducing page load time by 32% and build times by 40%; leveraged Quantum Metric to diagnose production issues and Adobe Analytics to track user interaction patterns, informing performance and UX improvements.',
      'Practiced test-driven development (TDD) using Jest and Playwright (unit and end-to-end) and led code reviews for a team of 7 developers, increasing test coverage from 55% to 85% and reducing post-release defects by 30%.',
      'Deployed and maintained containerized services using Docker and Kubernetes, supporting consistent environments across development and production.',
    ],
  },
  {
    company: 'US Bank',
    role: 'Software Developer',
    period: 'March 2022 - February 2024',
    tags: ['React', 'Next.js', 'TypeScript', 'ChakraUI', 'GraphQL', 'Apollo Client', 'SonarQube', 'GitHub Actions'],
    points: [
      "Built a customer-facing invoice payment flow — landing page, dynamic amount calculations (tipping, taxes, fees, discounts), and payment form — using React, Next.js, and TypeScript, integrating with US Bank's Elavon gateway to process payments and reflect real-time balance updates.",
      'Contributed to a reusable ChakraUI-based design system, building and extending accessible, composable components used across checkout, QR code, gift card, and invoice flows for 450K+ users.',
      'Integrated GraphQL and REST APIs via Apollo Client, using request batching and caching to reduce redundant calls — improving data-fetch performance by up to 30% (measured via DataDog).',
      'Integrated SonarQube into GitHub Actions CI/CD pipelines as a quality gate, enforcing code quality, security, and coverage thresholds to block merges on failed checks.',
      'Implemented WCAG 2.1 AA accessibility improvements — keyboard navigation, ARIA, and screen reader support — across payment and account flows for 450K+ users.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Frontend Engineering',
    description: 'Building responsive, accessible, and high-performance user interfaces.',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript (ES6+)',
      'CSS3',
      'Redux',
      'Context API',
      'Tailwind CSS',
      'SASS',
      'GraphQL',
    ],
  },
  {
    title: 'Backend & Databases',
    description: 'Designing services, REST APIs, and transactional data flows.',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying, verifying, and scaling applications in the cloud.',
    items: ['AWS (EC2, S3, ECS)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Observability & Analytics',
    description: 'Monitoring production health and understanding user behavior.',
    items: ['Kibana', 'Adobe Analytics', 'Quantum Metric'],
  },
]

export const aiTools = ['Cursor', 'Claude', 'codeRabbit', 'GitHub Copilot']

export const contactDetails = [
  {
    title: 'Email',
    description: 'Best for detailed project discussions',
    value: 'yashwanthh235@gmail.com',
    href: 'mailto:yashwanthh235@gmail.com',
  },
  {
    title: 'Phone',
    description: 'Available for quick calls',
    value: '201-360-1325',
    href: 'tel:2013601325',
  },
  {
    title: 'LinkedIn',
    description: 'Professional networking and updates',
    value: 'www.linkedin.com/in/yashwanth-va/',
    href: 'https://www.linkedin.com/in/yashwanth-va/',
  },
]

export const githubProfile = {
  handle: 'yashwanthvarre',
  url: 'https://github.com/yashwanthvarre',
  repoCount: 23,
  blurb:
    'A frontend-heavy portfolio anchored by React, Next.js, TypeScript, and product-oriented experiments, with supporting work in Java APIs and applied language tooling.',
}

export const githubProjects = [
  {
    name: 'CineArchive',
    language: 'TypeScript',
    updated: 'Apr 2026',
    url: 'https://github.com/yashwanthvarre/CineArchive',
    summary:
      'A Next.js movie discovery app focused on structured browsing, richer catalog metadata, and recruiter-friendly frontend architecture.',
    highlights: ['Next.js', 'TypeScript', 'Filtering UX'],
    outcome: 'Production build verified after route-structure cleanup and component refactor.',
  },
  {
    name: 'Portfolio',
    language: 'JavaScript',
    updated: 'Apr 2026',
    url: 'https://github.com/yashwanthvarre/Portfolio',
    summary:
      'A Vite-based personal portfolio designed around recruiter scanning, GitHub project curation, and concise evidence of frontend impact.',
    highlights: ['React 19', 'Vite', 'Portfolio UX'],
    outcome: 'Responsive single-page presentation with live GitHub project framing and recruiter-facing content sections.',
  },
  {
    name: 'LinguisticHasher',
    language: 'TypeScript',
    updated: 'Apr 2026',
    url: 'https://github.com/yashwanthvarre/LinguisticHasher',
    summary:
      'A Python and React application that converts words into numeric hashes through transliteration, script analysis, and a stylized interactive UI.',
    demoUrl: 'https://linguistic-hasher.vercel.app',
    image: '/github/linguistic-hasher-result.png',
    imageAlt: 'LinguisticHasher result screenshot',
    highlights: ['FastAPI', 'Next.js', '3D UI'],
    outcome: 'Frontend test suite exposes two concrete regressions, making this a strong candidate for quality-focused follow-up work.',
  },
  {
    name: 'Take-Home-Assessment',
    language: 'TypeScript',
    updated: 'Jun 2025',
    url: 'https://github.com/yashwanthvarre/Take-Home-Assessment',
    summary:
      'A compact TypeScript implementation that signals recent hands-on coding work and a stronger modern-stack baseline than older CRUD demos.',
    highlights: ['TypeScript', 'Recent code', 'Interview-ready'],
    outcome: 'Useful as supporting evidence for recent TypeScript work, though less portfolio-critical than the top three projects.',
  },
  {
    name: 'Video-Call-We-Application',
    language: 'JavaScript',
    updated: 'Oct 2024',
    url: 'https://github.com/yashwanthvarre/Video-Call-We-Application',
    summary:
      'A browser-based video calling application built around WebRTC, signaling, and real-time communication flows in a Next.js stack.',
    highlights: ['WebRTC', 'Real-time UX', 'Browser APIs'],
    outcome: 'Good domain variety, but it needs stronger documentation and proof to compete with the frontend showcase repos.',
  },
]
