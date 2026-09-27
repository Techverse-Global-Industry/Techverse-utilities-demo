"use client";
import { Gauge, TrendingUp } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import { BarChart, LineChart } from "@/components/dashboard/Charts";
import { customer, monthlyBills, monthlyUsage, months } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
export function UsagePanel(){const {t}=useLanguage();return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("customer.usage")}</h1><p className="dashboard-subtitle">{t("monitoring.subtitle")}</p></div><section className="grid gap-4 sm:grid-cols-2"><KpiCard label={t("customer.currentUsage")} value={`${customer.usage} kWh`} detail={t("common.simulated")} icon={Gauge}/><KpiCard label={t("customer.billingTrend")} value="+9.4%" detail={t("common.demoData")} icon={TrendingUp}/></section><section className="grid gap-4 xl:grid-cols-2"><article className="surface-card p-5 sm:p-6"><h2 className="text-lg font-semibold">{t("customer.monthlyConsumption")}</h2><div className="mt-4"><LineChart data={monthlyUsage} labels={months}/></div></article><article className="surface-card p-5 sm:p-6"><h2 className="text-lg font-semibold">{t("customer.billingTrend")}</h2><div className="mt-4"><BarChart data={monthlyBills} labels={months}/></div></article></section></div>}
