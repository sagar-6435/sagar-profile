export type SkillItem = {
  name: string;
  level: string;
  note: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  items: SkillItem[];
};

export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  github: string;
  live: string;
};

export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  details: string;
  focus: string[];
};

export type Stat = {
  id: string;
  label: string;
  value: string;
};

export const portfolio = {
  name: "Aiden Vale",
  initials: "AV",
  role: "AI & Data Science Engineer",
  tagline: "Building Digital Experiences Beyond Code.",
  description:
    "I design intelligent systems and cinematic interfaces — where machine learning, spatial computing, and motion become one language.",
  aboutStatement: "I don't just write code. I build experiences.",
  about:
    "I operate at the intersection of applied intelligence and interaction design. My work translates research-grade models into products that feel considered, fast, and human. From neural pipelines to WebGL atmospheres, I treat every surface as an instrument — measured, luminous, and precise.",
  aboutFocus: [
    "Applied machine learning with production discipline",
    "Immersive interfaces for dense technical products",
    "Systems thinking across data, design, and motion",
  ],
  stats: [
    { id: "projects", label: "Projects", value: "24" },
    { id: "technologies", label: "Technologies", value: "32" },
    { id: "hackathons", label: "Hackathons", value: "11" },
    { id: "experience", label: "Years", value: "05" },
  ] satisfies Stat[],
  skills: [
    {
      id: "frontend",
      label: "Frontend",
      items: [
        { name: "React", level: "Core", note: "Interface architecture & composition" },
        { name: "Next.js", level: "Core", note: "App Router, streaming, performance" },
        { name: "TypeScript", level: "Core", note: "Typed systems at product scale" },
        { name: "Three.js", level: "Advanced", note: "Spatial scenes & shader-driven form" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      items: [
        { name: "Node.js", level: "Advanced", note: "APIs, workers, event pipelines" },
        { name: "Python", level: "Core", note: "Services, notebooks, model ops" },
        { name: "FastAPI", level: "Advanced", note: "Low-latency inference endpoints" },
      ],
    },
    {
      id: "mobile",
      label: "Mobile",
      items: [
        { name: "React Native", level: "Working", note: "Cross-platform product surfaces" },
        { name: "Flutter", level: "Working", note: "Motion-forward mobile prototypes" },
      ],
    },
    {
      id: "database",
      label: "Database",
      items: [
        { name: "PostgreSQL", level: "Advanced", note: "Relational models & analytics" },
        { name: "MongoDB", level: "Working", note: "Document stores for product data" },
        { name: "Redis", level: "Working", note: "Caching and session fabric" },
      ],
    },
    {
      id: "programming",
      label: "Programming",
      items: [
        { name: "Python", level: "Core", note: "Research to production path" },
        { name: "JavaScript", level: "Core", note: "Interaction & runtime craft" },
        { name: "C++", level: "Working", note: "Performance-sensitive kernels" },
      ],
    },
    {
      id: "ai",
      label: "AI / ML",
      items: [
        { name: "PyTorch", level: "Core", note: "Training, fine-tuning, evaluation" },
        { name: "scikit-learn", level: "Advanced", note: "Classical ML with rigor" },
        { name: "LangChain", level: "Advanced", note: "Orchestrated language systems" },
        { name: "OpenCV", level: "Working", note: "Vision pipelines & sensing" },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      items: [
        { name: "Git", level: "Core", note: "History as a design tool" },
        { name: "Docker", level: "Advanced", note: "Reproducible environments" },
        { name: "Figma", level: "Advanced", note: "Systems, motion, critique" },
        { name: "AWS", level: "Working", note: "Deployed inference & storage" },
      ],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      id: "lumen-forecast",
      title: "Lumen Forecast",
      year: "2025",
      category: "Applied Intelligence",
      description:
        "A real-time forecasting atelier that turns noisy sensor streams into calm, spatial decisions.",
      overview:
        "Lumen Forecast is an operations console for energy grids. It fuses probabilistic models with a cinematic control surface so operators can read uncertainty without drowning in charts.",
      problem:
        "Legacy dashboards flattened uncertainty into static numbers. Operators could not feel risk evolving across geography and time.",
      solution:
        "A hybrid stack: gradient-boosted ensembles for short horizon, a transformer residual for regime shifts, and a WebGL scene that maps confidence as light.",
      features: [
        "Live confidence fields instead of isolated KPIs",
        "Scenario rehearsal with temporal scrubbing",
        "Explainability traces tied to spatial nodes",
        "Alert choreography that respects attention",
      ],
      technologies: ["PyTorch", "Next.js", "Three.js", "FastAPI", "PostgreSQL"],
      image: "/projects/lumen.svg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "helix-studio",
      title: "Helix Studio",
      year: "2025",
      category: "Creative Systems",
      description:
        "A generative design laboratory for architects — models, materials, and motion in one canvas.",
      overview:
        "Helix Studio lets design teams explore thousands of structural variations while keeping authorship. It is not a novelty generator; it is a disciplined co-pilot.",
      problem:
        "Concept exploration was slow, siloed between Rhino scripts and disconnected AI tools that ignored constraints.",
      solution:
        "Constraint-aware latent search with a spatial UI. Every suggestion is a valid structure, annotated with massing, light, and cost signals.",
      features: [
        "Constraint-preserving generation",
        "Material and daylight simulation overlay",
        "Versioned design lineages",
        "Export to BIM-ready packages",
      ],
      technologies: ["TypeScript", "R3F", "Python", "WebGL", "Docker"],
      image: "/projects/helix.svg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "north-signal",
      title: "North Signal",
      year: "2024",
      category: "Research Product",
      description:
        "An NLP observatory that listens to scientific literature and surfaces emerging research vectors.",
      overview:
        "North Signal clusters papers, patents, and preprints into living maps. Researchers navigate a field as terrain rather than a feed.",
      problem:
        "Literature review still behaved like search. Teams missed adjacent work because ranking hid structure.",
      solution:
        "Graph embeddings with a cartographic interface. Clusters breathe as publication velocity changes; citations become paths, not lists.",
      features: [
        "Dynamic research cartography",
        "Author and institution constellations",
        "Weekly signal briefs",
        "Local-first annotation workspace",
      ],
      technologies: ["Python", "LangChain", "React", "Redis", "AWS"],
      image: "/projects/signal.svg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "atelier-os",
      title: "Atelier OS",
      year: "2024",
      category: "Product Engineering",
      description:
        "An internal operating system for a design-engineering studio — tasks, models, and critique in rhythm.",
      overview:
        "Atelier OS replaced a scatter of docs and boards with a single temporal workspace. Work is sequenced like a film, not a backlog dump.",
      problem:
        "Creative teams lost context between Figma, GitHub, and model notebooks. Critique happened too late.",
      solution:
        "A timeline-native product with live previews, model cards, and structured review. Engineering and design share one clock.",
      features: [
        "Cinematic project timelines",
        "Model cards with eval snapshots",
        "Critique rooms with timestamped notes",
        "Quiet notifications by phase",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Framer Motion"],
      image: "/projects/atelier.svg",
      github: "https://github.com",
      live: "https://example.com",
    },
  ] satisfies Project[],
  experience: [
    {
      id: "aurora",
      organization: "Aurora Labs",
      role: "AI Engineer",
      duration: "2024 — Present",
      location: "Remote · Berlin",
      description:
        "Leading applied research into production: forecasting models, spatial interfaces, and evaluation culture for a climate intelligence platform.",
      technologies: ["PyTorch", "TypeScript", "FastAPI", "Three.js"],
    },
    {
      id: "northwind",
      organization: "Northwind Analytics",
      role: "Data Scientist",
      duration: "2022 — 2024",
      location: "London",
      description:
        "Built decision systems for logistics: demand models, anomaly detection, and executive surfaces that made uncertainty legible.",
      technologies: ["Python", "scikit-learn", "React", "PostgreSQL"],
    },
    {
      id: "studio-kline",
      organization: "Studio Kline",
      role: "Creative Technologist",
      duration: "2021 — 2022",
      location: "New York",
      description:
        "Shipped immersive brand experiences — WebGL environments, generative identities, and motion systems for product launches.",
      technologies: ["Three.js", "GSAP", "Next.js", "GLSL"],
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      id: "imperial",
      institution: "Imperial College London",
      degree: "MSc Artificial Intelligence",
      duration: "2020 — 2021",
      details:
        "Thesis on spatiotemporal forecasting with graph neural networks. Distinction in probabilistic modelling and computational vision.",
      focus: ["Deep Learning", "Probabilistic Models", "Computer Vision"],
    },
    {
      id: "nit",
      institution: "National Institute of Technology",
      degree: "B.Tech Computer Science",
      duration: "2016 — 2020",
      details:
        "Foundation in algorithms, systems, and human-computer interaction. Led the computational design society.",
      focus: ["Algorithms", "Systems", "HCI"],
    },
  ] satisfies EducationItem[],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  contact: {
    email: "hello@aidenvale.dev",
    headline: "Let's Build Something Great.",
    note: "New collaborations, research partnerships, and cinematic product work.",
  },
  resume: "/resume.pdf",
};

export type Portfolio = typeof portfolio;
