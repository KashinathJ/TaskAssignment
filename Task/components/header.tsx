"use client";

import Link from "next/link";
import { Briefcase, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            TalentFlow
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Browse Jobs
          </Link>
          <Button asChild size="sm">
            <Link href="/jobs/post">
              <Plus className="h-4 w-4" />
              Post a Job
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
