export function StatusBadge({ children, tone = "good" }: { children: React.ReactNode; tone?: "good" | "attention" | "critical" | "neutral" }) {
  const toneClass = {
    good: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
    attention: "border-brand-500/25 bg-brand-500/10 text-brand-700",
    critical: "border-red-500/25 bg-red-500/10 text-red-700",
    neutral: "border-brand-800/15 bg-brand-mist text-brand-950/70",
  }[tone];
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClass}`}>{children}</span>;
}
