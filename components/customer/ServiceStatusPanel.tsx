"use client";
import { Activity, CheckCircle2, RadioTower, ShieldCheck } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import { customer } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";

export function ServiceStatusPanel() {
  const { t } = useLanguage();
  return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("customer.serviceStatus")}</h1><p className="dashboard-subtitle">{t("monitoring.subtitle")}</p></div><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><KpiCard label={t("customer.currentStatus")} value={t(`status.${customer.serviceStatus}`)} icon={ShieldCheck}/><KpiCard label={t("monitoring.networkStatus")} value={t("status.Stable")} icon={RadioTower}/><KpiCard label={t("monitoring.activeAlerts")} value="1" detail={t("common.demoData")} icon={Activity}/><KpiCard label={t("monitoring.maintenanceStatus")} value={t("status.Operational")} icon={CheckCircle2}/></section><section className="surface-card overflow-hidden"><div className="border-b border-brand-950/[.07] p-5"><h2 className="text-lg font-semibold">{t("customer.serviceAddress")}</h2><p className="mt-1 text-sm text-brand-950/45">{customer.serviceAddress}</p></div><div className="network-grid relative h-[360px] overflow-hidden bg-brand-mist/40"><svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 360" aria-hidden><path d="M30 250C180 180 240 300 390 180S650 80 860 150" fill="none" stroke="#FF7700" strokeWidth="7" strokeLinecap="round" opacity=".7"/>{[[120,220],[310,235],[460,150],[640,115],[790,145]].map(([x,y],index)=><g key={index}><circle cx={x} cy={y} r="19" fill="#32201F"/><circle cx={x} cy={y} r="6" fill="#FF963E"/></g>)}</svg><div className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/90 p-4 text-xs shadow-xl backdrop-blur"><p className="font-semibold">{t("common.demoOnly")}</p></div></div></section></div>;
}
