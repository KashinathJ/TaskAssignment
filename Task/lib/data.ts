import { Job } from "@/types";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "Vercel",
    companyLogo: "https://logo.clearbit.com/vercel.com",
    category: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    workMode: "Remote",
    salaryMin: 150000,
    salaryMax: 200000,
    featured: true,
    postedAt: "2026-05-28",
    description: `## About the Role

We're looking for a **Senior Frontend Engineer** to help build the next generation of web development tools.

### Responsibilities
- Build and maintain high-performance React components
- Collaborate with design and product teams
- Mentor junior engineers
- Contribute to our open-source ecosystem

### Requirements
- 5+ years of experience with React and TypeScript
- Deep understanding of Next.js and modern web standards
- Experience with design systems and component libraries
- Strong communication skills

### Benefits
- Competitive salary and equity
- Remote-first culture
- Unlimited PTO
- Health, dental, and vision insurance`,
  },
  {
    id: "2",
    title: "Staff Software Engineer",
    company: "Stripe",
    companyLogo: "https://logo.clearbit.com/stripe.com",
    category: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    workMode: "Hybrid",
    salaryMin: 180000,
    salaryMax: 250000,
    featured: true,
    postedAt: "2026-05-30",
    description: `## About the Role

Join Stripe's Payments Infrastructure team to build systems that process billions of dollars annually.

### What You'll Do
- Design and implement distributed systems at scale
- Lead technical initiatives across teams
- Drive architectural decisions for critical payment flows

### What We're Looking For
- 8+ years of backend engineering experience
- Expertise in Go, Java, or similar languages
- Experience with high-availability distributed systems
- Track record of technical leadership`,
  },
  {
    id: "3",
    title: "Product Designer",
    company: "Figma",
    companyLogo: "https://logo.clearbit.com/figma.com",
    category: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    workMode: "Remote",
    salaryMin: 130000,
    salaryMax: 170000,
    featured: true,
    postedAt: "2026-06-01",
    description: `## About the Role

Help shape the future of collaborative design tools used by millions of designers worldwide.

### Responsibilities
- Design end-to-end product experiences
- Create and maintain design system components
- Conduct user research and usability testing
- Partner closely with engineering

### Qualifications
- 4+ years of product design experience
- Strong portfolio demonstrating UX craft
- Proficiency in Figma (of course!)
- Experience with design systems`,
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Datadog",
    companyLogo: "https://logo.clearbit.com/datadoghq.com",
    category: "Infrastructure",
    location: "Boston, MA",
    type: "Full-time",
    workMode: "Hybrid",
    salaryMin: 140000,
    salaryMax: 185000,
    featured: false,
    postedAt: "2026-06-02",
    description: `## About the Role

Build and maintain the infrastructure that powers Datadog's observability platform.

### Key Responsibilities
- Manage Kubernetes clusters at scale
- Implement CI/CD pipelines
- Automate infrastructure with Terraform
- Monitor and optimize system performance

### Requirements
- 3+ years of DevOps/SRE experience
- Strong knowledge of AWS, Kubernetes, and Docker
- Experience with Infrastructure as Code
- Scripting skills in Python or Go`,
  },
  {
    id: "5",
    title: "Machine Learning Engineer",
    company: "OpenAI",
    companyLogo: "https://logo.clearbit.com/openai.com",
    category: "AI/ML",
    location: "San Francisco, CA",
    type: "Full-time",
    workMode: "On-site",
    salaryMin: 200000,
    salaryMax: 350000,
    featured: true,
    postedAt: "2026-06-03",
    description: `## About the Role

Work on cutting-edge AI systems that push the boundaries of what's possible with machine learning.

### What You'll Work On
- Train and fine-tune large language models
- Build ML infrastructure for model serving
- Research novel architectures and training techniques
- Collaborate with research scientists

### Ideal Background
- MS/PhD in CS, ML, or related field
- Experience with PyTorch or JAX
- Published research or significant open-source contributions
- Passion for AI safety and alignment`,
  },
  {
    id: "6",
    title: "Frontend Intern",
    company: "Linear",
    companyLogo: "https://logo.clearbit.com/linear.app",
    category: "Engineering",
    location: "Remote",
    type: "Internship",
    workMode: "Remote",
    salaryMin: 8000,
    salaryMax: 10000,
    featured: false,
    postedAt: "2026-06-04",
    description: `## About the Role

Join Linear for a summer internship building beautiful, fast product experiences.

### What You'll Learn
- Modern React patterns with TypeScript
- Performance optimization techniques
- Working in a high-velocity startup environment

### Requirements
- Currently pursuing CS or related degree
- Familiarity with React and CSS
- Strong attention to detail
- Portfolio or GitHub projects`,
  },
  {
    id: "7",
    title: "Backend Engineer (Contract)",
    company: "Notion",
    companyLogo: "https://logo.clearbit.com/notion.so",
    category: "Engineering",
    location: "Remote",
    type: "Contract",
    workMode: "Remote",
    salaryMin: 120,
    salaryMax: 160,
    featured: false,
    postedAt: "2026-06-05",
    description: `## About the Role

6-month contract to help scale Notion's API and collaboration infrastructure.

### Scope
- Build and optimize REST/GraphQL APIs
- Improve database query performance
- Implement real-time collaboration features

### Requirements
- 4+ years backend development experience
- Strong Node.js or Go skills
- Experience with PostgreSQL at scale
- Available for 6-month engagement`,
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function getFeaturedJobs(): Job[] {
  return jobs.filter((job) => job.featured);
}

export function formatSalary(min: number, max: number, type: Job["type"]): string {
  if (type === "Contract" || type === "Internship") {
    return `$${min}-$${max}/hr`;
  }
  const formatK = (n: number) => `$${Math.round(n / 1000)}k`;
  return `${formatK(min)}-${formatK(max)}`;
}

export function filterJobs(
  allJobs: Job[],
  filters: { title: string; location: string; type: string }
): Job[] {
  return allJobs.filter((job) => {
    const matchesTitle =
      !filters.title ||
      job.title.toLowerCase().includes(filters.title.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.title.toLowerCase());
    const matchesLocation =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      job.workMode.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType =
      filters.type === "all" || job.type === filters.type;
    return matchesTitle && matchesLocation && matchesType;
  });
}
