"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Building2,
  Briefcase,
  Globe,
} from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";
import { ApplyModal } from "@/components/apply-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Job } from "@/types";
import { formatSalary } from "@/lib/data";
import { getJob } from "@/lib/job-store";
import { formatDate } from "@/lib/utils";

export default function JobDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = getJob(id);
      setJob(found ?? null);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <Skeleton className="mb-6 h-8 w-32" />
        <div className="rounded-xl border border-slate-200 p-8">
          <div className="flex gap-4">
            <Skeleton className="h-16 w-16 rounded-lg" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Job not found</h1>
        <p className="mt-2 text-muted-foreground">
          This position may have been removed or doesn&apos;t exist.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to jobs
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to jobs
        </Link>
      </Button>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6 md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <CompanyLogo
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  company={job.company}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  {job.title}
                </h1>
                <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  {job.company}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline">
                    <Briefcase className="mr-1 h-3 w-3" />
                    {job.type}
                  </Badge>
                  <Badge variant="secondary">
                    <Globe className="mr-1 h-3 w-3" />
                    {job.workMode}
                  </Badge>
                  <Badge variant="success">
                    {formatSalary(job.salaryMin, job.salaryMax, job.type)}
                  </Badge>
                  {job.featured && (
                    <Badge variant="warning">Featured</Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <ApplyModal jobTitle={job.title} company={job.company} />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Posted {formatDate(job.postedAt)}
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
              {job.category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose-job max-w-none">
            <ReactMarkdown>{job.description}</ReactMarkdown>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-8 rounded-b-xl">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Interested in this role? Apply now — it only takes a minute.
            </p>
            <ApplyModal jobTitle={job.title} company={job.company} />
          </div>
        </div>
      </div>
    </div>
  );
}
