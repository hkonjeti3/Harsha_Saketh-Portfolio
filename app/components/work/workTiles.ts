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
      "Python", "Next.js", "Java", "C", "C#", "JavaScript", "TypeScript", "SQL",
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
        "Optimized load times and performance for a frontend supporting 1,200 students by migrating the student activity portal from Angular to React.",
        "Increased engagement for 350+ daily active users by building RBAC login/signup and engineering interactive activity pages, delivering a smoother learning.",
        "Reduced support requests and boosted usability by modularizing frontend components and integrating backend APIs for smoother data flow and an intuitive UI."
      ]
    },
    duration: "July 2024 - Nov 2024",
  },
  {
    description: "Systems Engineer (Client: PayPal)",
    title: "Tata Consultancy Services",
    experience: {
      role: "Software Engineer",
      company: "PayPal",
      points: [
        "Eliminated duplicate report deliveries and cut 2.5GB memory/batch by performing RCA using Splunk, Kibana, and CAL logs, adding checks across 4 Java/SpringBoot microservices, validating with JUnit/Mockito, and deploying via Jenkins (blue-green) for zero-downtime, safe rollback.",
        "Saved 4+ hours/day and improved turnaround for 50M+ merchant reports/week by automating status checks in Python/Shell and triggering email notifications.",
        "Restored reporting accuracy for 300+ merchant accounts and took end-to-end ownership of UDR report by leading RCA using logs, coordinating a cross-team war room, and driving upstream patches.",
        "Mitigated a missed SLA incident by proposing a direct DB Preserved SLA for 7M+ active merchant reports by executing a controlled DB fix with rollback plan in 45 minutes, coordinated with SRE/Infra.",
        "Revamped reliability across 20+ reporting workflows by maintaining and tuning production servers and release pipelines.",
        "Prevented repeat incidents and increased system reliability by optimizing schedulers/pipelines and implementing 10+ automated alerts for delays and failures."
      ]
    },
    duration: "April 2021 - July 2023",
  },
  {
    description: "Full Stack Developer Intern",
    title: "Tata Consultancy Services ",
    experience: {
      role: "Full Stack Developer Intern",
      company: "TCS",
      points: [
        "Achieved scalable storage for 50,000+ emissions records by designing a relational PostgreSQL schema and building RESTful APIs (Spring Boot), validating endpoints with Postman and adding server-side input validation",
        "Facilitated real-time visualization for 20+ internal users by implementing Angular components (from Adobe XD) with service-layer data flows."
      ]
    },
    duration: "Feb 2021 - Apr 2021",
  }
];
