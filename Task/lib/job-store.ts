"use client";

import { Job } from "@/types";
import { jobs as initialJobs } from "@/lib/data";

const STORAGE_KEY = "job-board-jobs";

function readJobs(): Job[] {
  if (typeof window === "undefined") return initialJobs;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Job[];
      return parsed.length > 0 ? parsed : initialJobs;
    }
  } catch {
    // fall through to initial data
  }
  return initialJobs;
}

function writeJobs(jobList: Job[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobList));
}

export function getAllJobs(): Job[] {
  return readJobs();
}

export function getJob(id: string): Job | undefined {
  return readJobs().find((job) => job.id === id);
}

export function addJob(job: Job): void {
  const current = readJobs();
  writeJobs([job, ...current]);
}

export function generateJobId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
