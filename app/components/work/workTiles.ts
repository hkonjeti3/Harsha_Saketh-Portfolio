export type WorkTile = {
  title: string;
  description: string;
  skills?: string[]; 
  experience?: { role: string; company: string; points: string[] };
  duration?: string; 
};

export const workTiles: WorkTile[] = [
  // 🔹 Show all skills first
  {
    description: "My Skills",
    title: "Technical Proficiency",
    skills: [
      "Python", "Java", "C", "C#", "JavaScript", "TypeScript", "SQL",
      "MongoDB", "React.js", "Node.js", "AWS", "Docker", "CI/CD", "Git",
      "HTML", "CSS", "Bootstrap", "Angular", "Flask", "PHP", "RESTful APIs",
      "Google Cloud Platform (GCP)", "Firebase", "Jenkins", "GitHub Actions", "SCRUM",
      "Mockito", "Postman", "Selenium", "Kibana", "Looker", "Splunk", "Confluence",
      "Microsoft Office Suite", "JIRA", "Agile Tools", "Version Control (Git)", "SOP"
    ],
  },

  // 🔹 Experience - Appears one by one as the user scrolls
  {
    description: "Full Stack Developer Intern",
    title: "Y STEM & Chess",
    experience: {
      role: "Full Stack Developer Intern",
      company: "Y STEM & Chess",
      points: [
        "Spearheaded source code migration from Angular to React, improving performance by 25%.",
        "Created user stories, organized sprint planning, stand-ups, and retrospectives in an Agile SCRUM environment.",
        "Developed login and signup APIs with role-based access control, increasing user engagement by 30%."
      ]
    },
    duration: "July 2024 - Nov 2024",
  },
  {
    description: "Systems Engineer (Client: PayPal)",
    title: "Tata Consultancy Services",
    experience: {
      role: "Systems Engineer",
      company: "TCS (Client: PayPal)",
      points: [
        "Key contributor to Merchant Reporting, managing 20+ workflows and resolving 50+ bugs.",
        "Orchestrated product release cycles by evaluating user stories and implementing bug fixes.",
        "Conducted unit tests and post-deployment verifications, ensuring 0 downtime releases.",
        "Utilized tools like Kibana, Looker, and Splunk for root cause analysis and debugging.",
        "Optimized report generation workflows, reducing time by 40% and memory usage by 30%.",
        "Automated report tracking using Python and Shell Scripting, saving 4+ hours of manual work daily."
      ]
    },
    duration: "July 2021 - July 2023",
  },
  {
    description: "Full Stack Developer Intern",
    title: "Tata Consultancy Services ",
    experience: {
      role: "Full Stack Developer Intern",
      company: "TCS",
      points: [
        "Designed a relational database schema in PostgreSQL to store carbon emissions.",
        "Developed RESTful APIs in Spring Boot, ensuring seamless API integration.",
        "Built Angular front-end components from Adobe XD designs, ensuring smooth data flow."
      ]
    },
    duration: "Feb 2021 - Apr 2021",
  }
];
