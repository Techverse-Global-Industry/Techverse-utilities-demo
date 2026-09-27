"use client";
import dynamic from "next/dynamic";
import { Activity, AlertTriangle, Droplets, Gauge, RadioTower, Zap } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import { monitoringMetrics } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
const UtilityScene=dynamic(()=>import("@/components/three/UtilityScene"),{ssr:false,loading:()=> <div className="h-full w-full animate-pulse bg-brand-950"/>});
const icons=[RadioTower,AlertTriangle,Activity,Gauge,Zap,Droplets];
export function MonitoringPanel(){const {t}=useLanguage();return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("monitoring.title")}</h1><p className="dashboard-subtitle">{t("monitoring.subtitle")}</p></div><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{monitoringMetrics.map((metric,index)=><KpiCard key={metric.labelKey} label={t(`monitoring.${metric.labelKey}`)} value={metric.value === "Stable" ? t("status.Stable") : metric.value} detail={metric.change} icon={icons[index]}/>)}</section><section className="overflow-hidden rounded-[2rem] border border-brand-950/10 bg-brand-950 text-white shadow-2xl"><div className="flex flex-col gap-2 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-semibold">{t("monitoring.networkTitle")}</h2><p className="mt-1 max-w-2xl text-xs leading-5 text-white/40">{t("monitoring.networkBody")}</p></div><DemoBadge compact/></div><div data-cursor="3d" className="h-[460px] sm:h-[560px]"><UtilityScene controls/></div></section></div>}
