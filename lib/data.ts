export const profile = {
  name: "Ini Tom",
  role: "Data Analyst & Data Scientist",
  tagline: "Turning raw data into decisions — 3 years building analytics, ML, and AI systems that ship.",
  email: "hello@initom.dev",
  location: "Lagos, Nigeria (Remote-friendly)",
  linkedin: "https://linkedin.com/in/initom",
  github: "https://github.com/initom",
  resumeUrl: "/resume/Ini-Tom-Resume.pdf"
};

export const stats = [
  { label: "Years experience", value: 3, suffix: "+" },
  { label: "Projects shipped", value: 24, suffix: "+" },
  { label: "Models deployed", value: 11, suffix: "" },
  { label: "Datasets wrangled", value: 60, suffix: "+" }
];

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillCategory[] = [
  {
    category: "Core Analysis",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 90 },
      { name: "Statistics", level: 85 },
      { name: "Excel", level: 88 }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: 87 },
      { name: "Deep Learning", level: 78 },
      { name: "NLP", level: 75 },
      { name: "Computer Vision", level: 68 },
      { name: "Generative AI", level: 80 }
    ]
  },
  {
    category: "Engineering & Cloud",
    skills: [
      { name: "Data Engineering", level: 76 },
      { name: "AWS", level: 74 },
      { name: "GCP", level: 65 },
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 55 },
      { name: "Git", level: 88 }
    ]
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Power BI", level: 86 },
      { name: "Tableau", level: 80 }
    ]
  }
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  businessProblem: string;
  methodology: string;
  technologies: string[];
  results: string[];
  github: string;
  demo: string;
  category: "Analytics" | "Machine Learning" | "NLP" | "Computer Vision" | "Data Engineering";
};

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction Engine",
    image: "/images/project-churn.svg",
    description:
      "An end-to-end ML pipeline that predicts subscription churn 30 days in advance for a fintech client.",
    businessProblem:
      "The client was losing 8% of subscribers monthly with no early-warning system to trigger retention offers.",
    methodology:
      "Engineered behavioral features from transaction logs, trained gradient-boosted trees, and validated with time-based cross-validation to avoid leakage.",
    technologies: ["Python", "XGBoost", "Pandas", "AWS SageMaker", "Docker"],
    results: [
      "Reduced monthly churn by 23% within one quarter",
      "Model precision of 0.84 at the top decile of risk scores",
      "Automated weekly retraining pipeline in production"
    ],
    github: "https://github.com/initom/churn-prediction",
    demo: "https://churn-demo.initom.dev",
    category: "Machine Learning"
  },
  {
    slug: "retail-sales-dashboard",
    title: "Real-Time Retail Sales Dashboard",
    image: "/images/project-dashboard.svg",
    description:
      "An interactive Power BI and Python dashboard tracking sales, inventory, and regional performance across 40 stores.",
    businessProblem:
      "Regional managers lacked a single source of truth, relying on manual weekly spreadsheet exports.",
    methodology:
      "Built an ETL pipeline in Python to consolidate POS data nightly, modeled a star schema, and designed drill-down dashboards.",
    technologies: ["Power BI", "SQL", "Python", "Airflow"],
    results: [
      "Cut reporting time from 2 days to under 1 hour",
      "Surfaced $180K in slow-moving inventory for liquidation",
      "Adopted by 40+ store managers company-wide"
    ],
    github: "https://github.com/initom/retail-dashboard",
    demo: "https://retail-demo.initom.dev",
    category: "Analytics"
  },
  {
    slug: "support-ticket-nlp",
    title: "Support Ticket Auto-Triage (NLP)",
    image: "/images/project-nlp.svg",
    description:
      "A transformer-based classifier that routes customer support tickets to the right team and flags urgent issues.",
    businessProblem:
      "Support tickets were manually triaged, causing a 6-hour average delay before reaching the right team.",
    methodology:
      "Fine-tuned a DistilBERT model on 50k historical tickets, built a FastAPI inference service, and integrated it with the helpdesk webhook.",
    technologies: ["Python", "HuggingFace Transformers", "FastAPI", "GCP"],
    results: [
      "Reduced average routing time from 6 hours to 4 minutes",
      "94% routing accuracy against human-labeled test set",
      "Flagged urgent tickets with 91% recall"
    ],
    github: "https://github.com/initom/ticket-triage-nlp",
    demo: "https://triage-demo.initom.dev",
    category: "NLP"
  },
  {
    slug: "shelf-vision-audit",
    title: "Shelf Vision — Retail Shelf Auditing",
    image: "/images/project-vision.svg",
    description:
      "A computer vision tool that audits shelf compliance from smartphone photos for a CPG client.",
    businessProblem:
      "Field auditors manually counted product facings, a slow and error-prone process across thousands of stores.",
    methodology:
      "Trained a YOLOv8 object detector on annotated shelf images and built a lightweight mobile-friendly review app.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    results: [
      "Cut audit time per store from 45 to 8 minutes",
      "89% mAP on held-out shelf imagery",
      "Piloted across 120 stores in 3 regions"
    ],
    github: "https://github.com/initom/shelf-vision",
    demo: "https://shelfvision-demo.initom.dev",
    category: "Computer Vision"
  },
  {
    slug: "warehouse-data-pipeline",
    title: "Warehouse-Scale Data Pipeline",
    image: "/images/project-pipeline.svg",
    description:
      "A modern data platform consolidating 12 disparate sources into a governed warehouse for analytics teams.",
    businessProblem:
      "Analysts spent 60% of their time manually reconciling data from spreadsheets, APIs, and legacy databases.",
    methodology:
      "Designed a medallion architecture (bronze/silver/gold) with orchestrated dbt models and automated data-quality tests.",
    technologies: ["dbt", "Airflow", "Snowflake", "Python", "AWS"],
    results: [
      "Reduced data-prep time for analysts by 70%",
      "99.6% pipeline uptime over 6 months",
      "Single source of truth adopted by 5 departments"
    ],
    github: "https://github.com/initom/warehouse-pipeline",
    demo: "https://pipeline-demo.initom.dev",
    category: "Data Engineering"
  },
  {
    slug: "genai-report-assistant",
    title: "GenAI Analytics Report Assistant",
    image: "/images/project-genai.svg",
    description:
      "An LLM-powered assistant that turns raw query results into plain-language executive summaries.",
    businessProblem:
      "Executives received dense dashboards but wanted a quick narrative summary before meetings.",
    methodology:
      "Built a retrieval-augmented generation pipeline over the warehouse's semantic layer with guardrails against hallucinated figures.",
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"],
    results: [
      "Adopted by the leadership team for weekly reviews",
      "Cut summary prep time from 3 hours to 10 minutes",
      "100% of figures traceable to source queries"
    ],
    github: "https://github.com/initom/genai-report-assistant",
    demo: "https://genai-demo.initom.dev",
    category: "Machine Learning"
  }
];

export const certifications = [
  {
    name: "Data Analytics Certification",
    issuer: "10Alytics",
    year: "2024",
    logo: "/images/cert-10alytics.svg"
  },
  {
    name: "3MTT Fellowship — Data Science Track",
    issuer: "3MTT (FG Nigeria)",
    year: "2024",
    logo: "/images/cert-3mtt.svg"
  },
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    year: "2023",
    logo: "/images/cert-ibm.svg"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    logo: "/images/cert-aws.svg"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    logo: "/images/cert-dlai.svg"
  }
];

export const experience = [
  {
    company: "10Alytics",
    role: "Data Analyst",
    period: "2023 — Present",
    summary:
      "Lead analytics engagements for clients across fintech and retail, building dashboards and predictive models that drive measurable business decisions.",
    highlights: [
      "Delivered 12+ client analytics projects with an average 4.8/5 satisfaction score",
      "Mentored 6 junior analysts on SQL and dashboard best practices",
      "Built the internal churn-prediction template reused across 4 client engagements"
    ]
  },
  {
    company: "Amdari",
    role: "Data Science Trainee → Junior Data Scientist",
    period: "2022 — 2023",
    summary:
      "Rotated across data engineering, ML, and analytics squads while completing an applied data science bootcamp.",
    highlights: [
      "Built 5 end-to-end capstone projects spanning NLP, forecasting, and computer vision",
      "Placed in the top 5% of the program cohort",
      "Contributed to an open-source data-quality toolkit"
    ]
  },
  {
    company: "3MTT (3 Million Technical Talent)",
    role: "Data Science Fellow",
    period: "2023 — 2024",
    summary:
      "Selected for the Federal Government of Nigeria's national tech talent program, specializing in data science and AI.",
    highlights: [
      "Completed advanced coursework in ML, deep learning, and MLOps",
      "Led a team project on agricultural yield forecasting for smallholder farmers",
      "Graduated with distinction"
    ]
  }
];

export const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Head of Growth, Fintech Client",
    quote:
      "Ini turned a vague churn problem into a working model in weeks, and the retention team still uses the dashboard she built every single day.",
    avatar: "/images/avatar-1.svg"
  },
  {
    name: "Michael Osei",
    role: "Engineering Manager, Amdari",
    quote:
      "One of the most rigorous analysts I've worked with — thorough with the data, clear in communicating findings, and always thinking about business impact.",
    avatar: "/images/avatar-2.svg"
  },
  {
    name: "Grace Umeh",
    role: "Product Lead, Retail Client",
    quote:
      "The reporting pipeline Ini built saved our regional managers hours every week. Reliable, well documented, and easy for our team to maintain.",
    avatar: "/images/avatar-3.svg"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];
