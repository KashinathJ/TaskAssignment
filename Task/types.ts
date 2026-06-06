export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type WorkMode = "Remote" | "Hybrid" | "On-site";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  category: string;
  location: string;
  type: JobType;
  workMode: WorkMode;
  salaryMin: number;
  salaryMax: number;
  description: string;
  featured: boolean;
  postedAt: string;
}

export interface JobApplication {
  name: string;
  email: string;
  resumeLink: string;
  coverLetter: string;
}

export interface JobPostForm {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  category: string;
  location: string;
  type: JobType;
  workMode: WorkMode;
  salaryMin: number;
  salaryMax: number;
  description: string;
}

export interface JobFilters {
  title: string;
  location: string;
  type: JobType | "all";
}
