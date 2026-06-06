"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";
import { JobCard } from "@/components/job-card";
import { JobCardSkeleton } from "@/components/job-card-skeleton";
import { Job, JobFilters } from "@/types";
import { filterJobs } from "@/lib/data";
import { getAllJobs } from "@/lib/job-store";

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<JobFilters>({
    title: "",
    location: "",
    type: "all",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setJobs(getAllJobs());
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = filterJobs(jobs, filters);
  const featuredJobs = filteredJobs.filter((job) => job.featured);
  const otherJobs = filteredJobs.filter((job) => !job.featured);

  return (
    <>
      <Hero />

      <section className="container mx-auto px-4 py-10">
        <SearchBar filters={filters} onFiltersChange={setFilters} />
      </section>

      <section className="container mx-auto px-4 pb-16">
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 py-16 text-center">
            <p className="text-lg font-medium text-slate-700">No jobs found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search filters
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {featuredJobs.length > 0 && (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Featured Jobs
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hand-picked opportunities from top companies
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    {featuredJobs.length} featured
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            )}

            {otherJobs.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {featuredJobs.length > 0 ? "More Jobs" : "All Jobs"}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {filteredJobs.length} position
                    {filteredJobs.length !== 1 ? "s" : ""} available
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {otherJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
