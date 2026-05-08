import { FaPython, FaReact, FaHtml5, FaAws, FaGithub, FaLinkedin, FaEnvelope, FaChartPie } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScipy, SiFlask, SiDjango } from 'react-icons/si';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';

export const personalInfo = {
  name: "Hariharan Sivakumar",
  role: "Data Analyst | Web Developer",
  tagline: "Transforming raw data into actionable insights and building dynamic web experiences.",
  email: "hariharansivakumar.offl@gmail.com",
  phone: "9025618366",
  location: "Erode, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/hariharan-sivakumar003",
  github: "https://github.com/hariharansivakumar-ai-ml",
  resumeLink: "https://drive.google.com/file/d/1hI9fk8ScDXMNgP20_4zcGewIVxmNp2_h/view?usp=sharing",
  summary: "Data Analyst with hands-on experience in data visualization, data cleaning, and dashboard development using Python and Power BI, along with professional experience as a Website & Software Developer, working with React.js, REST APIs, and basic backend technologies like Flask/Django. Skilled in transforming raw data into actionable insights, handling real-world datasets, building interactive dashboards, and supporting data-driven decision-making. Strong analytical mindset with a focus on problem-solving and continuous learning."
};

export const techSkills = [
  { name: "Python", category: "Programming", icon: FaPython, color: "text-blue-400" },
  { name: "Power BI", category: "Data & Tools", icon: FaChartPie, color: "text-yellow-500" },
  { name: "Excel", category: "Data & Tools", icon: BsFileEarmarkBarGraph, color: "text-green-500" },
  { name: "Pandas", category: "Libraries", icon: SiPandas, color: "text-blue-900" },
  { name: "NumPy", category: "Libraries", icon: SiNumpy, color: "text-blue-500" },
  { name: "React.js", category: "Web Frontend", icon: FaReact, color: "text-cyan-400" },
  { name: "HTML", category: "Web Frontend", icon: FaHtml5, color: "text-orange-500" },
  { name: "Flask/Django", category: "Backend", icon: SiFlask, color: "text-gray-200" },
  { name: "AWS", category: "Cloud", icon: FaAws, color: "text-orange-400" },
];

export const experience = [
  {
    role: "Website & Software Developer",
    company: "Kanavu Startup Village",
    duration: "Dec 2025 – Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js",
      "Built reusable UI components to improve development efficiency and consistency",
      "Integrated frontend with backend APIs for dynamic data handling",
      "Performed debugging and performance optimization to enhance application speed",
      "Collaborated using Git for version control and team workflows",
      "Gained experience in handling real-time data and API responses"
    ]
  }
];

export const projects = [
  {
    title: "HR Analytics Dashboard",
    tech: "Power BI",
    description: [
      "Designed and developed an interactive dashboard analyzing employee data (demographics, job roles, hiring trends)",
      "Processed and cleaned raw datasets to ensure data accuracy and consistency",
      "Visualized key KPIs such as gender ratio, age distribution, and workforce trends",
      "Enabled better decision-making through clear and interactive visual insights"
    ]
  },
  {
    title: "Data Analysis using Python",
    tech: "Python, Pandas, Matplotlib, Seaborn",
    description: [
      "Performed data cleaning and transformation using Pandas",
      "Conducted exploratory data analysis (EDA) to identify trends and patterns",
      "Created visualizations using Matplotlib and Seaborn to present insights"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    institution: "Erode Sengunthar Engineering College",
    duration: "June 2018 – May 2022"
  }
];

export const certifications = [
  "Certification in Python Programming",
  "AI Programmer Certification – TNSDC"
];
