import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDatabase, 
  FaServer, 
  FaLaptopCode, 
  FaChartBar, 
  FaBookReader,
  FaChartArea,
  FaLock,
  FaFileExcel
} from 'react-icons/fa';
import { 
  SiFastapi, 
  SiPostgresql, 
  SiFirebase, 
  SiSanity, 
  SiCloudinary, 
  SiVercel, 
  SiPandas, 
  SiNumpy, 
  SiPostman,
  SiMysql
} from 'react-icons/si';
import resumePdf from '../assets/Hariharan_Sivakumar_DataAnalyst.pdf';

export const personalInfo = {
  name: "Hariharan Sivakumar",
  role: "Full Stack Developer | Aspiring Data Analyst",
  tagline: "Full Stack Developer bridging engineering with data analytics — transforming database insights into functional, data-driven web solutions.",
  email: "hariharansivakumar.offl@gmail.com",
  phone: "+91 9025618366",
  location: "Erode, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/hariharan-sivakumar003",
  github: "https://github.com/hariharansivakumar-ai-ml",
  portfolio: "https://hariharan-sivakumar-portfolio.vercel.app",
  resumeLink: resumePdf,
  summary: "Full Stack Web Developer with experience delivering web-based solutions and collaborating directly with clients and stakeholders to gather requirements and translate business needs into functional technical solutions. Comfortable working across the software development life cycle (SDLC), from requirements discussions through testing and delivery. Currently building SQL and Microsoft Power BI skills toward the PL-300 certification, with working knowledge of Python-based data tools (Pandas, NumPy, Matplotlib) and Excel, with the goal of growing into a Data Analyst role."
};

export const techSkills = [
  // Languages & Frameworks
  { name: "React.js", category: "Languages & Frameworks", icon: FaReact, color: "text-accent-red", level: 90, status: "Expert" },
  { name: "JavaScript", category: "Languages & Frameworks", icon: FaJs, color: "text-white", level: 88, status: "Expert" },
  { name: "Python", category: "Languages & Frameworks", icon: FaPython, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "FastAPI", category: "Languages & Frameworks", icon: SiFastapi, color: "text-white", level: 82, status: "Advanced" },
  { name: "HTML", category: "Languages & Frameworks", icon: FaHtml5, color: "text-accent-orange", level: 95, status: "Expert" },
  { name: "CSS", category: "Languages & Frameworks", icon: FaCss3Alt, color: "text-accent-red", level: 90, status: "Expert" },

  // Backend & APIs
  { name: "REST API Development", category: "Backend & APIs", icon: FaServer, color: "text-white", level: 88, status: "Advanced" },
  { name: "API Integration", category: "Backend & APIs", icon: FaLaptopCode, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "Authentication Systems", category: "Backend & APIs", icon: FaLock, color: "text-accent-red", level: 80, status: "Advanced" },

  // Databases & CMS
  { name: "PostgreSQL", category: "Databases & CMS", icon: SiPostgresql, color: "text-white", level: 82, status: "Advanced" },
  { name: "Firebase", category: "Databases & CMS", icon: SiFirebase, color: "text-accent-orange", level: 85, status: "Advanced" },
  { name: "Sanity CMS", category: "Databases & CMS", icon: SiSanity, color: "text-accent-red", level: 88, status: "Expert" },
  { name: "MySQL", category: "Databases & CMS", icon: SiMysql, color: "text-white", level: 80, status: "Advanced" },

  // Cloud & Tools
  { name: "Cloudinary", category: "Cloud & Tools", icon: SiCloudinary, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "Vercel", category: "Cloud & Tools", icon: SiVercel, color: "text-white", level: 90, status: "Expert" },
  { name: "Git", category: "Cloud & Tools", icon: FaGitAlt, color: "text-accent-rose", level: 88, status: "Expert" },
  { name: "GitHub", category: "Cloud & Tools", icon: FaGithub, color: "text-white", level: 90, status: "Expert" },
  { name: "Postman", category: "Cloud & Tools", icon: SiPostman, color: "text-accent-red", level: 85, status: "Advanced" },

  // Data & Analytics
  { name: "SQL", category: "Data & Analytics", icon: FaDatabase, color: "text-accent-red", level: 65, status: "Learning" },
  { name: "Microsoft Power BI", category: "Data & Analytics", icon: FaChartBar, color: "text-accent-orange", level: 60, status: "Learning" },
  { name: "Excel", category: "Data & Analytics", icon: FaFileExcel, color: "text-white", level: 70, status: "Intermediate" },
  { name: "Pandas", category: "Data & Analytics", icon: SiPandas, color: "text-accent-rose", level: 75, status: "Intermediate" },
  { name: "NumPy", category: "Data & Analytics", icon: SiNumpy, color: "text-white", level: 70, status: "Intermediate" },
  { name: "Matplotlib", category: "Data & Analytics", icon: FaChartArea, color: "text-accent-red", level: 70, status: "Intermediate" }
];

export const experience = [
  {
    role: "Web Developer",
    company: "Kanavu Startup Village",
    duration: "Dec 2025 – Present",
    responsibilities: [
      "Identified a critical gap in project requirements — the absence of an admin capability for subscriber and blog content management — and proposed and implemented an admin module with Sanity CMS integration, reducing client dependency on developers for post-launch content updates.",
      "Partnered with 3+ clients and stakeholders through weekly meetings, calls, and daily status reports to gather, analyze, and translate business requirements into functional web solutions.",
      "Analyzed existing website structure and workflows for 3 WordPress-to-React migration projects, improving site maintainability and user experience through modernized architecture.",
      "Validated 20–40 functional requirements and test scenarios per project — covering UI behavior, form validation, API responses, CMS rendering, and business workflows — identifying 10–20 issues pre-launch and reducing post-release defects.",
      "Delivered 4–6 backend integrations, including Sanity CMS, REST APIs, subscriber management, and contact/data-handling systems, ensuring reliable data flow and CRUD functionality across frontend and backend."
    ],
    skills: "React.js, JavaScript, Python, FastAPI, Firebase, PostgreSQL, Sanity CMS, Cloudinary"
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "June 2025 – Present",
    responsibilities: [
      "Gathered stakeholder requirements for managing academic information, events, and announcements.",
      "Designed a content management solution enabling administrators to update website content without technical knowledge.",
      "Improved user experience through responsive design and optimized information architecture."
    ],
    skills: "React.js, Python, FastAPI, PostgreSQL"
  }
];

export const projects = [
  {
    title: "The Academy Of Excellence",
    tech: "React.js, Sanity CMS, Cloudinary",
    description: [
      "Developed a modern school website showcasing academic programs, facilities, achievements, events, and announcements.",
      "Integrated dynamic content management using Sanity CMS to allow teachers and admins to post updates easily.",
      "Configured Cloudinary for media storage, asset optimization, and responsive galleries."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/academy-of-excellence",
    liveLink: "https://academy-of-excellence.vercel.app"
  },
  {
    title: "Ethique Hospital Website",
    tech: "React.js, Sanity CMS",
    description: [
      "Built a highly responsive healthcare website featuring hospital services, medical departments, and doctor profiles.",
      "Integrated an intuitive patient navigation flow and custom appointment queries.",
      "Managed website content dynamically utilizing Sanity CMS structure."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/ethique-hospital",
    liveLink: "https://ethique-hospital.vercel.app"
  },
  {
    title: "HSquare Promoters Website",
    tech: "React.js, Sanity CMS",
    description: [
      "Created a modern real estate showcase website featuring property developments, layout plans, and investment options.",
      "Optimized site performance and user experience using responsive grid structures and fast-loading content panels.",
      "Implemented a CMS backend for real-time property listings and availability updates."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/hsquare-promoters",
    liveLink: "https://hsquare-promoters.vercel.app"
  },
  {
    title: "Personal Portfolio Website",
    tech: "React.js, JavaScript, CSS3, Tailwind CSS",
    description: [
      "Designed and developed a responsive, premium portfolio site showcasing projects, competencies, and work timelines.",
      "Created dynamic cards, custom smooth scrolling, and scroll progress tracking.",
      "Deployed on Vercel with optimized assets and metadata for search engines."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/hari-portfolio",
    liveLink: "https://hariharan-sivakumar-portfolio.vercel.app"
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    institution: "Erode Sengunthar Engineering College",
    duration: "2018 – 2022",
    project: "Wear analysis of Nickel Chromium thin sheets in A36 steel by plating technique"
  }
];

export const certifications = [
  "AI Programmer Certification from TNSDC",
  "Python Programming Certification"
];

export const additionalExpertise = [
  "Requirements Gathering",
  "Stakeholder Communication",
  "Data-Driven Problem Solving",
  "Full Stack Development",
  "Responsive Design",
  "WordPress-to-React Migration"
];
