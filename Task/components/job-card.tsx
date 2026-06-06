import Link from "next/link";
import { MapPin, Clock, Building2 } from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types";
import { formatSalary } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block">
      <Card className="h-full border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md group-hover:-translate-y-0.5">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <CompanyLogo
                src={job.companyLogo}
                alt={`${job.company} logo`}
                company={job.company}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    {job.company}
                  </p>
                </div>
                {job.featured && (
                  <Badge variant="warning" className="shrink-0">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{job.type}</Badge>
                <Badge variant="secondary">{job.workMode}</Badge>
                <Badge variant="success">
                  {formatSalary(job.salaryMin, job.salaryMax, job.type)}
                </Badge>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {formatDate(job.postedAt)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
