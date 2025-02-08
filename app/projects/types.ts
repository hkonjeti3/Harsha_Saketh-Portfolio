export interface Project {
  title: string;
  role: string;
  techStack: string[];
  timeline: string;
  description: string[]; 
  src: string;
  color: string;
  url: string;
}


export interface ProjectModal {
  active: boolean;
  index: number;
}