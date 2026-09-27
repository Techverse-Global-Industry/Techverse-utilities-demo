import type { LucideIcon } from "lucide-react";

export function KpiCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail?: string; icon?: LucideIcon }) {
  return (
    <article className="surface-card group p-5">
      <div className="mb-6 flex items-start justify-between">
        <p className="text-sm font-medium text-brand-950/55">{label}</p>
        {Icon ? <span className="rounded-xl bg-brand-500/10 p-2 text-brand-500 transition-transform group-hover:rotate-6"><Icon className="h-4 w-4" /></span> : null}
      </div>
      <p className="text-2xl font-semibold tracking-tight text-brand-950">{value}</p>
      {detail ? <p className="mt-1 text-xs text-brand-950/45">{detail}</p> : null}
    </article>
  );
}
