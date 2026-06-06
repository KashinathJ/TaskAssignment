import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>2,400+ jobs posted this month</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Find your next{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                dream role
              </span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Discover curated tech opportunities from top companies. Search,
              filter, and apply in minutes — no account required.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-100 to-violet-100 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-4 p-8">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-indigo-600" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-32 rounded bg-slate-200" />
                      <div className="h-2 w-24 rounded bg-slate-100" />
                    </div>
                  </div>
                  <div className="ml-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-violet-600" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-28 rounded bg-slate-200" />
                      <div className="h-2 w-20 rounded bg-slate-100" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-emerald-600" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-36 rounded bg-slate-200" />
                      <div className="h-2 w-22 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
