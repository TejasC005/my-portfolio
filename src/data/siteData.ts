export const site = {
  name: 'Tejas Chaudhari',
  shortName: 'Tejas',
  location: 'Maharashtra, India',
  email: '',
  github: '',
  linkedin: '',
  typingRoles: [
    'Software Developer',
    'Full-Stack Developer',
    'Software Quality Analyst',
    'AI & ML Enthusiast',
    'Data Engineer',
  ],
  hero: {
    eyebrow: 'SOFTWARE DEVELOPER · AI & DATA',
    headline: 'Building ideas into meaningful digital experiences.',
    subtext:
      'I develop software applications, explore intelligent systems, and build practical solutions that combine thoughtful engineering with user-focused design.',
    primaryBtn: { label: 'Explore My Work', to: '/projects' },
    secondaryBtn: { label: 'About Me', to: '/about' },
    chips: ['Software Development', 'AI & Machine Learning', 'Data Engineering', 'Software Quality Assurance'],
    closing: 'Always learning. Always building. Focused on solving real problems through technology.',
  },
  bio:
    'I am a Computer Engineering student with a strong interest in software development, artificial intelligence, machine learning, and data engineering. I enjoy turning ideas into practical applications by combining problem-solving, clean development practices, and user-focused design. My experience includes software quality assurance, manual and functional testing, API testing, database validation, and working with Python, SQL, JavaScript, PHP and modern web tools. I have also explored machine learning, deep learning, NLP, and AI-powered applications through academic and personal projects. I believe in continuous learning, ethical development, and building technology that solves real problems.',
};

export const skills = {
  groups: [
    { name: 'Programming', items: [{ n: 'Python', v: 80 }, { n: 'SQL', v: 80 }, { n: 'C++', v: 75 }] },
    { name: 'Web', items: [{ n: 'HTML & CSS', v: 85 }, { n: 'JavaScript', v: 75 }] },
    { name: 'Backend', items: [{ n: 'PHP', v: 60 }, { n: 'Node/Express', v: 65 }] },
    { name: 'Database', items: [{ n: 'MySQL', v: 75 }, { n: 'MongoDB', v: 70 }] },
    { name: 'Testing', items: [
      { n: 'Manual & functional', v: 85 }, { n: 'API testing (Postman)', v: 80 },
      { n: 'Regression & smoke', v: 80 }, { n: 'Bug reporting & DB validation', v: 80 },
    ] },
    { name: 'Data', items: [{ n: 'ETL concepts', v: 65 }, { n: 'Azure Data Factory', v: 50, tag: 'Familiar' }] },
    { name: 'AI/ML', items: [{ n: 'Machine learning', v: 75 }, { n: 'Deep learning & NLP', v: 65 }] },
    { name: 'Tools', items: [{ n: 'Git & GitHub', v: 75 }, { n: 'Docker', v: 55, tag: 'Familiar' }] },
  ],
  marquee: ['TypeScript', 'React', 'Express.js', 'Mongoose', 'WebSockets', 'ExcelJS', 'PyTorch', 'LangGraph', 'Pandas', 'Plotly', 'Gradio', 'Postman'],
  orbitIcons: ['TypeScript', 'React', 'PyTorch', 'Pandas', 'Postman', 'SQL', 'MongoDB', 'Docker'],
};

export const experience = [
  {
    role: 'Software Developer',
    company: 'Sartthi',
    period: '',
    summary:
      'Business software and web apps: development, debugging, API integration, database operations.',
    tech: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'WebSockets', 'ExcelJS'],
    details: [
      'CRM functionality and workflows',
      'Backend APIs, DB models and frontend integration',
      'Data import and spreadsheet processing',
      'Git branches, code review, merges',
    ],
  },
  {
    role: 'Software QA Intern',
    company: 'Startup Sarthi',
    period: '',
    summary:
      'Manual and functional testing, API testing with Postman, regression and smoke testing, bug reporting and fix verification, database record validation.',
    tech: ['Postman', 'SQL', 'Manual Testing'],
    details: [],
  },
  {
    role: 'Data Engineering Intern',
    company: 'Celebal Technologies',
    period: '2 months',
    summary:
      'Python and SQL for data handling, Azure Data Factory and pipeline concepts, a shopping dataset task with a combined dataset, data cleaning and transformation.',
    tech: ['Python', 'SQL', 'Azure Data Factory'],
    details: [],
  },
];

export const education = {
  degree: 'B.Tech Computer Engineering',
  school: 'Sanjivani College of Engineering, Kopargaon',
  period: 'Aug 2023 – Present',
  expected: 'Expected 2027',
  cgpa: '9.16',
  prior: [
    { label: 'HSC', place: 'Sanjivani Junior College', score: '92%' },
    { label: 'SSC', place: 'Seva Niketan Convent', score: '87%' },
  ],
};

export const projects = [
  {
    slug: 'ai-fake-image-detection',
    title: 'AI-Based Fake Image Detection',
    status: 'Prototype',
    badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    summary:
      'Classifies images as real or fake using ResNet18 plus Vision Transformer features; image upload and webcam input; Grad-CAM explanations.',
    tech: ['Python', 'PyTorch', 'ResNet18', 'ViT', 'Grad-CAM', 'Gradio'],
    description:
      'A deep-learning prototype that tackles the growing problem of AI-generated imagery. A ResNet18 backbone combined with Vision Transformer features learns discriminative cues between authentic photographs and synthetic fakes. Users can upload images or capture frames via webcam and receive a real/fake verdict along with a Grad-CAM heatmap that visually explains which regions drove the decision.',
    features: [
      'ResNet18 + Vision Transformer dual-feature classification',
      'Image upload and live webcam input',
      'Grad-CAM visual explanations for every prediction',
      'Interactive Gradio interface for rapid testing',
    ],
    demoUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    slug: 'retail-sales-intelligence',
    title: 'Retail Sales Intelligence',
    status: 'Analysis project',
    badge: 'bg-sky-500/15 text-sky-600 dark:text-sky-400',
    summary:
      'Customer purchasing behaviour, RFM segmentation, Pareto analysis on UCI Online Retail (541,909 rows).',
    tech: ['Python', 'Pandas', 'Plotly'],
    description:
      'An end-to-end analysis of the UCI Online Retail dataset containing 541,909 transactions. The project explores customer purchasing behaviour through RFM (Recency, Frequency, Monetary) segmentation and Pareto analysis, surfacing the vital few customers and products that drive most revenue. Interactive Plotly visualisations make the findings explorable.',
    features: [
      'RFM segmentation of 541,909 transactions',
      'Pareto analysis on customers and products',
      'Interactive Plotly dashboards',
      'Behavioural customer insights',
    ],
    demoUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    slug: 'lexis-multi-agent-legal-assistant',
    title: 'LEXIS — Multi-Agent Legal Assistance System',
    status: 'In development',
    badge: 'bg-violet-500/15 text-violet-600 dark:text-violet-400',
    summary:
      'Orchestrator plus specialised agents for legal-information requests; LangGraph architecture, multiple intents, API endpoint.',
    tech: ['Python', 'LangGraph', 'LLM APIs', 'RAG', 'REST API'],
    description:
      'LEXIS is a multi-agent system built on LangGraph that handles legal-information requests through an orchestrator routing to specialised agents. Each agent owns a set of intents, and retrieval-augmented generation grounds responses in source material. The system exposes a REST API endpoint for integration into other applications.',
    features: [
      'LangGraph orchestrator with specialised agents',
      'Multiple intent routing',
      'RAG-grounded legal responses',
      'REST API endpoint for integration',
    ],
    demoUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    slug: 'freshmart-retail-analytics',
    title: 'FreshMart Retail Analytics',
    status: 'Concept',
    badge: 'bg-slate-500/15 text-slate-600 dark:text-slate-400',
    summary:
      'Grocery-delivery data organised with Medallion Architecture.',
    tech: ['Python', 'SQL', 'pipelines'],
    description:
      'A conceptual data-engineering design that organises grocery-delivery data using the Medallion Architecture (bronze, silver, gold layers). Raw operational data is progressively cleaned and aggregated through SQL pipelines to produce analytics-ready tables for business reporting.',
    features: [
      'Medallion Architecture (bronze / silver / gold)',
      'SQL transformation pipelines',
      'Analytics-ready data layers',
      'Conceptual scalable design',
    ],
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    slug: 'codemix-guardian-scam-analyzer',
    title: 'CodeMix Guardian — Scam Message Analyzer',
    status: 'Planned',
    badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
    summary:
      'NLP on English, Romanised Marathi and mixed-language messages to flag suspicious links, urgent payment requests and scam patterns.',
    tech: ['Python', 'NLP', 'text classification'],
    description:
      'A planned NLP project targeting scam messages in English, Romanised Marathi, and mixed-language code-switched text. The classifier will flag suspicious links, urgent payment requests, and known scam patterns to help users identify fraud in regional language contexts.',
    features: [
      'Multilingual + code-switched NLP',
      'Suspicious link and urgency detection',
      'Scam-pattern classification',
      'English / Romanised Marathi support',
    ],
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
];

export const certifications = [
  { title: 'Data Science with Python', provider: '', date: '18–30 Dec 2023' },
  { title: 'Japanese Language Course', provider: '', date: '40 hours' },
  { title: 'C++ Programming', provider: '5-star on HackerRank', date: '' },
  { title: 'B.Tech CGPA 9.16', provider: 'Sanjivani College of Engineering', date: 'Aug 2023 – Present' },
];

export const services = [
  { icon: 'Code2', title: 'Web Application Development', desc: 'Full-stack web apps with modern JavaScript, React, and robust backend APIs.' },
  { icon: 'ShieldCheck', title: 'Software Testing & QA', desc: 'Manual, functional, API and regression testing with detailed bug reporting.' },
  { icon: 'BrainCircuit', title: 'AI & ML Prototypes', desc: 'Machine-learning and deep-learning prototypes, NLP and AI-powered apps.' },
  { icon: 'Database', title: 'Data Processing & Analytics', desc: 'ETL, data cleaning, transformation and analytics with Python and SQL.' },
];

export const nav = [
  { to: '/', label: 'Home', icon: 'Home' },
  { to: '/about', label: 'About', icon: 'User' },
  { to: '/skills', label: 'Skills', icon: 'Cpu' },
  { to: '/experience', label: 'Experience', icon: 'Briefcase' },
  { to: '/projects', label: 'Projects', icon: 'FolderGit2' },
  { to: '/services', label: 'Services', icon: 'Sparkles' },
  { to: '/certifications', label: 'Certifications', icon: 'Award' },
  { to: '/resume', label: 'Resume', icon: 'FileText' },
  { to: '/contact', label: 'Contact', icon: 'Mail' },
];

export const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/services', label: 'Services' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export const contact = {
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export const meta = {
  title: 'Tejas Chaudhari — Software Developer & AI/ML Enthusiast',
  description:
    'Portfolio of Tejas Chaudhari — software developer, full-stack engineer, QA analyst, and AI/ML enthusiast from Maharashtra, India.',
  image: 'https://bolt.new/static/og_default.png',
};
