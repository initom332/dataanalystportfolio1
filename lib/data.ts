export const profile = {
  name: "Ini Tom",
  role: "Data Analyst | Data Scientist",
  tagline: "3 years of turning raw messy data into decisions that drive change",
  email: "initom332@gmail.com",
  location: "Abuja, Nigeria (Remote-friendly)",
  linkedin: "https://linkedin.com/in/initoma1",
  github: "https://github.com/initom332/",
  resumeUrl: "/resume/Ini-Tom-Resume.pdf"
};

export const stats = [
  { label: "Years experience", value: 3, suffix: "+" },
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
      { name: "Python", level: 65 },
      { name: "SQL", level: 70 },
      { name: "Statistics", level: 85 },
      { name: "Excel", level: 88 }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: 47 },
      { name: "Deep Learning", level: 38 },
      { name: "NLP", level: 35 },
      { name: "Computer Vision", level: 28 },
      { name: "Generative AI", level: 30 }
    ]
  },
  {
    category: "Engineering & Cloud",
    skills: [
      { name: "Data Engineering", level: 66 },
      { name: "AWS", level: 74 },
      { name: "GCP", level: 65 },
      { name: "Docker", level: 70 },
      { name: "Git", level: 88 }
    ]
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 87 }
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
  category: "Analytics" | "Data Science" | "AI" ;
};

export const projects: Project[] = [
  {
    slug: "cafe-harmony-business-intelligence-dashboard",
    title: "Café Harmony Business Intelligence Dashboard With Excel",
    image: "/images/picsvg_download.svg",
    description:
      "An Excel dashboard developed to help Café Harmony monitor sales performance, customer behavior, inventory levels, employee productivity, and customer satisfaction, enabling data-driven business decisions.",
    businessProblem:
      "Management lacked a unified dashboard capable of answering critical business questions.",
    methodology:
      "The project involved cleaning and preparing operational data before building an interactive Excel dashboard that provides real-time insights through visualizations and slicers.",
    technologies: ["Microsoft Excel"],
    results: [
      "An interactive dashboard capable of monitoring operational performance, identifying trends, and supporting strategic decision-making across multiple business areas."
    ],
    github: "https://github.com/initom332/Caf-Harmony-Business-Intelligence-Dashboard",
    category: "Analytics"
  },
  {
    slug: "novamed-sales-performance-dashboard",
    title: "NovaMed Solutions Sales Performance Dashboard",
    image: "/images/NOV.svg",
    description: "A comprehensive Power BI dashboard developed to analyze pharmaceutical sales performance, customer demographics, product profitability, and regional revenue distribution, enabling NovaMed Solutions to make informed strategic and operational decisions.",
    businessProblem: "The business lacked a centralized reporting system capable of answering critical questions regarding monthly sales trends, customer demographics, product performance, regional revenue distribution, and profitability. Leadership needed actionable insights to optimize product strategy, customer acquisition, and regional expansion while maintaining strong financial performance.",
    methodology: "Operational sales data was cleaned, transformed, and modeled in Power BI. Interactive dashboards were designed using KPIs, slicers, charts, maps, and drill-down capabilities to analyze sales, customer demographics, geographical performance, and product profitability.",
    technologies: ["Power BI" ],
    results: [
      "An executive Power BI dashboard providing a centralized view of company performance across products, customers, regions, and sales trends, enabling faster and more informed business decisions."
    ],
    github: "https://github.com/initom332/-NovaMed-Solutions-Sales-Performance-Dashboard",
    category: "Analytics",

  },
  {
    slug: "choco-de-luxe-sales-performance-dashboard",
    title: "Choco de Luxe Sales Performance Dashboard With Tableau",
    image: "/images/picsvg_download (1).svg",
    description: "An interactive Tableau dashboard developed to analyze sales performance, regional profitability, product performance, sales channels, delivery efficiency, and workforce productivity across Europe, enabling Choco de Luxe to make data-driven strategic decisions.",
    businessProblem: "Despite strong product quality and market presence, Choco de Luxe lacked a centralized, data-driven view of its business performance. Leadership needed actionable insights to identify underperforming regions, optimize delivery operations, improve product strategy, and strengthen overall profitability across Europe.",
    methodology: "Business data was cleaned, transformed, and analyzed before developing interactive Tableau dashboards that visualize sales, profitability, product performance, sales channels, employee productivity, and operational efficiency using dynamic filters and KPIs.",
    technologies: ["Tableau" ],
    results: [
      "A comprehensive Tableau dashboard that enables executives to monitor business performance, identify growth opportunities, optimize operations, and support strategic decision-making across the organization."
    ],
    github: "https://github.com/initom332/Choco-de-Luxe-Sales-Performance-Dashboard-",
    category: "Analytics",

  },
    {
    slug: "employee-success-analytics-postgresql",
    title: "Employee Success Analytics with PostgreSQL",
    image: "/images/NOV.svg",
    description: "A PostgreSQL-powered HR analytics project designed to evaluate employee retention, performance, compensation, and departmental effectiveness. The project combines SQL analysis with business intelligence techniques to help NextGen Corp. improve employee satisfaction, reduce turnover, and build fair compensation strategies.",
    businessProblem: "The company faced increasing concerns surrounding employee turnover, inconsistent performance across departments, and salary disparities. Leadership required analytical insights to identify turnover patterns, evaluate employee performance, and determine whether compensation aligned with employee contributions.",
    methodology: "Employee records were analyzed using PostgreSQL queries to calculate retention metrics, departmental turnover, salary distributions, employee performance, and compensation fairness. The results were summarized into executive reports and business recommendations.",
    technologies: ["PostgreSQL" ],
    results: [
      "A comprehensive HR analytics solution that enables management to monitor employee success, identify retention risks, evaluate departmental performance, and support fair compensation decisions."
    ],
    github: "https://github.com/initom332/Employee-Success-Analytics-with-PostgreSQL",
    category: "Analytics",

  },
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
