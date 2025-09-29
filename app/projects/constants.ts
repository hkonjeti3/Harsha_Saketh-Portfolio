import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Flight Flow Analysis',
    role: 'Founder',
    timeline: 'July 2025 - Sept 2025',
    techStack: ['AWS', 'Lambda', 'CloudWatch', 'Google Sheets', 'Node.js', 'DynamoDB', 'Puppeteer', 'Ollama'],
    description: [
      'Processed 4,000+ job postings/day across ATS/job boards by building a scalable, serverless ETL pipeline in JavaScript (Node.js) on AWS (Lambda, DynamoDB, Secrets Manager) that extracts metadata from links.',
      'Delivered <500ms response times and a highly reliable system by implementing a hybrid extraction pipeline (ATS APIs → HTML heuristics → renderer fallback → LLM rescue) with normalization.',
      'Auto-generated 1:1 LinkedIn outreach using an LLM grounded in user preferences/resume data, with temperature controls for tone and consistency.',
      'Published a Google Sheets Add-on in the Google Workspace Marketplace and provided end-to-end traceability by delivering secure, scalable endpoints with HMAC, CORS, centralized authorization, and CloudWatch-based structured observability.',
    ],
    src: 'joblink.webp',
    color: '#dbeafe',
    url: 'https://github.com/hkonjeti3/joblink-etl-MVP',
  },
  {
    title: 'Flight Flow Analysis',
    role: 'Cloud Developer',
    timeline: 'Oct 2024 - Nov 2024',
    techStack: ['BigQuery', 'App Engine', 'Cloud Storage', 'Flask', 'praw'],
    description: [
      'Developed a cloud-based flight data analytics platform integrating real-time airline delay data with public feedback.',
      'Utilized Google Cloud services (BigQuery, Cloud Storage) for efficient data storage and processing.',
      'Implemented Flask-based API to fetch and analyze real-time flight data.',
      'Automated data scraping from public sources using `praw` for Reddit-based sentiment analysis.',
    ],
    src: 'flight-flow.webp',
    color: '#dbeafe',
    url: 'https://github.com/hkonjeti3/Flight-flow/blob/main/README.md',
  },
  {
    title: 'Secure Banking',
    role: 'Fullstack Developer',
    timeline: 'Jan 2024 - May 2024',
    techStack: ['Angular', 'Spring Security', 'Spring Boot', 'PostgreSQL', 'Docker'],
    description: [
      'Designed a secure and scalable banking application with multi-factor authentication and role-based access control.',
      'Developed REST APIs using Spring Boot and integrated with a PostgreSQL database.',
      'Implemented fraud detection mechanisms using anomaly detection techniques.',
      'Containerized the application using Docker for seamless deployment.',
    ],
    src: 'secure-banking.webp',
    color: '#ddd6fe',
    url: 'https://github.com/hkonjeti3/SystemProtocol_SBS',
  },
  {
    title: 'LinC Art Gallery',
    role: 'Fullstack Developer',
    timeline: 'Jan 2024 - May 2024',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Netlify', 'Render', 'Firebase'],
    description: [
      'Developed an interactive online art gallery platform supporting real-time bidding and event bookings.',
      'Implemented user authentication and session management using Firebase.',
      'Created a serverless backend using Node.js and MongoDB for efficient data management.',
      'Deployed the frontend on Netlify and backend on Render for optimal performance.',
    ],
    src: 'art-gallery.webp',
    color: '#fae8ff',
    url: 'https://github.com/hkonjeti3/art-gallery',
  },
];

export const certifications: Project[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    role: 'AWS Certification',
    timeline: 'Issued: Dec 2024',
    techStack: ['AWS', 'EC2', 'Lambda', 'S3'],
    description: [
      'Validated fundamental knowledge of cloud computing and AWS services.',
      'Demonstrated ability to design and deploy scalable cloud architectures.',
      'Gained expertise in AWS IAM, EC2, S3, Lambda, and cloud security best practices.',
    ],
    src: 'aws-ccp.webp',
    color: '#fef9c3',
    url: 'https://www.credly.com/badges/cfdece46-b061-4a60-9966-4fc837050956/public_url',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    role: 'DevOps Certification',
    timeline: 'Issued: Dec 2024',
    techStack: ['Docker', 'Kubernetes', 'CI/CD'],
    description: [
      'Mastered containerization concepts and deployment strategies using Docker.',
      'Developed scalable microservices and orchestrated them with Kubernetes.',
      'Implemented CI/CD pipelines for automated builds and deployments.',
    ],
    src: 'docker.webp',
    color: '#c3fefe',
    url: 'https://drive.google.com/file/d/1oxsceqS2HYwWG55et8V4GS_MuHjlCQUs/view?usp=share_link',
  }
];

export const publications: Project[] = [
  {
    title: 'A Genetic Algorithm Framework to Solve 2D Maze Problem',
    role: 'Springer Publication',
    timeline: 'Published: 2022',
    techStack: ['Genetic Algorithms', 'Reinforcement Learning'],
    description: [
      'Developed an optimized genetic algorithm to solve 2D maze navigation problems.',
      'Compared traditional pathfinding algorithms with genetic algorithms for efficiency improvements.',
      'Published results showing significant optimization in AI-based navigation strategies.',
    ],
    src: 'maze.webp',
    color: '#f5e1d2',
    url: 'https://link.springer.com/chapter/10.1007/978-981-19-2828-4_27',
  },
  {
    title: 'Differential Evolution with Various Crossover Operators',
    role: 'ICIPCN 2020 Publication',
    timeline: 'Published: 2020',
    techStack: ['Evolutionary Algorithms', 'Optimization'],
    description: [
      'Investigated the impact of different crossover techniques in evolutionary algorithms.',
      'Conducted experiments on benchmark functions to measure optimization efficiency.',
      'Demonstrated improvements in solving high-dimensional optimization problems.',
    ],
    src: 'evolution-paper.webp',
    color: '#d3c4ff',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-51859-2_35',
  },
  {
    title: 'Comparison of Dynamic Programming and Genetic Algorithm Approaches for Solving Subset Sum Problems',
    role: 'ICCVBIC 2019 Publication',
    timeline: 'Published: 2019',
    techStack: ['Genetic Algorithms', 'Dynamic Programming'],
    description: [
      'Analyzed the computational efficiency of dynamic programming versus genetic algorithms for subset sum problems.',
      'Developed a hybrid optimization framework combining the strengths of both approaches.',
      'Results demonstrated reduced computation time for large dataset optimizations.',
    ],
    src: 'subset-sum-paper.webp',
    color: '#f2c4ff',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-37218-7_53',
  },
];
