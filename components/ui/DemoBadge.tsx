"use client";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function DemoBadge({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500">
      <Sparkles className="h-3 w-3" /> {compact ? t("common.demoData") : t("common.demoOnly")}
    </span>
  );
}
