"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Job, JobType, WorkMode } from "@/types";
import { addJob, generateJobId } from "@/lib/job-store";

const jobPostSchema = z
  .object({
    companyName: z.string().min(2, "Company name is required"),
    companyLogo: z.string().url("Please enter a valid logo URL"),
    jobTitle: z.string().min(3, "Job title must be at least 3 characters"),
    category: z.string().min(2, "Category is required"),
    location: z.string().min(2, "Location is required"),
    type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
    workMode: z.enum(["Remote", "Hybrid", "On-site"]),
    salaryMin: z.coerce.number().positive("Minimum salary must be positive"),
    salaryMax: z.coerce.number().positive("Maximum salary must be positive"),
    description: z
      .string()
      .min(100, "Description must be at least 100 characters"),
  })
  .refine((data) => data.salaryMax >= data.salaryMin, {
    message: "Maximum salary must be greater than minimum",
    path: ["salaryMax"],
  });

type JobPostFormData = z.infer<typeof jobPostSchema>;

export default function PostJobPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [newJobId, setNewJobId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<JobPostFormData>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      type: "Full-time",
      workMode: "Remote",
      companyLogo: "https://logo.clearbit.com/",
    },
  });

  const jobType = watch("type");
  const workMode = watch("workMode");

  const onSubmit = async (data: JobPostFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const id = generateJobId();
    const newJob: Job = {
      id,
      title: data.jobTitle,
      company: data.companyName,
      companyLogo: data.companyLogo,
      category: data.category,
      location: data.location,
      type: data.type as JobType,
      workMode: data.workMode as WorkMode,
      salaryMin: data.salaryMin,
      salaryMax: data.salaryMax,
      description: data.description,
      featured: false,
      postedAt: new Date().toISOString().split("T")[0],
    };

    addJob(newJob);
    setNewJobId(id);
    setSubmitted(true);

    toast({
      variant: "success",
      title: "Job posted successfully!",
      description: `${data.jobTitle} at ${data.companyName} is now live.`,
    });
  };

  if (submitted && newJobId) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Job Posted!</h1>
        <p className="mt-2 text-muted-foreground">
          Your listing is now live on TalentFlow.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href={`/jobs/${newJobId}`}>View Job Listing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to jobs
        </Link>
      </Button>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">Post a Job</CardTitle>
          <CardDescription>
            Fill in the details below to publish your job listing. All fields are
            required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Inc."
                  {...register("companyName")}
                  disabled={isSubmitting}
                />
                {errors.companyName && (
                  <p className="text-xs text-destructive">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="companyLogo">Company Logo URL</Label>
                <Input
                  id="companyLogo"
                  placeholder="https://logo.clearbit.com/acme.com"
                  {...register("companyLogo")}
                  disabled={isSubmitting}
                />
                {errors.companyLogo && (
                  <p className="text-xs text-destructive">
                    {errors.companyLogo.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="Senior Software Engineer"
                  {...register("jobTitle")}
                  disabled={isSubmitting}
                />
                {errors.jobTitle && (
                  <p className="text-xs text-destructive">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  placeholder="Engineering"
                  {...register("category")}
                  disabled={isSubmitting}
                />
                {errors.category && (
                  <p className="text-xs text-destructive">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="San Francisco, CA"
                  {...register("location")}
                  disabled={isSubmitting}
                />
                {errors.location && (
                  <p className="text-xs text-destructive">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Job Type</Label>
                <Select
                  value={jobType}
                  onValueChange={(v) =>
                    setValue("type", v as JobPostFormData["type"])
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-xs text-destructive">
                    {errors.type.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Work Mode</Label>
                <Select
                  value={workMode}
                  onValueChange={(v) =>
                    setValue("workMode", v as JobPostFormData["workMode"])
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="On-site">On-site</SelectItem>
                  </SelectContent>
                </Select>
                {errors.workMode && (
                  <p className="text-xs text-destructive">
                    {errors.workMode.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="salaryMin">
                  {jobType === "Contract" || jobType === "Internship"
                    ? "Min Rate ($/hr)"
                    : "Min Salary ($)"}
                </Label>
                <Input
                  id="salaryMin"
                  type="number"
                  placeholder="120000"
                  {...register("salaryMin")}
                  disabled={isSubmitting}
                />
                {errors.salaryMin && (
                  <p className="text-xs text-destructive">
                    {errors.salaryMin.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="salaryMax">
                  {jobType === "Contract" || jobType === "Internship"
                    ? "Max Rate ($/hr)"
                    : "Max Salary ($)"}
                </Label>
                <Input
                  id="salaryMax"
                  type="number"
                  placeholder="160000"
                  {...register("salaryMax")}
                  disabled={isSubmitting}
                />
                {errors.salaryMax && (
                  <p className="text-xs text-destructive">
                    {errors.salaryMax.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Job Description (Markdown)</Label>
                <Textarea
                  id="description"
                  placeholder="## About the Role&#10;&#10;Describe the position, responsibilities, and requirements..."
                  rows={10}
                  {...register("description")}
                  disabled={isSubmitting}
                />
                {errors.description && (
                  <p className="text-xs text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Job Listing"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
